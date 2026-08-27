// Central, editable site configuration.
// Replace placeholder values with real Intermax Limited details.

export const siteConfig = {
  companyName: "Intermax Limited",
  tagline: "Track Your Vehicle. Protect What Matters.",
  description:
    "Reliable GPS vehicle tracking systems in Kenya for individuals, businesses and fleets.",
  whatsappNumber: "254700000000", // TODO: replace with real WhatsApp number (no + or spaces)
  phoneNumber: "+254 700 000 000", // TODO: replace with real phone number
  email: "info@intermaxlimited.co.ke", // TODO: replace with real email
  physicalLocation: "Nairobi, Kenya", // TODO: replace with real address
  businessHours: "Mon – Fri: 8:00 AM – 6:00 PM, Sat: 9:00 AM – 2:00 PM",
  socialLinks: {
    facebook: "", // TODO
    instagram: "", // TODO
    twitter: "", // TODO
    linkedin: "", // TODO
  },
  stats: {
    yearsInBusiness: "X+", // TODO: replace placeholder
    customersServed: "XXX+", // TODO: replace placeholder
    vehiclesTracked: "XXX+", // TODO: replace placeholder
  },
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsappMessage =
  "Hello Intermax Limited, I am interested in getting a vehicle tracking system. Please send me more information.";
