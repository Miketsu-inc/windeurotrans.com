import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** One Markdown file per service and language: src/content/services/{locale}/{slug}.md */
const services = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      name: z.string(),
      /** A few words, shown under the name in the services menu. */
      tagline: z.string(),
      /** One line, shown in service lists. */
      short: z.string(),
      lead: z.string(),
      image: image(),
      imageAlt: z.string(),
      /** CSS object-position for the crop, when the centre isn't the best part. */
      imagePosition: z.string().optional(),
      specs: z.array(z.object({ label: z.string(), value: z.string() })),
    }),
});

/** Long text pages: src/content/pages/{locale}/{slug}.md */
const pages = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/pages" }),
  schema: z.object({}),
});

export const collections = { services, pages };
