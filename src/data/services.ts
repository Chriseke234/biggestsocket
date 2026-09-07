export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "CalendarDays" | "Mic" | "Building2" | "Car" | "Music";
  themeColor: "blue" | "gold" | "charcoal" | "navy" | "brightBlue";
  image: string;
  heroImage: string;
  includedList: string[];
  keyBenefits: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "event-planning",
    number: "01",
    title: "Event Planning",
    category: "Celebration & Corporate",
    tagline: "Bespoke Event Architecture & Flawless Coordination",
    shortDescription:
      "Full-service planning, luxury décor styling, venue transformation, and seamless vendor coordination for grand Nigerian weddings, corporate galas, and private celebrations.",
    fullDescription:
      "At Uncle Skillful Limited, we approach event planning as an art form. From magnificent traditional and white wedding ceremonies in Lagos and Abuja to high-stakes international corporate summits, our team orchestrates every single element. We manage venue scouting, stage craft, floral architecture, gourmet catering coordination, ambient lighting, guest ushering, and real-time floor management so you can immerse yourself in the celebration.",
    iconName: "CalendarDays",
    themeColor: "blue",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    includedList: [
      "End-to-End Conceptual Design & Theme Development",
      "Venue Sourcing, Space Planning & 3D Floor Layouts",
      "Full Vendor Vetting, Contracting & On-Site Supervision",
      "Luxury Floral, Drapery, Scenic Lighting & Décor Styling",
      "VIP Hospitality, Protocol Ushers & Security Coordination",
      "Comprehensive Day-of Timeline Execution & Stage Management",
    ],
    keyBenefits: [
      "Zero-stress experience with dedicated senior lead planner",
      "Exclusive vendor discounts across Nigeria's top decor and catering brands",
      "Real-time event day crisis management & contingency backups",
    ],
  },
  {
    id: "celebrity-booking",
    number: "02",
    title: "Celebrity Booking",
    category: "Talent & Entertainment",
    tagline: "Direct Access to Nigeria's Biggest Stars & Performers",
    shortDescription:
      "Direct contracting and VIP hospitality management for A-list musicians, top-tier MCs, legendary comedians, and keynote speakers.",
    fullDescription:
      "Elevate your occasion from memorable to legendary with star-powered appearances. Uncle Skillful Limited maintains direct, verified relationships with premier Afrobeats superstars, celebrated Nollywood icons, veteran Masters of Ceremonies, crowd-rousing comedians, and inspiring keynote speakers. We negotiate riders, secure air/ground logistics, coordinate security protocols, and ensure breathtaking performances without intermediary markups or contract disputes.",
    iconName: "Mic",
    themeColor: "gold",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80",
    includedList: [
      "Direct Talent Sourcing (Afrobeats Artists, DJs, MCs, Comedians)",
      "Contract Negotiations, Legal Riders & Payment Escrow",
      "Technical Rider Verification (Microphones, Monitors, Stage Specs)",
      "VIP Backstage Hospitality & Green Room Provisioning",
      "Executive Close-Protection Security & Airport Reception",
      "Soundcheck Scheduling & Stage Performance Run of Show",
    ],
    keyBenefits: [
      "Direct artist management access with guaranteed appearance clauses",
      "Discreet and ironclad contractual handling",
      "Seamless technical rider alignment with sound production",
    ],
  },
  {
    id: "property-land-purchase",
    number: "03",
    title: "Property & Land Purchase",
    category: "Real Estate & Investments",
    tagline: "Strategic Land Acquisition & High-Yield Property Advisory",
    shortDescription:
      "Expert real estate advisory, title verification, and verified land/property purchases in prime corridors across Lagos, Abuja, and high-growth commercial hubs.",
    fullDescription:
      "Beyond unforgettable celebrations, Uncle Skillful Limited empowers clients with enduring legacy assets. We provide verified property advisory and land brokerage services for residential estates, commercial event spaces, waterfront properties, and industrial land. We conduct meticulous due diligence (Governor's Consent, C of O, Gazette), title validation, survey inspections, and legal transfers to ensure completely fraud-free acquisitions.",
    iconName: "Building2",
    themeColor: "charcoal",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    includedList: [
      "Prime Land & Luxury Estate Property Scouting",
      "Comprehensive Title Search & Land Registry Verification",
      "Survey Charting, Beacon Alignment & Topographic Inspections",
      "Legal Documentation, Deed of Assignment & Governor's Consent Advisory",
      "Event Venue & Commercial Property Acquisition Brokerage",
      "High-ROI Real Estate Portfolio Consultation",
    ],
    keyBenefits: [
      "100% verified titles with zero dispute risks",
      "Direct developer & authentic family-head allocations",
      "Strategic valuation guidance for exponential appreciation",
    ],
  },
  {
    id: "car-rental-logistics",
    number: "04",
    title: "Car Rental / Transportation Logistics",
    category: "Fleet & Mobility",
    tagline: "Executive Fleet Rental & Seamless Event Transportation",
    shortDescription:
      "Luxury bridal cars, VIP armored convoys, executive SUVs, and high-capacity luxury buses with professional chauffeurs for flawless guest transport.",
    fullDescription:
      "Arrive in grand style and move your guests with royal prestige. Our executive fleet features current-model Mercedes-Benz G-Wagons, Rolls-Royce, Range Rover Autobiographies, Lexus LX600s, Prado TXLs, and luxury Mercedes Sprinter buses. Whether transporting bridal parties, escorting VIP dignitaries, or coordinating shuttle services for 1,000+ conference attendees, our vetted chauffeurs and route planners guarantee punctual, pristine mobility.",
    iconName: "Car",
    themeColor: "navy",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    includedList: [
      "Luxury Bridal & VIP Vehicles (Rolls-Royce, Mercedes, Range Rover)",
      "Executive Armored & Escort SUV Convoys with Security Details",
      "High-Capacity Air-Conditioned Coaster & Sprinter Shuttles",
      "Professional Uniformed Chauffeurs with Defensive Driving Certification",
      "Real-Time Fleet GPS Tracking & Flight-Delay Monitoring",
      "Multi-Day Event Logistics & Airport Meet-and-Greet Services",
    ],
    keyBenefits: [
      "Impeccably detailed vehicles with pristine interiors & amenities",
      "Synchronized convoy movements for high-profile weddings & summits",
      "24/7 on-call replacement guarantee",
    ],
  },
  {
    id: "music-production",
    number: "05",
    title: "Music Production",
    category: "Studio & Audio Engineering",
    tagline: "High-Fidelity Audio Engineering, Studio Production & Live Sound",
    shortDescription:
      "State-of-the-art studio recording, professional mixing & mastering, custom event jingles/soundtracks, and arena-grade live sound engineering.",
    fullDescription:
      "Sound is the heartbeat of every great memory. Uncle Skillful Limited houses world-class acoustic recording studios and fields concert-grade line array sound systems. We provide music production for recording artists, commercial jingles for corporate campaigns, bespoke walk-in soundtracks for weddings, and massive live concert sound reinforcement engineered by seasoned audiophiles.",
    iconName: "Music",
    themeColor: "brightBlue",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    includedList: [
      "State-of-the-Art Studio Tracking, Vocal Recording & Arrangement",
      "Industry-Standard Audio Mixing & Mastering (Dolby Atmos / Stereo)",
      "Bespoke Event Soundtracks, Entrance Jingles & Corporate Audio Branding",
      "Arena-Grade Concert Line Array Sound Systems & Digital Consoles",
      "Expert Acoustic Engineers, Live Band Sound & DJ Rig Solutions",
      "Multi-Track Live Event Audio Recording & Broadcast Feed Management",
    ],
    keyBenefits: [
      "Crystal-clear audio with zero distortion or feedback loops",
      "Custom original musical themes tailored to your brand or romance story",
      "Top-tier touring gear (Shure, Sennheiser, Yamaha, L-Acoustics specs)",
    ],
  },
];
