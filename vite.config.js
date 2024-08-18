import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "public",
    assetsDir: "",
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.ts"),
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        sourcemapExcludeSources: true

      },
    },
    cssCodeSplit: false,
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
  base: "/public",
  publicDir: "../../views",
});
