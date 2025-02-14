import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://amandeepahuja.github.io/portfolio',
  base: '/portfolio',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Amandeep Singh',
      openGraph: {
        home: {
          title: 'Portfolio',
        },
        
        projects: {
          title: 'Projects'
        }
      }
    })
  ]
});