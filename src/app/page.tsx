import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBanner } from "@/components/home/StatsBanner";
import { PillarsSection } from "@/components/home/PillarsSection";
import { SportsShowcase } from "@/components/home/SportsShowcase";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { JavsInboxPreview } from "@/components/home/JavsInboxPreview";
import { PartnershipsPreview } from "@/components/home/PartnershipsPreview";
import { FounderPreview } from "@/components/home/FounderPreview";
import { LocationsPreview } from "@/components/home/LocationsPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0">
      <HeroSection />
      <StatsBanner />
      <PillarsSection />
      <SportsShowcase />
      <ProgramsPreview />
      <JavsInboxPreview />
      <PartnershipsPreview />
      <FounderPreview />
      <LocationsPreview />
    </div>
  );
}
