# 901farm-teaser

A minimal single-page teaser site for **901farm LLC** — built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Ships as fully static HTML with zero client-side JavaScript.

## Tech stack

- **Astro** — static site generation
- **Tailwind CSS** — styling
- **Fontsource** — self-hosted [Jost](https://fonts.google.com/specimen/Jost) variable font

## Getting started

```sh
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the local dev server               |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the production build locally     |

## Project structure

```
src/
├── components/
│   └── Logo.astro      # 901farm logo (static SVG)
├── layouts/
│   └── Layout.astro    # Base HTML shell, font import, footer
├── pages/
│   └── index.astro     # The teaser page
└── global.css          # Tailwind entry
```

## Notes

- The tight line-height used across the site is baked into the Tailwind `fontSize`
  scale in [`tailwind.config.mjs`](./tailwind.config.mjs), so it doesn't need to be
  repeated per element.
- Fonts are self-hosted via `@fontsource-variable/jost`; there are no external
  font requests.
