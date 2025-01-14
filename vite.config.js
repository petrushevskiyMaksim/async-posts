import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), ViteAliases({ prefix: '@' })],
});
