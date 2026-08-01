import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema.
	// Los campos nuevos son OPCIONALES: los artículos existentes siguen validando.
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// --- Nuevos (opcionales) para el sistema editorial ---
			heroImageAlt: z.string().optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
			author: z.string().optional(),
			draft: z.boolean().optional().default(false),
		}),
});

export const collections = { blog };
