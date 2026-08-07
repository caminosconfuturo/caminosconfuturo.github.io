# Borrador — Asociación Caminos con Futuro

Abre **`index.html`** con doble clic. No necesita servidor ni instalación.

Para subirlo a GitHub Pages y pasarle el enlace a la clienta: **[DESPLIEGUE.md](DESPLIEGUE.md)**.

> **Está en modo borrador:** las 12 páginas llevan `noindex`, hay un `robots.txt` que bloquea a los buscadores y un aviso superior que explica a Sira qué está viendo. Los pasos para quitarlo todo al pasar a producción están en DESPLIEGUE.md.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Inicio: hero, confianza, quiénes somos, **5 áreas**, cómo trabajamos, transición a la vida adulta, opiniones, localización |
| `servicios.html` | Índice de las 5 áreas con sus servicios + FAQ en acordeón |
| `servicios-*.html` | 5 páginas de área (misma plantilla, distinto color y contenido) |
| `quienes-somos.html` | Misión, forma de trabajar, compromiso, equipo, instalaciones |
| `opiniones.html` | Estado vacío honesto — la asociación no tiene reseñas todavía |
| `contacto.html` | Canales directos, horario, formulario, mapa |
| `legal.html` | Plantillas de aviso legal, privacidad y cookies (con placeholders) |
| `assets/styles.css` | Todo el sistema visual en tokens CSS |
| `404.html` | Página de error con el mismo diseño |
| `assets/main.js` | Cabecera, pie, flotantes y banner de borrador (sin dependencias) |
| `robots.txt` · `.nojekyll` | Configuración de GitHub Pages y bloqueo de indexación |

## Decisiones que conviene conocer

- **La paleta sale del logotipo real**, muestreada del vector entregado: salvia `#ABB58C`, jade `#759A8B`, coral `#FAB4A5`, lila `#A58BC7`, tierra `#836E56`, bosque `#55725D`. Todo son tokens en el bloque `:root` de `styles.css`.
- **Cada área toma el color de un elemento del logo**: la colina (educativa), la figura adulta (terapéutica), el corazón (familiar), la figura infantil (inclusión) y el tronco (otros). El código cromático de la web *es* el logo. Se aplica con la clase `.area--*`; ningún estilo está duplicado por área.
- **Los pastel del logo nunca se usan como texto**, solo como fondo o borde. Para texto existe la variante `-700` de cada familia, oscurecida en el mismo tono hasta cumplir AA.
- **Logotipo:** isotipo en la cabecera, lockup completo sobre fondo blanco en el pie (su tipografía es verde oscuro y desaparecería sobre color). Los SVG originales están en `assets/logo-*.svg`; para uso real se generaron PNG optimizados, porque el vector entregado es un autotrazado de ~230 KB.
- **Cabecera, pie y flotantes se inyectan desde `main.js`** para que el prototipo tenga una sola fuente de verdad de navegación. En la web final son componentes.
- **No hay ni un precio ni un dato inventado.** Todo lo que falta está marcado como `PLACEHOLDER:` y el copy provisional lleva el comentario `<!-- COPY PROVISIONAL -->`.

## Verificación realizada

Estática (en este entorno no hay navegador disponible para capturas):

- Jerarquía de encabezados correcta y un solo `h1` en las 11 páginas.
- Contraste WCAG AA verificado por cálculo en 19 combinaciones de color: todas pasan. Se ajustaron cuatro tokens que no llegaban.
- Enlaces internos: sin rotos.
- `lang`, `title`, `meta description`, enlace "saltar al contenido", `iframe` con `title`, labels de formulario: presentes.
- Ausencia de precios, tarifas y de la palabra "gratis" en todo el proyecto.
- CSS y JS con llaves balanceadas.

- `noindex` en las 12 páginas, sin rutas absolutas (funciona desde una subcarpeta de GitHub Pages), sin enlaces internos rotos.

**Pendiente de revisión visual real** en Chrome/Safari a 360, 768, 1024 y 1440 px.
