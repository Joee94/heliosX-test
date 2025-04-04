/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    include: ["**/*.test.tsx", "**/*.test.ts"],
    globals: true,
    environment: "jsdom",
    watch: false,
    setupFiles: ["./setupTests.ts"],
  },
});
