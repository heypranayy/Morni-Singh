import React, { useState, useEffect } from "react";
import { retreatData } from "../../data/retreatData";
import { PhoneCall, Calendar, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export interface StickyBookingCTAProps {
  onOpenBookingModal?: () => void;
  enquiryTargetId?: string;
}

export const StickyBookingCTA: React.FC<StickyBookingCTAProps> = ({
  onOpenBookingModal,
  enquiryTargetId = "booking"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 240px
      if (window.scrollY > 240 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const callTelUrl = `tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`;

  const handleBookClick = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      const targetEl = document.getElementById(enquiryTargetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = enquiryTargetId;
      }
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Fixed Luxury Booking Dock"
      className="fixed bottom-0 left-0 w-full z-40 bg-black/90 backdrop-blur-2xl border-t border-white/10 text-white shadow-[0_-12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Left: Product & Property Avatar Thumbnail */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-gold-400/40 shrink-0 shadow-md">
              <img
                src="/images/morni/56973.webp"
                alt="Morni Singhs Villa"
                className="w-full h-full object-cover filter brightness-[1.08] saturate-[1.15]"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm sm:text-base text-white font-medium leading-tight truncate">
                  MORNI SINGH’S 2BHK
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-gold-300 bg-gold-900/40 px-2 py-0.5 rounded-full border border-gold-500/30 shrink-0">
                  <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                  1,220m
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-ui text-parchment-200/80 tracking-wider uppercase font-light truncate">
                Entire Residence · Sleeps 6 · Private Lawn
              </span>
            </div>
          </div>

          {/* Right Action Bubbles: PHONE BUBBLE + RESERVATION BUBBLE */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* PHONE BUBBLE */}
            <a
              href={callTelUrl}
              className="w-10 h-10 sm:h-10 sm:w-auto sm:px-4 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white flex items-center justify-center gap-2 transition-all shadow-md shrink-0 cursor-pointer"
              title={`Call concierge: ${retreatData.property.contact.phoneDisplay}`}
            >
              <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="hidden sm:inline text-xs font-ui font-medium uppercase tracking-wider text-parchment-100">
                Call
              </span>
            </a>

            {/* RESERVATION BUBBLE */}
            <Link
              to="/book"
              onClick={(e) => {
                if (document.getElementById(enquiryTargetId)) {
                  e.preventDefault();
                  handleBookClick();
                }
              }}
              className="h-10 px-4 sm:px-6 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 active:scale-95 text-forest-950 font-ui font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(245,212,133,0.5)] cursor-pointer flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-forest-950 stroke-[2.5] shrink-0" />
              <span>Reserve</span>
            </Link>

            {/* Dismiss Dock Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-white/40 hover:text-white focus:outline-none cursor-pointer hidden lg:block ml-1"
              aria-label="Dismiss sticky dock"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
