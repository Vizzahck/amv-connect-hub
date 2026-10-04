// @lovable.dev/vite-tanstack-config already includes the following - DO NOT add them manually
// or the app will break with duplicate plugins:
// - TanStack Devtools (dev-only, first): TanStackStart, viteReact, tailwindcss, tsconfigPaths
// - Nitro (build-only using Cloudflare as a default target), VITE_* env injection, @ path alias,
//   React/TanStack dedupe, error logger plugins, and sandbox detection (part/host/strictPort)
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // Nitro/vite builds from this.
    server: { entry: "server" },
  },
});
