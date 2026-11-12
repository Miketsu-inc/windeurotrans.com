import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { fallbackLocale, type Locale } from ".";

export type Service = CollectionEntry<"services"> & { slug: string };

/** The services in a language, in menu order. Untranslated ones come from the fallback language. */
export async function getServices(locale: Locale): Promise<Service[]> {
  const bySlug = new Map<string, CollectionEntry<"services">>();
  for (const entry of await getCollection("services")) {
    const [entryLocale, slug] = entry.id.split("/");
    if (entryLocale === locale || (entryLocale === fallbackLocale && !bySlug.has(slug))) bySlug.set(slug, entry);
  }
  return [...bySlug]
    .map(([slug, entry]) => ({ ...entry, slug }))
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getPage(locale: Locale, slug: string): Promise<CollectionEntry<"pages">> {
  const entry = (await getEntry("pages", `${locale}/${slug}`)) ?? (await getEntry("pages", `${fallbackLocale}/${slug}`));
  if (!entry) throw new Error(`Missing page "${slug}" in src/content/pages/${fallbackLocale}`);
  return entry;
}
