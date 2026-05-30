import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const collections = {
	work: defineCollection({
		loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/work" }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				publishDate: z.coerce.date(),
				tags: z.array(z.string()),
				img: image().optional(),
				img_alt: z.string().optional(),
				href: z.string().optional(),
				btnText: z.string().optional(),
				backgroundPath: z.string().optional(),
				bgTile: z.boolean().optional(),
			}),
	}),
};
