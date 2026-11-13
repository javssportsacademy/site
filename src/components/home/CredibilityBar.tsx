import React from "react";
import { Award, Shield, Users, MapPin } from "lucide-react";
import { ACADEMY_LOCATIONS_COUNT, ACADEMY_LOCATIONS_SUMMARY } from "@/lib/constants/locations";
import { FOUNDER_DATA } from "@/lib/constants/founder";

const PROOF_POINTS = [
  {
    value: `${FOUNDER_DATA.experienceYears} Yrs`,
    title: "Coaching Leadership",
    detail: "TNCA/TDCA league playing experience & M.P.Ed. direction.",
    icon: Award,
  },
  {
    value: "Certified",
    title: "MSDCA & Coaching Beyond",
    detail: "Professional certifications in modern athletic pedagogy.",
    icon: Shield,
  },
  {
    value: FOUNDER_DATA.childrenCoached.replace(" Children Coached", "+"),
    title: "Children Coached",
    detail: "Grassroots movement to competitive tournament squads.",
    icon: Users,
  },
  {
    value: `${ACADEMY_LOCATIONS_COUNT} Hubs`,
    title: "Operating Locations",
    detail: `${ACADEMY_LOCATIONS_SUMMARY}.`,
    icon: MapPin,
  },
];

export function CredibilityBar() {
  return (
    <section className="bg-background border-b border-border py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-xs"
              >
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-brand-primary dark:text-amber-400 shrink-0 mt-0.5">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-foreground font-mono tracking-tight">
                    {item.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/90 mt-0.5">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-normal mt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
