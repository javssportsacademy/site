import React from "react";
import Link from "next/link";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { FOUNDER_DATA } from "@/lib/constants/founder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Award, CheckCircle2, GraduationCap, ShieldCheck, HeartHandshake } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { YOUTUBE_CHANNEL_URL } from "@/lib/whatsapp";

export const metadata = {
  title: "Mohammed Javeed (M.P.Ed) | Founder, JAV'S SPORTS ACADEMY",
  description: "Learn about Coach Mohammed Javeed, Founder & Director of Operations at JAV'S Sports Academy. M.Sc. Computer Science, M.P.Ed., 10+ years experience, 500+ children coached, and host of @JavsInbox.",
};

export default function FounderPage() {
  return (
    <div className="bg-slate-950 pb-24">
      <SubpageHero
        badge="Leadership & Coaching Pedagogy"
        title="Coach Mohammed Javeed"
        subtitle={`${FOUNDER_DATA.role} • ${FOUNDER_DATA.qualifications}`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <DirectWhatsAppButton
            label="Connect with Coach Javeed"
            message="Hi Coach Mohammed Javeed, I am reaching out through the JAV'S Sports Academy website and would like to connect."
          />
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl text-center space-y-6">
              <div className="w-36 h-36 mx-auto rounded-3xl bg-gradient-to-tr from-brand-primary via-amber-600 to-red-600 p-1 shadow-2xl shadow-brand-primary/20">
                <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center text-white">
                  <span className="text-4xl font-black text-brand-primary">MJ</span>
                  <span className="text-xs uppercase font-bold text-slate-400 mt-1">Head Coach</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black uppercase text-white tracking-tight">
                  {FOUNDER_DATA.name}
                </h2>
                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1">
                  {FOUNDER_DATA.role}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {FOUNDER_DATA.qualifications}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-2xl font-black text-amber-400 font-mono">{FOUNDER_DATA.yearsOfExperience}</p>
                  <p className="text-[10px] font-bold uppercase text-slate-400 mt-0.5">Experience</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-2xl font-black text-cyan-400 font-mono">500+</p>
                  <p className="text-[10px] font-bold uppercase text-slate-400 mt-0.5">Children Coached</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold gap-2">
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon className="h-4 w-4 fill-current" />
                    <span>Watch @JavsInbox on YouTube</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Biography & Vision */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
                Professional Profile
              </Badge>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                A Passion for Promoting Sporting Excellence
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {FOUNDER_DATA.extendedBio}
              </p>
            </div>

            {/* Core Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border-l-4 border-brand-primary space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Foundational Philosophy
              </p>
              <p className="text-lg font-bold italic text-white leading-relaxed">
                &ldquo;{FOUNDER_DATA.philosophy}&rdquo;
              </p>
            </div>

            {/* 3 Core Pillars of Methodology */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xl font-bold uppercase text-white tracking-tight">
                Coaching Methodology
              </h4>
              <div className="space-y-4">
                {FOUNDER_DATA.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-white/5 flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-brand-primary shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white">{pillar.title}</h5>
                      <p className="text-xs sm:text-sm text-brand-text-muted mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
