const { defineConfig } = require('vitest/config');
const react = require('@vitejs/plugin-react-swc');

// https://vitejs.dev/config/
module.exports = defineConfig({
  base: '/',
  plugins: [react()],
  server:{
    port: 4000,
    open: true,
  },
  build: {
    outDir: 'dist', // Specify the output directory
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
});