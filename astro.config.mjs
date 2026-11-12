// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://miketsu-inc.github.io",
  base: "/windeurotrans.com",
  trailingSlash: "always",
  i18n: {
    locales: ["hu", "en", "it"],
    defaultLocale: "hu",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    sitemap({
      // The root only redirects to a language
      filter: (page) => new URL(page).pathname !== "/windeurotrans.com/",
      i18n: {
        defaultLocale: "hu",
        locales: { hu: "hu", en: "en", it: "it" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
