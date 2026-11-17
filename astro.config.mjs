// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tusitio.com', // ¡URL de producción obligatoria para los sitemaps y canónicas!
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});