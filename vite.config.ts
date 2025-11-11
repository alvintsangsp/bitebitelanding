import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";

// Plugin to copy CNAME file to dist after build
const copyCNAME = () => ({
  name: "copy-cname",
  closeBundle() {
    try {
      copyFileSync("CNAME", path.resolve(__dirname, "dist/CNAME"));
    } catch (err) {
      // CNAME might not exist, that's okay
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    copyCNAME(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
