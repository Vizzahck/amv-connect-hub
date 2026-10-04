import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/amv-connect-hub/',
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: '/amv-connect-hub/',
  },
});
