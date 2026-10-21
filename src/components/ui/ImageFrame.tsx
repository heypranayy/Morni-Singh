import React, { useState } from "react";

export interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "3/2" | "1/1" | "21/9" | "auto";
  caption?: string;
  categoryTag?: string;
  className?: string;
  withHoverZoom?: boolean;
  withCorners?: boolean;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  src,
  alt,
  aspectRatio = "3/2",
  caption,
  categoryTag,
  className = "",
  withHoverZoom = true,
  withCorners = true
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const ratioClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "3/2": "aspect-3/2",
    "1/1": "aspect-square",
    "21/9": "aspect-21/9",
    "auto": ""
  };

  return (
    <figure className={`relative group overflow-hidden ${className}`}>
      {/* Outer Luxury Frame Container */}
      <div
        className={`relative w-full ${ratioClasses[aspectRatio]} overflow-hidden bg-forest-900 border border-gold-500/25`}
      >
        {/* Subtle background placeholder shimmer while loading */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-forest-900/80 animate-pulse flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-gold-400/50">Morni Singh's</span>
          </div>
        )}

        {/* Real or Local Placeholder Image */}
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
              withHoverZoom ? "group-hover:scale-105" : ""
            } ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        ) : (
          /* Graceful Fallback if image path is unavailable */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-forest-900 border border-gold-500/20">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-2">
              [ PHOTOGRAPHY SLOT ]
            </span>
            <p className="text-sm font-serif italic text-parchment-200">{alt}</p>
            <span className="text-[11px] text-parchment-400 mt-2">Source: {src}</span>
          </div>
        )}

        {/* Category Tag badge overlay (if specified) */}
        {categoryTag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 text-[10px] font-ui uppercase tracking-widest bg-forest-950/80 backdrop-blur-xs text-gold-400 border border-gold-500/30">
              {categoryTag}
            </span>
          </div>
        )}

        {/* Architectural corner notches (Luxury motif) */}
        {withCorners && (
          <>
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/60 pointer-events-none" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/60 pointer-events-none" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500/60 pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500/60 pointer-events-none" />
          </>
        )}
      </div>

      {/* Caption & Metadata */}
      {caption && (
        <figcaption className="mt-2 text-xs font-ui text-parchment-400/80 tracking-wide italic flex items-center justify-between">
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
