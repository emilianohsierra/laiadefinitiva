# Guía de autoría — sistema editorial

Todo artículo en Markdown **ya se ve premium sin tocar nada**: títulos, tablas, citas, listas
y FAQ se estilizan solos. Esta guía cubre lo *opcional* que puedes usar para sacarle más.

## 1. Frontmatter (campos nuevos, todos opcionales)

```yaml
---
title: 'Título del artículo'
description: 'Resumen de 1-2 frases (se usa en la card, el <meta> y el JSON-LD).'
pubDate: 'Jul 27 2026'
heroImage: '../../assets/mi-portada.jpg'   # opcional; si falta, se genera una portada de marca
heroImageAlt: 'Descripción real de la imagen'  # accesibilidad + SEO
category: 'Programación'   # una de las 8 categorías (ver abajo)
author: 'Emiliano'         # si se omite, aparece "La IA Definitiva"
tags: ['cursor', 'copilot']
draft: false               # true = no se publica (queda fuera de listados y sitemap-visible)
---
```

**Categorías válidas** (usa el nombre tal cual, con acento): `IA`, `Programación`,
`Automatización`, `Emprendimiento`, `SaaS`, `Freelancing`, `SEO`, `Productividad`.
Definir `category` hace que el artículo aparezca en `/categoria/<slug>/`, muestre su badge
y sume la miga de pan (breadcrumb) al JSON-LD.

## 2. FAQ que genera rich snippet (importante)

Para que se emita el `FAQPage` JSON-LD (y Google pueda mostrar el desplegable de preguntas),
escribe la sección **exactamente** con esta convención:

```markdown
## Preguntas frecuentes

**¿Pregunta uno?**
Respuesta en un párrafo.

**¿Pregunta dos?**
Otra respuesta.
```

Regla (de Ho): el `FAQPage` solo se emite si el artículo **de verdad** tiene esta sección.
Sin sección de FAQ, no se inventa nada.

El índice lateral (tabla de contenidos), la miga de pan y el `BlogPosting` JSON-LD
(fecha, autor, imagen) se generan automáticamente desde el Markdown. No hay que hacer nada.

## 3. Componentes opcionales (solo en archivos `.mdx`)

Si un artículo necesita más que Markdown, renómbralo a `.mdx` e importa lo que uses:

```mdx
---
title: '...'
---
import Callout from '../../components/Callout.astro';
import ToolCard from '../../components/ToolCard.astro';
import ProsCons from '../../components/ProsCons.astro';
import QuickTake from '../../components/QuickTake.astro';
import ComparisonTable from '../../components/ComparisonTable.astro';
```

### Callout — nota destacada
Tipos: `consejo`, `importante`, `advertencia`, `recomendacion`, `dato`, `pro`.

```mdx
<Callout type="advertencia">
Revisa siempre el código que genera la IA antes de aceptarlo.
</Callout>

<Callout type="pro" title="Truco">
El 80% del resultado está en darle buen contexto.
</Callout>
```

### ToolCard — ficha de herramienta (reseñas)
```mdx
<ToolCard name="Cursor" rating={9} bestFor="Full-stack multi-archivo"
	price="Gratis · Pro 20 USD/mes" firsthand url="https://cursor.com" cta="Probar Cursor">
Editor con IA integrada. La usé a diario construyendo mi app de nutrición.
</ToolCard>
```
El enlace ya sale con `rel="sponsored nofollow noopener"`.

### ProsCons — ventajas y desventajas
```mdx
<ProsCons
	pros={['Integración fluida con VS Code', 'Ideal para proyectos grandes']}
	cons={['Lo mejor está en el plan de pago', 'Conviene revisar sus cambios']}
/>
```

### QuickTake — veredicto rápido
```mdx
<QuickTake rating={9} verdict="La mejor para la mayoría de freelancers.">
Equilibrio entre potencia y facilidad. Le resto un punto por el plan de pago.
</QuickTake>
```

### ComparisonTable — tabla comparativa estructurada
```mdx
<ComparisonTable
	headers={['Herramienta', 'Mejor para', 'Precio']}
	rows={[
		['Cursor', 'Full-stack', '20 USD/mes'],
		['Copilot', 'Autocompletado', '10 USD/mes'],
	]}
	caption="Comparativa de precios (2026)."
/>
```
> Nota: una tabla normal de Markdown también se estiliza sola; este componente es para
> cuando prefieres pasar los datos estructurados o resaltar la primera columna.

## 4. Reglas que se mantienen
- Un solo `#`/H1 por artículo (el `title`); secciones en H2/H3.
- Enlaces en Markdown, no HTML.
- Sin emojis; tono humano y honesto (si algo se investigó en vez de usarse, decirlo).
