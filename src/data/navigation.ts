import { url } from '../lib/url';

export type PageKey = 'home' | 'upahan' | 'other';

interface NavLink {
  label: string;
  href: string;
  /** The page this link represents, for aria-current. */
  page?: PageKey;
}

/** Main navigation, in the same order as the sections on the home page. */
export const navLinks: NavLink[] = [
  { label: 'Home', href: url('') },
  { label: 'Work', href: url('#work') },
  { label: 'Case Study', href: url('upahan/'), page: 'upahan' },
  { label: 'About', href: url('#about') },
  { label: 'Skills', href: url('#skills') },
  { label: 'Certifications', href: url('#certs') },
  { label: 'Contact', href: url('#contact') },
];
