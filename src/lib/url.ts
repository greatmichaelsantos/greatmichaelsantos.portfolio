// Joins a site-relative path onto the configured `base`, so links keep
// working whether the site is served from "/" or from a sub-path.
//   url('')          -> '/greatmichaelsantos.portfolio/'
//   url('upahan/')   -> '/greatmichaelsantos.portfolio/upahan/'
//   url('#contact')  -> '/greatmichaelsantos.portfolio/#contact'
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(path = ''): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}
