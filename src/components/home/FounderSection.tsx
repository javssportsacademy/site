import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Tv, BookOpen } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FOUNDER_DATA } from "@/lib/constants/founder";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_HANDLE } from "@/lib/whatsapp";

export function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Founder Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-lg text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-tr from-brand-primary via-amber-600 to-amber-700 p-1 shadow-md">
                <div className="w-full h-full rounded-[22px] bg-card flex flex-col items-center justify-center text-foreground">
                  <span className="text-3xl font-black text-brand-primary font-mono">MJ</span>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground mt-1">Head Coach</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase text-foreground tracking-tight">
                  {FOUNDER_DATA.name}
                </h3>
                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1">
                  {FOUNDER_DATA.role}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  {FOUNDER_DATA.qualifications}
                </p>
              </div>

              {/* Verified Metrics Row */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border text-center">
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border">
                  <p className="text-xl font-black text-foreground font-mono">{FOUNDER_DATA.experienceYears}</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Experience</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/60 border border-border">
                  <p className="text-xl font-black text-foreground font-mono">{FOUNDER_DATA.childrenCoached.replace(" Children Coached", "")}</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Children Coached</p>
                </div>
              </div>

              {/* Broadcast Appearances */}
              <div className="pt-3 border-t border-border space-y-2 text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Tv className="h-3.5 w-3.5 text-brand-primary" /> Verified Media Appearances:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {FOUNDER_DATA.mediaAppearances.map((media, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-semibold text-foreground border border-border">
                      {media.outlet}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-sm">
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
          </div>

          {/* Right Column: Narrative & Grounded Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
                The People Behind JAV&apos;S
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight leading-tight">
                Grounded Experience. <br />
                <span className="text-brand-primary">Accountable Leadership.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {FOUNDER_DATA.bio}
            </p>

            {/* Authentic Quote from Brochure */}
            <div className="p-6 rounded-2xl bg-card border-l-4 border-brand-primary border-t border-r border-b border-border space-y-2 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Official Academy Philosophy
              </p>
              <p className="text-lg font-bold italic text-foreground leading-relaxed">
                &ldquo;{FOUNDER_DATA.philosophy}&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                {FOUNDER_DATA.philosophyContext}
              </p>
            </div>

            {/* Verified Certifications */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Verified Certifications & Pedagogy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOUNDER_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-2xs">
                    <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0" />
                      <span>{cert.title}</span>
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Playing Record */}
            <div className="p-4 rounded-xl bg-muted/60 border border-border text-xs text-foreground flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-primary shrink-0" />
              <span><strong>Playing Background: </strong>{FOUNDER_DATA.playingBackground}</span>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline" className="font-bold text-xs uppercase tracking-wider border-border bg-card text-foreground hover:bg-muted shadow-xs">
                <Link href="/founder">
                  <span>Read Coach Mohammed Javeed&apos;s Full Story</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
