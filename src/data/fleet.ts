import { asset } from "./site";

/*
  Fleet photos. Each one is in /public/img/fleet as {name}-800.webp and {name}-1600.webp.
  The order here is the order of the gallery on the fleet page.
*/
export type Photo = {
  name: string;
  alt: string;
  /** Intrinsic size of the 1600 px version, so the browser can reserve space. */
  width: number;
  height: number;
};

export const photos: Photo[] = [
  { name: "fleet-front-low", alt: "Five orange Scania trucks parked side by side, seen from the front", width: 1600, height: 1200 },
  { name: "truck-side", alt: "Orange Scania tractor unit with a white Krone refrigerated trailer", width: 1600, height: 1200 },
  { name: "fleet-angle", alt: "A row of orange Scania cabs, seen from the side", width: 1600, height: 1200 },
  { name: "trailer-rear", alt: "Rear corner of a white refrigerated trailer behind an orange truck", width: 1600, height: 1200 },
  { name: "fleet-close", alt: "Orange Scania trucks in a row, with orange hazard plates on the front", width: 1600, height: 1200 },
  { name: "trailer-open", alt: "Open doors of a clean, empty refrigerated body", width: 1600, height: 2133 },
  { name: "fleet-angle-near", alt: "Close view of orange Scania cabs lined up under a cloudy sky", width: 1600, height: 1200 },
  { name: "fleet-front", alt: "Five orange Scania trucks facing the camera", width: 1600, height: 1200 },
  { name: "tail-lifts", alt: "Tail lifts folded under the rear of several refrigerated trucks", width: 1600, height: 1200 },
  { name: "detail-v8", alt: "Chrome V8 badge on the side of an orange cab", width: 1600, height: 1200 },
  { name: "detail-scania", alt: "Scania lettering on the front of an orange cab", width: 1600, height: 1200 },
];

export function photoSrc(name: string, width: 800 | 1600 = 800) {
  return asset(`img/fleet/${name}-${width}.webp`);
}

export function photoSrcset(name: string) {
  return `${photoSrc(name, 800)} 800w, ${photoSrc(name, 1600)} 1600w`;
}
