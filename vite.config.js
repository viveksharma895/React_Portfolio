import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createReadStream, createWriteStream, readdirSync } from "node:fs";
import { join } from "node:path";
import { createBrotliCompress, createGzip, constants } from "node:zlib";

const TEXT_EXTENSIONS = new Set([".html", ".js", ".css", ".txt", ".json", ".svg"]);

function compressAssets() {
  let outDir;
  return {
    name: "compress-assets",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      walk(outDir);

      function walk(dir) {
        for (const entry of readdirSync(dir, { withFileTypes: true })) {
          const full = join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
            continue;
          }
          const ext = entry.name.slice(entry.name.lastIndexOf("."));
          if (!TEXT_EXTENSIONS.has(ext)) continue;

          for (const [suffix, stream, options] of [
            ["gz", createGzip, { level: constants.Z_BEST_COMPRESSION }],
            ["br", createBrotliCompress, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }],
          ]) {
            const outFile = `${full}.${suffix}`;
            createReadStream(full)
              .pipe(stream(options))
              .pipe(createWriteStream(outFile));
          }
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), compressAssets()],
  server: {
    port: 4444,
  },
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
