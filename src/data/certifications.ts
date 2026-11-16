export interface Certificate {
  label: string;
  /** Image file inside public/certs/. */
  file: string;
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
];
