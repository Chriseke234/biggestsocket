"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { trustStats } from "@/data/company";

function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-brand-blue-deep">
      {count}
      {suffix}
    </span>
  );
}

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
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-brand-cream to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold text-brand-blue border border-brand-blue/20">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>The Uncle Skillful Advantage</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand-blue-deep sm:text-5xl tracking-tight">
            Why Discerning Clients Trust Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal-muted">
            We bridge the gap between creative festivity and executive rigor, delivering peace of mind on every milestone.
          </p>
        </div>

        {/* 4 Animated Counter Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-center shadow-card border border-brand-gold/30 hover:border-brand-gold hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 gold-gradient-bg" />
              <div className="text-3xl sm:text-5xl text-brand-blue-deep">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="mt-2 font-heading text-base sm:text-lg font-bold text-brand-charcoal">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-brand-charcoal-muted">
                {stat.description}
              </p>
            </motion.div>
          ))}
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
                className="rounded-2xl bg-white/70 p-6 border border-brand-gold/20 shadow-soft hover:bg-white hover:shadow-card transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-brand-gold shadow-md">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 font-heading text-lg font-bold text-brand-blue-deep">
                  {prop.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brand-charcoal-muted">
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
