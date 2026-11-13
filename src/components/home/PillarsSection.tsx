import React from "react";
import Link from "next/link";
import { Shield, HeartPulse, Brain, Trophy, ArrowRight, Target, Compass } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ACADEMY_PHILOSOPHY, ACADEMY_PHILOSOPHY_CONTEXT } from "@/lib/constants/site";

const PILLARS = [
  {
    id: "sports-excellence",
    title: "Sports Excellence",
    icon: Trophy,
    color: "text-amber-500",
    borderColor: "hover:border-amber-500/50",
    desc: "Professional coaching, skill development, tactical understanding, and competitive tournament performance.",
    points: [
      "Certified coach-led technical progression",
      "Tactical positioning & match intelligence",
      "State & district tournament exposure"
    ],
    link: "/sports"
  },
  {
    id: "fitness-wellness",
    title: "Fitness & Wellness",
    icon: HeartPulse,
    color: "text-cyan-600 dark:text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    desc: "Movement development, physical conditioning, healthy ageing, and lifelong fitness for every generation.",
    points: [
      "Speed, Agility & Quickness (SAQ) drills",
      "Active mobility & core stability programs",
      "Healthy ageing sessions for adults & seniors"
    ],
    link: "/programs"
  },
  {
    id: "mind-character",
    title: "Mind & Character",
    icon: Brain,
    color: "text-red-500",
    borderColor: "hover:border-red-500/50",
    desc: "Confidence, discipline, leadership, mental conditioning, emotional composure, and sportsmanship resilience.",
    points: [
      "Managing scoreboard pressure & self-doubt",
      "Goal setting & personal accountability",
      "Respect, teamwork & unshakeable resilience"
    ],
    link: "/about"
  },
  {
    id: "events-partnerships",
    title: "Events & Partnerships",
    icon: Shield,
    color: "text-emerald-600 dark:text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    desc: "Sports events, school sports days, corporate leagues, qualified officiating, and community programmes.",
    points: [
      "Turnkey annual sports day management",
      "Qualified referees & umpire deployment",
      "Residential gated community leagues"
    ],
    link: "/partnerships"
  }
];

export function PillarsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Core Pillars"
          title="The JAV'S Academy Framework"
          subtitle="We bring together sports coaching, fitness, performance development, mental conditioning and sporting experiences within one integrated organisation."
        />

        {/* Central Quote Callout */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/5 via-card to-red-500/5 border border-border text-center relative shadow-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-black italic text-foreground tracking-tight">
            &ldquo;{ACADEMY_PHILOSOPHY}&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {ACADEMY_PHILOSOPHY_CONTEXT}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.id}
                className={`relative flex flex-col justify-between bg-card border-border transition-all duration-300 ${pillar.borderColor} hover:-translate-y-1.5 shadow-sm hover:shadow-md group`}
              >
                <CardHeader className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center ${pillar.color} mb-4 group-hover:scale-110 transition-transform shadow-2xs`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-black uppercase tracking-tight text-foreground group-hover:text-brand-primary transition-colors">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-border text-xs text-muted-foreground">
                    {pillar.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`text-sm ${pillar.color}`}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="p-6 pt-0 mt-auto border-t border-border">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-brand-primary transition-colors pt-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-border">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-brand-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-foreground tracking-wide">
                Our Vision
              </h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              To build a trusted and progressive sports organisation that transforms how people learn, play, perform and live through sport.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black uppercase text-foreground tracking-wide">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              To deliver inclusive, age-appropriate and professionally guided sports and fitness programmes that develop skills, strengthen communities and inspire lifelong physical activity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
