import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/morivo/",
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './public/404.html', // Ensure the 404.html is copied to the dist folder
      }
    }
  }
});
