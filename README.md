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

### Unfinished content guard

Copy that hasn't been written yet appears on the page as a visible `TODO(Kel)` block. In `npm run dev`
these show up so you can see what's missing. **`npm run build` fails** if any page still contains one,
and it lists each remaining item, so a half-finished case study can't be deployed.

To build anyway (for example, to preview a draft locally), set `ALLOW_TODOS=1` for that one build:

```sh
# macOS / Linux / Git Bash
ALLOW_TODOS=1 npm run build
```

```powershell
# Windows PowerShell
$env:ALLOW_TODOS = '1'; npm run build; Remove-Item Env:ALLOW_TODOS
```

The deploy workflow never sets this, so the live site only updates once every TODO is filled in.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. checks out the repo and installs Node from `.nvmrc`, with the npm cache enabled
2. `npm ci` (clean install from `package-lock.json`)
3. `npm run check`, then `npm run build`
4. uploads `dist/` and deploys it to GitHub Pages

It can also be run by hand from the **Actions** tab (`workflow_dispatch`).

One-time setup: in the GitHub repo, go to **Settings → Pages → Build and deployment → Source** and choose
**GitHub Actions**.

### Routes

Astro builds each page as a folder with an `index.html` (`/upahan/index.html`), so on GitHub Pages:

- `/upahan/` loads directly and on refresh
- `/upahan` (no trailing slash) redirects to the version with the slash
- any unknown path gets `404.html`, which uses absolute links so it works at any depth

### Custom domain

The site is served from the custom domain <https://greatmichaelsantos.dev> at the root (`base: '/'`):

1. `astro.config.mjs` sets `site: 'https://greatmichaelsantos.dev'` and `base: '/'`.
2. `public/CNAME` contains only the domain, `greatmichaelsantos.dev`, and is copied into `dist/` on every build.
3. The domain's DNS points at GitHub Pages, and the domain is entered under **Settings → Pages → Custom domain**.

All internal links and asset paths go through `url()` in `src/lib/url.ts`, which reads `base` at build
time, so no component needs to change if the base ever moves.
