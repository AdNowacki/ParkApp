import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src/components'),
      '!': path.resolve(__dirname, './src/graphql'),
      '~~': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      exclude: [
        'vite.config.ts',
        'eslint.config.ts',
        'vitest.config.ts',
        'tailwind.config.js',
        'formkit.config.ts',
        'formkit.theme.ts',
        'app.config.js',
        'node_modules/**',
        'coverage/**',
        'dist/**',
        '**/*.d.ts',
      ],
    },
  },
});
