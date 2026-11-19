# ITER // Compendio de Funcionalidades y Banco de Referencias
> Estudio comparativo de patrones de blogs y aplicaciones de referencia (Substack, Medium, Ghost, Bear, Linear, Wikipedia, Quartz).

---

## Índice de Sistemas

- [Módulo 1: Tema y Entorno Visual (Dark Mode)](#módulo-1-tema-y-entorno-visual-dark-mode)
- [Módulo 2: Búsqueda, Filtrado y Recuperación](#módulo-2-búsqueda-filtrado-y-recuperación)
- [Módulo 3: Inventario, Índice e Interacción de Datos](#módulo-3-inventario-índice-e-interacción-de-datos)
- [Módulo 4: Telemetría Lateral y Contexto (Sidebar / Aside)](#módulo-4-telemetría-lateral-y-contexto-sidebar--aside)
- [Módulo 5: Lectura Avanzada y Elementos Prosa](#módulo-5-lectura-avanzada-y-elementos-prosa)
- [Módulo 6: Distribución y Sindicación](#módulo-6-distribución-y-sindicación)

---

## Módulo 1: Tema y Entorno Visual (Dark Mode)

### Análisis de la Industria:
* **El error común:** Invertir simplemente blanco a `#000000` puro genera un contraste excesivo que destruye la sensación de papel editorial.
* **El patrón de referencia (Bear / iA Writer / Linear):** Usar un "Modo Nocturno / Cuaderno de Campo":
  * Papel claro: `#F8F7F4` con tinta `#141414`.
  * Modo Noche: Carbón profundo `#121214` o pizarra mate `#161618` con tinta suave `#E4E4E0` y líneas `#2A2A2E`.
* **Mecanismo técnico:**
  * Toggle discreto (icono sol/luna o tecla de acceso rápido `Cmd/Ctrl + Shift + D`).
  * Sin parpadeo al cargar (`theme-init` script en `<head>` que lee `localStorage` o preferencia del sistema `prefers-color-scheme`).

---

## Módulo 2: Búsqueda, Filtrado y Recuperación

### Análisis de la Industria:
* **Patrón A (Cmd + K Command Palette - Estilo Linear/Raycast):**
  * Al presionar `Cmd+K` o `/`, se despliega una paleta modal flotante.
  * Búsqueda en tiempo real por título, contenido y etiquetas con resaltado de coincidencias.
* **Patrón B (Buscador instantáneo en cabecera):**
  * Campo minimalista sin recarga de página que filtra la lista de tarjetas en vivo mediante un índice estático ultra liviano (Pagefind o fuse.js local).

---

## Módulo 3: Inventario, Índice e Interacción de Datos

### Análisis de la Industria:
* **Vista de Archivo / Inventario (Table View & Matrix):**
  * Capacidad de alternar entre:
    * **Vista Editorial (Cards):** Lectura profunda, extractos y changelog desplegado (vista actual).
    * **Vista de Inventario (Tabla/Matriz):** Fila compacta con `ID`, `Título`, `Versión`, `Estado`, `Fecha`, y `Nº Iteraciones`. Ideal para explorar 50+ logs de un vistazo.
* **Filtros por Estado y Taxonomía:**
  * Filtros conmutables: `Todos`, `Evolving`, `Stable`.
  * Ordenación por: Más reciente, Más iterado (mayor cantidad de versiones), o Alfabeto.

---

## Módulo 4: Telemetría Lateral y Contexto (Sidebar / Aside)

### Análisis de la Industria:
* **Lateral Flotante / Split-Screen (Estilo Tufte CSS / Quartz):**
  * En pantallas medianas y grandes, un lateral derecho o izquierdo contextual:
    1. **Entradas Recientes:** Últimos 3 logs publicados o actualizados recientemente.
    2. **Tabla de Contenidos (TOC):** Salto directo a encabezados del log actual con indicación visual del scroll activo.
    3. **Metadatos del Sistema:** Contador total de logs, última fecha de commit/sync, estado del build.

---

## Módulo 5: Lectura Avanzada y Elementos Prosa

* **Estimación de lectura y métricas:** Minutos de lectura (`~3 min de lectura`) y conteo de palabras.
* **Notas al margen / Notas al pie (Footnotes):** Soporte de notas al pie estilo ensayo académico que no interrumpen el flujo principal de lectura.
* **Bloques de Código y Sintaxis:** Soporte de bloques monospaciados con botón de copia rápida y números de línea discretos.
* **Navegación Anterior / Siguiente:** Enlaces al pie de cada log para mantener la inmersión en la lectura secuencial.

---

## Módulo 6: Distribución y Sindicación

* **RSS Feed (`/rss.xml`):** Sindicación limpia en formato estándar.
* **OpenGraph Dinámico:** Tarjetas visuales generadas para Twitter/X, Discord y LinkedIn al compartir un enlace.
* **Sitemap XML:** Generación automática para indexación en motores de búsqueda.
