import React from "react";
import Link from "next/link";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { FOUNDER_DATA } from "@/lib/constants/founder";
import { COACHING_TEAM, ACADEMY_ACHIEVEMENTS } from "@/lib/constants/team";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Award, CheckCircle2, ShieldCheck, Tv, ShieldAlert, Trophy, Users } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_HANDLE } from "@/lib/whatsapp";

export const metadata = {
  title: "Mohammed Javeed (M.P.Ed) & Coaching Team | JAV'S SPORTS ACADEMY",
  description: "Learn about Coach Mohammed Javeed, Founder & Director of Operations, and the qualified coaching team at JAV'S Sports Academy. M.Sc. Computer Science, M.P.Ed., 10+ years league experience, 500+ children coached.",
};

export default function FounderPage() {
  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Founder Leadership & Pedagogy"
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
            <div className="p-8 rounded-3xl bg-card border border-border shadow-lg text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-tr from-brand-primary via-amber-600 to-amber-700 p-1 shadow-md">
                <div className="w-full h-full rounded-[22px] bg-card flex flex-col items-center justify-center text-foreground">
                  <span className="text-4xl font-black text-brand-primary font-mono">MJ</span>
                  <span className="text-xs uppercase font-bold text-muted-foreground mt-1">Head Coach</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black uppercase text-foreground tracking-tight">
                  {FOUNDER_DATA.name}
                </h2>
                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1">
                  {FOUNDER_DATA.role}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  {FOUNDER_DATA.qualifications}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border text-center">
                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border">
                  <p className="text-xl font-black text-foreground font-mono">{FOUNDER_DATA.experienceYears}</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Experience</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border">
                  <p className="text-xl font-black text-foreground font-mono">{FOUNDER_DATA.childrenCoached.replace(" Children Coached", "")}</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Children Coached</p>
                </div>
              </div>

              {/* Verified Media Appearances */}
              <div className="pt-3 border-t border-border space-y-2 text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Tv className="h-3.5 w-3.5 text-brand-primary" /> Broadcast Media Appearances:
                </p>
                <div className="space-y-1.5 text-xs text-foreground">
                  {FOUNDER_DATA.mediaAppearances.map((media, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-muted/60 border border-border">
                      <span className="font-bold text-foreground">{media.outlet}: </span>
                      <span className="text-muted-foreground">{media.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-xs">
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

          {/* Right Column: In-depth Biography & Pedagogy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
                Professional Profile
              </Badge>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
                Competitive Experience Meets Scientific Pedagogy
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {FOUNDER_DATA.extendedBio}
              </p>
            </div>

            {/* Official Philosophy Quote */}
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
                Verified Certifications & Accreditations:
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

            {/* 3-Tier Evidence Distinction Notice */}
            <div className="p-4 rounded-xl bg-card border border-border space-y-2 text-xs text-muted-foreground shadow-2xs">
              <p className="font-bold text-foreground flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-brand-primary" /> Evidence Distinction Policy:
              </p>
              <ul className="space-y-1 text-[11px]">
                <li>• <strong>Interviews (Jav&apos;s Inbox): </strong>{FOUNDER_DATA.evidenceDistinction.interviews}</li>
                <li>• <strong>Professional Standing: </strong>{FOUNDER_DATA.evidenceDistinction.network}</li>
                <li>• <strong>Academy Capability: </strong>{FOUNDER_DATA.evidenceDistinction.academy}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ACADEMY COACHING FACULTY SECTION */}
        <section className="space-y-8 pt-8 border-t border-border">
          <div className="space-y-2">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Verified Coaching Faculty
            </Badge>
            <h3 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Specialist Mentors
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Our training programmes are guided by verified TNCA cricketers, athletics mentors, and physical educationists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COACHING_TEAM.map((coach) => (
              <Card key={coach.id} className="bg-card border-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <CardHeader className="p-6 pb-2">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-brand-primary">
                      {coach.badge}
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground">{coach.experience}</span>
                  </div>
                  <h4 className="text-lg font-black uppercase text-foreground">
                    {coach.name}
                  </h4>
                  <p className="text-xs font-bold text-brand-primary">
                    {coach.role}
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                    {coach.credentials}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-2 space-y-3 flex-grow">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-foreground">
                    {coach.quoteOrHighlight}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {coach.bio}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 border-t border-border mt-auto">
                  <p className="text-[11px] text-muted-foreground font-medium pt-2">
                    Specialty: {coach.specialty}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
