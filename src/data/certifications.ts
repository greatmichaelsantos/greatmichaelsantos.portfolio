export interface Certificate {
  label: string;
  /** Image file inside public/certs/; without one the item is plain text. */
  file?: string;
  /** Title for the viewer, if "<group> <label>" doesn't read well. */
  title?: string;
  /** Alt text for the image, instead of "<label> certificate". */
  alt?: string;
  /** The image is a graphic rather than a certificate (changes the link's screen reader note). */
  graphic?: boolean;
}

interface CertificateGroup {
  issuer: string;
  certificates: Certificate[];
}

export const certificateGroups: CertificateGroup[] = [
  {
    issuer: 'TESDA',
    certificates: [
      { label: 'NC III: Visual Graphic Design', file: 'tesda-nc3-visual-graphic-design.webp' },
      { label: 'NC II: Computer Systems Servicing', file: 'tesda-nc2-computer-systems-servicing.webp' },
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
    // Both completed 17 Nov 2026 through the DICT Digital Workforce Hub (8 hours each).
    issuer: 'DICT',
    certificates: [
      {
        label: 'Introduction to Data Privacy',
        file: 'dict-intro-data-privacy.webp',
        title: 'Introduction to Data Privacy · DICT Digital Workforce Hub · Nov 2026',
        alt: 'DICT certificate of completion: Introduction to Data Privacy, Great Michael Santos, 17 November 2026',
      },
      {
        label: 'Data Privacy: Good Governance',
        file: 'dict-data-privacy-governance.webp',
        title: 'Data Privacy: Good Governance · DICT Digital Workforce Hub · Nov 2026',
        alt: 'DICT certificate of completion: Data Privacy: Good Governance, Great Michael Santos, 17 November 2026',
      },
    ],
  },
  {
    issuer: 'Honors',
    certificates: [
      { label: "Dean's Lister: 4 consecutive semesters (1st to 2nd Year), latest GPA 94.69" },
      {
        label: 'Top 5, BSCS 2nd Year',
        file: 'top5-bscs2.webp',
        title: 'Top 5, BSCS 2nd Year',
        alt: 'GCCCS SPECS congratulations graphic: Great Michael G. Santos, BSCS 2, Top 5',
        graphic: true,
      },
    ],
  },
];
