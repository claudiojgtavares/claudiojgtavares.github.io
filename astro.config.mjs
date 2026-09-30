import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://claudiojgtavares.github.io',
  base: '/',
  integrations: [sitemap()],
  output: 'static'
});
