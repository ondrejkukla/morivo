import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/morivo/",
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './public/404.html',
      }
    }
  }
});
