"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Check, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SportCard } from "@/components/shared/SportCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SPORTS_LIST } from "@/lib/constants/sports";

const CATEGORIES = ["All", "Field & Court", "Racket Sports", "Precision & Water", "Endurance"] as const;

export function SportsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSports = activeCategory === "All"
    ? SPORTS_LIST
    : SPORTS_LIST.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="12 Disciplines"
          title="12 Sports. Structured Development."
          subtitle="Multiple sports. One commitment to development. Structured coaching programmes designed to develop fundamental skills, sporting ability, tactical understanding and athletic confidence."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-105"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSports.map((sport) => (
            <div key={sport.id} className="flex flex-col">
              <SportCard sport={sport} />
              {/* Confirmed Location Availability Tag */}
              <div className="mt-2 px-3 py-1.5 rounded-lg bg-card border border-border text-[10px] text-muted-foreground flex items-center gap-1.5 shadow-2xs">
                <MapPin className="h-3 w-3 text-brand-primary shrink-0" />
                <span className="truncate">{sport.locationAvailability.join(" • ")}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-14 p-6 rounded-2xl bg-card border border-border text-center max-w-3xl mx-auto space-y-3 shadow-xs">
          <p className="text-xs sm:text-sm text-muted-foreground">
            <strong className="text-foreground">Operational Availability Note: </strong>
            &ldquo;Gallery images are illustrative. Sports availability may vary by location and programme schedule. Contact our team to confirm current batch timings at Thiruverkadu or Prestige Bella Vista.&rdquo;
          </p>
          <Button asChild size="default" variant="default" className="font-bold text-xs uppercase tracking-wider gap-2">
            <Link href="/sports">
              <span>View Detailed 12-Sport Curriculums</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
