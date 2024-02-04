import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// electronic-heaven
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      "@": resolve(__dirname, "src"),
    },
  },
  base: "",
});
