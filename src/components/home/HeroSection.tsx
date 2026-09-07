"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Star,
  Play,
  CheckCircle,
} from "lucide-react";
import { SparkleMotif } from "@/components/ui/SparkleMotif";
import { BookingModal } from "@/components/ui/BookingModal";
import { companyData } from "@/data/company";

export function HeroSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-deep via-brand-blue to-brand-cream-light pt-12 pb-24 lg:pt-20 lg:pb-32 text-white">
      {/* Decorative Floating Sparkle Motifs */}
      <SparkleMotif />

      {/* Subtle background ambient mesh glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-gold/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-80 w-80 rounded-full bg-brand-blue-bright/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-blue-navy/80 px-4 py-1.5 text-xs font-semibold text-brand-gold shadow-lg backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Nigeria&apos;s Elite Event & Luxury Lifestyle Management</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-5xl font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.15]"
          >
            Unforgettable Events,{" "}
            <span className="gold-gradient-text block sm:inline">
              Expertly Delivered
            </span>
          </motion.h1>

          {/* Supporting Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base text-brand-cream/90 sm:text-lg lg:text-xl leading-relaxed font-normal"
          >
            From magnificent weddings and A-list celebrity bookings to verified real estate, VIP convoy logistics, and studio-grade sound production — we execute your vision with sovereign excellence.
          </motion.p>

          {/* Dual Primary Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setBookingModalOpen(true)}
              className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full gold-gradient-bg px-8 py-4 text-base font-bold text-brand-blue-deep shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl"
            >
              <Sparkles className="h-5 w-5 text-brand-blue-deep transition-transform group-hover:rotate-12" />
              <span>Book a Service</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/gallery"
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border-2 border-brand-gold/40 bg-brand-blue-navy/60 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-gold hover:bg-brand-blue-navy hover:text-brand-gold hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>See Our Work</span>
              <ArrowRight className="h-4 w-4 text-brand-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-brand-cream/80"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-gold" />
              <span>500+ Luxury Events Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-gold" />
              <span>Direct A-List Artist Network</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-gold" />
              <span>Nationwide 36-State Reach</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}
