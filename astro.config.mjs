// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom domain https://greatmichaelsantos.dev (GitHub Pages,
// with public/CNAME), so pages and assets live at the root.
// Internal links and assets are built with `url()` from src/lib/url.ts, which
// reads `base` at build time, so moving back to a sub-path only means changing
// `base` here.
export default defineConfig({
  site: 'https://greatmichaelsantos.dev',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
});
