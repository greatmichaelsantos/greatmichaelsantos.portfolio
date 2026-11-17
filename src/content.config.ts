import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A piece of copy is either real text or a { todo: "hint" } placeholder that
// renders as a visible TODO(Kel) block until it is written.
const text = z.union([z.string(), z.object({ todo: z.string() })]);

const figure = z.object({
  file: z.string(), // inside public/case-study/<slug>/
  alt: z.string(),
  caption: text.optional(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    client: z.string(),
    course: z.string(),
    liveUrl: z.url(),
    duration: text,
    role: text,
    team: text,

    // 1. Overview (the intro paragraphs are the Markdown body)
    stack: z.array(z.tuple([z.string(), z.string()])),
    context: z.array(text),
    preview: figure,

    // 2. Problem & goal
    problem: z.object({ statement: text, goal: text, constraints: z.array(text) }),

    // 3. Target users
    users: text,
    persona: z.object({
      label: z.string(),
      name: z.string(),
      background: text,
      goals: z.array(text),
      frustrations: z.array(text),
      statement: text,
    }),
    painPoints: z.array(z.object({ title: text, detail: text, guided: text })),
    journey: z.object({
      caption: z.string(),
      steps: z.array(z.object({ action: text, tasks: text, feeling: text, improvement: text })),
    }),

    // 4. My role & the team
    me: z.object({
      name: z.string(),
      roles: z.array(z.string()),
      built: z.array(text),
      commitShare: z.string(),
      led: z.array(text),
    }),
    teammates: z.array(z.object({ name: z.string(), role: z.string(), contribution: text })),
    decisions: z.array(z.object({ label: z.string(), detail: text, href: z.string() })),

    // 5. Process
    process: z.object({
      steps: z.array(z.object({ title: z.string(), detail: text })),
      designs: z.object({
        caption: z.string(),
        screens: z.array(
          z.object({
            name: z.string(),
            lofi: figure,
            hifi: figure,
            note: text.optional(),
          }),
        ),
      }),
      assumptions: text,
      feedback: z.object({ said: text, changed: text }),
    }),

    // 6. Designs (before/after)
    beforeAfter: z.object({
      intro: text,
      method: z.array(text),
      pairs: z.array(
        z.object({
          screen: z.string(),
          before: figure,
          after: figure,
          changed: z.string(),
          why: text.optional(),
          mobile: z.boolean().optional(),
        }),
      ),
    }),

    // 7. Final result
    final: z.object({
      features: z.array(text),
      screens: z.array(figure.extend({ mobile: z.boolean().optional() })),
      accessibility: z.array(z.object({ title: z.string(), detail: z.string(), source: z.string() })),
    }),

    // 8. Lessons learned & next steps
    lessons: z.array(text),
    nextSteps: z.array(text),
  }),
});

export const collections = { caseStudies };
