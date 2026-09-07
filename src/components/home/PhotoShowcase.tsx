"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

const showcaseCards = [
  {
    title: "Weddings & Receptions",
    subtitle: "Majestic Grandeur & Royal Romance",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    link: "/services#event-planning",
    offset: "lg:translate-y-8",
  },
  {
    title: "Live Concerts & Festivals",
    subtitle: "Arena Audio & A-List Talent",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
    link: "/services#celebrity-booking",
    offset: "lg:-translate-y-4",
  },
  {
    title: "Corporate Galas & Summits",
    subtitle: "Precision Protocol & Executive Production",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    link: "/services#event-planning",
    offset: "lg:translate-y-4",
  },
];

export function PhotoShowcase() {
  return (
    <section className="relative -mt-16 sm:-mt-24 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {showcaseCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`group relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl border border-brand-gold/30 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold ${card.offset}`}
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-brand-blue-deep/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-deep/80 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                Featured Experience
              </span>
            </div>

            {/* Bottom Content with Slide-Up Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-300 transform group-hover:-translate-y-1">
              <span className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                {card.subtitle}
              </span>
              <h3 className="mt-1 font-heading text-2xl font-bold text-white leading-snug">
                {card.title}
              </h3>

              <div className="mt-4 flex items-center justify-between border-t border-brand-gold/20 pt-3">
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E2E8F0] group-hover:text-brand-gold transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue-deep transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
