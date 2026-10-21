import React, { useState, useEffect, useRef } from "react";
import { retreatData, type DestinationChapterItem } from "../../data/retreatData";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import {
  Clock,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  Navigation
} from "lucide-react";

export interface AroundMorniHillsSectionProps {
  initialChapterIndex?: number;
  className?: string;
}

export const AroundMorniHillsSection: React.FC<AroundMorniHillsSectionProps> = ({
  initialChapterIndex = 0,
  className = ""
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(initialChapterIndex);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileTouchStartX = useRef<number | null>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const chapters: DestinationChapterItem[] = retreatData.destinationChapters;

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % chapters.length);
  };

  const handleMobileTouchStart = (e: React.TouchEvent) => {
    mobileTouchStartX.current = e.touches[0].clientX;
  };

  const handleMobileTouchEnd = (e: React.TouchEvent) => {
    if (mobileTouchStartX.current === null) return;
    const diff = mobileTouchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleMobileNext();
    } else if (diff < -40) {
      handleMobilePrev();
    }
    mobileTouchStartX.current = null;
  };

  // Track which chapter is currently in the primary reading viewport on desktop
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexStr = entry.target.getAttribute("data-chapter-index");
          if (indexStr !== null) {
            const idx = parseInt(indexStr, 10);
            if (!isNaN(idx)) {
              setActiveChapterIndex(idx);
            }
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    chapterRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [chapters.length]);

  const scrollToChapter = (index: number) => {
    setActiveChapterIndex(index);
    const targetEl = chapterRefs.current[index];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  return (
    <section
      id="around-morni-hills"
      className={`relative bg-[#FAF8F5] text-forest-950 py-20 sm:py-28 overflow-x-clip border-t border-[#E7DFCD] ${className}`}
    >
      {/* Editorial Section Header */}
      <Container size="wide" className="mb-14 sm:mb-20">
        <div className="max-w-3xl">
          <OverlineBadge dotColor="gold" className="mb-3">
            DESTINATION CHRONICLES · 01 THROUGH 08
          </OverlineBadge>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight leading-tight mb-4">
            Around Morni Hills
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-gold-700 font-light mb-6">
            The destination is an essential part of the sanctuary experience.
          </p>

          <p className="font-ui text-sm sm:text-base text-forest-900/80 font-light leading-relaxed mb-6">
            Beyond the quiet veranda of Morni Singh's lie freshwater twin lakes, centuries-old stone battlements,
            sub-tropical birding sanctuaries, and historic stepped Mughal terraces. Explore each nearby highlight
            at your own unhurried pace.
          </p>

          {/* Strict Drive Time Advisory Banner */}
          <div className="inline-flex items-start gap-2.5 p-4 bg-white border border-[#E7DFCD] rounded-none text-xs font-ui text-forest-900/80 shadow-xs">
            <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-forest-950 font-semibold">Travel Advisory:</strong> All travel times are designated as{" "}
              <em className="text-forest-950 not-italic font-semibold underline decoration-gold-600/50">"Approx. drive"</em>.
              Because mountain roads feature winding terrain, seasonal weather, and varying road conditions, travel times are realistic estimates rather than guaranteed schedules.
            </span>
          </div>
        </div>
      </Container>

      {/* =========================================================================
          DESKTOP IMMERSIVE VERTICAL STORYTELLER (lg:block)
          ========================================================================= */}
      <div className="hidden lg:block relative">
        <Container size="wide">
          <div className="grid grid-cols-12 gap-12 xl:gap-16 items-start relative">
            
            {/* LEFT COLUMN: PINNED CINEMATIC VISUAL DISPLAY (Sticky) */}
            <div className="col-span-6 sticky top-28 self-start h-[calc(100vh-8.5rem)] flex flex-col justify-between py-2">
              {/* Outer Framed Visual Stage */}
              <div className="relative w-full h-[82%] rounded-none overflow-hidden border border-[#E7DFCD] bg-forest-950 shadow-xl">
                {/* Stacked Chapter Photographs with Smooth Crossfade */}
                {chapters.map((ch, idx) => {
                  const isCurrent = idx === activeChapterIndex;
                  return (
                    <div
                      key={ch.chapterNumber}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                        isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={ch.image}
                        alt={`${ch.name} - ${ch.chapterTag}`}
                        className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
                      />

                      {/* Dark gradient vignettes for editorial depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  );
                })}

                {/* Top Chapter Metadata Overlay */}
                <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between text-xs font-mono tracking-widest text-forest-950 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#E7DFCD] font-medium shadow-sm">
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold-600 animate-pulse" />
                    CHAPTER {currentChapter.chapterNumber} OF 08
                  </span>
                  <span className="text-gold-700 font-semibold">{currentChapter.distance} from retreat</span>
                </div>

                {/* Bottom In-Frame Caption */}
                <div className="absolute bottom-5 left-5 right-5 z-20 p-4 bg-white/95 backdrop-blur-md border border-[#E7DFCD] shadow-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700 font-semibold mb-1">
                    {currentChapter.chapterNumber} — {currentChapter.chapterTag}
                  </p>
                  <h4 className="font-serif text-xl text-forest-950 font-normal">
                    {currentChapter.name}
                  </h4>
                  <p className="font-ui text-xs text-forest-900/75 font-light mt-0.5 line-clamp-1">
                    {currentChapter.subtitle}
                  </p>
                </div>
              </div>

              {/* Quick-Jump Chapter Navigator Bar (Bottom of sticky pane) */}
              <div className="pt-3">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-forest-900/70 mb-2 font-medium">
                  <span>Chapter Index</span>
                  <span className="text-gold-700 font-semibold">{activeChapterIndex + 1} / {chapters.length}</span>
                </div>

                <div className="grid grid-cols-8 gap-1.5">
                  {chapters.map((ch, idx) => {
                    const isActive = idx === activeChapterIndex;
                    return (
                      <button
                        key={ch.chapterNumber}
                        onClick={() => scrollToChapter(idx)}
                        className={`py-1.5 px-1 text-center font-mono text-[11px] transition-all rounded-none border cursor-pointer ${
                          isActive
                            ? "bg-forest-950 text-white border-forest-950 font-semibold shadow-xs"
                            : "bg-white text-forest-950 border-[#E7DFCD] hover:border-gold-500/60"
                        }`}
                        title={`${ch.chapterNumber} — ${ch.name}`}
                        aria-label={`Jump to Chapter ${ch.chapterNumber}: ${ch.name}`}
                      >
                        {ch.chapterNumber}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SCROLLING EDITORIAL CHAPTERS */}
            <div className="col-span-6 space-y-36 py-8">
              {chapters.map((chapter, idx) => {
                const isActive = idx === activeChapterIndex;

                return (
                  <div
                    key={chapter.chapterNumber}
                    ref={(el) => {
                      chapterRefs.current[idx] = el;
                    }}
                    data-chapter-index={idx}
                    id={`chapter-${chapter.chapterNumber}`}
                    className={`min-h-[70vh] flex flex-col justify-center transition-all duration-500 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-45 translate-y-2"
                    }`}
                  >
                    <div className="bg-white border border-[#E7DFCD] p-8 sm:p-10 rounded-none shadow-sm relative group hover:border-gold-500/50 hover:shadow-md transition-all">
                      {/* Top Chapter Tag Accent */}
                      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#E7DFCD]">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
                          {chapter.chapterNumber} — {chapter.chapterTag}
                        </span>
                        <span className="font-mono text-xs text-forest-900/60 font-medium">
                          {chapter.distance}
                        </span>
                      </div>

                      {/* Chapter Title */}
                      <h3 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal tracking-tight mb-1">
                        {chapter.name}
                      </h3>

                      {/* Chapter Subtitle */}
                      <p className="font-serif italic text-base text-gold-700 font-light mb-5">
                        {chapter.subtitle}
                      </p>

                      {/* Explicit "Approx. drive" Callout Badge (Mandatory Requirement) */}
                      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5] border border-[#E7DFCD] rounded-none text-xs font-ui text-forest-950 font-medium">
                        <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span className="tracking-wide">{chapter.approxDrive}</span>
                      </div>

                      {/* Editorial Storytelling Copy */}
                      <p className="font-ui text-sm sm:text-base text-forest-900/80 leading-relaxed font-light mb-6">
                        {chapter.editorialCopy}
                      </p>

                      {/* Curated Highlights Chips */}
                      <div className="mb-8">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-forest-900/60 mb-2 font-semibold">
                          Key Highlights
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {chapter.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-ui bg-[#FAF8F5] border border-[#E7DFCD] text-forest-950"
                            >
                              <Sparkles className="w-2.5 h-2.5 text-gold-600" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-4 border-t border-[#E7DFCD]">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            `${chapter.name} Morni Hills Haryana`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-ui uppercase tracking-wider text-forest-950 hover:text-gold-700 font-semibold transition-colors group/link"
                        >
                          <Navigation className="w-3.5 h-3.5 text-gold-600" />
                          <span>View on Google Maps</span>
                          <ExternalLink className="w-3 h-3 text-gold-600 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>

                        <button
                          onClick={() => scrollToChapter((idx + 1) % chapters.length)}
                          className="ml-auto inline-flex items-center gap-1 text-xs font-ui text-forest-900/60 hover:text-forest-950 transition-colors cursor-pointer"
                        >
                          <span>Next Chapter</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          MOBILE & TABLET SLIDING CAROUSEL (lg:hidden) - COMPACT & SWIPEABLE
          ========================================================================= */}
      <div className="lg:hidden">
        <Container size="default">
          {/* Mobile Chapter Selector Pills (Horizontal Scroll) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none no-scrollbar">
            {chapters.map((ch, idx) => {
              const isActive = idx === mobileIndex;
              return (
                <button
                  key={ch.chapterNumber}
                  onClick={() => setMobileIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-forest-950 text-gold-300 border-gold-400 font-bold shadow-sm scale-105"
                      : "bg-[#FAF8F5] text-forest-900/70 border-[#E7DFCD]"
                  }`}
                >
                  {ch.chapterNumber} · {ch.name.split(" ")[0]}
                </button>
              );
            })}
          </div>

          {/* Swipeable Active Chapter Card */}
          {(() => {
            const chapter = chapters[mobileIndex];
            return (
              <div
                onTouchStart={handleMobileTouchStart}
                onTouchEnd={handleMobileTouchEnd}
                className="bg-white border border-[#E7DFCD] rounded-2xl overflow-hidden shadow-lg select-none transition-all duration-300"
              >
                {/* Chapter Large Photograph */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                  <img
                    src={chapter.image}
                    alt={`${chapter.name} - ${chapter.chapterTag}`}
                    className="w-full h-full object-cover filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Chapter Header Pill */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/30 font-mono text-[11px] text-gold-300 uppercase tracking-wider font-semibold">
                    {chapter.chapterNumber} — {chapter.chapterTag}
                  </div>

                  {/* Distance Pill */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-mono text-[11px] text-white font-medium">
                    {chapter.distance}
                  </div>

                  {/* Navigation Arrow Overlays for Mobile */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={handleMobilePrev}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white hover:text-gold-300 cursor-pointer"
                      aria-label="Previous Chapter"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleMobileNext}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white hover:text-gold-300 cursor-pointer"
                      aria-label="Next Chapter"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mobile Counter Pill */}
                  <div className="absolute bottom-3 left-3 font-mono text-xs text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-gold-300 font-bold">{chapter.chapterNumber}</span> / 0{chapters.length}
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal mb-1">
                    {chapter.name}
                  </h3>

                  <p className="font-serif italic text-sm text-gold-700 font-light mb-4">
                    {chapter.subtitle}
                  </p>

                  {/* Approx Drive Callout Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7DFCD] text-xs font-ui text-forest-950 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{chapter.approxDrive}</span>
                  </div>

                  <p className="font-ui text-sm text-forest-900/80 font-light leading-relaxed mb-5">
                    {chapter.editorialCopy}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {chapter.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-ui bg-[#FAF8F5] border border-[#E7DFCD] rounded-full text-forest-950"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-gold-600" />
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Link to Map */}
                  <div className="pt-3 border-t border-[#E7DFCD] flex items-center justify-between">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${chapter.name} Morni Hills Haryana`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-ui uppercase tracking-wider text-forest-950 hover:text-gold-700 font-semibold"
                    >
                      <MapPin className="w-3.5 h-3.5 text-gold-600" />
                      <span>Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-gold-600" />
                    </a>

                    <span className="text-[11px] font-mono text-forest-900/50 uppercase tracking-widest">
                      Swipe ↔
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </Container>
      </div>
    </section>
  );
};
