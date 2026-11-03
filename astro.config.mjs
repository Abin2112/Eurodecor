// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Preserve the original flat *.html URLs in the production output.
  build: { format: 'file' },
});
