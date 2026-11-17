// Joins a site-relative path onto the configured `base`, so links keep
// working whether the site is served from "/" or from a sub-path.
//   url('')          -> '/'
//   url('upahan/')   -> '/upahan/'
//   url('#contact')  -> '/#contact'
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(path = ''): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}
