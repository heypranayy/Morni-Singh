import React from "react";
import { ImageFrame } from "./ImageFrame";
import { Check } from "lucide-react";
import { Button } from "./Button";

export interface RoomCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  onExplore?: () => void;
  className?: string;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  title,
  subtitle,
  description,
  features,
  image,
  onExplore,
  className = ""
}) => {
  return (
    <article
      className={`card-luxury flex flex-col overflow-hidden border border-gold-500/20 bg-forest-900/60 ${className}`}
    >
      {/* Top Image Frame */}
      <ImageFrame
        src={image}
        alt={title}
        aspectRatio="16/9"
        categoryTag="VILLA SANCTUARY"
      />

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-widest text-gold-400/90 font-ui font-medium mb-1">
          {subtitle}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-parchment-50 font-normal mb-3">
          {title}
        </h3>
        <p className="font-ui text-sm text-parchment-300/80 leading-relaxed font-light mb-6">
          {description}
        </p>

        {/* Feature Pills / List */}
        <div className="border-t border-gold-500/15 pt-5 mb-6 mt-auto">
          <h4 className="text-xs uppercase tracking-widest text-parchment-400 font-ui mb-3">
            Space Amenities
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-parchment-200">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {onExplore && (
          <Button variant="outline" size="sm" onClick={onExplore} fullWidth>
            Explore Suite Details
          </Button>
        )}
      </div>
    </article>
  );
};
