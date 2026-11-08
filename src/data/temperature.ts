/** The range our trailers can hold, in °C. Every range bar on the site uses this scale. */
export const SCALE_MIN = -25;
export const SCALE_MAX = 30;

export type Range = [number, number];

export function position(t: number) {
  return ((t - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
}

/** "−25 °C" with a real minus sign and a narrow no-break space. */
export function formatTemp(t: number) {
  const sign = t > 0 ? "+" : t < 0 ? "−" : "";
  return `${sign}${Math.abs(t)} °C`;
}

export function formatRange([from, to]: Range) {
  return `${formatTemp(from)} to ${formatTemp(to)}`;
}
