"use client";

import Link from "next/link";
import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "gold";
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = "light", className = "", showTagline = false }: LogoProps) {
  const isDark = variant === "dark";
  const isGold = variant === "gold";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Uncle Skillful Limited Home"
    >
      {/* Emblem Icon / Logo Mark (Easily swappable with custom image or SVG) */}
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-deep p-0.5 shadow-md shadow-brand-blue/30 ring-1 ring-brand-gold/40 transition-all duration-300 group-hover:ring-brand-gold">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-brand-blue-navy/90">
          {/* Celebratory Star & Crown Monogram SVG */}
          <svg
            className="h-6 w-6 text-brand-gold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Crown / Star Celebration Motif */}
            <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor" fillOpacity="0.15" />
            <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            <circle cx="6" cy="18" r="1" fill="currentColor" />
            <circle cx="18" cy="18" r="1" fill="currentColor" />
          </svg>
        </div>
        {/* Subtle Gold Sparkle Accent */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-gold-light"></span>
        </span>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-heading text-lg font-bold tracking-tight md:text-xl">
          <span
            className={
              isDark
                ? "text-brand-blue-deep"
                : isGold
                ? "text-brand-gold-light"
                : "text-white"
            }
          >
            UNCLE
          </span>
          <span className="gold-gradient-text font-black tracking-wide">
            SKILLFUL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase ${
              isDark
                ? "text-brand-charcoal-muted"
                : "text-brand-cream/80"
            }`}
          >
            LIMITED
          </span>
          {showTagline && (
            <>
              <span className="h-1 w-1 rounded-full bg-brand-gold"></span>
              <span className="text-[10px] text-brand-gold font-medium">
                Events & Luxury
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
