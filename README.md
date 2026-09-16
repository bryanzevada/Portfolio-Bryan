# Bryan Zevada Portfolio

Professional React portfolio for Bryan Zevada, positioned for Cloud/DevOps Engineer roles with a QA automation leadership background.

## Tech Stack

- React
- Vite
- Lucide React icons
- GitHub Pages deployment workflow

## Local Development

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Preview Production Build

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured for a GitHub Pages project site at:

```text
https://bryanzevada.github.io/Portfolio-Bryan/
```

The Vite base path is set in `vite.config.js`:

```js
base: '/Portfolio-Bryan/'
```

The workflow at `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to the `main` branch. In the GitHub repository settings, set Pages to use GitHub Actions.

If the repository name changes, update the Vite `base` value to match the new GitHub Pages path.

## Resume PDF

The resume download link points to:

```text
public/Bryan_Zevada_Resume.pdf
```

Replace that file with an updated resume using the same filename to keep the site link stable.
