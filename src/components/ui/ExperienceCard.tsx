import React from "react";
import { ImageFrame } from "./ImageFrame";
import { Clock, Sparkles } from "lucide-react";

export interface ExperienceCardProps {
  title: string;
  tagline: string;
  description: string;
  timing: string;
  image: string;
  highlights: string[];
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  tagline,
  description,
  timing,
  image,
  highlights,
  className = ""
}) => {
  return (
    <div
      className={`card-luxury flex flex-col overflow-hidden border border-gold-500/20 bg-forest-900/40 group ${className}`}
    >
      <ImageFrame
        src={image}
        alt={title}
        aspectRatio="4/3"
        categoryTag="EXPERIENCE"
      />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs text-gold-400 font-ui mb-2">
          <span className="uppercase tracking-widest font-medium">{tagline}</span>
          <span className="flex items-center gap-1 text-parchment-400/80">
            <Clock className="w-3.5 h-3.5 text-gold-500" />
            <span>{timing}</span>
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-2xl text-parchment-50 font-normal mb-3 group-hover:text-gold-300 transition-colors">
          {title}
        </h3>

        <p className="font-ui text-sm text-parchment-300/80 leading-relaxed font-light mb-5">
          {description}
        </p>

        {/* Highlights tag strip */}
        <div className="mt-auto pt-4 border-t border-gold-500/15 flex flex-wrap gap-2">
          {highlights.map((h, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] font-ui uppercase tracking-wider px-2 py-0.5 bg-forest-950/60 text-parchment-300 border border-gold-500/20"
            >
              <Sparkles className="w-2.5 h-2.5 text-gold-400" />
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
