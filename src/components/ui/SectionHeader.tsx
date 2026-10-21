import React from "react";
import { OverlineBadge } from "./Badge";

export interface SectionHeaderProps {
  overline?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  isItalicTitle?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  title,
  subtitle,
  align = "center",
  className = "",
  titleAs: TitleTag = "h2",
  isItalicTitle = false
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}>
      {overline && (
        <div className="mb-3">
          <OverlineBadge>{overline}</OverlineBadge>
        </div>
      )}

      <TitleTag
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight text-forest-950 tracking-tight ${
          isItalicTitle ? "italic" : ""
        }`}
      >
        {title}
      </TitleTag>

      {/* Subtle gold accent rule */}
      <div
        className={`w-12 h-0.5 bg-gradient-to-r from-gold-500/80 to-gold-400/40 my-5 ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />

      {subtitle && (
        <p className="font-ui text-base sm:text-lg text-forest-900/80 leading-relaxed max-w-2xl font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
