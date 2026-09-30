import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Descrizione bilingue
    excerpt: z.string(),
    excerptEn: z.string(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['active', 'wip', 'comingsoon', 'archived']).default('active'),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.coerce.number().default(99),
  }),
});

export const collections = { projects };
