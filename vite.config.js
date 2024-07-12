import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test/', // This should point to your subdirectory
  build: {
    outDir: 'dist', // or your specific output directory
  },
});