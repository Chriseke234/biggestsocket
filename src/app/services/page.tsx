import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowDown, ShieldCheck } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceDetailSection } from "@/components/services/ServiceDetailSection";
import { CtaBand } from "@/components/home/CtaBand";
import { SparkleMotif } from "@/components/ui/SparkleMotif";

export const metadata: Metadata = {
  title: "Services | Uncle Skillful Limited — Event Management, Celebrity Booking & Logistics",
  description:
    "Explore our 5 distinct service pillars: Luxury Event Planning, Celebrity & Artist Booking, Verified Property & Land Purchases, Executive Car Rental Logistics, and Music Studio Production in Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero Banner */}
      <section className="relative bg-brand-blue-deep py-20 lg:py-28 text-white overflow-hidden">
        <SparkleMotif />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our 5 Distinct Pillars of Excellence</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Tailored Luxury & <span className="gold-gradient-text">Flawless Execution</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-brand-cream/90 leading-relaxed">
            Every celebration, high-level negotiation, and production requirement is handled by dedicated domain specialists. Explore our five core offerings below.
          </p>

          {/* Quick Anchor Jump Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {servicesData.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-navy/80 px-4 py-2 text-xs font-semibold text-brand-cream hover:bg-brand-gold hover:text-brand-blue-deep transition-all duration-200 border border-brand-gold/20"
              >
                <span>{svc.title}</span>
                <ArrowDown className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Alternating Service Detail Sections */}
      <div className="divide-y divide-brand-gold/20">
        {servicesData.map((service, index) => (
          <ServiceDetailSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA Band */}
      <CtaBand />
    </>
  );
}
