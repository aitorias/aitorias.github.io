// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["ca", "es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "kanagawa-wave",
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
