"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "gold";
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = "light", className = "", showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Uncle Skillful Limited Home"
    >
      {/* Official Logo Icon Frame */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-brand-blue-deep p-0.5 border border-brand-gold/40 shadow-md shadow-brand-gold/20 transition-all duration-300 group-hover:border-brand-gold group-hover:shadow-brand-gold/40">
        <Image
          src="/logo.png"
          alt="Uncle Skillful Limited Logo"
          width={48}
          height={48}
          className="h-full w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-heading text-lg font-bold tracking-tight md:text-xl">
          <span className="text-white font-extrabold">
            UNCLE
          </span>
          <span className="gold-gradient-text font-black tracking-wide">
            SKILLFUL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
            LIMITED
          </span>
          <span className="h-1 w-1 rounded-full bg-brand-gold"></span>
          <span className="text-[9px] text-brand-charcoal-muted tracking-wider uppercase font-semibold">
            BIGGEST SOCKET
          </span>
        </div>
      </div>
    </Link>
  );
}
