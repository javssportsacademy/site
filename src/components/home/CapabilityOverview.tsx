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
    <section className="py-20 md:py-24 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl space-y-2">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Integrated Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Everything <span className="text-brand-primary">We Deliver</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              From foundational early-years balance to institutional physical education, our platform covers five dedicated operational domains.
            </p>
          </div>

          <Button asChild variant="outline" className="border-border bg-card text-foreground hover:bg-muted font-bold text-xs uppercase tracking-wider shadow-xs shrink-0">
            <Link href="/programs">
              <span>View Full Programmes Guide</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>

        {/* Streamlined Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMY_CAPABILITIES.map((cap) => {
            const Icon = ICONS_MAP[cap.id] || Trophy;
            return (
              <div
                key={cap.id}
                className="p-6 sm:p-7 rounded-3xl bg-card border border-border hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md space-y-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-brand-primary dark:text-amber-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-brand-primary">
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

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {cap.description}
                  </p>

                  {/* Concise Pill Tags Instead of Long Lists */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cap.scopeList.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-muted text-[10px] font-semibold text-foreground/80 border border-border/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground font-medium">
                    {cap.audienceTarget}
                  </span>
                  <Link
                    href={cap.link}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-primary hover:underline"
                  >
                    <span>Curriculum Scope</span>
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
