import React, { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type GalleryItem } from "../../data/galleryData";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag
} from "lucide-react";

export interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  // Touch gesture state for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45; // Minimum px distance to register a swipe

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Lock body scroll when lightbox is active
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

  // Mobile Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* TOP BAR: Category tag, Counter, and Controls */}
        <div className="flex items-center justify-between z-10 px-2 py-1 border-b border-gold-500/20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400 bg-forest-900/80 px-2.5 py-1 rounded-xs border border-gold-500/25">
              {currentItem.category}
            </span>
            {currentItem.location && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-ui text-parchment-300">
                <MapPin className="w-3 h-3 text-gold-500" />
                {currentItem.location}
              </span>
            )}
          </div>

          {/* Photo Counter e.g. 04 / 26 */}
          <div className="font-mono text-xs text-parchment-300 tracking-wider">
            <span className="text-gold-400 font-semibold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(items.length).padStart(2, "0")}
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-parchment-300 hover:text-gold-400 hover:bg-forest-900/80 rounded-xs border border-gold-500/20 transition-colors cursor-pointer"
              aria-label="Close lightbox (Escape)"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN STAGE: Previous button, Main Image with motion, Next button */}
        <div className="relative flex-1 flex items-center justify-center my-3 sm:my-4 overflow-hidden">
          {/* Desktop Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="hidden sm:flex absolute left-2 lg:left-6 z-20 p-3 rounded-full bg-forest-950/80 hover:bg-gold-500 hover:text-forest-950 text-parchment-200 border border-gold-500/30 transition-all shadow-xl cursor-pointer"
            aria-label="Previous photograph (Left arrow)"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Desktop Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="hidden sm:flex absolute right-2 lg:right-6 z-20 p-3 rounded-full bg-forest-950/80 hover:bg-gold-500 hover:text-forest-950 text-parchment-200 border border-gold-500/30 transition-all shadow-xl cursor-pointer"
            aria-label="Next photograph (Right arrow)"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Frame with Smooth Scale & Opacity Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[72vh] sm:max-h-[76vh] max-w-[94vw] sm:max-w-[85vw] flex items-center justify-center"
            >
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-h-[72vh] sm:max-h-[76vh] max-w-full w-auto h-auto object-contain rounded-xs border border-gold-500/25 shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM SECTION: Caption Box + Mobile Navigation buttons + Thumbnail Carousel */}
        <div className="z-10 bg-forest-950/90 border-t border-gold-500/20 pt-3 px-2">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-parchment-50 font-normal leading-tight">
                {currentItem.title}
              </h3>
              <p className="font-ui text-xs sm:text-sm text-parchment-300/80 font-light mt-0.5 max-w-2xl">
                {currentItem.caption}
              </p>
            </div>

            {/* Mobile Touch & Prev/Next Pill */}
            <div className="flex sm:hidden items-center justify-between w-full pt-1 border-t border-gold-500/15">
              <button
                onClick={handlePrev}
                className="px-3 py-1 text-xs font-ui text-parchment-300 border border-gold-500/20 rounded-xs bg-forest-900/60"
              >
                ← Prev
              </button>
              <span className="text-[11px] font-ui text-parchment-400">Swipe to navigate</span>
              <button
                onClick={handleNext}
                className="px-3 py-1 text-xs font-ui text-parchment-300 border border-gold-500/20 rounded-xs bg-forest-900/60"
              >
                Next →
              </button>
            </div>

            {currentItem.tag && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-gold-400 bg-forest-900/50 px-2 py-0.5 rounded-xs border border-gold-500/15 shrink-0">
                <Tag className="w-2.5 h-2.5 text-gold-500" />
                {currentItem.tag}
              </span>
            )}
          </div>

          {/* Quick-Jump Thumbnail Strip */}
          <div className="hidden md:flex items-center gap-2 overflow-x-auto py-1 max-w-4xl mx-auto scrollbar-none">
            {items.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(idx)}
                  className={`relative w-12 h-9 shrink-0 rounded-xs overflow-hidden border transition-all cursor-pointer ${
                    isActive
                      ? "border-gold-400 scale-105 shadow-md"
                      : "border-gold-500/20 opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${idx + 1}: ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
