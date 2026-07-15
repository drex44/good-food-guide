# Good Food Guide

A guide to which foods help when you are suffering from a disease or symptom — covering 29 conditions with vegan and non-vegan food recommendations.

**Live site:** https://good-food-guide.vercel.app/

---

## Features

- **29 health conditions** — from common cold and flu to arthritis, diabetes, insomnia, anxiety, and more
- **Vegan & non-vegan food recommendations** per condition, with notes explaining why each food helps
- **Client-side search** — instant filtering by condition name via the navigation bar
- **Sort by** A → Z, Z → A, or Most Foods on the home page
- **Share buttons** — share any condition page to Facebook, X (Twitter), WhatsApp, LinkedIn, Reddit, or Email; plus a Copy Link button
- **Structured data** (JSON-LD `MedicalWebPage`) on each disease page for better search engine visibility

---

## Technology Stack

### Frontend (`www/`)

| | |
|---|---|
| Framework | Next.js (pages router) |
| UI | Material UI |
| Data | Static JSON bundled at build time (`www/data/diseases.json`) — no live network calls |
| Search | Client-side filter over the static dataset |
| Sharing | `react-share` |
| Hosting | Vercel |

### Backend (`api/`)

| | |
|---|---|
| Runtime | Node.js |
| Framework | Micro (Zeit) |
| Database | MongoDB via Mongoose |
| Status | Present in the repo and deployed, but **currently unused** by the frontend. The MongoDB connection points at a defunct mLab host — calls time out. |

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/drex44/good-food-guide.git
cd good-food-guide/www

# Install dependencies
yarn install

# Start the dev server (http://localhost:3000)
yarn dev
```

### Other frontend commands

```bash
yarn build    # production build
yarn start    # run production build locally
yarn export   # static export
```

### API (optional, currently unused)

```bash
cd api
npm install
npm run dev   # http://localhost:3001
```

---

## Project Structure

```
good-food-guide/
├── www/                        # Next.js frontend
│   ├── components/             # Reusable UI components
│   │   ├── disease/            # DiseaseCard, ImageContainer
│   │   ├── food/               # FoodList
│   │   ├── layout/             # Layout, Navigation, Breadcrumb, etc.
│   │   └── ShareModal.js       # Share popover (all platforms + copy link)
│   ├── data/
│   │   └── diseases.json       # Source of truth — 29 conditions
│   ├── modules/
│   │   └── api.js              # Reads diseases.json; getAllDiseases, getDisease, getAllFoods
│   ├── pages/
│   │   ├── index.js            # Home page — card grid with sorting
│   │   ├── disease.js          # Condition detail page
│   │   └── foodDetails.js      # Stub (not yet wired to real data)
│   └── public/                 # Static assets (CSS, images)
├── api/                        # Serverless API (orphaned)
│   ├── getAllDiseases/
│   ├── getDisease/
│   ├── dao.js
│   ├── models.js
│   └── schemas.js
└── vercel.json                 # Deployment config (legacy builds + routes)
```

---

## Data Format

Each entry in `www/data/diseases.json` follows this shape:

```json
{
  "searchKey": "arthritis",
  "name": "Arthritis",
  "description": "...",
  "symptoms": [
    {
      "description": "General Symptoms",
      "symptoms": ["Joint pain", "Swelling", "..."]
    }
  ],
  "goodFoods": {
    "vegan": [{ "name": "Ginger", "desc": "Anti-inflammatory..." }],
    "nonVegan": [{ "name": "Salmon", "desc": "Rich in omega-3s..." }]
  },
  "image": "https://...",
  "valid": true
}
```

Food names are normalized to Title Case and deduplicated within each entry. The `valid` flag controls whether an entry appears on the site.

---

## Contributing

This repository welcomes all contributions. The monorepo hosts both the frontend and the (currently dormant) backend.

See [CONTRIBUTING.md](https://github.com/drex44/good-food-guide/blob/master/CONTRIBUTING.md) for guidelines.

Pull requests merged to `master` are automatically deployed to the live site via Vercel.

### Adding a new condition

1. Add an entry to `www/data/diseases.json` following the shape above
2. Set `valid: true`
3. Use a unique, URL-safe `searchKey` (e.g. `"kidney-stones"`)
4. Open a PR — no code changes required

---

## License

MIT — see `LICENSE` for details.
