import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkles,
  Award,
  Target,
  Eye,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { companyData } from "@/data/company";
import { TeamGrid } from "@/components/about/TeamGrid";
import { MilestoneTimeline } from "@/components/about/MilestoneTimeline";
import { CtaBand } from "@/components/home/CtaBand";
import { SparkleMotif } from "@/components/ui/SparkleMotif";

export const metadata: Metadata = {
  title: "About Us | Uncle Skillful Limited — Nigeria's Premier Event & Lifestyle Brand",
  description:
    "Learn about Uncle Skillful Limited, our vision, executive leadership, 14-year legacy, and multi-disciplinary services spanning luxury event management, celebrity bookings, real estate, and music production.",
};

const coreValues = [
  {
    icon: Award,
    title: "Sovereign Excellence",
    description:
      "We believe good is the enemy of great. Every floral arrangement, sound decibel, and security protocol is calibrated to international standards.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    description:
      "From bulletproof title deeds with Governor's Consent to transparent artist contracts with zero hidden fees — our word is our bond.",
  },
  {
    icon: HeartHandshake,
    title: "White-Glove Hospitality",
    description:
      "We treat every client, VIP dignitary, and guest like royalty, anticipating needs before they arise.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Innovation",
    description:
      "Pioneering interactive event technologies, modern stage architecture, and luxury mobile logistics across West Africa.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-brand-blue-deep py-20 lg:py-28 text-white overflow-hidden">
        <SparkleMotif />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Powerhouse Behind The Magic</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Crafting Legends, <span className="gold-gradient-text">Delivering Trust</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-brand-cream/90 leading-relaxed">
            Uncle Skillful Limited represents the pinnacle of Nigerian event engineering, entertainment management, and verified asset brokerage.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Images */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-96 sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
                  alt="Uncle Skillful Event Celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block h-52 w-52 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80"
                  alt="Concert Stage Sound"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
                Our Heritage & Philosophy
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-blue-deep leading-tight">
                Where Executive Precision Meets Pure Celebration
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-brand-charcoal-muted">
                Founded with a singular vision to redefine Nigeria&apos;s event and entertainment landscape, <strong>Uncle Skillful Limited</strong> has grown into an integrated multi-service powerhouse. We recognized early on that a truly memorable event isn&apos;t just about pretty décor — it requires flawless security logistics, dependable executive mobility, electrifying sound engineering, verified venue/land assets, and seamless star bookings.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-brand-charcoal-muted">
                Today, with over 500 marquee events executed across Lagos, Abuja, Port Harcourt, and beyond, our multi-disciplinary team serves corporate giants, high-net-worth families, and diaspora clients with unmatched passion and precision.
              </p>

              {/* Quick Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Registered & Bonded Enterprise",
                  "100% In-House Sound Rigs",
                  "Direct A-List Talent Roster",
                  "Dedicated Senior Lead Planners",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-blue-deep">
                    <CheckCircle className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-brand-cream border-y border-brand-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-brand-blue-deep p-8 sm:p-10 text-white shadow-xl border border-brand-gold/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold text-brand-blue-deep mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed">
                To deliver extraordinary event experiences, seamless talent engagements, verified property acquisitions, and elite logistical solutions across Nigeria with unmatched reliability, luxury flair, and integrity.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 sm:p-10 text-brand-charcoal shadow-xl border border-brand-gold/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-brand-gold mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-blue-deep mb-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
                To be West Africa&apos;s undisputed benchmark for multi-sector event excellence, celebrity curation, and luxury lifestyle infrastructure — celebrated worldwide for transformational quality and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
              Guiding Principles
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-brand-blue-deep">
              The Values That Drive Every Milestone
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl bg-brand-cream/50 p-6 border border-brand-gold/20 shadow-soft hover:shadow-card hover:bg-white transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-brand-gold mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-brand-blue-deep">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Flip-Card Grid */}
      <TeamGrid />

      {/* Milestone Timeline with Scroll Progress */}
      <MilestoneTimeline />

      {/* CTA Band */}
      <CtaBand />
    </>
  );
}
