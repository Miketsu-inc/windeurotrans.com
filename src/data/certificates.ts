/* Details copied from the certificate documents in /public. */
export const certificates = [
  {
    id: "gdp",
    name: "GDP",
    title: "Good Distribution Practice (GDP)",
    summary:
      "GDP is the EU standard for storing and moving medicinal products for human use. It confirms that medicines in our trucks are handled under documented procedures, at the right temperature, by trained staff, with records your auditors can check.",
    thumb: "img/cert-gdp-en-480.webp",
    image: "img/cert-gdp-en-900.webp",
    files: [
      { label: "English", href: "gdp_en.jpg" },
      { label: "Hungarian", href: "gdp_hu.jpg" },
    ],
    validUntil: "12 October 2028",
    details: [
      { label: "Standard", value: "EU GDP Guidelines 2013/C 343/01 and WHO GDP Guidelines QAS/04.068 Rev. 02" },
      { label: "Scope", value: "Road freight transport" },
      { label: "Certification body", value: "URS (United Registrar of Systems)" },
      { label: "Certificate number", value: "215011/A/0001/NA/En" },
      { label: "Issued", value: "13 October 2025" },
      { label: "Valid until", value: "12 October 2028" },
    ],
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    title: "ISO 9001:2015 quality management",
    summary:
      "ISO 9001 is the international standard for quality management. It confirms that how we quote, plan, dispatch and deliver follows defined processes, that we measure the results and that we fix what goes wrong so it doesn't happen again.",
    thumb: "img/cert-iso9001-en-480.webp",
    image: "img/cert-iso9001-en-900.webp",
    files: [
      { label: "English", href: "iso9001_en.jpg" },
      { label: "Hungarian", href: "iso9001_hu.jpg" },
    ],
    validUntil: "21 December 2026",
    details: [
      { label: "Standard", value: "ISO 9001:2015" },
      { label: "Scope", value: "Domestic and international transport and forwarding" },
      { label: "Certification body", value: "DNV Business Assurance" },
      { label: "Certificate number", value: "250377-2017-AQ-BUD-RvA" },
      { label: "First certified", value: "21 December 2017" },
      { label: "Valid until", value: "21 December 2026" },
    ],
  },
];
