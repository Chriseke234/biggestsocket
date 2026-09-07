export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone1: string;
  phone1Formatted: string;
  phone2: string;
  phone2Formatted: string;
  whatsappNumber: string;
  address: string;
  location: string;
  workingHours: string;
  socials: {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Uncle Skillful Limited",
  tagline: "Unforgettable Events, Expertly Delivered",
  description:
    "Nigeria's premier multi-faceted event management, entertainment logistics, and luxury lifestyle company. From majestic weddings and A-list celebrity bookings to prime land acquisitions, VIP car rentals, and high-fidelity sound production — we transform visionary ideas into seamless realities.",
  email: "uncleskillfulllimited@gmail.com",
  phone1: "08104254663",
  phone1Formatted: "0810 425 4663",
  phone2: "07043605581",
  phone2Formatted: "0704 360 5581",
  whatsappNumber: "2348104254663",
  address: "Victoria Island / Lekki Phase 1, Lagos, Nigeria",
  location: "Lagos, Abuja, Port Harcourt & Nationwide Delivery",
  workingHours: "Monday – Saturday: 8:00 AM – 7:00 PM (24/7 Event Support)",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const trustStats = [
  {
    value: 500,
    suffix: "+",
    label: "Events Delivered",
    description: "Weddings, concerts, corporate summits, and private galas.",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently rated 5 stars by top-tier executives & couples.",
  },
  {
    value: 36,
    suffix: "/36",
    label: "Nationwide Coverage",
    description: "Operational across all Nigerian states and FCT Abuja.",
  },
  {
    value: 120,
    suffix: "+",
    label: "Celebrity & Artist Roster",
    description: "Direct booking channels with top African & international acts.",
  },
];
