"use client";

import React from "react";
import { motion } from "framer-motion";

export function SparkleMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Sparkle 1 */}
      <motion.svg
        className="absolute top-12 left-[10%] h-6 w-6 text-brand-gold/60"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          y: [-5, 8, -5],
          rotate: [0, 45, 0],
          scale: [0.9, 1.15, 0.9],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </motion.svg>

      {/* Sparkle 2 */}
      <motion.svg
        className="absolute top-28 right-[15%] h-8 w-8 text-brand-gold/70"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          y: [0, -12, 0],
          rotate: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </motion.svg>

      {/* Confetti Ribbon 1 */}
      <motion.svg
        className="absolute bottom-20 left-[18%] h-7 w-7 text-brand-blue-bright/40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
      </motion.svg>

      {/* Small Star 3 */}
      <motion.svg
        className="absolute top-1/2 right-[8%] h-5 w-5 text-brand-gold-light/50"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{
          scale: [0.7, 1.2, 0.7],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </motion.svg>

      {/* Subtle Diamond Motif */}
      <motion.div
        className="absolute bottom-12 right-[25%] h-3 w-3 rotate-45 rounded-[2px] bg-brand-gold/40"
        animate={{
          y: [0, -8, 0],
          rotate: [45, 90, 45],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}
