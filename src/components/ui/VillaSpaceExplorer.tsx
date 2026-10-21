import React, { useState } from "react";
import { retreatData, type VillaSpace } from "../../data/retreatData";
import { ImageFrame } from "./ImageFrame";
import { Check, Sparkles } from "lucide-react";

export const VillaSpaceExplorer: React.FC = () => {
  const spaces = retreatData.villa.spaces;
  const [activeSpaceId, setActiveSpaceId] = useState<string>(spaces[0].id);

  const activeSpace: VillaSpace =
    spaces.find((s) => s.id === activeSpaceId) || spaces[0];

  return (
    <div className="border border-gold-500/20 bg-forest-900/40 p-6 sm:p-10">
      {/* Space Tab Navigation */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-gold-500/15 mb-8">
        {spaces.map((space) => {
          const isActive = space.id === activeSpaceId;
          return (
            <button
              key={space.id}
              onClick={() => setActiveSpaceId(space.id)}
              className={`font-ui text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-300 border cursor-pointer ${
                isActive
                  ? "bg-gold-500 text-forest-950 border-gold-500 font-semibold shadow-sm"
                  : "bg-forest-950/60 text-parchment-200 border-gold-500/20 hover:border-gold-500/50 hover:text-gold-300"
              }`}
            >
              {space.name}
            </button>
          );
        })}
      </div>

      {/* Active Space Showcase View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Big Image Frame */}
        <div className="lg:col-span-7">
          <ImageFrame
            src={activeSpace.image}
            alt={activeSpace.name}
            aspectRatio="16/9"
            categoryTag="2BHK VILLA SPACE"
            caption={`${activeSpace.name} · ${retreatData.property.name}`}
          />
        </div>

        {/* Right: Space Narrative & Features */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-ui font-medium mb-1">
            {activeSpace.subtitle}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-parchment-50 font-normal mb-4">
            {activeSpace.name}
          </h3>
          <p className="font-ui text-sm text-parchment-300/80 leading-relaxed font-light mb-6">
            {activeSpace.description}
          </p>

          <div className="border-t border-gold-500/15 pt-5">
            <h4 className="text-xs uppercase tracking-widest text-parchment-400 font-ui mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Key Space Specifications
            </h4>
            <ul className="space-y-2 text-xs font-ui text-parchment-200">
              {activeSpace.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
