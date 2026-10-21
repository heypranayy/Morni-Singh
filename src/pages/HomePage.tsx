import React from "react";
import { Container, Section } from "../components/primitives/Container";
import { StatGrid } from "../components/ui/StatBlock";
import { LuxuryCinematicHero } from "../components/sections/LuxuryCinematicHero";
import { InfinitePhotoMarquee } from "../components/sections/InfinitePhotoMarquee";
import { VisualStoriesStrip } from "../components/sections/VisualStoriesStrip";
import { TheVillaSection } from "../components/sections/TheVillaSection";
import { FullWidthPhotoStory } from "../components/sections/FullWidthPhotoStory";
import { WhatItFeelsLikeSection } from "../components/sections/WhatItFeelsLikeSection";
import { ExperiencesGridSection } from "../components/sections/ExperiencesGridSection";
import { AroundMorniHillsSection } from "../components/sections/AroundMorniHillsSection";
import { GallerySection } from "../components/sections/GallerySection";
import { StoriesFromTheHillsSection } from "../components/sections/StoriesFromTheHillsSection";
import { StayEnquirySection } from "../components/sections/StayEnquirySection";
import { SEOHead } from "../components/common/SEOHead";

export const HomePage: React.FC = () => {
  const statItems = [
    {
      value: "1,220m",
      label: "Shivalik Altitude",
      subtext: "Crisp pine mountain air (~4,000 ft)"
    },
    {
      value: "4.6 ★",
      label: "Guest Satisfaction",
      subtext: "15 verified reviews on primary listing"
    },
    {
      value: "4.5h",
      label: "From Delhi NCR",
      subtext: "Fastest authentic hill escape"
    },
    {
      value: "2BHK",
      label: "Private Residence",
      subtext: "860 sq ft private indoor & lawn expanse"
    }
  ];

  return (
    <div className="flex flex-col bg-white text-forest-950 font-ui">
      <SEOHead
        title="Boutique Mountain Sanctuary"
        description="Morni Singh's — an intimate 2BHK boutique hill sanctuary nestled at 1,220m in the Shivalik Hills of Haryana. Stay, Explore, Repeat! A Home Away From Home."
      />

      {/* 1. CINEMATIC REAL ASSET HERO SHOWCASE */}
      <LuxuryCinematicHero />

      {/* 2. STAT BLOCKS & VERIFIED HIGHLIGHTS */}
      <Section variant="warm" spacing="sm" className="border-b border-[#E7DFCD]">
        <Container size="wide">
          <StatGrid stats={statItems} columns={4} />
        </Container>
      </Section>

      {/* 3. INFINITE LUXURY VISUAL MARQUEE (12 REAL PROPERTY FRAMES IN MOTION) */}
      <InfinitePhotoMarquee />

      {/* 4. HERO ACCOMMODATION: THE VILLA EDITORIAL SPLIT-SCREEN & PHOTO SWITCHER */}
      <TheVillaSection />

      {/* 4. SENSORY HORIZONTAL STORIES STRIP: 24 HOURS IN THE HILLS */}
      <VisualStoriesStrip />

      {/* 5. FULL-WIDTH PHOTO STORY (Asymmetric Overlapping Composition) */}
      <FullWidthPhotoStory />

      {/* 6. "WHAT IT FEELS LIKE TO STAY HERE" (REST, CONNECT, EXPLORE) */}
      <WhatItFeelsLikeSection />

      {/* 6. RESEARCH-SUPPORTED EXPERIENCES */}
      <ExperiencesGridSection />

      {/* 7. IMMERSIVE DESTINATION CHAPTER STORYTELLER: AROUND MORNI HILLS */}
      <AroundMorniHillsSection />

      {/* 8. VISUAL RETREAT IN FRAMES: GALLERY SECTION */}
      <GallerySection maxItems={6} />

      {/* 9. STORIES FROM THE HILLS: VERIFIED SOCIAL PROOF */}
      <StoriesFromTheHillsSection />

      {/* 10. DIRECT CONVERSION: STAY ENQUIRY ENGINE & DYNAMIC WHATSAPP */}
      <StayEnquirySection id="booking" />
    </div>
  );
};
