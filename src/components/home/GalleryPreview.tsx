"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Eye, Tag, MapPin } from "lucide-react";
import { galleryData } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32 bg-brand-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-1.5 text-xs font-bold text-brand-gold-dark border border-brand-gold/30">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span>Visual Portfolio</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand-blue-deep sm:text-5xl tracking-tight">
              Moments of Splendor & Scale
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-charcoal-muted">
              Explore a curated selection of marquee weddings, arena concerts, and VIP logistical operations delivered across West Africa.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white hover:bg-brand-blue-navy transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md shrink-0"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="h-4 w-4 text-brand-gold" />
          </Link>
        </div>

        {/* 6-Photo Masonry Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer border border-brand-gold/20 shadow-soft hover:shadow-2xl transition-all duration-300 ${
                idx === 0 || idx === 3 ? "h-96" : "h-80"
              }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-brand-blue-deep/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue-deep/90 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                  <Tag className="h-3 w-3" />
                  {item.category}
                </span>
              </div>

              {/* Hover Center Icon */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gold-gradient-bg text-brand-blue-deep shadow-gold transform scale-75 group-hover:scale-100 transition-transform">
                  <Eye className="h-6 w-6" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform transform group-hover:-translate-y-1">
                <div className="flex items-center gap-1.5 text-xs text-brand-gold mb-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={previewItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
