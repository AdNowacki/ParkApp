import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src/components'),
      '!': path.resolve(__dirname, './src/graphql'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://dev.parkapp.pl',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
