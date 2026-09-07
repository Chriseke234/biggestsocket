import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PhotoShowcase } from "@/components/home/PhotoShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Photo Showcase Row (Staggered Cards) */}
      <PhotoShowcase />

      {/* 3. The 5 Distinct Services Grid */}
      <ServicesGrid />

      {/* 4. Why Choose Us & Animated Counters */}
      <WhyChooseUs />

      {/* 5. Client Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 6. Featured Gallery Masonry Preview */}
      <GalleryPreview />

      {/* 7. Full-Width CTA Band */}
      <CtaBand />
    </>
  );
}
