"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Auto rotate every 6 seconds unless user pauses
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const current = testimonialsData[currentIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-24 sm:py-32 bg-[#0B0F14] text-white overflow-hidden"
    >
      {/* Decorative Gold Elements */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-brand-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
            Voices of Unforgettable Celebrations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1]">
            Read what corporate titans, diaspora investors, and happy couples say about working with Uncle Skillful Limited.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-3xl bg-[#121820] border border-[#1E293B] p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            {/* Quote Icon SVG */}
            <div className="absolute top-6 right-6 text-brand-gold/20">
              <Quote className="h-16 w-16 sm:h-20 sm:w-20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-brand-gold text-brand-gold"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {current.serviceCategory}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed italic">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 border-t border-[#1E293B] pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-brand-gold shadow-md shrink-0">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-gold">
                      {current.role} • <span className="text-[#CBD5E1]">{current.companyOrEvent}</span>
                    </p>
                    <p className="text-xs text-[#94A3B8]">{current.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Manual Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-[#1E293B] pt-4">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-8 bg-brand-gold"
                        : "w-2.5 bg-white/20 hover:bg-brand-gold/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-[#0B0F14] transition-all duration-200 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-[#0B0F14] transition-all duration-200 active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
