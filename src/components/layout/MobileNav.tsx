import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retreatData } from "../../data/retreatData";
import { Button } from "../ui/Button";
import { BrandLogo } from "../ui/BrandLogo";
import { X, MessageSquare, Phone, MapPin, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose
}) => {
  const location = useLocation();

  // Prevent body scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "The 2BHK Villa", href: "/stay/villa", tag: "Private Residence" },
    { label: "The Stay Experience", href: "/stay", tag: "Amenities & Rates" },
    { label: "Curated Experiences", href: "/experiences", tag: "Chef & Bonfire" },
    { label: "Photographic Gallery", href: "/gallery", tag: "23 Real Frames" },
    { label: "Around Morni Hills", href: "/destination", tag: "Tikkar Taal Lake" },
    { label: "Heritage & Story", href: "/about", tag: "Eco Architecture" },
    { label: "Contact & Concierge", href: "/contact", tag: "Direct Line" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Subtle overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 xl:hidden"
          />

          {/* Luxury Slide-over Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#102018] border-l border-gold-500/30 z-50 flex flex-col justify-between overflow-y-auto xl:hidden shadow-2xl p-6 text-white"
          >
            {/* Top Bar with Brand & Close */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <BrandLogo size="sm" showText={true} theme="dark" />
                <button
                  onClick={onClose}
                  className="p-2 text-parchment-200 hover:text-gold-400 focus:outline-none cursor-pointer rounded-full bg-white/5 border border-white/10"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Property Mini Showcase Card inside Menu */}
              <div className="mt-5 p-3 rounded-xl bg-forest-900/60 border border-gold-500/20 flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-gold-400/30">
                  <img
                    src="/images/morni/56971.webp"
                    alt="Morni Singhs Sanctuary"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gold-400 font-semibold uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>1,220m Shivalik Crest</span>
                  </div>
                  <span className="font-serif text-sm text-white font-normal block leading-tight">
                    Exclusive 2BHK Sanctuary
                  </span>
                  <span className="text-[11px] text-parchment-300/80 font-ui font-light">
                    Bhoj Darara · Sleeps 6
                  </span>
                </div>
              </div>

              {/* Navigation Links with Editorial Numbering */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((item, idx) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      to={item.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between py-2.5 px-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/40"
                          : "text-parchment-100 hover:bg-white/5 hover:text-gold-300"
                      }`}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-gold-500 font-medium">
                          0{idx + 1}
                        </span>
                        <div>
                          <span className="font-serif text-lg tracking-wide block">
                            {item.label}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-parchment-300/60 block">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Contact */}
            <div className="pt-5 mt-6 border-t border-white/10 flex flex-col gap-2.5">
              <Link to="/book" onClick={onClose}>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 font-bold"
                >
                  Reserve The Sanctuary
                </Button>
              </Link>

              <Button
                variant="secondary"
                size="md"
                fullWidth
                href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Morni Singh's team! I would like to inquire about reserving the 2BHK Villa."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 text-emerald-300" />}
                className="bg-emerald-800/40 border border-emerald-500/30 text-emerald-200 hover:bg-emerald-700/50"
              >
                WhatsApp Concierge
              </Button>

              {/* Contact info snippet */}
              <div className="pt-2 text-xs font-ui text-parchment-300/80 space-y-1 font-light">
                <a
                  href={`tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{retreatData.property.contact.phoneDisplay}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">Bhoj Darara, Morni Hills, Haryana 134205</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
