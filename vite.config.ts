import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5555,
    open: true,
    cors: true
  },
  plugins: [react()]
});
