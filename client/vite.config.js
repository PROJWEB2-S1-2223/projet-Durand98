/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/actuator': {
        target: 'http://localhost:8080',
      },
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
});
