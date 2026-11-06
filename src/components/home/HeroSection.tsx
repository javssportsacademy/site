import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background stadium floodlight atmosphere */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-amber-500/15 via-slate-950/70 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold tracking-widest uppercase">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span>Chennai&apos;s Multi-Sport & Athletic Development Academy</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
                SPORT <span className="gradient-text-gold">TEACHES</span> LIFE.
              </h1>
              <p className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-slate-300">
                ONE PLATFORM. EVERY STAGE OF GROWTH.
              </p>
            </div>

            <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At JAV&apos;S SPORTS ACADEMY, we develop character, discipline, and athletic prowess across 12 structured disciplines. From early years movement (Ages 4+) to competitive athlete training and institutional sports days.
            </p>

            {/* Core Pillars Ribbon */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Sports</span>
              <span className="text-brand-primary">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Performance</span>
              <span className="text-brand-primary">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Fitness</span>
              <span className="text-brand-primary">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Wellness</span>
              <span className="text-brand-primary">•</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Events</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <TrialBookingModal
                triggerButton={
                  <Button size="lg" variant="default" className="w-full sm:w-auto font-black uppercase tracking-wider text-sm px-8 gap-2 shadow-xl shadow-brand-primary/25">
                    <span>Book Free Assessment</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                }
              />

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-bold text-sm px-6 gap-2 border-white/20 hover:border-red-500 hover:text-red-400 group"
              >
                <Link href="/javs-inbox">
                  <Play className="h-4 w-4 text-red-500 fill-current group-hover:scale-110 transition-transform" />
                  <span>Watch Jav&apos;s Inbox</span>
                </Link>
              </Button>
            </div>

            {/* Quick Micro-Trust points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-text-muted font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-primary" />
                <span>10+ Years Coaching Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-primary" />
                <span>500+ Children Mentored</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-brand-primary" />
                <span>Certified Physical Education Experts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-primary via-red-500 to-cyan-500 opacity-30 blur-xl animate-pulse" />

              {/* Main Athletic Hero Card */}
              <div className="relative rounded-3xl bg-slate-900 border border-white/15 p-6 shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Emblem Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-brand-primary/30">
                      <Shield className="h-7 w-7 fill-current" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black uppercase text-white tracking-tight">
                        JAV&apos;S Sports Academy
                      </h3>
                      <p className="text-xs text-brand-primary font-bold">
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>
                  <Badge variant="crimson" className="text-[10px] font-bold uppercase tracking-wider">
                    Admissions Open
                  </Badge>
                </div>

                {/* Featured Discipline Showcase List */}
                <div className="py-6 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-mono font-bold text-xs flex items-center justify-center">
                        01
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">Cricket High Performance</p>
                        <p className="text-xs text-brand-text-muted">Turf Nets • Video Analysis</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-primary">Ages 5+</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center">
                        02
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">Football & Agility League</p>
                        <p className="text-xs text-brand-text-muted">Turf Play • Ball Mastery</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-cyan-400">Ages 4+</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                        03
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">Badminton & Racket Speed</p>
                        <p className="text-xs text-brand-text-muted">Indoor Courts • Tactical Play</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">Ages 5+</span>
                  </div>
                </div>

                {/* Founder Credential Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-800 to-slate-800 border border-brand-primary/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-brand-primary flex items-center justify-center text-brand-primary font-bold text-base shrink-0">
                    MJ
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Coach Mohammed Javeed</p>
                    <p className="text-[11px] text-brand-text-muted">
                      Founder & Director (M.Sc., M.P.Ed.) • Host of @JavsInbox
                    </p>
                  </div>
                </div>

                {/* Subpage Link Button */}
                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <Link
                    href="/sports"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-white transition-colors"
                  >
                    <span>Explore All 12 Sports Disciplines</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
