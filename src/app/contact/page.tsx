import React from "react";
import type { Metadata } from "next";
import { Sparkles, Phone, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { DirectContactCard } from "@/components/contact/DirectContactCard";
import { SparkleMotif } from "@/components/ui/SparkleMotif";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Booking | Uncle Skillful Limited — Reach Our Event Planners & Talent Desk",
  description:
    "Get in touch with Uncle Skillful Limited. Book luxury event planning, celebrity appearances, real estate advisory, VIP car rentals, and music studio sessions in Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Banner */}
      <section className="relative bg-brand-blue-deep py-20 lg:py-28 text-white overflow-hidden">
        <SparkleMotif />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect With Our Executive Team</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Your <span className="gold-gradient-text">Next Milestone</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-brand-cream/90 leading-relaxed">
            Whether booking an A-list artist, coordinating luxury wedding transport, or acquiring prime property, our specialists respond within hours.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-20 sm:py-28 bg-brand-cream relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: Interactive Booking Form (7 cols on desktop) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Direct Contact Cards & Map (5 cols on desktop) */}
            <div className="lg:col-span-5">
              <DirectContactCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
