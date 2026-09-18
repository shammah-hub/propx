// Real, freely-licensed photos (Unsplash License — free to use, no attribution required,
// but crediting the photographer is good practice). Swap these for your own property
// photography whenever you have it — same variable names, nothing else needs to change.
//
// Photographers: Avi Werde, Sanju Pandita, Brian Zajac, Vitaly Gariev,
// Abhishek Rai, Nupo Deyon Daniel — via unsplash.com

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroVilla: u("photo-1613490493576-7fde63acd811", 1920),
  houseA: u("photo-1613490493576-7fde63acd811"), // white/brown contemporary
  houseB: u("photo-1721222204126-e7042f2893b1"), // modern house + pool
  houseC: u("photo-1757361653037-dbf0d0a820ae"), // palm-lined luxury exterior
  founder: u("photo-1758518727888-ffa196002e59", 900),
  teamMale: u("photo-1649433658557-54cf58577c68", 900),
  teamFemale: u("photo-1698171975916-23327518cc4a", 900),
};

export type Listing = {
  slug: string;
  price: string;
  location: string;
  specs: string;
  type: "sale" | "rent" | "short";
  tag: string;
  image: string;
  gallery: string[];
  description: string;
};

export const LISTINGS: Listing[] = [
  {
    slug: "old-gra-duplex",
    price: "\u20a6185,000,000",
    location: "Old GRA, Port Harcourt \u2014 5 bedroom detached duplex",
    specs: "5 bed \u00b7 6 bath \u00b7 620 sqm",
    type: "sale",
    tag: "For sale",
    image: IMAGES.houseA,
    gallery: [IMAGES.houseA, IMAGES.houseB, IMAGES.houseC],
    description:
      "A considered five-bedroom duplex on one of Old GRA's quieter closes. Finished to a high standard throughout, with a self-contained boys' quarters, fitted kitchen, and a gated compound with space for four cars.",
  },
  {
    slug: "peter-odili-terrace",
    price: "\u20a695,000,000",
    location: "Peter Odili Road \u2014 4 bedroom terrace",
    specs: "4 bed \u00b7 4 bath \u00b7 310 sqm",
    type: "sale",
    tag: "For sale",
    image: IMAGES.houseB,
    gallery: [IMAGES.houseB, IMAGES.houseC, IMAGES.houseA],
    description:
      "Part of a small, well-kept terrace development close to the main road. Open-plan living and dining, en-suite bedrooms, and 24-hour estate security.",
  },
  {
    slug: "woji-bungalow",
    price: "\u20a64,500,000 / year",
    location: "Woji \u2014 3 bedroom bungalow",
    specs: "3 bed \u00b7 240 sqm",
    type: "rent",
    tag: "For rent",
    image: IMAGES.houseC,
    gallery: [IMAGES.houseC, IMAGES.houseA, IMAGES.houseB],
    description:
      "A bright, single-storey family home on a fenced plot in Woji. Recently repainted, with a working borehole and a small garden at the rear.",
  },
  {
    slug: "rumuola-flat",
    price: "\u20a62,800,000 / year",
    location: "Rumuola \u2014 2 bedroom flat",
    specs: "2 bed \u00b7 120 sqm",
    type: "rent",
    tag: "For rent",
    image: IMAGES.houseA,
    gallery: [IMAGES.houseA, IMAGES.houseB],
    description:
      "A compact, well-lit flat on the third floor of a serviced block. Ideal for a young professional or couple; close to Rumuola junction.",
  },
  {
    slug: "gra-phase-2-shortlet",
    price: "\u20a675,000 / night",
    location: "GRA Phase 2 \u2014 Serviced 1 bedroom",
    specs: "1 bed \u00b7 Furnished",
    type: "short",
    tag: "Short-let",
    image: IMAGES.houseB,
    gallery: [IMAGES.houseB, IMAGES.houseC],
    description:
      "Fully furnished serviced apartment with daily housekeeping, backup power, and Wi-Fi included. Walking distance to restaurants on Aba Road.",
  },
  {
    slug: "eliozu-plot",
    price: "\u20a658,000,000",
    location: "Eliozu \u2014 Commercial plot",
    specs: "Land \u00b7 500 sqm",
    type: "sale",
    tag: "For sale",
    image: IMAGES.houseC,
    gallery: [IMAGES.houseC],
    description:
      "A titled 500 sqm plot on a fast-growing commercial corridor in Eliozu. Governor's Consent in place; suitable for retail or mixed-use development.",
  },
];