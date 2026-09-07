"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Mic,
  Building2,
  Car,
  Music,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { BookingModal } from "@/components/ui/BookingModal";

const iconMap = {
  CalendarDays: CalendarDays,
  Mic: Mic,
  Building2: Building2,
  Car: Car,
  Music: Music,
};

export function ServicesGrid() {
  const [activeServiceModal, setActiveServiceModal] = useState<string | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-brand-cream overflow-hidden">
      {/* Decorative background subtle watermark */}
      <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-brand-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-brand-blue/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-1.5 text-xs font-bold text-brand-gold-dark border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Comprehensive Luxury Solutions</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand-blue-deep sm:text-5xl tracking-tight">
            Create Unforgettable Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal-muted leading-relaxed">
            From the opening chord to the grand finale, we engineer bespoke events, secure prime real estate, mobilize executive transport, and curate elite African entertainment.
          </p>
        </div>

        {/* 5 Distinct Service Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            
            // Color themed background & accents
            const isBlue = service.themeColor === "blue" || service.themeColor === "navy";
            const isGold = service.themeColor === "gold";
            const isCharcoal = service.themeColor === "charcoal";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isBlue
                    ? "bg-brand-blue-deep text-white border border-brand-gold/30 shadow-xl"
                    : isGold
                    ? "bg-gradient-to-br from-brand-gold-pale via-white to-brand-cream border border-brand-gold/40 shadow-soft text-brand-charcoal"
                    : "bg-white text-brand-charcoal border border-brand-blue/10 shadow-soft"
                } ${index === 3 || index === 4 ? "lg:col-span-1.5" : ""}`}
              >
                {/* Image Header Preview */}
                <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue-deep/90 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Number */}
                  <div className="absolute top-3 right-3">
                    <span className="font-heading text-lg font-bold text-white/90">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-md ${
                        isBlue
                          ? "bg-brand-gold text-brand-blue-deep"
                          : "bg-brand-blue text-brand-gold"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3
                      className={`font-heading text-xl sm:text-2xl font-bold ${
                        isBlue ? "text-white" : "text-brand-blue-deep"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isBlue ? "text-brand-cream/80" : "text-brand-charcoal-muted"
                    }`}
                  >
                    {service.shortDescription}
                  </p>

                  {/* Highlights Mini List */}
                  <div className="mt-5 space-y-1.5">
                    {service.includedList.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 text-xs ${
                          isBlue ? "text-brand-cream/90" : "text-brand-charcoal"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-5 border-t border-brand-gold/20 flex items-center justify-between gap-3">
                  <Link
                    href={`/services#${service.id}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                      isBlue
                        ? "text-brand-gold hover:text-white"
                        : "text-brand-blue hover:text-brand-gold-dark"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    onClick={() => setActiveServiceModal(service.title)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                      isBlue
                        ? "gold-gradient-bg text-brand-blue-deep shadow-gold"
                        : "bg-brand-blue text-white hover:bg-brand-blue-navy shadow-md"
                    }`}
                  >
                    Book Service
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Booking Modal for Chosen Service */}
      <BookingModal
        isOpen={activeServiceModal !== null}
        onClose={() => setActiveServiceModal(null)}
        defaultService={activeServiceModal || undefined}
      />
    </section>
  );
}
