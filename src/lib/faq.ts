export interface Faq {
	q: string;
	a: string;
}

/** Quita el markdown inline más común para dejar texto plano en el JSON-LD. */
function stripInline(s: string): string {
	return s
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // enlaces -> texto
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/\*([^*]+)\*/g, '$1')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Extrae las preguntas frecuentes de un artículo en Markdown.
 * Convención del pipeline de contenido: un H2/H3 "Preguntas frecuentes" (o "FAQ")
 * seguido de pares `**pregunta**` + párrafo de respuesta.
 * Devuelve [] si el artículo NO tiene una sección de FAQ real
 * (así el FAQPage JSON-LD solo se emite cuando corresponde).
 */
export function extractFaq(body?: string): Faq[] {
	if (!body) return [];
	const headingRe = /^#{2,3}\s+.*(?:preguntas\s+frecuentes|faq)\b.*$/im;
	const m = body.match(headingRe);
	if (!m || m.index === undefined) return [];

	const after = body.slice(m.index + m[0].length);
	const nextHeading = after.search(/\n#{2,3}\s+/);
	const section = nextHeading === -1 ? after : after.slice(0, nextHeading);

	const faqs: Faq[] = [];
	const pairRe = /\*\*(.+?)\*\*[ \t]*\n+([\s\S]*?)(?=\n[ \t]*\n|\s*$)/g;
	let match: RegExpExecArray | null;
	while ((match = pairRe.exec(section)) !== null) {
		const q = stripInline(match[1]);
		const a = stripInline(match[2]);
		if (q && a) faqs.push({ q, a });
	}
	return faqs;
}
