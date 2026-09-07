"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, MapPin, Tag, Filter } from "lucide-react";
import { galleryData, galleryCategories, GalleryCategory, GalleryItem } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export function FilterableGallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-[#0B0F14] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {galleryCategories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-brand-gold text-[#0B0F14] font-extrabold shadow-gold scale-105"
                    : "bg-[#18202A] text-[#E2E8F0] hover:bg-brand-gold/20 hover:text-brand-gold border border-[#243040] shadow-sm"
                }`}
              >
                <span>{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-brand-gold"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Filtered Grid with Framer Motion layout animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer border border-[#1E293B] shadow-card bg-[#121820] hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-300 ${
                  item.aspectRatio === "tall"
                    ? "h-[420px]"
                    : item.aspectRatio === "wide"
                    ? "h-[340px]"
                    : "h-[380px]"
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

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0B0F14]/90 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-[#0B0F14] shadow-gold transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="h-7 w-7" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-brand-gold mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#E2E8F0] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Interactive Lightbox */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
