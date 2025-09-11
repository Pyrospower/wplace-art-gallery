import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pixelArt = defineCollection({
  loader: glob({
    pattern: "**/*.(md|mdx)",
    base: "src/data/pixel-arts",
  }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    coords: z
      .object({
        tlX: z.number(),
        tlY: z.number(),
        pxX: z.number(),
        pxY: z.number(),
      })
      .optional(),
    source: z.string().optional(),
  }),
});

export const collections = { pixelArt };
