// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    id: z.string(),                                    // Ej: "LOG-001"
    title: z.string(),                                 // Título del registro
    pubDate: z.coerce.date(),                          // Fecha convertida automáticamente
    version: z.string(),                               // Versión actual (Ej: "v1.2")
    status: z.enum(['Stable', 'Evolving']),            // Estado operativo
    
    // Matriz de historial de cambios (El changelog visible de la idea)
    changelog: z.array(
      z.object({
        version: z.string(),
        date: z.string(),
        note: z.string()
      })
    ).optional().default([])
  }),
});

export const collections = {
  logs: logsCollection,
};