/** Company details that are the same in every language. */
export const site = {
  name: "Wind Eurotrans",
  legalName: "Wind Eurotrans Kft.",
  registrationNumber: "13 09 139341",
  phone: "+36 20 515 4060",
  phoneHref: "tel:+36205154060",
  email: "gergo.szell@windeurotrans.com",
  emailHref: "mailto:gergo.szell@windeurotrans.com",
  address: {
    street: "Kolozsvár u. 29",
    postcode: "2120",
    city: "Dunakeszi",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Wind%20Eurotrans%20Kft.%2C%20Kolozsv%C3%A1r%20u.%2029%2C%202120%20Dunakeszi&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Wind%20Eurotrans%20Kft.%2C%20Kolozsv%C3%A1r%20u.%2029%2C%202120%20Dunakeszi",
  founder: "Széll Gergő",
};

export const fullAddress = `${site.address.postcode} ${site.address.city}, ${site.address.street}`;

/** The email split after the @, so it can wrap there instead of mid-word. */
export const emailParts = [site.email.slice(0, site.email.indexOf("@") + 1), site.email.slice(site.email.indexOf("@") + 1)];
