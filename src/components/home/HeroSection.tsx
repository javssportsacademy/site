import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 border-b border-white/5">
      {/* Subtle deep stadium ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-6">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            <span>Chennai&apos;s Multi-Sport & Athletic Development Institution</span>
          </div>

          {/* Core Athletic Manifesto */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              SPORT <span className="text-brand-primary">TEACHES</span> LIFE.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase text-slate-300">
              ONE PLATFORM. EVERY STAGE OF GROWTH.
            </p>
          </div>

          <p className="text-base sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
            At JAV&apos;S SPORTS ACADEMY, we develop human character, mental composure, and physical vitality across 12 structured sports disciplines. Led by Coach Mohammed Javeed (M.P.Ed.), we partner with families, schools, and communities to deliver accountable sports education.
          </p>

          {/* Scope Pillar Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-white/10">Sports Coaching</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-white/10">Physical Development</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-white/10">Sports Science</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-white/10">Events & Officiating</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-white/10">Institutional PE</span>
          </div>

          {/* Audience Fast-Track Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <TrialBookingModal
              triggerButton={
                <Button size="lg" variant="default" className="font-bold text-sm tracking-wide gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white">
                  <Users className="h-4 w-4" />
                  <span>For Parents: Book Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              }
            />

            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold text-sm tracking-wide gap-2 border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/partnerships">
                <GraduationCap className="h-4 w-4 text-brand-primary" />
                <span>For Schools & Institutions</span>
              </Link>
            </Button>
          </div>

          {/* Foundational Trust Checkpoints */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
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
