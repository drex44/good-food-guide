# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Good Food Guide: a guide to which foods help with which diseases/symptoms. A monorepo with two independently deployed apps:

- `www/` — Next.js 8 frontend (pages router, class components, Material-UI v3)
- `api/` — Node/Micro serverless functions backing two endpoints, with Mongoose/MongoDB as the data store

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

# API (api/)
cd api
npm install
npm run dev              # micro -l tcp://0.0.0.0:${PORT-3001}
```

There is no test suite in either app (`api`'s `test` script is a placeholder that exits 1) and no lint script configured.

To exercise a single API endpoint locally, run `npm run dev` in `api/` and hit it directly, e.g. `curl "http://localhost:3001/getAllDiseases"` (each endpoint is its own `micro` handler, not a router serving both from one process — see Architecture).

## Architecture

### Frontend (`www/`)

- Custom Express server (`server.js`) wraps Next.js instead of using `next start` directly — needed for the custom port/handler setup.
- `pages/_app.js` wires Material-UI's `JssProvider`/`MuiThemeProvider` via `src/getPageContext.js`, and drives an NProgress bar off Next router events. Any new page automatically inherits the MUI theme through this.
- Data fetching goes through `modules/api.js` (`getAllDiseases`, `getDisease`), which calls the API over HTTP rather than importing `api/` code directly — the two apps only talk over the network, never share code at build time.
- `pages/index.js` calls `getAllDiseases` in `getInitialProps` (Next 8's data-fetching convention — this predates `getServerSideProps`/`getStaticProps`).
- `components/dataList.js` is a static, hardcoded array of disease entries (name/searchKey/image/goodFoods) bundled into the client. It's the fallback dataset used by the search box (see below) — it is not fetched from the API.
- Search (`components/navigation/Search.js`) is a client-side `react-autosuggest` filter over `components/dataList.js`. It used to depend on Algolia (`react-instantsearch`), but that Algolia application was deprovisioned years ago and is unrecoverable, so search was rewritten to filter the local static list instead. Do not reintroduce a `getConfig()`/`publicRuntimeConfig` dependency here — see Gotchas.
- `next.config.js` intentionally has no `publicRuntimeConfig`/`serverRuntimeConfig` — see Gotchas for why.

### API (`api/`)

- Not a single Express app — each endpoint under `api/getAllDiseases/` and `api/getDisease/` is its own standalone `micro`/`micro-fork` handler with its own `mongoose.connect()` call, matching how Vercel's legacy `builds` config maps one serverless function per source file (`api/getAllDiseases/*.js`, `api/getDisease/*.js` in `vercel.json`).
- `api/dao.js` holds the Mongoose query logic (`getAllDiseases`, `getDisease`, `saveNewDisease`); `api/models.js`/`api/schemas.js` define the single `Disease` model. Both endpoint handlers import `dao.js` directly rather than duplicating query logic.
- The MongoDB connection string is hardcoded in both endpoint files pointing at an mLab host. mLab has been shut down for years, so this connection hangs and the functions time out — this is a known, currently-unresolved issue, not something recently broken. Fixing it means replacing the connection string (e.g. with MongoDB Atlas) via both endpoint files or an env var.

### Deployment

- `vercel.json` at the repo root controls the whole deployment (legacy `builds` + `routes` style, not zero-config). Changing routing/build behavior means editing this file, not per-app settings in the Vercel dashboard — those are ignored when `builds` is present.
- Vercel's Node.js version comes from `engines.node` in the **root** `package.json` (not the per-app ones) because there's no per-app "Root Directory" — the whole repo is one Vercel project. All three `package.json` files (root, `api/`, `www/`) should be kept in sync on Node version.
- `www`'s `build` script must keep `NODE_OPTIONS=--openssl-legacy-provider` — Next.js 8 bundles Webpack 4, whose hashing breaks under Node's OpenSSL 3 (Node 17+) without it.

## Gotchas

- Next.js 8 cannot combine `publicRuntimeConfig`/`serverRuntimeConfig` with `target=serverless`, which `@vercel/next` forces here due to the legacy `routes` config. Any config values a page/component needs must be plain constants/env vars read at build/runtime, not threaded through `next/config`.
- `www/modules/api.js` calls a hardcoded absolute URL (`https://good-food-guide.now.sh/api`) rather than a relative `/api` path — this points at the old now.sh deployment, not necessarily whatever deployment is currently serving the page.
- This is a legacy codebase (Next.js 8, Material-UI v3, React 16, `react-autosuggest`) — many dependencies are years past end-of-life. Prefer minimal, targeted fixes over version bumps unless a bump is specifically requested, since a major-version upgrade of Next.js or Material-UI here is a large, breaking migration, not a small change.
