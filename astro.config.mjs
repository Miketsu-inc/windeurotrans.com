// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/windeurotrans.com/",
  i18n: {
    locales: ["en", "hu", "it"],
    defaultLocale: "hu",
    fallback: {
      it: "en",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
