import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-background via-background to-muted/40 border-b border-border">
      {/* Subtle ambient light warm radial glow */}
      <div className="absolute inset-0 bg-radial-[at_top_center] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-6">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-brand-primary dark:text-amber-400 text-[11px] sm:text-xs font-bold tracking-wide shadow-xs max-w-full">
            <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
            <span className="truncate sm:whitespace-normal">Chennai&apos;s Multi-Sport & Athletic Development Institution</span>
          </div>

          {/* Core Athletic Manifesto */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
              SPORT <span className="text-brand-primary">TEACHES</span> LIFE.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase text-foreground/85 dark:text-slate-200">
              ONE PLATFORM. EVERY STAGE OF GROWTH.
            </p>
          </div>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            At JAV&apos;S SPORTS ACADEMY, we develop human character, mental composure, and physical vitality across 12 structured sports disciplines. Led by Coach Mohammed Javeed (M.P.Ed.), we partner with families, schools, and residential communities to deliver accountable sports education.
          </p>

          {/* Scope Pillar Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold text-foreground/90 uppercase tracking-wider">
            <span className="px-3 py-1.5 rounded-lg bg-card border border-border shadow-xs text-foreground">Sports Coaching</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border border-border shadow-xs text-foreground">Physical Development</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border border-border shadow-xs text-foreground">Sports Science</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border border-border shadow-xs text-foreground">Events & Officiating</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border border-border shadow-xs text-foreground">Institutional PE</span>
          </div>

          {/* Audience Fast-Track Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <TrialBookingModal
              triggerButton={
                <Button size="lg" variant="default" className="font-bold text-sm tracking-wide gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/20 whitespace-normal text-left sm:text-center h-auto py-3 px-4">
                  <Users className="h-4 w-4 shrink-0" />
                  <span>For Parents: Programme Enquiry & Assessment</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Button>
              }
            />

            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold text-sm tracking-wide gap-2 border-border bg-card text-foreground hover:bg-muted shadow-xs whitespace-normal text-left sm:text-center h-auto py-3 px-4"
            >
              <Link href="/partnerships">
                <GraduationCap className="h-4 w-4 text-brand-primary shrink-0" />
                <span>For Institutions: Discuss Partnership</span>
              </Link>
            </Button>
          </div>

          {/* Foundational Trust Checkpoints */}
          <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-muted-foreground font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
              <span>10+ Years Coaching Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
              <span>MSDCA & Coaching Beyond Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
              <span>500+ Children Mentored</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
