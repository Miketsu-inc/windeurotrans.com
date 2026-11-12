import type { ImageMetadata } from "astro";
import type { Dictionary } from "../i18n";
import detailScania from "../assets/fleet/detail-scania.webp";
import detailV8 from "../assets/fleet/detail-v8.webp";
import fleetAngle from "../assets/fleet/fleet-angle.webp";
import fleetAngleNear from "../assets/fleet/fleet-angle-near.webp";
import fleetClose from "../assets/fleet/fleet-close.webp";
import fleetFront from "../assets/fleet/fleet-front.webp";
import fleetFrontLow from "../assets/fleet/fleet-front-low.webp";
import tailLifts from "../assets/fleet/tail-lifts.webp";
import trailerOpen from "../assets/fleet/trailer-open.webp";
import trailerRear from "../assets/fleet/trailer-rear.webp";
import truckSide from "../assets/fleet/truck-side.webp";

/** The fleet gallery, in display order. Alt text is in the dictionary under fleet.alt. */
export const photos: { image: ImageMetadata; alt: keyof Dictionary["fleet"]["alt"] }[] = [
  { image: fleetFrontLow, alt: "fleetFrontLow" },
  { image: truckSide, alt: "truckSide" },
  { image: fleetAngle, alt: "fleetAngle" },
  { image: trailerRear, alt: "trailerRear" },
  { image: fleetClose, alt: "fleetClose" },
  { image: trailerOpen, alt: "trailerOpen" },
  { image: fleetAngleNear, alt: "fleetAngleNear" },
  { image: fleetFront, alt: "fleetFront" },
  { image: tailLifts, alt: "tailLifts" },
  { image: detailV8, alt: "detailV8" },
  { image: detailScania, alt: "detailScania" },
];
