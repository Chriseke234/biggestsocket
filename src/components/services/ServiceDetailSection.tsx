"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Mic,
  Building2,
  Car,
  Music,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { BookingModal } from "@/components/ui/BookingModal";
import { companyData } from "@/data/company";

const iconMap = {
  CalendarDays: CalendarDays,
  Mic: Mic,
  Building2: Building2,
  Car: Car,
  Music: Music,
};

interface ServiceDetailSectionProps {
  service: ServiceItem;
  index: number;
}

export function ServiceDetailSection({
  service,
  index,
}: ServiceDetailSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isEven = index % 2 === 0;
  const IconComponent = iconMap[service.iconName] || Sparkles;

  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    `Hi Uncle Skillful Limited, I'd like to book ${service.title}.`
  )}`;
  const mailtoUrl = `mailto:${companyData.email}?subject=Booking%20Enquiry%20-%20${encodeURIComponent(
    service.title
  )}`;

  return (
    <section
      id={service.id}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        isEven ? "bg-[#0B0F14]" : "bg-[#121820]"
      } relative overflow-hidden`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            isEven ? "" : "lg:grid-flow-dense"
          }`}
        >
          {/* Visual Showcase (5 or 6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-6 relative ${isEven ? "" : "lg:col-start-7"}`}
          >
            {/* Main Image Frame */}
            <div className="relative h-96 sm:h-[480px] w-full overflow-hidden rounded-3xl border border-brand-gold/30 shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Floating Stat / Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[#0B0F14]/95 p-4 border border-brand-gold/30 backdrop-blur-md text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                  <span>Key Advantage</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#E2E8F0]">
                  {service.keyBenefits[0]}
                </p>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="pointer-events-none absolute -top-4 -left-4 h-24 w-24 rounded-tl-3xl border-t-4 border-l-4 border-brand-gold" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-brand-gold" />
          </motion.div>

          {/* Text Content (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-6 space-y-6 ${
              isEven ? "" : "lg:col-start-1"
            }`}
          >
            {/* Category & Number Header */}
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold text-[#0B0F14] shadow-md font-bold">
                <IconComponent className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                  Service #{service.number} • {service.category}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg font-medium text-brand-gold leading-snug">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#E2E8F0]">
              {service.fullDescription}
            </p>

            {/* What's Included Bullet List */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-base font-bold text-white uppercase tracking-wide">
                What&apos;s Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.includedList.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                    <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: WhatsApp + Email + Modal */}
            <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-[#1E293B]">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold text-[#0B0F14] shadow-gold hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Sparkles className="h-4 w-4" />
                <span>Book This Service</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2 rounded-full bg-[#18202A] border border-[#243040] px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#243040] transition-all hover:scale-105 shadow-md"
              >
                <Mail className="h-4 w-4 text-brand-gold" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={service.title}
      />
    </section>
  );
}
