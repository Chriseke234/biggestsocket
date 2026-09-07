"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  ChevronDown,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { BookingModal } from "@/components/ui/BookingModal";
import { companyData } from "@/data/company";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [quickDropdownOpen, setQuickDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setQuickDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-blue-deep/90 py-3 shadow-xl backdrop-blur-md border-b border-brand-gold/20"
            : "bg-gradient-to-b from-brand-blue-deep/80 via-brand-blue-deep/40 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo variant="light" showTagline={!isScrolled} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 rounded-full bg-brand-blue-navy/70 px-6 py-2 border border-brand-gold/20 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-gold font-bold"
                      : "text-brand-cream/80 hover:text-brand-gold"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-brand-gold shadow-sm shadow-brand-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Direct Phone quick indicator */}
            <a
              href={`tel:${companyData.phone1}`}
              className="flex items-center gap-2 text-xs font-semibold text-brand-cream/90 hover:text-brand-gold transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-gold">
                <Phone className="h-4 w-4" />
              </div>
              <span className="hidden xl:inline">{companyData.phone1Formatted}</span>
            </a>

            {/* Gold Book Now Button with Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full gold-gradient-bg px-6 py-2.5 text-sm font-bold text-brand-blue-deep shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
              >
                <Sparkles className="h-4 w-4 text-brand-blue-deep transition-transform duration-300 group-hover:rotate-12" />
                <span>Book Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="rounded-full gold-gradient-bg px-3.5 py-1.5 text-xs font-bold text-brand-blue-deep shadow-md active:scale-95"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-blue-deep transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-blue-deep/80 backdrop-blur-md"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-blue-deep border-l border-brand-gold/30 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-brand-gold/20">
                  <Logo variant="light" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-brand-blue transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="mt-8 flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                          isActive
                            ? "bg-brand-gold text-brand-blue-deep shadow-md font-bold"
                            : "text-brand-cream hover:bg-white/10 hover:text-brand-gold"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <Sparkles className="h-4 w-4" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Bottom CTAs */}
              <div className="space-y-4 pt-6 border-t border-brand-gold/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBookingModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl gold-gradient-bg py-3.5 text-sm font-bold text-brand-blue-deep shadow-gold"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Book a Service</span>
                </button>

                <div className="flex flex-col gap-2 text-xs text-brand-cream/80">
                  <a
                    href={`tel:${companyData.phone1}`}
                    className="flex items-center gap-2 hover:text-brand-gold"
                  >
                    <Phone className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{companyData.phone1Formatted}</span>
                  </a>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-2 hover:text-brand-gold"
                  >
                    <Mail className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{companyData.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
