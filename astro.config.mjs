// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://creme-de-la-creme-spa-and-beauty.com',
  integrations: [
    sitemap({
      // Custom per-page priority and changefreq
      serialize(item) {
        // Homepage — highest priority, updated most often
        if (item.url === 'https://creme-de-la-creme-spa-and-beauty.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        // Services — high commercial intent, prices may change
        if (item.url.endsWith('/services/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Beauty Plan — lead-gen tool, keep it crawled frequently
        if (item.url.endsWith('/beauty-plan/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // About — stable, moderate priority
        if (item.url.endsWith('/about/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        // Contact — important for local SEO
        if (item.url.endsWith('/contact/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});