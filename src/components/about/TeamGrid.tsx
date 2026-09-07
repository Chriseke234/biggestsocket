"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Award, ArrowRight, RotateCw } from "lucide-react";
import { teamData, TeamMember } from "@/data/team";

export function TeamGrid() {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#121820] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#18202A] px-4 py-1.5 text-xs font-bold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Master Craftsmen & Leaders</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
            Meet Our Leadership Team
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#E2E8F0]">
            The visionary architects, event directors, legal advisors, and sound engineers behind every unforgettable production. Hover or tap each card to reveal their story.
          </p>
        </div>

        {/* 6 Team Flip Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => {
            const isFlipped = flippedCardId === member.id;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => toggleCard(member.id)}
                className="group relative h-96 w-full cursor-pointer perspective-1000"
              >
                {/* 3D Card Inner Container */}
                <div
                  className={`relative h-full w-full rounded-3xl transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                  }`}
                >
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden border border-brand-gold/30 shadow-card bg-[#18202A] text-white backface-hidden flex flex-col justify-end p-6">
                    {/* Background Avatar Image */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Department Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#0B0F14]/90 px-3 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                        {member.department}
                      </span>
                    </div>

                    {/* Flip Cue Indicator */}
                    <div className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                      <RotateCw className="h-4 w-4 text-brand-gold" />
                    </div>

                    {/* Front Content */}
                    <div className="relative z-10">
                      <span className="text-xs font-bold text-brand-gold tracking-wide uppercase">
                        {member.role}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-[#E2E8F0]">
                        <Award className="h-3.5 w-3.5 text-brand-gold" />
                        <span>{member.highlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK OF CARD (Flipped) */}
                  <div className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden border-2 border-brand-gold bg-[#18202A] p-6 text-white backface-hidden rotate-y-180 shadow-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                        {member.department}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-brand-gold">
                        {member.role}
                      </p>

                      <div className="my-4 h-px w-full bg-brand-gold/30" />

                      <p className="text-xs sm:text-sm leading-relaxed text-[#E2E8F0]">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/20 flex items-center justify-between text-xs text-brand-gold font-semibold">
                      <span>Executive Council</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-[#0B0F14]">
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
