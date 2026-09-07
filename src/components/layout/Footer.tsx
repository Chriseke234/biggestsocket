"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-blue-deep border-t border-brand-gold/30 text-white overflow-hidden">
      {/* Decorative Gold Accent Gradient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-brand-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info (5 cols on desktop) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm leading-relaxed text-brand-cream/80 max-w-sm">
              Nigeria&apos;s foremost multi-faceted event management, entertainment logistics, and luxury lifestyle powerhouse. Delivering unforgettable celebrations and precision corporate execution nationwide.
            </p>

            <div className="flex items-center gap-3 text-xs text-brand-gold">
              <ShieldCheck className="h-4 w-4" />
              <span>Registered & Verified CAC Enterprise</span>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Instagram", href: companyData.socials.instagram, icon: (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                )},
                { name: "Facebook", href: companyData.socials.facebook, icon: (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 16 5h2V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/></svg>
                )},
                { name: "Twitter", href: companyData.socials.twitter, icon: (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )},
                { name: "LinkedIn", href: companyData.socials.linkedin, icon: (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                )},
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-cream hover:bg-brand-gold hover:text-brand-blue-deep transition-all duration-200 transform hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services List (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-brand-gold tracking-wide uppercase">
              Our 5 Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group flex items-center gap-2 text-brand-cream/80 hover:text-brand-gold transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 text-brand-gold transition-transform group-hover:translate-x-1" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-base font-bold text-brand-gold tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Company", href: "/about" },
                { name: "Services Portfolio", href: "/services" },
                { name: "Event Gallery", href: "/gallery" },
                { name: "Contact & Booking", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-cream/80 hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-brand-gold tracking-wide uppercase">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-brand-cream/80">
              <a
                href={`mailto:${companyData.email}`}
                className="flex items-start gap-3 hover:text-brand-gold transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
                <span className="break-all">{companyData.email}</span>
              </a>

              <a
                href={`tel:${companyData.phone1}`}
                className="flex items-center gap-3 hover:text-brand-gold transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <span>{companyData.phone1Formatted} (WhatsApp)</span>
              </a>

              <a
                href={`tel:${companyData.phone2}`}
                className="flex items-center gap-3 hover:text-brand-gold transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <span>{companyData.phone2Formatted} (Direct)</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
                <span>{companyData.location}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-brand-gold shrink-0 mt-1" />
                <span>{companyData.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-12 pt-8 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/60">
          <p>© {currentYear} {companyData.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-brand-gold">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-brand-gold">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-brand-gold">
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
