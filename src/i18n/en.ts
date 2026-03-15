import type hu from "./hu";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const en: DeepPartial<typeof hu> = {
  hero: {
    button: "Get in touch",
  },
  nav: {
    whyus: "Why us?",
    services: "Services",
  },
};

export default en;
