import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";
import en from "./en";
import hu from "./hu";
import it from "./it";

export const locales = ["hu", "en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "hu";
/** The only complete language: missing text in the others comes from here. */
export const fallbackLocale: Locale = "en";

export const languageNames: Record<Locale, string> = {
  hu: "Magyar",
  en: "English",
  it: "Italiano",
};

export type Dictionary = typeof en;

type DeepPartial<T> = T extends readonly unknown[] ? T : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
export type Translation = DeepPartial<Dictionary>;

const translations: Record<Locale, Translation> = { hu, en, it };

/** Fills the gaps in `override` from `base`. Lists are taken whole, never merged item by item. */
function merge<T>(base: T, override: unknown): T {
  if (override === undefined) return base;
  if (Array.isArray(base) || typeof base !== "object" || base === null) return override as T;
  const result = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    result[key] = merge((base as Record<string, unknown>)[key], value);
  }
  return result as T;
}

const dictionaries = new Map<Locale, Dictionary>();

export function getDictionary(locale: Locale): Dictionary {
  let dictionary = dictionaries.get(locale);
  if (!dictionary) {
    dictionary = merge(en, translations[locale]);
    dictionaries.set(locale, dictionary);
  }
  return dictionary;
}

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}

/** The locale of the page being rendered, from its URL. Pages outside a locale folder get the default. */
export function getLocale(astro: { currentLocale?: string | undefined }): Locale {
  return isLocale(astro.currentLocale) ? astro.currentLocale : defaultLocale;
}

export { format } from "./format";

export function formatDate(locale: Locale, isoDate: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(isoDate));
}

/** Site-relative URL of a page in a language, e.g. ("hu", "services") → /windeurotrans.com/hu/services/ */
export function localizedPath(locale: Locale, path = ""): string {
  return getRelativeLocaleUrl(locale, path);
}

export function localizedUrl(locale: Locale, path = ""): string {
  return getAbsoluteLocaleUrl(locale, path);
}

/**
 * The page's path with the base and the language removed, e.g. /windeurotrans.com/hu/services/ → services.
 * Pages outside the language folders, like the 404 page, have no language versions and give the home page.
 */
export function pagePath(url: URL): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [first, ...rest] = url.pathname.slice(base.length).split("/").filter(Boolean);
  return isLocale(first) ? rest.join("/") : "";
}

export function localeStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}
