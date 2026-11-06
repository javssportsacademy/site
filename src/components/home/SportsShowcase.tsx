"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SportCard } from "@/components/shared/SportCard";
import { Button } from "@/components/ui/button";
import { SPORTS_LIST } from "@/lib/constants/sports";

const CATEGORIES = ["All", "Field & Court", "Racket Sports", "Precision & Water", "Endurance"] as const;

export function SportsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSports = activeCategory === "All"
    ? SPORTS_LIST
    : SPORTS_LIST.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-slate-900/60 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="12 Structured Disciplines"
          title="Multiple Sports. One Commitment."
          subtitle="Structured coaching programmes designed to develop fundamental skills, sporting ability, tactical understanding and athletic confidence."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-brand-primary text-slate-950 shadow-lg shadow-brand-primary/20 scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSports.map((sport) => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-14 text-center">
          <Button asChild size="lg" variant="default" className="font-black uppercase tracking-wider gap-2">
            <Link href="/sports">
              <Trophy className="h-5 w-5" />
              <span>Explore All 12 Sports & Curriculums</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-3 text-xs text-brand-text-muted">
            &ldquo;Gallery images and sport availability may vary by location and programme.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
