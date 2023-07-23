import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true
	},
  build: {
    outDir: 'build'
  },
	plugins: [sveltekit()]
});
