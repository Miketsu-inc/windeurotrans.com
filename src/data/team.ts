import { site } from "./site";

/** The office team on the about page. `role` is a key in about.people.roles, or "founder". */
export const team = [
  { name: site.founder, role: "founder", email: site.email, phone: site.phone },
  // Placeholders until we have the real names, roles and contact details
  { name: "Kovács Anna", role: "dispatch", email: "anna.kovacs@windeurotrans.com", phone: "+36 20 000 0001" },
  { name: "Nagy Péter", role: "forwarding", email: "peter.nagy@windeurotrans.com", phone: "+36 20 000 0002" },
  { name: "Tóth Eszter", role: "office", email: "eszter.toth@windeurotrans.com", phone: "+36 20 000 0003" },
] as const;
