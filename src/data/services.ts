export type Service = {
  slug: string;
  name: string;
  /** One line, used in service lists. */
  short: string;
  /** A few words, used under the name in the navigation menu. */
  tagline: string;
  /** Page intro. */
  lead: string;
  /** A photo from src/data/fleet.ts, by name. `position` is a CSS object-position for the crop. */
  image: { photo: string; alt: string; position?: string };
  specs: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

export const services: Service[] = [
  {
    slug: "road-freight",
    name: "Road freight and forwarding",
    tagline: "Full and part loads across Europe",
    short: "Full and part loads from 1 kg to 24 tonnes, in Hungary and across Europe.",
    lead: "Whether you fill a whole trailer or send a few pallets, we plan the route, collect on time and deliver to the agreed slot.",
    image: {
      photo: "truck-side",
      alt: "Orange Scania tractor unit with a white refrigerated trailer",
    },
    specs: [
      { label: "Load size", value: "1 kg to 24 tonnes" },
      { label: "Load types", value: "Full truckload, part load" },
      { label: "Coverage", value: "Hungary and Europe" },
      { label: "Dispatch", value: "24 hours a day, 7 days a week" },
    ],
    sections: [
      {
        heading: "Full truckload",
        paragraphs: [
          "The trailer carries your goods only. It drives straight from pickup to delivery with no stops for other customers, so this is the fastest transit time we can offer.",
        ],
      },
      {
        heading: "Part load",
        paragraphs: [
          "Your goods share the trailer with other customers' loads going the same way. The price is lower, and the transit time is a little longer because of the extra stops.",
        ],
      },
      {
        heading: "Forwarding",
        paragraphs: [
          "When a route or date needs more capacity than our own trucks have, we organise the transport with partner carriers. You still deal with us from the first call to delivery, and the same quality rules apply.",
        ],
      },
    ],
  },
  {
    slug: "temperature-controlled",
    name: "Temperature-controlled transport",
    tagline: "Frozen, chilled and heated loads",
    short: "Refrigerated and heated loads held anywhere from −25 °C to +30 °C.",
    lead: "Frozen, chilled, fresh or frost-sensitive: you set the temperature, and we hold it from loading to unloading.",
    image: {
      photo: "trailer-rear",
      alt: "Rear corner of a white refrigerated trailer behind an orange Scania",
    },
    specs: [
      { label: "Temperature range", value: "−25 °C to +30 °C" },
      { label: "Load size", value: "1 kg to 24 tonnes" },
      { label: "Records", value: "Temperature record on request" },
      { label: "Dispatch", value: "24 hours a day, 7 days a week" },
    ],
    sections: [
      {
        heading: "What we carry",
        paragraphs: [
          "Food raw materials and finished products at every temperature they need:",
        ],
        list: [
          "Deep-frozen and frozen food",
          "Chilled meat, dairy and ready meals",
          "Fresh fruit and vegetables",
          "Chocolate and confectionery",
          "Drinks, paints and chemicals that must not freeze",
          "Dry goods in the same trailer, kept at a stable temperature",
        ],
      },
      {
        heading: "How we keep it at temperature",
        paragraphs: [
          "We agree the setpoint with you in writing before collection. The trailer is brought to temperature before loading, and the driver checks it at pickup and on the way.",
          "Our dispatch team watches every temperature-controlled load around the clock. When the load is delivered, you can ask for the temperature record for the whole journey.",
        ],
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceutical transport",
    tagline: "GDP-certified medicine transport",
    short: "GDP-certified road transport for medicines, at +2 °C to +8 °C or +15 °C to +25 °C.",
    lead: "We are certified for Good Distribution Practice of medicinal products, so medicines travel under the same rules from the warehouse to the pharmacy wholesaler.",
    image: {
      photo: "trailer-open",
      alt: "Open doors of a clean, empty refrigerated body",
      position: "center 60%",
    },
    specs: [
      { label: "Temperature range", value: "+2 °C to +8 °C, +15 °C to +25 °C" },
      { label: "Certification", value: "GDP, valid until 12 October 2028" },
      { label: "Guidelines", value: "EU GDP 2013/C 343/01, WHO GDP" },
      { label: "Records", value: "Temperature record for every load" },
    ],
    sections: [
      {
        heading: "What GDP certification means for your medicines",
        paragraphs: [
          "Good Distribution Practice is the EU standard for storing and moving medicinal products for human use. Our certificate, issued by URS, covers road freight transport and confirms that our management system meets both the EU GDP Guidelines (2013/C 343/01) and the WHO GDP Guidelines.",
          "In practice, that means documented procedures for every step of the journey, trained staff, qualified equipment and a full record you can show your own auditors.",
        ],
      },
      {
        heading: "What we carry",
        paragraphs: [],
        list: [
          "Cold-chain medicines at +2 °C to +8 °C",
          "Medicines at controlled room temperature, +15 °C to +25 °C",
          "Medical devices and pharmacy supplies",
          "Active ingredients and raw materials for pharmaceutical manufacturing",
        ],
      },
    ],
  },
  {
    slug: "dangerous-goods",
    name: "Dangerous goods (ADR)",
    tagline: "Hazardous goods under ADR",
    short: "Hazardous materials moved under ADR rules, with trained drivers and correct paperwork.",
    lead: "Dangerous goods need the right vehicle equipment, the right documents and a driver trained to handle them. We take care of all three.",
    image: {
      photo: "fleet-close",
      alt: "Orange Scania trucks in a row, with orange hazard plates on the front",
    },
    specs: [
      { label: "Regulation", value: "ADR (European agreement on dangerous goods by road)" },
      { label: "Drivers", value: "ADR-trained" },
      { label: "Temperature", value: "Combined with temperature control on request" },
      { label: "Dispatch", value: "24 hours a day, 7 days a week" },
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Send us the UN number, the class and the packing group when you contact us. We check that the load can travel on the route and in the vehicle we plan, and confirm it before we give you a price.",
          "The driver carries the ADR documents and equipment the load requires, and the truck is marked with the correct orange plates.",
        ],
      },
      {
        heading: "Temperature-sensitive dangerous goods",
        paragraphs: [
          "Some chemicals must be kept within a temperature range as well as carried under ADR. We can do both in the same trailer.",
        ],
      },
    ],
  },
  {
    slug: "customs",
    name: "Customs clearance",
    tagline: "Export and import paperwork",
    short: "Export and import customs paperwork handled for you, so loads don't wait at the border.",
    lead: "When a load leaves or enters the EU, we prepare and handle the customs formalities so it keeps moving.",
    image: {
      photo: "fleet-front-low",
      alt: "Five orange Scania trucks parked side by side",
    },
    specs: [
      { label: "Covers", value: "Export and import" },
      { label: "Combined with", value: "Any of our transport services" },
    ],
    sections: [
      {
        heading: "Export and import",
        paragraphs: [
          "We handle export and import customs clearance in full. Tell us what you are shipping and where to, and we tell you which documents we need from you.",
          "Because the same team plans the transport and the customs paperwork, the truck and the documents are ready at the same time.",
        ],
      },
    ],
  },
];
