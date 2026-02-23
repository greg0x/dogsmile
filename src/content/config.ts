import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    fullDescription: z.string().optional(),
    image: z.string(),
    order: z.number(),
    price: z.string().optional(),
    priceNote: z.string().optional(),
    assessmentFee: z.string().optional(),
    duration: z.string().optional(),
    includes: z.array(z.string()).optional(),
    includesTitle: z.string().optional(),
    requirements: z.array(z.string()).optional(),
    notFor: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
    highlightsTitle: z.string().optional(),
    expectations: z.object({
      instructor: z.array(z.string()),
      participant: z.array(z.string()),
    }).optional(),
    trainerImage: z.string().optional(),
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
    facebook: z.string().optional(),
    address: z.string().optional(),
    methodology: z.object({
      title: z.string(),
      content: z.string(),
    }),
    about: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string().optional(),
    }).optional(),
  }),
});

const pricing = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    duration: z.string(),
    description: z.string(),
    price: z.string(),
    features: z.array(z.string()),
    highlighted: z.boolean().optional(),
    order: z.number(),
  })),
});

const graduates = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    ownerName: z.string(),
    dogName: z.string(),
    displayName: z.string().optional(),
    image: z.string().optional(),
    course: z.string().optional(),
  })),
});

export const collections = {
  courses,
  testimonials,
  'site-info': siteInfo,
  pricing,
  graduates,
};
