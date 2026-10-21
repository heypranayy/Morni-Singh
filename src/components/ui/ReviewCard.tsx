import React from "react";
import { Star, Quote } from "lucide-react";

export interface ReviewCardProps {
  quote: string;
  author: string;
  origin: string;
  travelerType: string;
  ratingStars?: number;
  date?: string;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  quote,
  author,
  origin,
  travelerType,
  ratingStars = 5,
  date,
  className = ""
}) => {
  return (
    <div
      className={`card-luxury p-7 sm:p-8 flex flex-col justify-between border border-gold-500/20 bg-forest-900/50 relative overflow-hidden ${className}`}
    >
      <Quote className="w-10 h-10 text-gold-500/15 absolute top-5 right-5 pointer-events-none" />

      {/* Star rating */}
      <div className="flex items-center gap-1 mb-4 text-gold-400">
        {Array.from({ length: ratingStars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold-400 stroke-gold-400" />
        ))}
        <span className="ml-2 text-xs font-ui uppercase tracking-widest text-gold-400/80">
          5.0 / Verified Stay
        </span>
      </div>

      {/* Quote text */}
      <blockquote className="font-serif italic text-lg sm:text-xl text-parchment-100/90 leading-relaxed font-light mb-6">
        "{quote}"
      </blockquote>

      {/* Author metadata */}
      <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-ui">
        <div>
          <div className="font-medium text-parchment-50 tracking-wider uppercase">
            {author}
          </div>
          <div className="text-parchment-400/80 font-light mt-0.5">
            {origin} · <span className="text-gold-400/90">{travelerType}</span>
          </div>
        </div>
        {date && <span className="text-parchment-400/60 font-mono text-[11px]">{date}</span>}
      </div>
    </div>
  );
};
