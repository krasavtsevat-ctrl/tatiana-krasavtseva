# Tatyana Krasavtseva — Portfolio

Single-page Astro portfolio site for Tatyana Krasavtseva, Content Manager & digital communications specialist.

## Stack

- **Framework:** Astro 7 (static output)
- **Language:** TypeScript
- **Package manager:** pnpm
- **Fonts:** Manrope, Prata (via @fontsource)
- **Node.js:** v22

## Running on Replit

The workflow `Start application` runs `pnpm dev` and keeps it alive via `astro dev logs --follow` (Astro 7 runs the dev server as a background daemon).

The site is served at `/tatiana-krasavtseva/` (the `base` path matches the GitHub Pages deployment).

```sh
pnpm install   # install dependencies
pnpm dev       # start dev server (daemon, port 5000)
pnpm build     # type-check + build static output
```

## Project structure

- `src/pages/index.astro` — the single page (all content lives here)
- `src/styles/global.css` — global styles
- `public/images/` — optimised portrait and project images
- `astro.config.mjs` — Astro config (base path, server host/port)
- `PRODUCT.md` — product brief (audience, positioning, conversion goals)

## Deployment

The original repo auto-deploys to GitHub Pages (`https://malchenkovasvetlana-eng.github.io/tatiana-krasavtseva`). The `base` in `astro.config.mjs` and `site` fields reflect that. For Replit deployment the base path would need to be adjusted.
