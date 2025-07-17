
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Connect } from "vite";
import type { ServerResponse } from "http";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configure server middleware for proper routing
  configureServer(server: any) {
    server.middlewares.use((req: Connect.IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
      // Handle /authors route in development
      if (req.url === "/authors" || req.url?.startsWith("/authors/")) {
        req.url = "/";
      }
      next();
    });
  },
  // Configure preview for production builds
  preview: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  }
}));
