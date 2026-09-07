"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultService = "General Event Inquiry",
}: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<string>(defaultService);
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Construct WhatsApp URL
  const namePart = clientName ? ` My name is ${encodeURIComponent(clientName)}.` : "";
  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    `Hi Uncle Skillful Limited, I would like to book/enquire about ${selectedService}.${namePart}`
  )}`;

  // Construct Email mailto URL
  const emailSubject = encodeURIComponent(`Booking Enquiry: ${selectedService}`);
  const emailBody = encodeURIComponent(
    `Hi Uncle Skillful Limited team,\n\nI would like to enquire about your ${selectedService} service.${
      clientName ? `\n\nName: ${clientName}` : ""
    }\n\nPlease let me know your availability and requirements.\n\nWarm regards.`
  );
  const mailtoUrl = `mailto:${companyData.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F14]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#121820] border border-[#243040] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top decorative accent bar */}
            <div className="h-1.5 w-full bg-brand-gold" />

            {/* Header */}
            <div className="relative px-6 pt-6 pb-4 sm:px-8">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#18202A] text-[#CBD5E1] hover:bg-brand-gold hover:text-[#0B0F14] transition-colors"
                aria-label="Close booking modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 text-brand-gold font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="h-4 w-4 text-brand-gold" />
                <span>Fast & Direct Booking</span>
              </div>
              <h3
                id="modal-title"
                className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl"
              >
                Connect With Our Team
              </h3>
              <p className="mt-1 text-sm text-[#CBD5E1]">
                Choose your preferred channel for instant event reservations and inquiries.
              </p>
            </div>

            {/* Service & Name Input Options */}
            <div className="px-6 py-2 sm:px-8 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                  Select Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-xl border border-[#243040] bg-[#0B0F14] px-3.5 py-2.5 text-sm font-medium text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all shadow-sm"
                >
                  <option value="General Event Inquiry" className="bg-[#121820] text-white">General Event Inquiry</option>
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.title} className="bg-[#121820] text-white">
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-1.5">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chief Adeleke / Folake"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-[#243040] bg-[#0B0F14] px-3.5 py-2.5 text-sm text-white placeholder-[#64748B] focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="p-6 sm:p-8 space-y-3">
              {/* WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-md hover:bg-[#20bd5a] hover:shadow-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="block text-base font-bold leading-tight">
                      Chat on WhatsApp
                    </span>
                    <span className="text-xs text-white/90">
                      Instant response • Direct line
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/80 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Email Action */}
              <a
                href={mailtoUrl}
                className="group flex items-center justify-between w-full rounded-2xl bg-[#18202A] border border-[#243040] px-5 py-4 text-white shadow-md hover:border-brand-gold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-gold">
                    <Mail className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div className="text-left">
                    <span className="block text-base font-bold leading-tight">
                      Send Us an Email
                    </span>
                    <span className="text-xs text-[#CBD5E1]">
                      Detailed brief & proposal request
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-gold transition-transform group-hover:translate-x-1" />
              </a>

              {/* Quick direct phone numbers */}
              <div className="pt-2 text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
                  <Phone className="h-3.5 w-3.5 text-brand-gold" />
                  <span>Call directly:</span>
                  <a
                    href={`tel:${companyData.phone1}`}
                    className="font-semibold text-brand-gold hover:text-white underline"
                  >
                    {companyData.phone1Formatted}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${companyData.phone2}`}
                    className="font-semibold text-brand-gold hover:text-white underline"
                  >
                    {companyData.phone2Formatted}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
