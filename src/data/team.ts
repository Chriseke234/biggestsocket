export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  highlight: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Olawale 'Uncle Skillful' Balogun",
    role: "Founder & Chief Executive Officer",
    department: "Executive Leadership",
    bio: "With over 14 years steering high-profile events and enterprise deals across West Africa, Olawale founded Uncle Skillful Limited to merge celebratory grandeur with impeccable operational discipline.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    highlight: "14+ Years in Event & Entertainment Industry",
  },
  {
    id: "team-2",
    name: "Dr. Chioma Nkem-Eze",
    role: "Head of Creative Décor & Event Architecture",
    department: "Event Planning",
    bio: "An architect by training, Chioma transforms raw venues into breathtaking wonderland spaces. Her signature floral installations and lighting schemes have graced Nigeria's most celebrated weddings.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    highlight: "Award-Winning Luxury Space Stylist",
  },
  {
    id: "team-3",
    name: "Kayode 'Kay-Max' Adeleke",
    role: "Director of Talent & Entertainment Booking",
    department: "Celebrity Management",
    bio: "Kayode maintains deep, direct relationships across Nigeria's music, comedy, and media ecosystem. He guarantees smooth artist contracting, rider compliance, and show-stopping live performances.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    highlight: "120+ Star Artist Placements Handled",
  },
  {
    id: "team-4",
    name: "Barrister Tunde Williams",
    role: "Head of Real Estate & Legal Due Diligence",
    department: "Property Advisory",
    bio: "Specializing in property law and land registry transactions, Tunde ensures that every land purchase, title transfer, and property acquisition is 100% fraud-free with bulletproof legal documentation.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    highlight: "Real Estate & Title Verification Veteran",
  },
  {
    id: "team-5",
    name: "Capt. Ibrahim Sani",
    role: "Fleet Logistics & VIP Security Director",
    department: "Transportation Logistics",
    bio: "Retired logistics specialist coordinating convoy movements, armored executive escorts, and airport reception teams with military precision and unrivaled punctuality.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    highlight: "Zero-Incident Executive Transport Record",
  },
  {
    id: "team-6",
    name: "Femi 'Acoustix' Ogundimu",
    role: "Chief Sound Engineer & Studio Producer",
    department: "Music Production",
    bio: "Certified sound engineer who has mastered arena acoustics and studio hits for prominent African musicians. Femi ensures every beat and keynote is pristine and distortion-free.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    highlight: "Master Audio Specialist & Live Mixer",
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestonesData: Milestone[] = [
  {
    year: "2012",
    title: "The Genesis",
    description: "Uncle Skillful began as a boutique event styling and sound rental company in Lagos.",
  },
  {
    year: "2016",
    title: "Talent & Celebrity Network Launch",
    description: "Expanded into direct booking for top African musicians, comedians, and MCs with transparent escrow terms.",
  },
  {
    year: "2019",
    title: "Fleet & Luxury Logistics Division",
    description: "Acquired a bespoke fleet of executive SUVs and VIP shuttle buses to provide seamless end-to-end transport.",
  },
  {
    year: "2021",
    title: "Real Estate & Property Brokerage",
    description: "Inaugurated the land purchase and verified property division to serve diaspora clients and event venue investors.",
  },
  {
    year: "2024 - Present",
    title: "Full-Spectrum Entertainment Powerhouse",
    description: "Completed state-of-the-art music studios and delivered over 500 marquee events across Nigeria.",
  },
];
