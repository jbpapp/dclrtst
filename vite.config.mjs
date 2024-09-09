import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import os from 'os';

export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    https: {
      key: fs.readFileSync(`${os.homedir()}/Library/Application Support/Herd/config/valet/Certificates/Docler.test.key`),
      cert: fs.readFileSync(`${os.homedir()}/Library/Application Support/Herd/config/valet/Certificates/Docler.test.crt`),
    },
    host: 'docler.test',
    port: 5173,  // The port for the Vite dev server
    hmr: {
      host: 'docler.test',  // Replace with your domain (e.g., 'docler.test')
      protocol: 'wss',  // WebSocket Secure for HMR over HTTPS
    },
  },
  css: {
    // Vite will automatically handle PostCSS and Tailwind if configured
    postcss: './postcss.config.js',  // Ensure postcss.config.js is present
  },
  build: {
    outDir: 'dist',  // Output folder,
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'assets/js/scripts.jsx'), // Main entry point
      }
    },
  },
});
