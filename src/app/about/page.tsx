import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Shield, Target, Compass, Award, Heart, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us & Safeguarding | JAV'S SPORTS ACADEMY Chennai",
  description: "Learn about JAV'S SPORTS ACADEMY's mission, values, commitment to youth athlete safeguarding, safety standards, and whole-person development in Chennai.",
};

const VALUES = [
  {
    title: "Discipline & Responsibility",
    desc: "Athletes learn punctuality, accountability for their preparation, and respect for coaches, peers, and equipment."
  },
  {
    title: "Leadership & Teamwork",
    desc: "Cultivating vocal encouragement, mutual support in adversity, and selfless collective team-first attitudes."
  },
  {
    title: "Confidence & Resilience",
    desc: "Overcoming fear of failure, bouncing back from dropped catches or missed goals, and trusting the process."
  },
  {
    title: "Respect & Sportsmanship",
    desc: "Win with humility, lose with grace, and honor the spirit of the game and decisions of match officials."
  },
  {
    title: "Healthy Habits & Active Living",
    desc: "Building a permanent lifestyle of movement, good sleep hygiene, wholesome nutrition, and bodily vitality."
  },
  {
    title: "Goal Setting & Growth Mindset",
    desc: "Setting measurable benchmarks, embracing effort as the path to mastery, and celebrating gradual improvement."
  }
];

export function AboutPage() {
  return (
    <div className="bg-slate-950 pb-24">
      <SubpageHero
        badge="About JAV'S Sports Academy"
        title="Sport Teaches Life"
        subtitle="At JAV'S SPORTS ACADEMY, we believe sport is more than a game. It is a powerful platform for developing physical abilities, mental strength, character, and lifelong healthy habits."
      >
        <div className="flex flex-wrap items-center gap-4">
          <TrialBookingModal />
          <DirectWhatsAppButton label="Contact Academy Team" />
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* Section 1: Who We Are & Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Who We Are
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              One Organization. Total Development.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We bring together sports coaching, fitness, performance development, mental conditioning and sporting experiences within one organization. From early years movement to competitive sports, individual fitness to community programmes, we aim to make quality sporting experiences accessible, engaging, and meaningful for everyone.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Through structured coaching, responsible training and strong institutional partnerships, we aim to create sporting experiences that build skills, character and healthier communities across Chennai.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-brand-primary" />
                <h3 className="text-xl font-black uppercase text-white">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                To build a trusted and progressive sports organisation that transforms how people learn, play, perform and live through sport.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <Compass className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-black uppercase text-white">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                To deliver inclusive, age-appropriate and professionally guided sports and fitness programmes that develop skills, strengthen communities and inspire lifelong physical activity.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Developing More Than Athletes */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Core Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Developing More Than Athletes
            </h2>
            <p className="text-brand-text-muted text-sm sm:text-base">
              The physical drills we teach on the court translate into foundational human values off it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-white/10 space-y-2 hover:border-brand-primary/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-brand-primary flex items-center justify-center font-bold text-xs font-mono">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white pt-1">
                  {val.title}
                </h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Safety, Safeguarding & Wellbeing */}
        <section className="p-8 sm:p-14 rounded-3xl bg-slate-900 border border-emerald-500/20 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-5 w-5" /> Safety & Athlete Wellbeing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Safety, Safeguarding & Wellbeing
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            We prioritise safe training environments, responsible coaching practices, age-appropriate activities, and individual attention to participant development. We aim to create a positive, respectful and inclusive sporting environment where every participant can learn and grow with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <h5 className="text-sm font-bold text-white">First Aid & Hydration</h5>
              <p className="text-xs text-brand-text-muted">Certified first-aid protocols, emergency contact trees, and strict hydration checks.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <h5 className="text-sm font-bold text-white">Vetted Coaches</h5>
              <p className="text-xs text-brand-text-muted">Qualified physical education professionals screened for safe, encouraging youth interaction.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <h5 className="text-sm font-bold text-white">Zero Tolerance</h5>
              <p className="text-xs text-brand-text-muted">Strict anti-bullying, anti-harassment, and inclusive sporting culture for all genders and abilities.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
