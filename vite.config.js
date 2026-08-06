import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "vendor";
          }
          if (id.includes("node_modules/react-icons")) {
            return "icons";
          }
          if (id.includes("node_modules/react-hot-toast") || id.includes("node_modules/clsx")) {
            return "ui";
          }
        },
      },
    },
  },
});
