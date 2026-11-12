import gdpImage from "../assets/certificates/gdp-en.webp";
import isoImage from "../assets/certificates/iso9001-en.webp";

/** Facts from the certificate documents in /public. Their text is in the dictionary under certificates.{id}. */
export const certificates = [
  {
    id: "gdp",
    image: gdpImage,
    files: { en: "gdp_en.jpg", hu: "gdp_hu.jpg" },
    body: "URS (United Registrar of Systems)",
    number: "215011/A/0001/NA/En",
    issued: { label: "issued", date: "2025-10-13" },
    validUntil: "2028-10-12",
  },
  {
    id: "iso9001",
    image: isoImage,
    files: { en: "iso9001_en.jpg", hu: "iso9001_hu.jpg" },
    body: "DNV Business Assurance",
    number: "250377-2017-AQ-BUD-RvA",
    issued: { label: "firstCertified", date: "2017-12-21" },
    validUntil: "2026-12-21",
  },
] as const;
