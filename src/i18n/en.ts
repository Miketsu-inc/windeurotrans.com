/**
 * English: the complete set of interface text, and the fallback for anything missing in another language.
 * Placeholders in braces, like {phone}, are filled in by the page.
 * Long texts (service pages, privacy policy) are Markdown files in src/content.
 */
export default {
  meta: {
    tagline: "Road freight you can count on",
    description:
      "Temperature-controlled, pharmaceutical (GDP) and ADR road freight from Hungary across Europe. Full and part loads from 1 kg to 24 tonnes, 24/7 dispatch.",
    skipLink: "Skip to content",
    newTab: "(opens in a new tab)",
  },

  nav: {
    main: "Main",
    home: "{name} home",
    services: "Services",
    showServices: "Show services",
    fleet: "Fleet",
    certificates: "Certificates",
    about: "About us",
    contact: "Contact",
    contactUs: "Contact us",
    language: "Language",
    changeLanguage: "Change language",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    about: "Road freight and forwarding from Dunakeszi, Hungary. GDP certified and ISO 9001:2015 certified.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    aboutUs: "About us",
    fleet: "Our fleet",
    certificates: "Certificates",
    privacy: "Privacy policy",
    office: "Office: {hours}",
    dispatch: "Dispatch: 24 hours a day",
    rights: "© {year} {name} All rights reserved.",
    registration: "Company registration number {number}",
  },

  common: {
    readMore: "Read more",
    getDirections: "Get directions",
    phone: "Phone",
    email: "Email",
    businessHours: "Business hours",
    hours: "Monday to Friday, 8:00–17:00",
    office: "Office",
    founderRole: "Founder and managing director",
    country: "Hungary",
  },

  home: {
    hero: {
      title: "Reliability you can count on.",
      text: "Refrigerated, pharmaceutical and dangerous goods by road, from Hungary to anywhere in Europe. At the temperature and on the day we agreed with you.",
      contact: "Get in touch",
      services: "Our services",
    },
    facts: {
      label: "Key facts",
      since: { title: "On the road since 2010", text: "Based in Dunakeszi, next to Budapest" },
      temperature: { title: "−25 °C to +30 °C", text: "Any temperature your load needs" },
      europe: { title: "Across Europe", text: "Door to door, from Hungary" },
      services: { title: "Five services, one team", text: "Transport, cold chain, medicines, ADR, customs" },
    },
    services: {
      title: "What we move",
      text: "Five services, one team. Most loads combine two or three of them, and you deal with us for all of it.",
      all: "See all services",
    },
    why: {
      title: "Why shippers choose us",
      text: "On the road since 2010, with the same aim: loads that arrive on time and in perfect condition.",
      cards: "Reasons to choose us",
      back: "Scroll back",
      forward: "Scroll forward",
      onTime: {
        title: "On time, as agreed",
        text: "We only take a load when we can deliver it on the date we promise, and then we keep that date.",
        pickup: "Pickup",
        pickupTime: "Mon 08:00",
        delivery: "Agreed delivery",
        deliveryTime: "Wed 14:00",
        days: ["Tue", "Wed"],
        delivered: "Delivered Wed 13:40",
      },
      flexible: {
        title: "Flexible on every load",
        text: "From 1 kg to 24 tonnes, full or part load, chilled, frozen or ADR. One partner for all of it.",
        slider: "Drag to set the load weight",
        fullLoad: "Full load",
        partLoad: "Part load",
        spaces: "{used} of {total} pallet spaces",
      },
      certified: {
        title: "Certified quality",
        text: "GDP and ISO 9001:2015 certified, so the way we work is checked by independent auditors.",
        gdpRing: "Good Distribution Practice • Audited by URS •",
        isoRing: "Quality management • Audited by DNV •",
      },
      loop: {
        title: "Always in the loop",
        text: "If anything changes on the road, you hear it from us first, together with the fix.",
        updates: [
          { text: "Loaded at pickup", time: "06:40" },
          { text: "Crossed into Austria", time: "11:15" },
          { text: "On schedule for 14:00", time: "12:30" },
        ],
      },
      quick: {
        title: "Quick to answer",
        text: "A price and a transit time without a long wait, and a straight answer when you call.",
        question: "12 pallets to Milano this week?",
        answer: "Yes. Pickup Thursday, delivery Monday. Price sent.",
        replied: "Replied in 4 minutes",
      },
      equipment: {
        title: "Modern equipment",
        text: "Up-to-date trucks and refrigerated trailers, with temperature monitoring and live tracking.",
        temperature: "Trailer temperature",
        live: "Live",
        reading: "+4.8 °C",
        position: "Position",
        location: "M1, near Győr",
      },
    },
    promise: {
      text: "Spoiled chilled loads, careless ADR transport, drivers who don't show up, deliveries that arrive a day late. In freight, these are everyday problems. We started Wind Eurotrans in 2010 to be the company where they don't happen.",
      quote:
        "We don't accept a job that would put the agreed delivery date at risk. The transit times we agree with you are the ones we keep.",
      more: "More about us",
      imageAlt: "Wind Eurotrans driver standing in front of his truck",
    },
    faq: {
      title: "Questions shippers ask us",
      text: "Short answers to what we get asked most. For anything else, our details are just below.",
      items: [
        {
          q: "Do you take part loads, or only full trucks?",
          a: "Both. A full truckload goes straight from pickup to delivery. A part load shares the trailer with other loads going the same way, so it costs less and takes a little longer.",
        },
        {
          q: "What is the smallest and largest load you carry?",
          a: "Anything from 1 kg up to 24 tonnes.",
        },
        {
          q: "Which countries do you deliver to?",
          a: "We drive in Hungary and across Europe. Tell us the pickup and delivery address and we confirm the route and transit time with the price.",
        },
        {
          q: "Can you carry medicines at +2 °C to +8 °C?",
          a: "Yes. We are GDP certified for road transport of medicinal products, and we carry them at +2 °C to +8 °C or +15 °C to +25 °C with a temperature record for every load.",
        },
        {
          q: "Do you handle customs?",
          a: "Yes. We handle export and import customs clearance, so the truck and the documents are ready at the same time.",
        },
        {
          q: "What happens if something goes wrong on the road?",
          a: "Our dispatch team works around the clock. If a delay or a problem comes up, we call you straight away with the facts and the fix, so you never have to chase us for news.",
        },
      ],
    },
    contact: {
      title: "Get in touch",
      text: "Call or email us with your load. You get a price and a transit time, usually within one working day.",
      talk: "Talk to us",
      visit: "Visit us",
    },
  },

  about: {
    title: "About us",
    description: "Wind Eurotrans Kft. is a road freight and forwarding company in Dunakeszi, Hungary, founded in 2010.",
    lead: "A road freight company from Dunakeszi, founded in 2010 to make transport the part of your supply chain you don't have to worry about.",
    story: {
      title: "Why we started",
      paragraphs: [
        "Chilled goods kept at the wrong temperature. Dangerous goods moved without the right paperwork. Drivers who can't be relied on. Deliveries that arrive late or incomplete. In freight, these problems are common, and they cost more than money: they cost the trust between business partners.",
        "We founded Wind Eurotrans to be a carrier that doesn't cause them. Our aim is simple: for our customers, transport should be a fixed point in their business, not a risk.",
      ],
      belief: "We believe reliable logistics comes down to expertise, responsibility and doing exactly what was agreed.",
      imageAlt: "A row of orange Wind Eurotrans Scania trucks",
    },
    principles: {
      title: "What you can expect from us",
      items: [
        {
          title: "We keep the dates we agree",
          text: "We don't accept a job that would put the agreed deadline at risk. If we say Thursday morning, the truck is there Thursday morning.",
        },
        {
          title: "We treat your goods as our own",
          text: "Your cargo is handled with care, precisely and safely, from loading to the signed delivery note.",
        },
        {
          title: "We work to audited rules",
          text: "Every load runs under our ISO 9001:2015 quality system, and medicines under our GDP certification.",
        },
      ],
    },
    timeline: {
      title: "Since 2010",
      items: [
        { year: "2010", text: "Wind Eurotrans Kft. is founded in Dunakeszi on 23 July." },
        { year: "2017", text: "First certified to ISO 9001 by DNV for domestic and international transport and forwarding." },
        { year: "2025", text: "Certified for Good Distribution Practice of medicines (GDP) by URS." },
      ],
    },
    people: {
      title: "The people behind your loads",
      founder: "Gergő founded the company in 2010 and still prices and plans loads with customers himself.",
      drivers: "Our drivers",
      driversText:
        "Experienced, trained for ADR and temperature-controlled loads, and in contact with dispatch for the whole journey. They are the reason your load arrives the way it left.",
      driverAlt: "Wind Eurotrans driver in front of his truck",
    },
  },

  services: {
    title: "Services",
    description:
      "Road freight and forwarding, temperature-controlled transport, GDP pharmaceutical transport, ADR dangerous goods and customs clearance.",
    lead: "Full and part loads from 1 kg to 24 tonnes, at any temperature from −25 °C to +30 °C, with the paperwork handled.",
    help: {
      title: "Not sure which one you need?",
      text: "Tell us what you are shipping and we'll tell you how we would move it.",
      call: "Call {phone}",
      email: "Email us",
    },
    included: {
      title: "Included with every load",
      dispatch: { title: "24/7 dispatch", text: "Someone follows your load and picks up the phone, day and night." },
      paperwork: {
        title: "Complete paperwork",
        text: "CMR, ADR and customs documents prepared and checked before departure.",
      },
      certified: {
        title: "Certified processes",
        text: "Every service runs under our ISO 9001:2015 quality management system.",
      },
    },
    detail: {
      glance: "At a glance",
      price: "Want a price for this service?",
      contact: "Contact us",
      others: "Other services",
    },
  },

  fleet: {
    title: "Our fleet",
    description: "Photos of the Wind Eurotrans fleet: Scania tractor units and refrigerated trailers.",
    lead: "These are the Scania trucks and refrigerated trailers that carry your loads. Real photos, not a catalogue.",
    photos: "Photos",
    open: "Open photo: {alt}",
    viewer: "Photo viewer",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
    alt: {
      fleetFrontLow: "Five orange Scania trucks parked side by side, seen from the front",
      truckSide: "Orange Scania tractor unit with a white Krone refrigerated trailer",
      fleetAngle: "A row of orange Scania cabs, seen from the side",
      trailerRear: "Rear corner of a white refrigerated trailer behind an orange truck",
      fleetClose: "Orange Scania trucks in a row, with orange hazard plates on the front",
      trailerOpen: "Open doors of a clean, empty refrigerated body",
      fleetAngleNear: "Close view of orange Scania cabs lined up under a cloudy sky",
      fleetFront: "Five orange Scania trucks facing the camera",
      tailLifts: "Tail lifts folded under the rear of several refrigerated trucks",
      detailV8: "Chrome V8 badge on the side of an orange cab",
      detailScania: "Scania lettering on the front of an orange cab",
    },
  },

  certificates: {
    title: "Certificates",
    description:
      "Wind Eurotrans holds GDP certification for road transport of medicines and ISO 9001:2015 certification for domestic and international transport and forwarding.",
    lead: "Independent auditors check how we work. These are the certificates in force today and what they cover.",
    imageAlt: "{title} certificate of {name}",
    openFull: "Open full size",
    download: "Download:",
    languages: { en: "English", hu: "Hungarian" },
    labels: {
      standard: "Standard",
      scope: "Scope",
      body: "Certification body",
      number: "Certificate number",
      issued: "Issued",
      firstCertified: "First certified",
      validUntil: "Valid until",
    },
    gdp: {
      title: "Good Distribution Practice (GDP)",
      summary:
        "GDP is the EU standard for storing and moving medicinal products for human use. It confirms that medicines in our trucks are handled under documented procedures, at the right temperature, by trained staff, with records your auditors can check.",
      standard: "EU GDP Guidelines 2013/C 343/01 and WHO GDP Guidelines QAS/04.068 Rev. 02",
      scope: "Road freight transport",
    },
    iso9001: {
      title: "ISO 9001:2015 quality management",
      summary:
        "ISO 9001 is the international standard for quality management. It confirms that how we quote, plan, dispatch and deliver follows defined processes, that we measure the results and that we fix what goes wrong so it doesn't happen again.",
      standard: "ISO 9001:2015",
      scope: "Domestic and international transport and forwarding",
    },
  },

  contact: {
    title: "Contact us",
    description:
      "Call {phone} or email {email} for a price and transit time from Wind Eurotrans, usually within one working day.",
    lead: "Call or email us with your load. We reply with a price and a transit time, usually within one working day.",
    need: {
      title: "What we need to price your load",
      text: "Have these ready when you call, or put them in your email, so we can price your load without going back and forth.",
      items: [
        "Pickup address",
        "Delivery address",
        "Cargo type and temperature, if it needs one",
        "Weight or number of pallets",
        "Pickup date",
      ],
      dangerous: "Shipping dangerous goods? Add the UN number, the class and the packing group.",
    },
    details: "Contact details",
    registration: "{name}, company registration number {number}",
    map: "Map showing {name}, {address}",
  },

  privacy: {
    title: "Privacy policy",
    description: "How {name} processes personal data.",
    lead: "How {name} collects, uses and protects the personal data of its partners.",
    toc: "On this page",
  },

  notFound: {
    title: "Page not found",
    eyebrow: "Error 404",
    heading: "This road doesn't go anywhere.",
    text: "The page may have moved, or the address has a typo. Start again from the home page, or call or email us.",
    home: "Go to the home page",
    contact: "Contact us",
  },
};
