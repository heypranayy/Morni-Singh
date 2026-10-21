import React from "react";
import {
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryItem
} from "../../data/galleryData";

export interface GalleryFilterBarProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  items: GalleryItem[];
  className?: string;
}

export const GalleryFilterBar: React.FC<GalleryFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  items,
  className = ""
}) => {
  // Compute counts for each category
  const getCategoryCount = (cat: GalleryCategory) => {
    if (cat === "ALL") return items.length;
    return items.filter((item) => item.category === cat).length;
  };

  return (
    <div
      className={`flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#E7DFCD] ${className}`}
    >
      {GALLERY_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.key;
        const count = getCategoryCount(cat.key);

        return (
          <button
            key={cat.key}
            onClick={() => onSelectCategory(cat.key)}
            className={`whitespace-nowrap px-4 py-2 rounded-none text-xs font-ui uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
              isActive
                ? "bg-forest-950 text-white border-forest-950 font-semibold shadow-xs"
                : "bg-white text-forest-950 hover:bg-[#FAF8F5] hover:border-gold-500/60 border-[#E7DFCD]"
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none ${
                isActive
                  ? "bg-white/20 text-white font-medium"
                  : "bg-[#FAF8F5] text-forest-900/70 border border-[#E7DFCD]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
