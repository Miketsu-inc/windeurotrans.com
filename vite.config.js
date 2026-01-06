import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss()],
  base: mode === "production" ? "/windeurotrans.com" : "/",
}));
