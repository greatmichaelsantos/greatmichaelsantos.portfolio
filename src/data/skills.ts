interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['JavaScript', 'HTML', 'CSS', 'Python', 'PHP'] },
  { title: 'Frameworks', items: ['React Native', 'Expo', 'React'] },
  { title: 'Databases & Backend', items: ['MySQL', 'Firebase', 'Firestore', 'Supabase'] },
  { title: 'Tools & Hosting', items: ['Git', 'Render'] },
];
