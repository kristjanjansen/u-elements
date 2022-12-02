import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/lib.ts",
      name: "uelements",
      fileName: "uelements",
    },
    rollupOptions: {},
  },
  define: {
    "process.env": process.env,
  },
});
