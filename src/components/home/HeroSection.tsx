import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, GraduationCap, Users, Play, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { FEATURED_CONVERSATIONS } from "@/lib/constants/media";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/40 border-b border-border">
      {/* Ambient light warm radial glow */}
      <div className="absolute inset-0 bg-radial-[at_top_center] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-brand-primary dark:text-amber-400 text-[11px] sm:text-xs font-bold tracking-wide shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
              <span className="truncate sm:whitespace-normal">Chennai&apos;s Multi-Sport &amp; Athletic Development Institution</span>
            </div>

            {/* Core Athletic Manifesto */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
                SPORT <span className="text-brand-primary">TEACHES</span> LIFE.
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase text-foreground/85 dark:text-slate-200">
                ONE PLATFORM. EVERY STAGE OF GROWTH.
              </p>
            </div>

            {/* Shorter, punchier description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              At JAV&apos;S SPORTS ACADEMY, we develop human character, mental composure, and physical vitality across 12 structured sports disciplines. Led by Coach Mohammed Javeed (M.P.Ed.), we partner with families, schools, and communities to deliver accountable sports education.
            </p>

            {/* Fast-Track Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <TrialBookingModal
                triggerButton={
                  <Button size="lg" variant="default" className="font-bold text-sm tracking-wide gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/20 whitespace-normal text-left sm:text-center h-auto py-3.5 px-5">
                    <Users className="h-4 w-4 shrink-0" />
                    <span>Book Player Assessment</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Button>
                }
              />

              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-bold text-sm tracking-wide gap-2 border-border bg-card text-foreground hover:bg-muted shadow-xs whitespace-normal text-left sm:text-center h-auto py-3.5 px-5"
              >
                <Link href="/partnerships">
                  <GraduationCap className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Institutional Partnerships</span>
                </Link>
              </Button>
            </div>

            {/* Foundational Trust Checkpoints */}
            <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
                <span>10+ Years League Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
                <span>MSDCA &amp; Coaching Beyond</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
                <span>500+ Children Mentored</span>
              </div>
            </div>
          </div>

          {/* Right Column: Showcase Collage Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-card border border-border p-4 sm:p-5 shadow-2xl space-y-4 overflow-hidden group">
              {/* JAV'S Sports Academy Showcase Collage */}
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/javs-showcase-collage.jpg"
                  alt="JAV'S Sports Academy — Sport Teaches Life showcase featuring Jav's Inbox and match victories"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-white text-[11px] font-bold">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" /> 2 Operating Hubs
                  </span>
                  <span className="font-mono text-[10px] text-white/80">12 Sports Disciplines</span>
                </div>
                {/* Active batches live badge */}
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Active Batches
                  </span>
                </div>
              </div>

              {/* Editorial Teaser: Jav's Inbox dialogue preview */}
              <a
                href={FEATURED_CONVERSATIONS[0].mediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 rounded-2xl bg-muted/40 hover:bg-muted/70 border border-border transition-colors group/teaser"
                title="Watch Dayalan Hemalatha on Jav's Inbox (YouTube)"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 group-hover/teaser:scale-105 transition-transform shadow-xs">
                      <Play className="h-4 w-4 fill-white translate-x-0.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase text-red-500 tracking-wider">
                        Featured on Jav&apos;s Inbox
                      </p>
                      <p className="text-xs font-bold text-foreground truncate">
                        Dayalan Hemalatha (RCB &amp; Team India)
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/teaser:text-brand-primary shrink-0 transition-transform group-hover/teaser:translate-x-0.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
