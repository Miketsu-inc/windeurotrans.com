import { getRelativeLocaleUrl } from "astro:i18n";

export const site = {
  name: "Wind Eurotrans",
  legalName: "Wind Eurotrans Kft.",
  founded: "2010",
  registrationNumber: "13 09 139341",
  phone: "+36 20 515 4060",
  phoneHref: "tel:+36205154060",
  email: "gergo.szell@windeurotrans.com",
  address: {
    street: "Kolozsvár u. 29",
    postcode: "2120",
    city: "Dunakeszi",
    country: "Hungary",
  },
  hours: "Monday to Friday, 8:00–17:00",
  mapsEmbed:
    "https://www.google.com/maps?q=Wind%20Eurotrans%20Kft.%2C%20Kolozsv%C3%A1r%20u.%2029%2C%202120%20Dunakeszi&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Wind%20Eurotrans%20Kft.%2C%20Kolozsv%C3%A1r%20u.%2029%2C%202120%20Dunakeszi",
  founder: {
    name: "Széll Gergő",
    role: "Founder and managing director",
  },
};

/** The email split after the @, so long addresses wrap there instead of mid-word. */
export const emailParts = [site.email.slice(0, site.email.indexOf("@") + 1), site.email.slice(site.email.indexOf("@") + 1)];

export const fullAddress = `${site.address.postcode} ${site.address.city}, ${site.address.street}`;

/** Path to a file in /public, with the configured base path in front. */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export function pageUrl(locale: string, path = "") {
  return getRelativeLocaleUrl(locale, path);
}

/** What we need to price a load. Listed on the contact page. */
export const enquiryChecklist = [
  "Pickup address",
  "Delivery address",
  "Cargo type and temperature, if it needs one",
  "Weight or number of pallets",
  "Pickup date",
];

/** A mailto link. Pass a topic to name the service or temperature in the subject line. */
export function mailto(topic?: string) {
  return topic ? `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${topic}`)}` : `mailto:${site.email}`;
}
