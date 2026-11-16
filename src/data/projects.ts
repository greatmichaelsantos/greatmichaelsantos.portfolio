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
}

interface Project {
  title: string;
  summary: string;
  stack: StackRow[];
  liveHref?: string;
  notes?: string[];
  role?: string;
  team?: string;
  dates?: string;
}

export const featuredProject: FeaturedProject = {
  title: 'UPahan',
  client: 'Rosueta Realty Services (formerly RGT Real Estate Marketing)',
  summary:
    'A property management platform for a real-estate client. Staff manage units, leases, tenants, rent collection and fix requests; tenants check their rent, declare payments and send maintenance requests from their own portal.',
  dates: 'Jan 2026 – Present',
  role: 'Lead Developer & Team Lead',
  team: 'Team of 3',
  stack: [
    ['Web', 'React 18 · Vite · Tailwind'],
    ['API', 'Node.js · Express'],
    ['Data', 'Supabase · PostgreSQL'],
  ],
  caseStudyHref: url('upahan/'),
  liveHref: 'https://upahan.vercel.app',
};

export const otherProjects: Project[] = [
  {
    title: 'SALIN-LAHI',
    summary:
      'A heritage quiz-and-learning kiosk for Olongapo City, running live on a tablet — visitors explore local history and culture through guided topics with audio narration, take quizzes, and climb a public leaderboard.',
    stack: [
      ['Interface', 'HTML · CSS · JS'],
      ['Logic', 'JavaScript'],
      ['Data', 'Firestore'],
    ],
    liveHref: 'https://salin-lahi-apsd.web.app',
    notes: ['1st Runner-up', 'PRO Future Innovators'],
    dates: 'Jun 2026 – Jul 2026',
  },
  {
    title: 'Vitalyze',
    summary:
      'An AI-driven mobile health app that tracks mood, sleep, diet, and physical health through daily check-ins, then surfaces personalized wellness insights and 7-day trends.',
    stack: [
      ['Interface', 'React Native'],
      ['Logic', 'Knowledge Graph'],
      ['Data', 'Firebase'],
    ],
    role: 'Solo Developer',
    team: 'Solo project',
    dates: 'Jan 2026 – Apr 2026',
  },
];
