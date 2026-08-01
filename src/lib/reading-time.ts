/**
 * Tiempo de lectura estimado en minutos a partir del cuerpo Markdown.
 * ~200 palabras/min (lectura en español). Mínimo 1 min.
 */
export function readingTime(body: string | undefined): number {
	const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}
