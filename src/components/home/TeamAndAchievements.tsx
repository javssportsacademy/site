import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Trophy, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { COACHING_TEAM, ACADEMY_ACHIEVEMENTS } from "@/lib/constants/team";

export function TeamAndAchievements() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-3xl">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Mentorship & Track Record
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
              Specialist Mentors. <span className="text-brand-primary">Proven Milestones.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Real coaches with verified competitive careers. Our athletes are mentored by seasoned league cricketers, accredited physical educationists, and athletics coaches with decades of practical field experience.
            </p>
          </div>

          <div className="shrink-0">
            <Button asChild variant="outline" className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider shadow-sm">
              <Link href="/founder">
                <span>View Leadership Credentials</span>
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 4 Coaching Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COACHING_TEAM.map((coach) => (
            <Card
              key={coach.id}
              className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase border-slate-300 text-brand-primary">
                    {coach.badge}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">{coach.experience}</span>
                </div>
                <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                  {coach.name}
                </h3>
                <p className="text-xs font-bold text-brand-primary">
                  {coach.role}
                </p>
                <p className="text-[11px] font-mono text-slate-500 mt-1">
                  {coach.credentials}
                </p>
              </CardHeader>

              <CardContent className="p-6 pt-0 space-y-3 flex-grow">
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200/60 text-[11px] font-semibold text-amber-900">
                  {coach.quoteOrHighlight}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {coach.bio}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 pt-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                  <span>Specialty: {coach.specialty}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Verified Academy Achievements Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">
            <Trophy className="h-4 w-4" /> Demonstrated Academy Milestones
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight mb-8">
            Measured Progress Across Chennai
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMY_ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <Badge variant="secondary" className="text-[10px] font-bold uppercase">
                  {ach.tag}
                </Badge>
                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  {ach.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
