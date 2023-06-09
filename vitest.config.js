import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    // include: ["src"],
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      $lib: "/src/lib",
    },
  },
});
