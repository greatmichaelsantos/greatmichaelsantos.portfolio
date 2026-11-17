export interface Certificate {
  label: string;
  /** Image file inside public/certs/; without one the item is plain text. */
  file?: string;
  /** Title for the viewer, if "<group> <label>" doesn't read well. */
  title?: string;
  /** Alt text for the image, if it isn't a plain certificate. */
  alt?: string;
}

interface CertificateGroup {
  issuer: string;
  certificates: Certificate[];
}

export const certificateGroups: CertificateGroup[] = [
  {
    issuer: 'TESDA',
    certificates: [
      { label: 'NC III — Visual Graphic Design', file: 'tesda-nc3-visual-graphic-design.webp' },
      { label: 'NC II — Computer Systems Servicing', file: 'tesda-nc2-computer-systems-servicing.webp' },
    ],
  },
  {
    issuer: 'Cisco',
    certificates: [
      { label: 'CSS Essentials', file: 'cisco-css-essentials.webp' },
      { label: 'HTML Essentials', file: 'cisco-html-essentials.webp' },
      { label: 'Python 1 Essentials', file: 'cisco-python-essentials-1.webp' },
      { label: 'Python 2 Essentials', file: 'cisco-python-essentials-2.webp' },
    ],
  },
  {
    issuer: 'Honors',
    certificates: [
      { label: "Dean's Lister: 4 consecutive semesters (1st–2nd Year), latest GPA 94.69" },
      {
        label: 'Top 5, BSCS 2nd Year',
        file: 'top5-bscs2.webp',
        title: 'Top 5, BSCS 2nd Year',
        alt: 'GCCCS SPECS congratulations graphic: Great Michael G. Santos, BSCS 2, Top 5',
      },
    ],
  },
];
