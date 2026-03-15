import en from "./en";
import hu from "./hu";
import it from "./it";

export const translations = { en, hu, it };

export type Locale = keyof typeof translations;
export const locales = Object.keys(translations) as Locale[];

// Derive all valid keys only from the base (hu) translation
type BaseTranslation = typeof hu;

type TranslationKeys<T, P extends string = ""> = {
  [K in Extract<keyof T, string>]: T[K] extends object
    ? TranslationKeys<T[K], `${P}${K}.`>
    : `${P}${K}`;
}[Extract<keyof T, string>];

// Other locales only need to be a deep partial of the base
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

function getNested<T extends Record<string, any>>(obj: T, path: string): any {
  return path
    .split(".")
    .reduce((o, key) => (o ? (o as Record<string, any>)[key] : undefined), obj);
}

export function useTranslation(locale: Locale) {
  const translation = translations[locale] ?? translations.hu;

  return (key: TranslationKeys<BaseTranslation>): string =>
    getNested(translation, key) ?? getNested(translations.hu, key);
}
