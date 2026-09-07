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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#18202A] px-4 py-1.5 text-xs font-bold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Comprehensive Luxury Solutions</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
            Create Unforgettable Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E2E8F0] leading-relaxed">
            From the opening chord to the grand finale, we engineer bespoke events, secure prime real estate, mobilize executive transport, and curate elite African entertainment.
          </p>
        </div>

        {/* 5 Distinct Service Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[#121820] text-white border border-[#1E293B] hover:border-brand-gold/40 shadow-card ${
                  index === 3 || index === 4 ? "lg:col-span-1.5" : ""
                }`}
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
                  <div className="absolute inset-0 bg-black/50" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#0B0F14]/90 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30 backdrop-blur-md">
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
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold text-[#0B0F14] shadow-md">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-[#E2E8F0]">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Mini List */}
                  <div className="mt-5 space-y-1.5">
                    {service.includedList.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#CBD5E1]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-5 border-t border-[#1E293B] flex items-center justify-between gap-3">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    onClick={() => setActiveServiceModal(service.title)}
                    className="rounded-full bg-brand-gold px-4 py-2 text-xs font-bold text-[#0B0F14] shadow-gold hover:scale-105 active:scale-95 transition-all duration-200"
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
