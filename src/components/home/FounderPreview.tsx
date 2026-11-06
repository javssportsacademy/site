import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FOUNDER_DATA } from "@/lib/constants/founder";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_HANDLE } from "@/lib/whatsapp";

export function FounderPreview() {
  return (
    <section className="py-24 bg-slate-900/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Badge Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-primary via-amber-600 to-red-600 opacity-20 blur-xl" />

              <div className="relative rounded-3xl bg-slate-900 border border-white/10 p-8 shadow-2xl text-center space-y-6">
                {/* Avatar Badge */}
                <div className="relative mx-auto w-32 h-32 rounded-3xl bg-gradient-to-tr from-amber-500 to-red-600 p-1 shadow-2xl shadow-brand-primary/20">
                  <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center text-white">
                    <span className="text-3xl font-black text-brand-primary">MJ</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Coach</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1">
                    {FOUNDER_DATA.role}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {FOUNDER_DATA.qualifications}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-xl font-black text-amber-400 font-mono">10+ Yrs</p>
                    <p className="text-[10px] font-bold uppercase text-slate-400">Experience</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-xl font-black text-cyan-400 font-mono">500+</p>
                    <p className="text-[10px] font-bold uppercase text-slate-400">Children Coached</p>
                  </div>
                </div>

                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-red-600/10 text-red-400 border border-red-500/20 hover:bg-red-600 hover:text-white transition-colors text-xs font-bold"
                >
                  <YoutubeIcon className="h-4 w-4 fill-current" />
                  <span>Host of {YOUTUBE_HANDLE}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
              Leadership & Pedagogy
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Shaping Athletes, <br />
              <span className="text-brand-primary">Building Human Potential.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {FOUNDER_DATA.bio}
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-brand-primary space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Coaching Philosophy
              </p>
              <p className="text-sm font-semibold italic text-white leading-relaxed">
                &ldquo;{FOUNDER_DATA.philosophy}&rdquo;
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {FOUNDER_DATA.pillars.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-brand-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button asChild variant="default" className="font-bold">
                <Link href="/founder">
                  <span>Read Coach Javeed&apos;s Full Story</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="font-bold border-white/20 text-white">
                <Link href="/about">
                  <span>Academy Vision & Safeguarding</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
