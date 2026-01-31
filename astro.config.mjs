import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  site: 'https://dogsmile.hu',
  image: {
    service: passthroughImageService(),
  },
});
