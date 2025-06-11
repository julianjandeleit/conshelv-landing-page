// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()), // ISO string or Date object
    description: z.string(),
    ogImage: z.string(), // Optional: add .url() if validating image file format
  }),
});

export const collections = {
  articles: blogCollection,
};
