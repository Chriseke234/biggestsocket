import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: `${companyData.name} | Event Planning, Celebrity Booking, Luxury Logistics & Music in Nigeria`,
  description:
    "Nigeria's premier multi-faceted event management, luxury logistics, celebrity booking, prime land acquisition, and state-of-the-art music production powerhouse in Lagos, Abuja & nationwide.",
  keywords: [
    "Uncle Skillful Limited",
    "Event Management Lagos",
    "Nigerian Wedding Planner",
    "Celebrity Booking Nigeria",
    "Luxury Car Rental Lagos",
    "VIP Convoy Escort Nigeria",
    "Land Purchase Lagos Abuja",
    "Music Studio Production Nigeria",
    "Corporate Event Planner",
  ],
  authors: [{ name: "Uncle Skillful Limited" }],
  openGraph: {
    title: "Uncle Skillful Limited — Unforgettable Events, Expertly Delivered",
    description:
      "Full-service event planning, A-list celebrity bookings, verified land acquisitions, executive car rental logistics, and high-fidelity sound production across Nigeria.",
    url: "https://uncleskillful.com",
    siteName: "Uncle Skillful Limited",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Uncle Skillful Limited Luxury Events",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-brand-cream text-brand-charcoal antialiased selection:bg-brand-gold selection:text-brand-blue-deep">
        {/* Top Gold Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow pt-20">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
