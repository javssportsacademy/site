import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CredibilityBar } from "@/components/home/CredibilityBar";
import { InsideTheGameSection } from "@/components/home/InsideTheGameSection";
import { CapabilityOverview } from "@/components/home/CapabilityOverview";
import { AudienceJourneys } from "@/components/home/AudienceJourneys";
import { SportsShowcase } from "@/components/home/SportsShowcase";
import { FounderSection } from "@/components/home/FounderSection";
import { TeamAndAchievements } from "@/components/home/TeamAndAchievements";
import { SafeguardingSection } from "@/components/home/SafeguardingSection";
import { PartnershipsPreview } from "@/components/home/PartnershipsPreview";
import { LocationsPreview } from "@/components/home/LocationsPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0 bg-background text-foreground">
      {/* 01. The JAV'S Promise (Hero) */}
      <HeroSection />

      {/* 02. Experience & Verified Credibility Bar */}
      <CredibilityBar />

      {/* 03. Signature Feature: Inside the Game — With JAV'S */}
      <InsideTheGameSection />

      {/* 04. Everything We Do (Capabilities Overview) */}
      <CapabilityOverview />

      {/* 05. Find Your Path (Audience-Specific Journeys) */}
      <AudienceJourneys />

      {/* 06. 12 Sports. Structured Development */}
      <SportsShowcase />

      {/* 07. The People Behind JAV'S (Founder Leadership) */}
      <FounderSection />

      {/* 08. Specialist Mentors & Proven Milestones (Blocker 3: Coaching Team & Achievements) */}
      <TeamAndAchievements />

      {/* 09. Standards & Safeguarding */}
      <SafeguardingSection />

      {/* 10. Bring JAV'S to Your Institution (Institutional Solutions) */}
      <PartnershipsPreview />

      {/* 11. Train With JAV'S (Locations & Verified Enquiry) */}
      <LocationsPreview />
    </div>
  );
}
