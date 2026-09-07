export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  companyOrEvent: string;
  content: string;
  rating: number;
  serviceCategory: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Babatunde & Folashade Adeleke",
    role: "Bride & Groom",
    location: "Lekki, Lagos",
    companyOrEvent: "Luxury Royal Wedding (800 Guests)",
    content:
      "Uncle Skillful Limited delivered beyond our wildest imaginations. From the jaw-dropping floral ceiling installation to managing our 800 guests without a single hiccup, the coordination was masterclass. Our VIP guests could not stop praising the smooth chauffeur shuttles!",
    rating: 5,
    serviceCategory: "Event Planning & Car Rental",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-2",
    name: "Chief Emeka Nwachukwu",
    role: "Managing Director",
    location: "Victoria Island, Lagos",
    companyOrEvent: "Zenith Energy Annual Summit & Gala",
    content:
      "Booking top-billed musicians and securing high-profile keynote speakers used to be a massive headache for our annual summit. Uncle Skillful handled the contracts, VIP security, and artist hospitality seamlessly. Their sound engineering team was world-class.",
    rating: 5,
    serviceCategory: "Celebrity Booking & Music Production",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-3",
    name: "Amina Bello-Garba",
    role: "Diaspora Investor",
    location: "London / Abuja",
    companyOrEvent: "Commercial Event Center Land Acquisition",
    content:
      "Investing in Nigerian real estate from the UK can be fraught with uncertainty. Uncle Skillful Limited conducted flawless title verification for our 4-plot property in Abuja. Their integrity, transparency, and speed are unmatched in the industry.",
    rating: 5,
    serviceCategory: "Property & Land Purchase",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-4",
    name: "Oluwaseun Adeyemi",
    role: "Executive Producer",
    location: "Ikeja GRA, Lagos",
    companyOrEvent: "Afro-Fusion Album & Live Concert Showcase",
    content:
      "Their music studio setup and live sound equipment are pristine. We recorded our theme album at Uncle Skillful studios and deployed their sound rigs for our 3,000-person live concert. Clean low-end, zero screeching, pure sonic bliss.",
    rating: 5,
    serviceCategory: "Music Production",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];
