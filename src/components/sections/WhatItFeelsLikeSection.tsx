import React from "react";
import { Container } from "../primitives/Container";
import { OverlineBadge } from "../ui/Badge";
import { retreatData } from "../../data/retreatData";
import { Moon, Users, Compass, Sparkles } from "lucide-react";

export const WhatItFeelsLikeSection: React.FC = () => {
  const themes = retreatData.emotionalThemes;

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "REST":
        return <Moon className="w-5 h-5 text-gold-400 stroke-[1.5]" />;
      case "CONNECT":
        return <Users className="w-5 h-5 text-gold-400 stroke-[1.5]" />;
      case "EXPLORE":
        return <Compass className="w-5 h-5 text-gold-400 stroke-[1.5]" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-400 stroke-[1.5]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-forest-950 relative overflow-hidden border-b border-[#E7DFCD]">
      <Container size="wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <OverlineBadge dotColor="gold" className="mb-3">
            THE GUEST EXPERIENCE · SENSORY SANCTUARY
          </OverlineBadge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest-950 font-normal tracking-tight">
            What It Feels Like to Stay Here
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-gold-700 font-light mt-2">
            Three dimensions of life in the Shivalik Hills
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto my-5" />
          <p className="font-ui text-sm sm:text-base text-forest-900/80 leading-relaxed font-light">
            Beyond an accommodation, Morni Singh's is an invitation to slow down, reconnect,
            and wander freely in Haryana's sole pine-clad hill country.
          </p>
        </div>

        {/* 3 Emotional Themes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {themes.map((item, idx) => (
            <article
              key={item.id}
              className="card-luxury-light flex flex-col justify-between border border-[#E7DFCD] bg-[#FAF8F5] p-8 sm:p-10 relative group hover:border-gold-500/50 hover:shadow-lg transition-all duration-500"
            >
              {/* Top Accent: Numbering & Theme Pill */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E7DFCD] mb-6">
                  <div className="flex items-center gap-2.5">
                    {getThemeIcon(item.theme)}
                    <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold-700">
                      {item.theme}
                    </span>
                  </div>
                  <span className="font-serif italic text-xl text-gold-600/40 font-light">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal mb-2 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-ui uppercase tracking-wider text-gold-700/90 mb-5 font-medium">
                  {item.tagline}
                </p>

                {/* Original Copy */}
                <p className="font-ui text-sm text-forest-900/80 leading-relaxed font-light mb-8">
                  {item.copy}
                </p>
              </div>

              {/* Bottom: Highlight Badge */}
              <div className="pt-6 border-t border-[#E7DFCD]">
                <span className="inline-flex items-center gap-2 text-xs font-ui text-forest-950 bg-white px-3 py-1.5 border border-[#E7DFCD] w-full font-medium shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0" />
                  <span className="truncate">{item.highlight}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
