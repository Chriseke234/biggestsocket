import React from "react";
import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { FilterableGallery } from "@/components/gallery/FilterableGallery";
import { CtaBand } from "@/components/home/CtaBand";
import { SparkleMotif } from "@/components/ui/SparkleMotif";

export const metadata: Metadata = {
  title: "Event Gallery & Portfolio | Uncle Skillful Limited",
  description:
    "Explore our high-resolution visual portfolio of Nigerian weddings, arena concerts, corporate leadership summits, verified real estate deals, and executive logistics.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative bg-gradient-to-b from-brand-blue-deep via-brand-blue to-brand-cream-light py-20 lg:py-28 text-white overflow-hidden">
        <SparkleMotif />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Showcase of Grandeur</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Portfolio of <span className="gold-gradient-text">Milestone Moments</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-brand-cream/90 leading-relaxed">
            Filter through our signature weddings, concert sound stages, executive summits, verified lands, and luxury fleet deployments.
          </p>
        </div>
      </section>

      {/* Filterable Portfolio Grid */}
      <FilterableGallery />

      {/* CTA Band */}
      <CtaBand />
    </>
  );
}
