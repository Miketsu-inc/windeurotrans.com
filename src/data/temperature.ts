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

export const scaleTicks = [-25, -18, 0, 8, 15, 25, 30];

export const cargoProfiles = [
  {
    id: "frozen",
    label: "Frozen food",
    ranges: [[-25, -18]] as Range[],
    text: "Frozen and deep-frozen food, ice cream and frozen raw materials. The trailer is pre-cooled before loading and stays at setpoint until unloading.",
    service: "temperature-controlled",
  },
  {
    id: "chilled",
    label: "Fresh and chilled",
    ranges: [[0, 4]] as Range[],
    text: "Meat, dairy, ready meals and fresh produce. Kept just above freezing so nothing spoils and nothing freezes.",
    service: "temperature-controlled",
  },
  {
    id: "pharma",
    label: "Pharmaceuticals",
    ranges: [
      [2, 8],
      [15, 25],
    ] as Range[],
    text: "Medicines at cold-chain or controlled room temperature, handled under our GDP certification with a temperature record for every load.",
    service: "pharmaceuticals",
  },
  {
    id: "confectionery",
    label: "Chocolate and sweets",
    ranges: [[12, 18]] as Range[],
    text: "Chocolate, confectionery and other goods that bloom or melt in summer heat and crack in winter cold.",
    service: "temperature-controlled",
  },
  {
    id: "heated",
    label: "Frost-sensitive goods",
    ranges: [[5, 30]] as Range[],
    text: "Drinks, paints, adhesives and chemicals that must not freeze. In winter we heat the trailer instead of cooling it.",
    service: "temperature-controlled",
  },
];
