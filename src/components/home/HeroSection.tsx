"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { SparkleMotif } from "@/components/ui/SparkleMotif";

interface HeroSlide {
  id: string;
  tagline: string;
  headlineMain: string;
  headlineHighlight: string;
  subtext: string;
  image: string;
  serviceName: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    tagline: "Bespoke Celebrations & Galas",
    headlineMain: "Unforgettable Events, ",
    headlineHighlight: "Expertly Delivered",
    subtext:
      "Full-service luxury event planning, venue transformation, and seamless vendor coordination for grand Nigerian weddings and corporate galas.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=85",
    serviceName: "Event Planning",
  },
  {
    id: "slide-2",
    tagline: "Direct Talent & Entertainment",
    headlineMain: "A-List Artists & ",
    headlineHighlight: "Iconic Concerts",
    subtext:
      "Direct artist bookings, contract escrow, and VIP hospitality for premier Afrobeats musicians, top-tier MCs, and celebrated comedians.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=85",
    serviceName: "Celebrity Booking",
  },
  {
    id: "slide-3",
    tagline: "Verified Real Estate Advisory",
    headlineMain: "Prime Land & ",
    headlineHighlight: "Property Acquisitions",
    subtext:
      "Meticulous title verification, Governor's Consent validation, and high-yield real estate investments in prime corridors of Lagos and Abuja.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85",
    serviceName: "Property & Land Purchase",
  },
  {
    id: "slide-4",
    tagline: "VIP Transportation Logistics",
    headlineMain: "Executive Fleets & ",
    headlineHighlight: "Luxury Convoys",
    subtext:
      "Luxury bridal cars, armored SUV escorts, and high-capacity guest shuttles with certified professional chauffeurs for flawless mobility.",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1920&q=85",
    serviceName: "Car Rental / Logistics",
  },
  {
    id: "slide-5",
    tagline: "High-Fidelity Audio Engineering",
    headlineMain: "World-Class Studio & ",
    headlineHighlight: "Arena Live Sound",
    subtext:
      "State-of-the-art music production, bespoke event soundtracks, and concert line-array sound reinforcement engineered by seasoned audiophiles.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=85",
    serviceName: "Music Production",
  },
];

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Auto-rotating carousel loop (5.5s interval, no buttons or numbers)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section className="relative h-[85vh] min-h-[620px] max-h-[900px] w-full overflow-hidden bg-[#0B0F14] text-white">
      {/* Decorative Subtle Sparkles */}
      <SparkleMotif />

      {/* Animated Background Carousel Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.tagline}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Solid Dark Overlay for clean readability without colored gradients */}
          <div className="absolute inset-0 bg-[#0B0F14]/75" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Carousel Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#18202A]/90 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-brand-gold border border-brand-gold/30 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span>{currentSlide.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 max-w-5xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.12]">
              {currentSlide.headlineMain}
              <span className="text-brand-gold block sm:inline">
                {currentSlide.headlineHighlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base text-[#E2E8F0] sm:text-lg lg:text-xl leading-relaxed font-normal">
              {currentSlide.subtext}
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-[#0B0F14] shadow-gold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Book a Service</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="/gallery"
                className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border-2 border-brand-gold/50 bg-[#121820]/80 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-gold hover:bg-[#121820] hover:text-brand-gold hover:scale-105 active:scale-95 shadow-md"
              >
                <span>See Our Work</span>
                <ArrowRight className="h-4 w-4 text-brand-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={currentSlide.serviceName}
      />
    </section>
  );
}
