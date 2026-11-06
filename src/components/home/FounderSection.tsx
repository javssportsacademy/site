import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Tv, Video, Play, Camera, Sparkles } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FOUNDER_DATA } from "@/lib/constants/founder";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_HANDLE } from "@/lib/whatsapp";

export function FounderSection() {
  return (
    <section className="py-20 md:py-24 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Founder Portrait & Vital Stats Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-card border border-border shadow-xl space-y-5">
              {/* Photo Frame Placeholder */}
              <div className="relative aspect-4/5 w-full rounded-2xl bg-gradient-to-tr from-muted via-card to-amber-500/10 border border-border overflow-hidden flex flex-col items-center justify-between p-5 text-center group">
                <div className="w-full flex items-center justify-between">
                  <Badge variant="default" className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white">
                    Verified Director
                  </Badge>
                  <span className="text-[10px] font-mono text-muted-foreground">Chennai, TN</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center space-y-3">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-brand-primary via-amber-600 to-amber-700 p-1 shadow-md shadow-brand-primary/20">
                    <div className="w-full h-full rounded-[22px] bg-card flex flex-col items-center justify-center text-foreground">
                      <span className="text-3xl sm:text-4xl font-black text-brand-primary font-mono">MJ</span>
                      <span className="text-[9px] uppercase font-bold text-muted-foreground mt-0.5">Head Coach</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-foreground tracking-tight">
                      {FOUNDER_DATA.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-0.5">
                      {FOUNDER_DATA.role}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                      {FOUNDER_DATA.qualifications}
                    </p>
                  </div>
                </div>

                <div className="w-full py-1.5 px-3 rounded-xl bg-background/80 backdrop-blur-xs border border-border text-[10px] font-mono text-muted-foreground flex items-center justify-center gap-1.5 shadow-2xs">
                  <Camera className="h-3 w-3 text-brand-primary" />
                  <span>[ Founder Portrait Placeholder ]</span>
                </div>
              </div>

              {/* Verified Metrics Row */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-muted/40 border border-border">
                  <p className="text-xl font-black text-foreground font-mono">{FOUNDER_DATA.experienceYears}</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">League Play</p>
                </div>
                <div className="p-3 rounded-2xl bg-muted/40 border border-border">
                  <p className="text-xl font-black text-foreground font-mono">500+</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Athletes Coached</p>
                </div>
              </div>

              {/* Quick YouTube link */}
              <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-xs py-4">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon className="h-4 w-4 fill-current" />
                  <span>Host of {YOUTUBE_HANDLE}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Narrative & Grounded Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
                Grounded Leadership
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight leading-tight">
                Competitive Mastery. <br />
                <span className="text-brand-primary">Scientific Pedagogy.</span>
              </h2>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              {FOUNDER_DATA.bio}
            </p>

            {/* Core Manifesto Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card border-l-4 border-brand-primary border-t border-r border-b border-border space-y-2 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Official Academy Philosophy
              </p>
              <p className="text-base sm:text-lg font-bold italic text-foreground leading-snug">
                &ldquo;{FOUNDER_DATA.philosophy}&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                {FOUNDER_DATA.philosophyContext}
              </p>
            </div>

            {/* Quick Proof Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-muted/40 border border-border text-xs text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
                <span>MSDCA & Coaching Beyond Certified</span>
              </div>
              <div className="p-3 rounded-xl bg-muted/40 border border-border text-xs text-foreground flex items-center gap-2">
                <Award className="h-4 w-4 text-brand-primary shrink-0" />
                <span>TNCA & TDCA League Player</span>
              </div>
            </div>

            {/* Prominent Deep Link to Dedicated Founder Story */}
            <div className="pt-2">
              <Button asChild size="lg" className="font-bold text-xs uppercase tracking-wider gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/20">
                <Link href="/founder">
                  <span>Explore Founder Evidence, Timeline & Dialogues</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
