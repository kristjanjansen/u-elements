import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  build: {
    lib: {
      entry: "./src/lib.ts",
      name: "uelements",
      fileName: "uelements",
    },
  },
  define: {
    "process.env": process.env,
  },
});
