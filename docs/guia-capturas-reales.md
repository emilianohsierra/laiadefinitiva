# Guía de capturas reales — La IA Definitiva

Objetivo: que tú tomes capturas propias (EEAT real: se nota y Google lo premia) que encajen
con la dirección de arte del sitio. Mientras un artículo no tenga captura real, el sistema
pone una **portada de marca generativa** (gradiente + glifo de categoría) para no dejar huecos
ni recurrir a stock genérico.

Regla base: solo capturas de herramientas que de verdad usas. Nada de inventar pantallas.

---

## 1. Dirección de arte (para que todas se vean del mismo medio)

- **Tema del editor/app: oscuro.** Combina con el dark premium del sitio y se ve más “tech”.
  Si una app solo tiene claro, úsala en claro pero sé consistente dentro del mismo artículo.
- **Limpieza:** cierra paneles y pestañas irrelevantes, notificaciones y barras que distraigan.
  Que se vea solo lo que ilustra el punto.
- **Legibilidad:** sube el tamaño de fuente del editor 1–2 puntos antes de capturar. La captura
  se verá pequeña en móvil; el texto debe leerse.
- **Enfoque:** captura la porción que importa, no toda la pantalla 4K. Mejor un recorte claro.
- **Marcar sin ensuciar:** si necesitas señalar algo, usa un recuadro o flecha en color violeta
  (#6D4AFF) fino. Nada de rojos chillones ni muchos adornos.

## 2. Seguridad (obligatorio antes de subir)

Oculta o difumina: API keys, tokens, correos, rutas con tu usuario real, nombres de clientes,
datos de tarjetas o facturación. Revisa la terminal: a veces el prompt muestra tu ruta/usuario.

## 3. Formato, tamaño y nombre de archivo

- **Formato de origen:** PNG (capturas de interfaz salen nítidas). El sitio ya las convierte a
  WebP/AVIF y las optimiza al compilar, así que no te preocupes por el peso final.
- **Tamaño recomendado:**
  - Hero (portada del artículo): relación 2:1, ~1600×800 px.
  - Inline (dentro del texto): ancho real de la captura, idealmente ≥ 1200 px de ancho.
- **Nombre del archivo = SEO.** En minúsculas, con guiones, describiendo lo que se ve, en español:
  - `cursor-generando-componente-macros.png`
  - `github-copilot-autocompletado-funcion.png`
  - `claude-code-terminal-refactor.png`
  Evita `captura1.png` o `Screenshot 2026-07-31.png`.
- **Dónde guardarlas:** `public/images/<slug-del-articulo>/archivo.png`
  Ej: `public/images/mejores-herramientas-ia-programadores-freelance/cursor-generando-componente-macros.png`

## 4. Texto alternativo (alt) — fórmula

Describe lo que se ve + herramienta + contexto. En español, sin “imagen de” ni “captura de”.
- Bien: `Cursor generando el componente de macros de la app de nutrición a partir de una instrucción`
- Mal: `captura de cursor`
En Markdown: `![Cursor generando el componente de macros...](/images/<slug>/cursor-generando-componente-macros.png)`

## 5. Qué capturas tomar (por artículo del roadmap)

### Artículo 1 — “Mejores herramientas de IA para programadores freelance” (ya publicado)
Este es una comparativa; cada ficha gana con UNA captura real de esa herramienta usándola tú:
1. **Cursor** editando tu app de nutrición: el momento en que genera/edita un componente a partir
   de una instrucción en lenguaje natural. (La ficha dice que le pediste la función de macros: esa.)
2. **GitHub Copilot** mostrando el autocompletado inline de una función pequeña mientras escribes.
3. **Claude Code** en la terminal ejecutando una tarea grande/refactor sobre el proyecto.
4. (Opcional) Una captura del **resultado**: la app de nutrición funcionando (reconociendo un alimento
   o mostrando los macros). Es tu prueba de EEAT más fuerte.

### Artículo 2 — “Cómo usar Cursor AI para React y Next.js” (en circuito)
Slowking pidió una captura real del **coach de la app de nutrición**. Además:
1. Configuración de Cursor (panel de ajustes o el chat lateral abierto en tu proyecto React/Next).
2. Cursor generando/editando un componente React concreto (con el diff visible).
3. El coach de la app funcionando (la pantalla real del caso de estudio).

### Próximos (cluster Desarrollo)
- **Cursor vs GitHub Copilot:** una captura de cada uno resolviendo la MISMA tarea, para comparar.
- **Automatizar tu trabajo como dev con IA:** captura del flujo/script corriendo.
- **Cursor: guía completa:** varias de las funciones que más usas (una por función/H3).

## 6. Cómo entran en el artículo (hero vs inline)

- **Hero:** la más representativa del artículo. Va en el frontmatter:
  `heroImage: '../../assets/...'` (imágenes procesadas) o como imagen destacada del sistema.
  Ponle `heroImageAlt` en el frontmatter.
- **Inline:** dentro del texto, en el punto donde ilustras algo (“Cómo la uso”, “Errores a evitar”).
  Referénciala en Markdown con su alt. Si aporta contexto, agrégale un pie de foto.

## 7. Checklist rápido antes de subir

- [ ] Es una herramienta que de verdad uso.
- [ ] Tema oscuro / consistente dentro del artículo.
- [ ] Sin datos sensibles (keys, correos, rutas, clientes).
- [ ] Se lee bien el texto (fuente grande, recorte enfocado).
- [ ] Nombre de archivo descriptivo en kebab-case, en `public/images/<slug>/`.
- [ ] Alt descriptivo en español.

---

Nota: no hace falta que tengas todas de golpe. En cuanto exista la portada de marca generativa,
cada artículo se ve completo aunque aún no subas capturas; las reales las vas agregando y
sustituyen a la portada donde aporten (sobre todo en las fichas de herramienta y en “Cómo la uso”).
