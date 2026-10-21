import React, { useState, useEffect } from "react";
import { retreatData } from "../../data/retreatData";
import { BrandLogo } from "../ui/BrandLogo";
import { Menu, Phone, MessageSquare, Sparkles } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { Link, useLocation } from "react-router-dom";

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Villa", href: "/stay/villa" },
    { label: "The Stay", href: "/stay" },
    { label: "Experiences", href: "/experiences" },
    { label: "Morni Hills", href: "/destination" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#060e0a]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-black/75 via-black/25 to-transparent border-b border-transparent"
        }`}
      >
        {/* Top Announcement Ticker - Smooth Auto-Collapse on Scroll & Strict Single Line */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled
              ? "max-h-0 py-0 opacity-0 pointer-events-none"
              : "max-h-12 py-1.5 opacity-100 bg-black/20 backdrop-blur-xs border-b border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-ui text-parchment-200 tracking-wider overflow-hidden">
            <div className="hidden lg:flex items-center gap-2 whitespace-nowrap text-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span>{retreatData.property.elevation} · {retreatData.property.location.region}, {retreatData.property.location.state}</span>
            </div>
            <div className="mx-auto lg:mx-0 font-medium text-white flex items-center gap-1.5 whitespace-nowrap text-nowrap shrink-0 text-[10px] sm:text-[11px]">
              <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
              <span>STAY, EXPLORE, REPEAT! · NEAREST HILL ESCAPE FROM DELHI NCR</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-parchment-200 whitespace-nowrap text-nowrap shrink-0">
              <a
                href={`tel:${retreatData.property.contact.phone.replace(/\s+/g, "")}`}
                className="hover:text-gold-300 flex items-center gap-1.5 transition-colors whitespace-nowrap text-nowrap"
              >
                <Phone className="w-3 h-3 text-gold-400 shrink-0" />
                <span className="font-mono">{retreatData.property.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Floating Glass Navbar (Transparent at Top, Glass Floating on Scroll) */}
        <nav className="w-full py-2.5 sm:py-3 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-nowrap">
            {/* Brand Logo & Emblem - Single Line & Shrink-0 */}
            <Link to="/" className="flex items-center group shrink-0">
              <BrandLogo size="sm" showText={true} theme="dark" />
            </Link>

            {/* Desktop Navigation Links - Guaranteed Single Line (text-nowrap & whitespace-nowrap) */}
            <div className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 flex-nowrap shrink-0">
              {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={idx}
                    to={item.href}
                    className={`font-ui text-[11px] xl:text-xs uppercase tracking-[0.16em] xl:tracking-[0.18em] font-medium transition-all py-1.5 whitespace-nowrap text-nowrap shrink-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-gold-300 after:to-gold-500 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-[#F5D485] font-bold after:w-full drop-shadow-[0_0_12px_rgba(245,212,133,0.7)]"
                        : "text-white/90 hover:text-[#F5D485] after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTAs: WhatsApp + Reserve Stay Luxury Pills on Single Line */}
            <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0 whitespace-nowrap text-nowrap">
              <a
                href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Morni Singh's team! I would like to inquire about reserving the 2BHK Villa."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3.5 lg:px-4 rounded-full bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-400/50 text-emerald-300 hover:text-emerald-100 text-xs font-ui font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 lg:gap-2 shadow-[0_0_16px_rgba(16,185,129,0.25)] transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap text-nowrap shrink-0"
                title="Direct Concierge WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-emerald-300 text-emerald-300 shrink-0" />
                <span className="whitespace-nowrap text-nowrap">WhatsApp</span>
              </a>

              <Link
                to="/book"
                className="h-9 px-4 lg:px-5 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 font-ui font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-[0_0_20px_rgba(223,185,98,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap text-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-forest-950 fill-forest-950 shrink-0" />
                <span className="whitespace-nowrap text-nowrap">Reserve Stay</span>
              </Link>
            </div>

            {/* Mobile Actions: Quick 1-tap WhatsApp + Glass Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2 shrink-0 whitespace-nowrap text-nowrap">
              <a
                href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Morni Singh's team! I would like to inquire about reserving the 2BHK Villa."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-ui uppercase tracking-wider font-semibold flex items-center gap-1.5 shadow-md transition-colors whitespace-nowrap text-nowrap shrink-0"
                title="WhatsApp Concierge"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                <span className="whitespace-nowrap text-nowrap">WhatsApp</span>
              </a>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 text-white hover:text-gold-300 focus:outline-none cursor-pointer rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shrink-0"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
};
