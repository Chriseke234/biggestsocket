export interface GalleryItem {
  id: string;
  title: string;
  category: "Weddings" | "Corporate" | "Concerts" | "Real Estate" | "Logistics";
  location: string;
  image: string;
  aspectRatio: "tall" | "wide" | "square";
  description: string;
}

export const galleryCategories = [
  "All",
  "Weddings",
  "Corporate",
  "Concerts",
  "Real Estate",
  "Logistics",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Eko Atlantic Royal Wedding Gala",
    category: "Weddings",
    location: "Victoria Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    description: "Grand ballroom transformation with custom floral chandeliers and 800-seat luxury styling.",
  },
  {
    id: "gal-2",
    title: "Afrobeats Live Mega Stage & Sound",
    category: "Concerts",
    location: "Eko Convention Centre, Lagos",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    description: "Celebrity stage construction, acoustic line arrays, and dynamic pyrotechnic lighting.",
  },
  {
    id: "gal-3",
    title: "Pan-African Fintech Leadership Summit",
    category: "Corporate",
    location: "Transcorp Hilton, Abuja",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    description: "High-level bilateral conference setup with live interpretation booths and VIP protocol.",
  },
  {
    id: "gal-4",
    title: "Banana Island Waterfront Mansion Advisory",
    category: "Real Estate",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    description: "Multi-million dollar private estate acquisition and title verification for diaspora client.",
  },
  {
    id: "gal-5",
    title: "Presidential Motorcade & VIP Escort",
    category: "Logistics",
    location: "Lekki Expressway, Lagos",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    description: "Armored G-Wagon and Mercedes-Maybach fleet coordination for international dignitaries.",
  },
  {
    id: "gal-6",
    title: "Enchanted Outdoor Garden Vows",
    category: "Weddings",
    location: "Abuja Botanical Gardens",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    description: "Open-air fairy-tale canopy with gold arches, bespoke crystal seating, and candlelit walkways.",
  },
  {
    id: "gal-7",
    title: "High-Energy Comedy & Music Night",
    category: "Concerts",
    location: "Muson Centre, Onikan, Lagos",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
    description: "Full talent curation featuring 4 A-list comedians and live headline Afrobeats acts.",
  },
  {
    id: "gal-8",
    title: "Prime Commercial Land Survey & Allocation",
    category: "Real Estate",
    location: "Ibeju-Lekki Free Trade Zone",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
    description: "10-hectare commercial zoning verification, beaconing, and Governor's Consent perfection.",
  },
  {
    id: "gal-9",
    title: "Luxury Mercedes Sprinter Guest Shuttle Fleet",
    category: "Logistics",
    location: "Murtala Muhammed International Airport (MMIA)",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    description: "Coordinated airport arrival shuttles with uniformed baggage handlers and onboard refreshments.",
  },
];
