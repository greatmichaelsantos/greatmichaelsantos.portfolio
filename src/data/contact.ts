interface ContactLink {
  label: string;
  href: string;
  /** Shown next to the label, e.g. the address without "https://www.". */
  display: string;
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:greatmichaelsantos15@gmail.com',
    display: 'greatmichaelsantos15@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/greatmichaelsantos',
    display: 'github.com/greatmichaelsantos',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/great-michael-santos-7394b3415/',
    display: 'linkedin.com/in/great-michael-santos-7394b3415',
    external: true,
  },
];
