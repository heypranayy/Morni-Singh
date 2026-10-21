import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retreatData } from "../../data/retreatData";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  ShieldCheck,
  Sun
} from "lucide-react";

interface HeroSlide {
  id: string;
  src: string;
  title: string;
  tagline: string;
  category: string;
  accent: string;
}

const BRIGHT_HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-panorama",
    src: "/images/morni/56971.webp",
    title: "1,220m Shivalik Valley Panorama",
    tagline: "Unbroken mountain horizons framed by vibrant pink bougainvillea",
    category: "RIDGE PANORAMA",
    accent: "text-rose-300"
  },
  {
    id: "slide-veranda",
    src: "/images/morni/57047.webp",
    title: "Bougainvillea Veranda Perch",
    tagline: "Slow morning chai with drifting valley mists",
    category: "TERRACE BALCONY",
    accent: "text-amber-300"
  },
  {
    id: "slide-fountain",
    src: "/images/morni/56974.webp",
    title: "Water Fountain & Stone Courtyard",
    tagline: "Tranquil water features amidst white masonry and green pines",
    category: "ESTATE GROUNDS",
    accent: "text-emerald-300"
  },
  {
    id: "slide-lawn",
    src: "/images/morni/57011.webp",
    title: "Sunlit Mountain Lawn & Estate",
    tagline: "Private enclosed green gardens overlooking rolling peaks",
    category: "PRIVATE LAWNS",
    accent: "text-gold-300"
  },
  {
    id: "slide-lounge",
    src: "/images/morni/56931.webp",
    title: "Artistic Living Room & Stone Hearth",
    tagline: "Plush lounge seating with authentic stone feature walls",
    category: "VILLA INTERIORS",
    accent: "text-amber-300"
  },
  {
    id: "slide-master",
    src: "/images/morni/57010.webp",
    title: "Master Valley King Suite",
    tagline: "Handcrafted solid wood headboard and wide mountain windows",
    category: "SUITES",
    accent: "text-gold-300"
  },
  {
    id: "slide-patio",
    src: "/images/morni/57014.webp",
    title: "Al-Fresco Umbrella Lawn Dining",
    tagline: "Bespoke barbecue & breakfast in crisp mountain air",
    category: "AL-FRESCO DINING",
    accent: "text-rose-300"
  },
  {
    id: "slide-sunset",
    src: "/images/morni/57070.webp",
    title: "Golden Hour Over Tikkar Taal",
    tagline: "Deep amber reflections across serene mountain waters",
    category: "SHIVALIK SUNSET",
    accent: "text-orange-300"
  },
  {
    id: "slide-twilight",
    src: "/images/morni/57058.webp",
    title: "Twilight Garden Patio & Fairy Lights",
    tagline: "Enchanting evening gatherings under starry skies",
    category: "EVENING AMBIENCE",
    accent: "text-amber-300"
  }
];

export const LuxuryCinematicHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const slides = BRIGHT_HERO_SLIDES;
  const currentSlide = slides[currentIndex];

  // Auto-play slideshow every 5.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(idx);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Hero Sanctuary Showcase"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between text-white overflow-hidden pt-28 sm:pt-32 pb-8 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 1. VIVID, BRIGHT REAL PHOTOGRAPHY BACKGROUND (NO WHITE OR MUDDY GRADIENT) */}
      <div className="absolute inset-0 z-0 bg-forest-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Crisp minimal vignette for text pop - keeps photo bright & vivid */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
      </div>

      {/* 2. TOP LOCATION, ALTITUDE & WEATHER BADGES */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-xs text-parchment-100 shadow-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-gold-300 font-bold">
              1,220m Elevation
            </span>
            <span className="text-white/40">·</span>
            <span className="font-ui text-[11px]">Bhoj Darara · Morni Hills</span>
          </div>

          {/* Right pills */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[11px] font-ui text-parchment-100 shadow-md">
              <Sun className="w-3.5 h-3.5 text-amber-300" />
              <span>18°C Pine Mountain Air</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-950/60 backdrop-blur-md border border-gold-400/40 text-[11px] font-ui text-gold-200 font-semibold shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>100% Gated 2BHK Sanctuary · Sleeps 6</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CENTER HERO BRAND & STRONG VALUE PROPOSITION */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-8">
        {/* Floating Luxury Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-gold-400/50 text-gold-300 text-xs font-mono tracking-[0.22em] uppercase mb-4 sm:mb-6 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Exclusive Standalone Mountain Sanctuary</span>
        </motion.div>

        {/* Grand Typography with Crisp Drop-Shadow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight font-normal leading-[0.98] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)] mb-3"
        >
          MORNI SINGH’S
        </motion.h1>

        {/* Italic Signature Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-300 font-light max-w-3xl mx-auto mb-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
        >
          "{retreatData.property.tagline}"
        </motion.p>

        {/* Clear, Punchy Description in Clean Floating Card on Mobile/Desktop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-ui text-sm sm:text-base md:text-lg text-parchment-100 leading-relaxed font-normal max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Waking up to rolling pine ridges, blooming bougainvillea terraces, home-style culinary craft, and unhurried peace in Haryana's sole hill station.
        </motion.p>

        {/* High-Impact Sexy Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto"
        >
          {/* WhatsApp Direct Action with Pulsing Glow */}
          <Button
            variant="primary"
            size="lg"
            href={`https://wa.me/${retreatData.property.contact.whatsapp}?text=${encodeURIComponent(
              "Hello Morni Singh's team! I would like to reserve the private 2BHK sanctuary. Please share availability."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageSquare className="w-5 h-5 text-forest-950 fill-forest-950" />}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-forest-950 font-bold shadow-[0_0_35px_rgba(229,184,105,0.65)] active:scale-95 transition-all text-sm uppercase tracking-wider py-3.5 px-7"
          >
            Inquire on WhatsApp
          </Button>

          {/* Tour 2BHK Villa */}
          <Link to="/stay/villa" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-black/45 backdrop-blur-md border-white/40 text-white hover:bg-white/20 hover:border-gold-300 active:scale-95 transition-all text-sm uppercase tracking-wider py-3.5 px-6 shadow-lg"
              icon={<Eye className="w-4 h-4 text-gold-300" />}
            >
              Explore Villa
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* 4. BOTTOM INTERACTIVE THUMBNAIL SCRUBBER & LIVE PROGRESS */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Active Slide Caption Badge & Slide Counter */}
        <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 truncate">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-400 font-bold">
              0{currentIndex + 1} / 0{slides.length}
            </span>
            <div className="h-3 w-px bg-white/30" />
            <div className="truncate">
              <span className="font-serif text-sm sm:text-base text-white font-medium block truncate">
                {currentSlide.title}
              </span>
              <span className="text-[11px] text-parchment-200/90 font-ui font-light hidden sm:block truncate">
                {currentSlide.tagline}
              </span>
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous view"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/25 border border-white/20 text-white hover:text-gold-300 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next view"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/25 border border-white/20 text-white hover:text-gold-300 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector Strip (Horizontal Snap on Mobile) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleSelect(idx)}
                className={`relative shrink-0 flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl transition-all duration-300 border text-left cursor-pointer ${
                  isActive
                    ? "bg-white/30 backdrop-blur-md border-gold-400 shadow-[0_0_20px_rgba(229,184,105,0.5)] scale-105"
                    : "bg-black/55 backdrop-blur-sm border-white/20 hover:border-white/50 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="w-12 h-10 sm:w-14 sm:h-12 rounded-lg overflow-hidden shrink-0 border border-white/30">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover filter brightness-[1.05]"
                  />
                </div>
                <div className="pr-2 hidden md:block">
                  <span className="block text-xs font-medium text-white truncate max-w-[130px]">
                    {slide.title}
                  </span>
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-gold-300 font-bold">
                    {slide.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
