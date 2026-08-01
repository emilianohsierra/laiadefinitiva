// Datos globales del sitio. Importa desde cualquier lugar con `import`.

export const SITE_TITLE = 'La IA Definitiva';
export const SITE_DESCRIPTION =
	'Guías y comparativas honestas de herramientas de IA, probadas en proyectos reales.';

// Autor por defecto cuando el artículo no define `author` en su frontmatter.
export const SITE_AUTHOR = 'La IA Definitiva';
export const AUTHOR_BIO =
	'Desarrollador que usa IA a diario en proyectos reales. Guías honestas, probadas en la práctica: cuando algo tiene un pero, lo digo.';

export interface Category {
	name: string;
	slug: string;
	/** Matiz base (0-360) solo para las portadas generativas; el chrome se mantiene consistente. */
	hue: number;
}

// Taxonomía oficial (confirmada). El orden define el menú.
export const CATEGORIES: Category[] = [
	{ name: 'IA', slug: 'ia', hue: 258 },
	{ name: 'Programación', slug: 'programacion', hue: 190 },
	{ name: 'Automatización', slug: 'automatizacion', hue: 224 },
	{ name: 'Emprendimiento', slug: 'emprendimiento', hue: 286 },
	{ name: 'SaaS', slug: 'saas', hue: 210 },
	{ name: 'Freelancing', slug: 'freelancing', hue: 320 },
	{ name: 'SEO', slug: 'seo', hue: 168 },
	{ name: 'Productividad', slug: 'productividad', hue: 200 },
];

const normalize = (s: string) =>
	s
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, "")
		.trim();

/** Encuentra una categoría por nombre o slug (tolerante a acentos/mayúsculas). */
export function findCategory(value?: string): Category | undefined {
	if (!value) return undefined;
	const v = normalize(value);
	return CATEGORIES.find((c) => normalize(c.name) === v || c.slug === v);
}
