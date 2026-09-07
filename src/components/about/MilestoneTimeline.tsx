"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, CheckCircle2 } from "lucide-react";
import { milestonesData } from "@/data/team";

export function MilestoneTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0F14] relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#18202A] px-4 py-1.5 text-xs font-bold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Our Journey of Excellence</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
            Milestones & Proven Legacy
          </h2>
          <p className="mt-3 text-base text-[#E2E8F0]">
            From humble beginnings in Lagos event rentals to becoming Nigeria&apos;s most trusted multi-sector luxury powerhouse.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Central Gold Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-brand-gold opacity-70" />

          <div className="space-y-12">
            {milestonesData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="rounded-3xl bg-[#121820] p-6 sm:p-8 shadow-card border border-[#1E293B] hover:border-brand-gold/40 transition-all">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#18202A] px-3 py-1 text-xs font-bold text-brand-gold mb-3 border border-brand-gold/30">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.year}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#E2E8F0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Milestone Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold shadow-gold text-[#0B0F14] ring-4 ring-[#0B0F14]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
