"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";

const valueProps = [
  {
    icon: Award,
    title: "14+ Years of Industry Mastery",
    description:
      "Deep institutional expertise delivering high-stakes corporate summits and society weddings without a single flaw.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Direct Relationships",
    description:
      "Direct artist contracts, verified land titles with Governor's Consent, and zero intermediary markup risks.",
  },
  {
    icon: Zap,
    title: "Precision Time & Logistics",
    description:
      "Military-grade schedule execution, armored motorcades, and rapid contingency deployment across Nigeria.",
  },
  {
    icon: Users,
    title: "Dedicated Lead Concierge",
    description:
      "A senior project manager is assigned exclusively to your event, ensuring 24/7 responsiveness and white-glove care.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0F14] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#18202A] px-4 py-1.5 text-xs font-bold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>The Uncle Skillful Advantage</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
            Why Discerning Clients Trust Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E2E8F0]">
            We bridge the gap between creative festivity and executive rigor, delivering peace of mind on every milestone.
          </p>
        </div>

        {/* 4 Value Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#121820] p-6 border border-[#1E293B] hover:border-brand-gold/30 shadow-card transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold text-[#0B0F14] shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 font-heading text-lg font-bold text-white">
                  {prop.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#E2E8F0]">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
