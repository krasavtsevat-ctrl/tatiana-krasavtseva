import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://malchenkovasvetlana-eng.github.io",
  base: "/tatiana-krasavtseva",
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
});
