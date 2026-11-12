/** Replaces {name} placeholders with values. Kept apart from index.ts so browser scripts can use it without the dictionaries. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
