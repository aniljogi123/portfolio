import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const devRewritePlugin: Plugin = {
  name: 'dev-html-rewrite',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/' || req.url === '/index.html' || req.url?.startsWith('/?')) {
        req.url = '/dev.html';
      }
      next();
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [devRewritePlugin, react(), tailwindcss()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: './dev.html',
      },
    },
  },
});
