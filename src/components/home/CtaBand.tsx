"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";
import { BookingModal } from "@/components/ui/BookingModal";

export function CtaBand() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    "Hi Uncle Skillful Limited, I'm ready to plan my upcoming event."
  )}`;
  const mailtoUrl = `mailto:${companyData.email}?subject=Planning%20Inquiry%20-%20Uncle%20Skillful%20Limited`;

  return (
    <section className="relative overflow-hidden py-20 lg:py-24 gold-gradient-bg text-brand-blue-deep">
      {/* Subtle Pattern Elements */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-blue-deep/10 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          {/* Left Title & Description */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-deep/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue-deep">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Create Something Extraordinary</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-blue-deep">
              Ready to Plan Your Next Landmark Event?
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium text-brand-blue-deep/80 leading-relaxed">
              Whether you need full-scale event coordination, celebrity headliners, luxury fleets, prime real estate, or world-class audio engineering — our team is on standby.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-[#20bd5a] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={mailtoUrl}
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-brand-blue-deep px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-brand-blue hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Mail className="h-5 w-5 text-brand-gold" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}
