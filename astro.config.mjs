// @ts-check
import { defineConfig } from 'astro/config';

// The site is currently served as a GitHub Pages *project* site:
//   https://greatmichaelsantos.github.io/greatmichaelsantos.portfolio/
// so every page and asset lives under the `base` path below.
//
// Moving to a custom domain (e.g. https://yourname.com):
//   1. set `site` to the new origin, e.g. 'https://yourname.com'
//   2. set `base` to '/' (or delete the line)
//   3. add a `public/CNAME` file containing just the domain (GitHub Pages only)
// Internal links and assets are built with `url()` from src/lib/url.ts, which
// reads the base at build time, so no component needs to change.
export default defineConfig({
  site: 'https://greatmichaelsantos.github.io',
  base: '/greatmichaelsantos.portfolio',
  trailingSlash: 'ignore',
  output: 'static',
});
