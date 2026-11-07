import type hu from "./hu";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const en: DeepPartial<typeof hu> = {
  index: {
    hero: {
      title1: "Reliability",
      title2: "you can",
      title3: "count on.",
      button: "Get in touch",
    },
    contact: {
      heading: "Get in touch",
      call: "phone",
      email: "email",
      businesshours: {
        name: "business hours",
        start: "Monday",
        end: "Friday",
      },
      address: "address",
    },
  },
  nav: {
    whyus: "Why us?",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
};

export default en;
