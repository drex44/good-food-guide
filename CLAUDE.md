# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Good Food Guide: a guide to which foods help with which diseases/symptoms. A monorepo with two apps that are deployed together but no longer talk to each other at runtime:

- `www/` — Next.js 8 frontend (pages router, class components, Material-UI v3). Fully self-contained: all disease/food data is read from a bundled static JSON file, not fetched over the network.
- `api/` — Node/Micro serverless functions with Mongoose/MongoDB as the data store. Still deployed, but currently orphaned — nothing in `www/` calls it (see Architecture). Its MongoDB connection string points at a defunct mLab host, so calling it would hang until timeout anyway.

Both are deployed together as a single Vercel project via the root `vercel.json` (legacy `builds`/`routes` config, not per-app "Root Directory" settings).

## Commands

Each app has its own `package.json`; there is also a minimal root `package.json` whose only job is to pin `engines.node` for Vercel (see Gotchas below) — it has no scripts or dependencies.

```bash
# Frontend (www/)
cd www
yarn install            # or npm install
yarn dev                # runs server.js -> express + next dev, http://localhost:3000
yarn build               # next build (wired to run with NODE_OPTIONS=--openssl-legacy-provider)
yarn start               # NODE_ENV=production node server.js
yarn export               # build then `next export` (static export)

# API (api/) -- currently unused by www/, kept only because it's still part of the Vercel build
cd api
npm install
npm run dev              # micro -l tcp://0.0.0.0:${PORT-3001}
```

There is no test suite in either app (`api`'s `test` script is a placeholder that exits 1) and no lint script configured.

## Architecture

### Frontend (`www/`)

- Custom Express server (`server.js`) wraps Next.js instead of using `next start` directly — needed for the custom port/handler setup.
- `pages/_app.js` wires Material-UI's `JssProvider`/`MuiThemeProvider` via `src/getPageContext.js`, and drives an NProgress bar off Next router events. Any new page automatically inherits the MUI theme through this.
- `www/data/diseases.json` is the single source of truth for all disease/food content — a static array matching the API's old Mongoose schema (`searchKey`, `name`, `description`, `symptoms`, `image`, `goodFoods.vegan`/`goodFoods.nonVegan`, `valid`). It's bundled into the client at build time.
- `modules/api.js` (`getAllDiseases`, `getDisease`) reads directly from `data/diseases.json` and filters in memory — despite the name, it no longer makes any network call. `pages/index.js` calls `getAllDiseases` in `getInitialProps` (Next 8's data-fetching convention — this predates `getServerSideProps`/`getStaticProps`), and `pages/disease.js` calls `getDisease` the same way.
- Search (`components/navigation/Search.js`) is a client-side `react-autosuggest` filter over the same `data/diseases.json` array, matching on `name`. It used to depend on Algolia (`react-instantsearch`), but that Algolia application was deprovisioned years ago and is unrecoverable, so search was rewritten to filter local data instead. There used to be a second, separate static list (`components/dataList.js`, different field names, missing `description`/`symptoms`) used only by search — that's been deleted in favor of the one canonical dataset.
- `next.config.js` intentionally has no `publicRuntimeConfig`/`serverRuntimeConfig` — see Gotchas for why.
- `pages/foodDetails.js` is an intentionally unfinished stub (hardcoded fake disease list, "Development in progress..." in the UI) — not wired to real data.

### API (`api/`)

- Not a single Express app — each endpoint under `api/getAllDiseases/` and `api/getDisease/` is its own standalone `micro`/`micro-fork` handler with its own `mongoose.connect()` call, matching how Vercel's legacy `builds` config maps one serverless function per source file (`api/getAllDiseases/*.js`, `api/getDisease/*.js` in `vercel.json`).
- `api/dao.js` holds the Mongoose query logic (`getAllDiseases`, `getDisease`, `saveNewDisease`); `api/models.js`/`api/schemas.js` define the single `Disease` model. Both endpoint handlers import `dao.js` directly rather than duplicating query logic.
- The MongoDB connection string is hardcoded in both endpoint files pointing at an mLab host. mLab has been shut down for years, so this connection hangs and the functions time out — this is a known, currently-unresolved issue, not something recently broken. Since `www/` no longer calls these endpoints, this only matters if something is reintroduced that depends on live data (e.g. a real `foodDetails` implementation, or restoring network-backed search). Fixing it means replacing the connection string (e.g. with MongoDB Atlas) via both endpoint files or an env var, and reseeding data — `www/data/diseases.json` is a reasonable seed source.

### Deployment

- `vercel.json` at the repo root controls the whole deployment (legacy `builds` + `routes` style, not zero-config). Changing routing/build behavior means editing this file, not per-app settings in the Vercel dashboard — those are ignored when `builds` is present.
- Because `routes` is defined explicitly, Vercel does **not** auto-generate routes for the Next.js builder's static assets (the "opted out of @vercel/next's optimized lambdas mode" build warning is telling you this). `vercel.json` must include explicit `/_next/(.*)` and `/static/(.*)` rules ahead of the catch-all `/(.*)` rule, or the JS/CSS bundles 404 and the whole site fails to hydrate (looks fine via SSR, nothing is interactive).
- Vercel's Node.js version comes from `engines.node` in the **root** `package.json` (not the per-app ones) because there's no per-app "Root Directory" — the whole repo is one Vercel project. All three `package.json` files (root, `api/`, `www/`) should be kept in sync on Node version.
- `www`'s `build` script must keep `NODE_OPTIONS=--openssl-legacy-provider` — Next.js 8 bundles Webpack 4, whose hashing breaks under Node's OpenSSL 3 (Node 17+) without it.

## Gotchas

- Next.js 8 cannot combine `publicRuntimeConfig`/`serverRuntimeConfig` with `target=serverless`, which `@vercel/next` forces here due to the legacy `routes` config. Any config values a page/component needs must be plain constants/env vars read at build/runtime, not threaded through `next/config`.
- This is a legacy codebase (Next.js 8, Material-UI v3, React 16, `react-autosuggest`) — many dependencies are years past end-of-life. Prefer minimal, targeted fixes over version bumps unless a bump is specifically requested, since a major-version upgrade of Next.js or Material-UI here is a large, breaking migration, not a small change.
- `www/data/diseases.json` only has 14 entries. If it's ever regenerated from a live DB, keep the same field shape (`searchKey`/`name`/`description`/`symptoms`/`image`/`goodFoods`/`valid`) since both `modules/api.js` and `Search.js` depend on it exactly.
