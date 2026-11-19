# ITER // Especificaciones Técnicas y de Arquitectura (v1.0)

Documento normativo de ingeniería de software para el desarrollo y mantenimiento de `iter-blog`.

---

## 1. Stack Tecnológico

| Capa | Tecnología | Justificación |
| :--- | :--- | :--- |
| **Framework** | Astro 5.x / 7.x | Cero JavaScript por defecto, generación estática óptima (SSG), Content Layer nativo. |
| **Estilos** | Tailwind CSS v4 (`@tailwindcss/vite`) | Configuración `@theme` moderna, cero CSS runtime, variables CSS nativas. |
| **Tipografía** | Newsreader + JetBrains Mono + Inter | Google Fonts con `preconnect` y `font-display: swap`. |
| **Despliegue** | Vercel Edge Network | Despliegue global estático con cabeceras de seguridad estrictas en `vercel.json`. |
| **Gestión** | Linear.app (Team `SAN`) | Seguimiento de issues, prioridades y ciclo de vida de desarrollo. |

---

## 2. Esquema de Datos del Content Layer

Ubicación: `src/content.config.ts`

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const logsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    id: z.string(),                                    // Ej: "LOG-001"
    title: z.string(),                                 // Título del log
    summary: z.string().optional(),                    // Extracto manual para tarjetas y metadatos
    pubDate: z.coerce.date(),                          // Fecha oficial de publicación
    updatedDate: z.coerce.date().optional(),           // Última modificación si aplica
    version: z.string(),                               // Versión actual (ej: "v1.2")
    status: z.enum(['Stable', 'Evolving']),            // Estado operativo
    tags: z.array(z.string()).default([]),             // Categorías y conceptos clave
    changelog: z.array(                                // Historial visible de iteraciones
      z.object({
        version: z.string(),
        date: z.string(),
        note: z.string()
      })
    ).optional().default([])
  }),
});
```

---

## 3. Sistema de Tokens de Diseño y Variables de Tema

Ubicación: `src/styles/global.css`

```css
@import "tailwindcss";

@theme {
  --color-paper: var(--bg-paper);
  --color-ink-main: var(--text-ink-main);
  --color-ink-muted: var(--text-ink-muted);
  --color-rule: var(--border-rule);
  --color-accent: var(--accent-prussian);

  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

:root {
  --bg-paper: #F8F7F4;
  --text-ink-main: #141414;
  --text-ink-muted: #666663;
  --border-rule: #E3E1DA;
  --accent-prussian: #1b365d;
}

[data-theme="dark"] {
  --bg-paper: #121214;
  --text-ink-main: #EDEDEA;
  --text-ink-muted: #8E8E8A;
  --border-rule: #262629;
  --accent-prussian: #4d7cb2;
}
```

---

## 4. Reglas de Despliegue y Desarrollo

* **Inicio del servidor de desarrollo:**
  ```powershell
  astro dev --background
  ```
* **Comprobación de compilación limpia:**
  ```powershell
  npm run build
  ```
* **Variables de entorno:** Gestionadas en `.env.local` (nunca commiteadas al repositorio).
