"use client";

import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { companyData } from "@/data/company";

export function DirectContactCard() {
  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    "Hi Uncle Skillful Limited, I would like to get in touch regarding an event service."
  )}`;
  const mailtoUrl = `mailto:${companyData.email}?subject=Direct%20Inquiry%20-%20Uncle%20Skillful%20Limited`;

  return (
    <div className="space-y-8">
      {/* Main Direct Contact Card */}
      <div className="rounded-3xl bg-[#121820] p-8 sm:p-10 text-white shadow-2xl border border-[#1E293B] relative overflow-hidden">
        {/* Decorative Gold Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-3.5 py-1 text-xs font-semibold text-brand-gold border border-brand-gold/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Direct Executive Lines</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            We Are Ready to Bring Your Vision to Life
          </h3>

          <p className="text-sm leading-relaxed text-[#CBD5E1]">
            Reach out directly to our principal event planners, talent booking coordinators, and property acquisition consultants.
          </p>

          {/* Large Tappable Action Buttons with Icon Micro-Interactions */}
          <div className="space-y-3 pt-2">
            {/* WhatsApp Large Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-md hover:bg-[#20bd5a] hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-base font-bold leading-tight text-white">
                    Chat on WhatsApp
                  </span>
                  <span className="text-xs text-white/90">
                    {companyData.phone1Formatted} • Fast response
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Email Large Button */}
            <a
              href={mailtoUrl}
              className="group flex items-center justify-between w-full rounded-2xl bg-brand-gold px-5 py-4 text-[#0B0F14] shadow-gold hover:bg-[#00c985] hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B0F14]/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Mail className="h-6 w-6 text-[#0B0F14]" />
                </div>
                <div className="text-left">
                  <span className="block text-base font-extrabold leading-tight text-[#0B0F14]">
                    Email Our Desk
                  </span>
                  <span className="text-xs text-[#0B0F14]/80 break-all font-medium">
                    {companyData.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#0B0F14] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Contact Details List */}
          <div className="space-y-4 pt-4 border-t border-[#1E293B] text-sm">
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider">
                  Primary Line & WhatsApp
                </span>
                <a
                  href={`tel:${companyData.phone1}`}
                  className="font-bold text-white hover:text-brand-gold transition-colors"
                >
                  {companyData.phone1Formatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider">
                  Direct Line 2
                </span>
                <a
                  href={`tel:${companyData.phone2}`}
                  className="font-bold text-white hover:text-brand-gold transition-colors"
                >
                  {companyData.phone2Formatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider">
                  Corporate Offices & Hubs
                </span>
                <span className="text-[#E2E8F0]">{companyData.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider">
                  Operating Hours
                </span>
                <span className="text-[#E2E8F0]">{companyData.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Frame */}
      <div className="overflow-hidden rounded-3xl bg-[#121820] p-4 shadow-card border border-[#1E293B]">
        <div className="mb-3 flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <MapPin className="h-4 w-4 text-brand-gold" />
            <span>Operational Hubs: Lagos, Abuja & Nationwide</span>
          </div>
          <span className="text-[10px] font-semibold text-brand-gold bg-brand-gold/15 border border-brand-gold/30 px-2.5 py-0.5 rounded-full">
            West Africa Reach
          </span>
        </div>

        {/* Embedded Interactive Map Frame */}
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-[#243040]">
          <iframe
            title="Uncle Skillful Limited Operational HQ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06348633393!2d3.3514863!3d6.4478144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ccddb30e01%3A0xb36b567d7a5b3a30!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
