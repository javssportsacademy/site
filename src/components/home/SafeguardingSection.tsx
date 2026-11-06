import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SAFEGUARDING_POINTS = [
  {
    title: "Safe Training Environments",
    desc: "Rigorous safety protocols, first-aid readiness, adequate hydration stops, and age-calibrated physical workloads."
  },
  {
    title: "Responsible Coaching Practices",
    desc: "Qualified physical education mentors screened for ethical, encouraging, and positive youth interaction."
  },
  {
    title: "Age-Appropriate Activities",
    desc: "Curriculums engineered around biological readiness — zero premature burnout or dangerous kinetic overspecialization."
  },
  {
    title: "Individual Attention",
    desc: "Strict coach-to-player ratios (1:6 to 1:10) ensuring every participant receives technical correction and emotional support."
  }
];

export function SafeguardingSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
            Accountability & Safety
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Safety, Safeguarding & Wellbeing
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We prioritise safe training environments, responsible coaching practices, age-appropriate activities and individual attention to participant development. We aim to create a positive, respectful and inclusive sporting environment where every participant can learn and grow with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFEGUARDING_POINTS.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-white/5 space-y-3"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-brand-primary w-fit">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {pt.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300">
            Read our complete institutional commitment to safety, anti-bullying, and ethical coaching.
          </p>
          <Button asChild variant="outline" size="sm" className="font-bold border-white/20 text-white hover:bg-white/10 shrink-0">
            <Link href="/about">
              <span>View Safeguarding Policy</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
