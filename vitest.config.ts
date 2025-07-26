import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"], // Path to your setup file
  },
  resolve: {
    alias: {
      // Add any aliases you need for your imports
      "@": "/src",
    },
  },
});
