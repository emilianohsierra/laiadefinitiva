// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

/**
 * Envuelve cada <table> en <div class="table-wrap"> para scroll horizontal
 * en móvil sin romper la semántica de tabla (clave para SEO / snippets).
 * Sin dependencias externas.
 */
function rehypeTableWrap() {
	return (tree) => {
		const walk = (node) => {
			if (!node || !Array.isArray(node.children)) return;
			for (let i = 0; i < node.children.length; i++) {
				const child = node.children[i];
				if (child.type === 'element' && child.tagName === 'table') {
					node.children[i] = {
						type: 'element',
						tagName: 'div',
						properties: { className: ['table-wrap'] },
						children: [child],
					};
				} else {
					walk(child);
				}
			}
		};
		walk(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://www.laiadefinitiva.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [rehypeTableWrap],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
			display: 'swap',
		},
		{
			provider: fontProviders.google(),
			name: 'Geist',
			cssVariable: '--font-display',
			weights: [500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Inter', 'system-ui', 'sans-serif'],
			display: 'swap',
		},
	],
});
