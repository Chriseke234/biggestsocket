"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { companyData } from "@/data/company";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    "Hi Uncle Skillful Limited, I'd like to enquire about your services."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      <div
        className={`hidden md:flex items-center gap-2 rounded-xl bg-brand-blue-deep/95 px-3.5 py-2 text-xs font-semibold text-white shadow-xl border border-brand-gold/30 backdrop-blur-md transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* Pulsing Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Direct WhatsApp Chat with Uncle Skillful Limited"
      >
        {/* Continuous Pulse Waves */}
        <span className="absolute -inset-1.5 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40 duration-1000"></span>
        <span className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/30 blur-sm"></span>

        {/* WhatsApp Icon SVG */}
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110" />

        {/* Online Indicator Badge */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-80"></span>
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-gold"></span>
        </span>
      </a>
    </div>
  );
}
