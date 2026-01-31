import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    image: z.string().optional(),
    order: z.number(),
  }),
});

const siteInfo = defineCollection({
  type: 'data',
  schema: z.object({
    email: z.string(),
    phone: z.string(),
    instagram: z.string(),
    methodology: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

export const collections = {
  courses,
  testimonials,
  'site-info': siteInfo,
};
