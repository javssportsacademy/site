import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SPORTS_LIST } from "@/lib/constants/sports";
import { SportCard } from "@/components/shared/SportCard";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "12 Sports Disciplines | JAV'S SPORTS ACADEMY Chennai",
  description: "Explore our 12 structured sports coaching programmes: Cricket, Football, Badminton, Athletics, Swimming, Basketball, Tennis, Archery, Volleyball, Handball, Cycling, and Table Tennis.",
};

export default function SportsDirectoryPage() {
  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Structured Curriculum"
        title="12 Sporting Disciplines"
        subtitle="Multiple Sports. One Commitment to Development. Professional coaching, age-appropriate drills, and competitive pathways for every child and adult."
      >
        <div className="flex flex-wrap items-center gap-4">
          <TrialBookingModal />
          <DirectWhatsAppButton label="Enquire on WhatsApp" />
        </div>
      </SubpageHero>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-brand-primary/20 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-brand-primary shrink-0" />
            <div>
              <p className="font-bold text-foreground text-sm">
                Multi-Sport Foundation or Single-Sport Specialization
              </p>
              <p className="text-xs text-muted-foreground">
                Athletes can build broad athletic literacy across multiple sports before focusing on competitive state/district squads.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider shrink-0">
            Ages 4 to Seniors
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SPORTS_LIST.map((sport) => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>

        {/* Disclaimer / Note from Brochure */}
        <div className="mt-16 p-6 rounded-2xl bg-card border border-border text-center shadow-xs">
          <p className="text-xs text-muted-foreground italic">
            &ldquo;Gallery images and sport availability may vary by location and programme. Batch timings and equipment lists are provided upon enrollment.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
