import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Trophy, Baby, Activity, Heart, Building2 } from "lucide-react";
import { ACADEMY_CAPABILITIES } from "@/lib/constants/capabilities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ICONS_MAP: Record<string, React.ElementType> = {
  "sports-coaching": Trophy,
  "age-development": Baby,
  "sports-science": Activity,
  "wellness-mind": Heart,
  "events-institutional": Building2,
};

export function CapabilityOverview() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
            Institutional Breadth
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Everything We Do
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            JAV&apos;S Sports Academy is much more than a single-discipline training center. We operate an integrated sporting platform spanning youth development, competitive coaching, sports science, event officiating, and institutional partnerships.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACADEMY_CAPABILITIES.map((cap) => {
            const Icon = ICONS_MAP[cap.id] || Trophy;
            return (
              <div
                key={cap.id}
                className="p-8 rounded-3xl bg-card border border-border hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-brand-primary dark:text-amber-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-muted-foreground">
                      {cap.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-foreground tracking-tight">
                      {cap.familyTitle}
                    </h3>
                    <p className="text-xs font-semibold text-brand-primary mt-0.5">
                      {cap.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                      Scope of Services:
                    </p>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {cap.scopeList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground font-medium">
                    {cap.audienceTarget}
                  </span>
                  <Link
                    href={cap.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-primary-hover transition-colors"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
