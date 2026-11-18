# Great Michael Santos · Portfolio

My personal portfolio: selected projects, a full case study of **UPahan** (a property management platform
built for Rosueta Realty Services), skills, certifications and contact links.

Live: <https://greatmichaelsantos.dev/>

## Stack

- [Astro](https://astro.build) 7, static output, no UI framework
- Plain CSS: one global stylesheet with design tokens (`src/styles/global.css`) plus scoped component styles
- Vanilla TypeScript in component `<script>` tags (halftone hero canvas, nav menu, certificate dialog, TOC)
- Astro content collections (with a Zod schema) for the case-study copy
- Self-hosted fonts via `@fontsource/archivo` and `@fontsource/jetbrains-mono`
- Tooling: `astro check` (TypeScript), Prettier with `prettier-plugin-astro`
- Hosting: GitHub Pages, deployed by GitHub Actions

## Folder structure

```
.github/workflows/deploy.yml   CI: type-check, build, publish dist/ to GitHub Pages
public/                        files served as-is
  certs/                       certificate images
  case-study/upahan/           case-study screenshots (before/after redesign)
  img/portrait.jpg             source photo for the halftone hero
src/
  pages/
    index.astro                home page (hero, work, about, skills, certifications, contact)
    upahan.astro               UPahan case study
    404.astro                  not-found page (GitHub Pages serves it for unknown URLs)
  layouts/Base.astro           page shell: <head> meta, skip link, nav, footer
  components/                  home-page sections and shared pieces (Nav, Footer, SectionHeading,
                               ExternalLink, CertModal, Constellation background, TodoGuard)
  components/case-study/       case-study building blocks (Figure, BeforeAfter, Persona, JourneyMap, …)
  content/case-studies/        case-study copy as Markdown frontmatter
  content.config.ts            schema the case-study content is validated against
  data/                        typed site data: projects, skills, certifications, nav and contact links
  lib/url.ts                   base-path-aware link helper
  styles/global.css            palette and type tokens, reset, shared section/button styles
astro.config.mjs               site URL, base path, static output
```

To change what the site says, edit the files in `src/data/` (home page) or
`src/content/case-studies/upahan.md` (case study). Components only render that data.

## Prerequisites

- Node.js **24** (pinned in `.nvmrc`, and `nvm use` picks it up). The CI workflow reads the same file.
- npm (ships with Node)

## Commands

```sh
npm install          # install dependencies (CI uses `npm ci` with the committed package-lock.json)
npm run dev          # dev server at http://localhost:4321/
npm run build        # production build to dist/
npm run preview      # serve the built dist/ locally
npm run check        # type-check .astro and .ts files (astro check)
npm run format       # format everything with Prettier
npm run format:check # verify formatting without writing
```
