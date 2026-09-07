"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F14]/95 backdrop-blur-xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-[#0B0F14] transition-all duration-200"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-[#0B0F14] transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-[#0B0F14] transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Image & Caption Content */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col items-center max-w-5xl w-full mx-auto px-4 py-8"
          >
            {/* Image Container */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-[#243040]">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain sm:object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl bg-[#121820]/95 px-5 py-3.5 border border-[#243040] text-white backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 rounded-md bg-brand-gold/20 px-2 py-0.5 text-xs font-semibold text-brand-gold border border-brand-gold/30">
                    <Tag className="h-3 w-3" />
                    {currentItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#CBD5E1]">
                    <MapPin className="h-3 w-3 text-brand-gold" />
                    {currentItem.location}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-[#E2E8F0] max-w-2xl">
                  {currentItem.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-brand-gold shrink-0">
                {currentIndex + 1} of {items.length}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
