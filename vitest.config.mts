import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./app/tests/setup.ts"],

    include: [
      "app/tests/**/*.test.ts",
      "app/tests/**/*.test.tsx",
    ],

    exclude: [
      "node_modules/**",
      "e2e/**",
    ],
  },
})