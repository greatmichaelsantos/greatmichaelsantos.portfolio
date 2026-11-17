import { url } from '../lib/url';

/** [layer, technologies], e.g. ['Web', 'React 18 · Vite · Tailwind']. */
type StackRow = [label: string, value: string];

interface FeaturedProject {
  title: string;
  client: string;
  summary: string;
  dates: string;
  role: string;
  team: string;
  stack: StackRow[];
  caseStudyHref: string;
  liveHref: string;
  /** Shown where a code link would be when the repo isn't public. */
  codeNote: string;
}

interface Project {
  title: string;
  summary: string;
  stack: StackRow[];
  /** Where/why it was built, shown under the summary. */
  context?: string;
  /** Team credits, shown under the summary. */
  team?: string;
  liveHref?: string;
  /** Shown instead of a Live link when there is none (e.g. "Not deployed"). */
  status?: string;
  codeHref?: string;
  notes?: string[];
  role?: string;
  dates?: string;
}

export const featuredProject: FeaturedProject = {
  title: 'UPahan',
  client: 'Rosueta Realty Services (formerly RGT Real Estate Marketing)',
  summary:
    'A property management platform for a real-estate client. Staff manage units, leases, tenants, rent collection and maintenance requests. Tenants check their rent, declare payments and send maintenance requests from their own portal.',
  dates: 'Jan 2026 to Present',
  role: 'Lead Developer & Team Lead',
  team: 'Team of 3',
  stack: [
    ['Web', 'React 18 · Vite · Tailwind'],
    ['API', 'Node.js · Express'],
    ['Data', 'Supabase · PostgreSQL'],
  ],
  caseStudyHref: url('upahan/'),
  liveHref: 'https://upahan.vercel.app',
  codeNote: 'Code private (client project)',
};

export const otherProjects: Project[] = [
  {
    title: 'SALIN-LAHI',
    summary:
      'A heritage quiz-and-learning kiosk for Olongapo City, running live on a tablet. Visitors explore local history and culture through guided topics with audio narration, take quizzes, and climb a public leaderboard.',
    context: 'Built during my internship at A+ Solutions Development Center (Jun to Jul 2026).',
    team: 'Great Michael Santos & Rholly Cao (Lead Developer & Lead Design), Xyryle Cator (QA), Frietz Ranz Bayog, James Dominic Ortega, and Kathea Kim Anjie San Andrea (map design and site content).',
    stack: [
      ['Interface', 'HTML · CSS · JS'],
      ['Logic', 'JavaScript'],
      ['Data', 'Firestore'],
    ],
    liveHref: 'https://salin-lahi-apsd.web.app',
    // Public repo; its .firebaserc deploys to the "salin-lahi-apsd" Firebase project (the live site).
    codeHref: 'https://github.com/greatmichaelsantos/saling-lahin-apsd',
    notes: ['1st Runner-up · Future Innovators, Philippine Robotics Olympiad'],
    role: 'Lead Developer',
    dates: 'Jun 2026 to Jul 2026',
  },
  {
    title: 'Mend (formerly Vitalyze)',
    summary:
      'A mobile health app that tracks mood, sleep, diet, and physical health through a 4-step daily check-in, then shows 7-day trends and health patterns.',
    context: 'Application Development project',
    stack: [
      ['Interface', 'React Native'],
      ['Logic', 'Knowledge-graph health-pattern engine'],
      ['Data', 'Firebase'],
    ],
    status: 'Not deployed (course project)',
    role: 'Solo Developer',
    dates: 'Jan 2026 to Apr 2026',
  },
];
