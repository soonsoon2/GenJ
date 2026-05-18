import { defineConfig } from 'astro/config';

// GitHub Pages: served from https://soonsoon2.github.io/GenJ/
export default defineConfig({
  site: 'https://soonsoon2.github.io',
  base: '/GenJ',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
