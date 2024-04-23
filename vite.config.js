const { defineConfig } = require('vitest/config');
const react = require('@vitejs/plugin-react-swc');

// https://vitejs.dev/config/
module.exports = defineConfig({
  base: '/',
  plugins: [react()],
  server:{
    port: 3000,
    open: true,
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