import React from "react";
import { Award, Trophy, Users, MapPin } from "lucide-react";
import { ACADEMY_LOCATIONS_COUNT, ACADEMY_LOCATIONS_SUMMARY } from "@/lib/constants/locations";
import { SPORTS_LIST } from "@/lib/constants/sports";
import { FOUNDER_DATA } from "@/lib/constants/founder";

const STATS = [
  {
    value: FOUNDER_DATA.experienceYears,
    label: "Years of Excellence",
    subtext: "Professional Sports Coaching & Physical Education",
    icon: Award,
    color: "text-amber-500",
  },
  {
    value: `${SPORTS_LIST.length}`,
    label: "Sporting Disciplines",
    subtext: "From Cricket & Football to Archery & Swimming",
    icon: Trophy,
    color: "text-red-500",
  },
  {
    value: FOUNDER_DATA.childrenCoached.replace(" Children Coached", "+"),
    label: "Children Coached",
    subtext: "Grassroots Movement to Competitive Squads",
    icon: Users,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    value: `${ACADEMY_LOCATIONS_COUNT}`,
    label: "Chennai Centers",
    subtext: ACADEMY_LOCATIONS_SUMMARY,
    icon: MapPin,
    color: "text-emerald-600 dark:text-emerald-400",
  },
];

export function StatsBanner() {
  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-3xl bg-card border border-border shadow-xl backdrop-blur-xl">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-border/60"
            >
              <div className={`p-3 rounded-xl bg-card border border-border ${stat.color} shrink-0 shadow-2xs`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-foreground font-mono tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground/90">
                  {stat.label}
                </p>
                <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                  {stat.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
