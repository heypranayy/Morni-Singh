import React, { useState } from "react";
import { retreatData, type ExperienceItem } from "../../data/retreatData";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import {
  Sparkles,
  Clock,
  CheckCircle2,
  X
} from "lucide-react";

export interface ExperiencesGridSectionProps {
  className?: string;
  showSectionHeader?: boolean;
}

type ExperienceCategory = "all" | "quiet" | "outdoor" | "art";

export const ExperiencesGridSection: React.FC<ExperiencesGridSectionProps> = ({
  className = "",
  showSectionHeader = true
}) => {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>("all");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const experiences = retreatData.experiences;

  const categoryMap: Record<string, ExperienceCategory> = {
    "scenic-views": "quiet",
    "nature-walks": "outdoor",
    "trekking-exploration": "outdoor",
    "birdwatching": "outdoor",
    "misty-mornings": "quiet",
    "artistic-interiors": "art",
    "relaxing-hills": "quiet",
    "local-exploration": "art"
  };

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return categoryMap[exp.id] === activeFilter;
  });

  return (
    <section
      id="experiences"
      className={`relative bg-white text-forest-950 py-20 sm:py-28 border-t border-[#E7DFCD] ${className}`}
    >
      <Container size="wide">
        {showSectionHeader && (
          <div className="max-w-3xl mb-12 sm:mb-16">
            <OverlineBadge dotColor="gold" className="mb-3">
              RESEARCH-VERIFIED RETREAT LIVING
            </OverlineBadge>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest-950 font-normal tracking-tight leading-tight mb-4">
              Experiences in the Hills
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-gold-700 font-light mb-6">
              The property is not only a room. The destination is part of the product.
            </p>

            <p className="font-ui text-sm sm:text-base text-forest-900/80 font-light leading-relaxed mb-6">
              At Morni Singh's, experiences are rooted in the natural geography of the Shivalik range—pine needle paths,
              mountain horizon sunrises, quiet reading verandas, and evening fires. We do not invent manufactured entertainment;
              we celebrate authentic mountain quietude.
            </p>

            {/* Authenticity Pledge Callout */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5] border border-[#E7DFCD] rounded-none text-xs font-ui text-gold-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>Authentic Shivalik activities only · No artificial facilities or commercial distractions</span>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E7DFCD]">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 text-xs font-ui uppercase tracking-wider rounded-none transition-colors cursor-pointer ${
              activeFilter === "all"
                ? "bg-forest-950 text-white font-medium shadow-xs"
                : "bg-[#FAF8F5] text-forest-950 hover:bg-[#F5F1E8] border border-[#E7DFCD]"
            }`}
          >
            All Moments ({experiences.length})
          </button>

          <button
            onClick={() => setActiveFilter("quiet")}
            className={`px-4 py-2 text-xs font-ui uppercase tracking-wider rounded-none transition-colors cursor-pointer ${
              activeFilter === "quiet"
                ? "bg-forest-950 text-white font-medium shadow-xs"
                : "bg-[#FAF8F5] text-forest-950 hover:bg-[#F5F1E8] border border-[#E7DFCD]"
            }`}
          >
            Tranquil & Restorative (3)
          </button>

          <button
            onClick={() => setActiveFilter("outdoor")}
            className={`px-4 py-2 text-xs font-ui uppercase tracking-wider rounded-none transition-colors cursor-pointer ${
              activeFilter === "outdoor"
                ? "bg-forest-950 text-white font-medium shadow-xs"
                : "bg-[#FAF8F5] text-forest-950 hover:bg-[#F5F1E8] border border-[#E7DFCD]"
            }`}
          >
            Trails & Birding (3)
          </button>

          <button
            onClick={() => setActiveFilter("art")}
            className={`px-4 py-2 text-xs font-ui uppercase tracking-wider rounded-none transition-colors cursor-pointer ${
              activeFilter === "art"
                ? "bg-forest-950 text-white font-medium shadow-xs"
                : "bg-[#FAF8F5] text-forest-950 hover:bg-[#F5F1E8] border border-[#E7DFCD]"
            }`}
          >
            Art & Hamlets (2)
          </button>
        </div>

        {/* Experiences Grid: Mobile Horizontal Snap Slider / Desktop 4-Col Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none no-scrollbar">
          {filteredExperiences.map((exp, idx) => (
            <article
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className="min-w-[82vw] sm:min-w-0 snap-center shrink-0 sm:shrink group bg-[#FAF8F5] border border-[#E7DFCD] hover:border-gold-500/50 rounded-2xl sm:rounded-none overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-950">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[1.03] contrast-[1.04] saturate-[1.12]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Timing Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 border border-[#E7DFCD] flex items-center gap-1.5 text-[11px] font-ui text-forest-950 font-medium">
                    <Clock className="w-3 h-3 text-gold-600" />
                    <span>{exp.timing}</span>
                  </div>

                  {/* Experience Number */}
                  <div className="absolute top-3 right-3 font-mono text-[11px] text-white bg-forest-950/80 px-2 py-0.5 border border-white/20">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-2xl text-forest-950 font-normal mb-1 group-hover:text-gold-700 transition-colors">
                    {exp.title}
                  </h3>

                  <p className="font-serif italic text-xs text-gold-700 font-medium mb-3">
                    {exp.tagline}
                  </p>

                  <p className="font-ui text-xs sm:text-sm text-forest-900/75 font-light leading-relaxed mb-4 line-clamp-3">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Highlights Chips */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E7DFCD]">
                  {exp.highlights.slice(0, 3).map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1 text-[10px] font-ui text-forest-950 bg-white border border-[#E7DFCD] px-2 py-0.5"
                    >
                      <Sparkles className="w-2 h-2 text-gold-600" />
                      {item}
                    </span>
                  ))}
                  {exp.highlights.length > 3 && (
                    <span className="text-[10px] font-mono text-gold-700 font-semibold self-center">
                      +{exp.highlights.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4 text-xs font-mono text-gold-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Swipe left to explore all {filteredExperiences.length} experiences ➔</span>
        </div>
      </Container>

      {/* Expanded Experience Detail Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-[#E7DFCD] rounded-none overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 p-2 text-forest-950 hover:text-gold-700 bg-[#FAF8F5] border border-[#E7DFCD] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 border border-[#E7DFCD]">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 px-3 py-1 border border-[#E7DFCD] text-xs font-ui text-forest-950 font-medium">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                <span>Best Timing: {selectedExperience.timing}</span>
              </div>
            </div>

            {/* Modal Typography */}
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-700 font-semibold">
                Retreat Experience Highlight
              </span>
              <h3 className="font-serif text-3xl text-forest-950 font-normal mt-1">
                {selectedExperience.title}
              </h3>
              <p className="font-serif italic text-base text-gold-700 font-light">
                {selectedExperience.tagline}
              </p>
            </div>

            <p className="font-ui text-sm text-forest-900/80 leading-relaxed font-light mb-6">
              {selectedExperience.description}
            </p>

            {/* Highlights Full List */}
            <div className="mb-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-forest-900/60 mb-2 font-semibold">
                Curated Elements
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-ui bg-[#FAF8F5] border border-[#E7DFCD] text-forest-950"
                  >
                    <Sparkles className="w-3 h-3 text-gold-600" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7DFCD] flex items-center justify-between">
              <span className="text-xs font-ui text-forest-900/70">
                Included with your private 2BHK stay
              </span>
              <button
                onClick={() => setSelectedExperience(null)}
                className="text-xs font-ui uppercase tracking-wider text-forest-950 hover:text-gold-700 font-semibold cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
