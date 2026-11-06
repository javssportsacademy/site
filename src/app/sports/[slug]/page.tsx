import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  Users,
  ShieldAlert,
  CalendarCheck,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Trophy,
} from "lucide-react";
import { SPORTS_LIST, getSportBySlug } from "@/lib/constants/sports";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";

interface SportDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SPORTS_LIST.map((sport) => ({
    slug: sport.slug,
  }));
}

export async function generateMetadata({ params }: SportDetailPageProps) {
  const { slug } = await params;
  const sport = getSportBySlug(slug);
  if (!sport) return { title: "Sport Not Found" };

  return {
    title: `${sport.name} Coaching Chennai | JAV'S SPORTS ACADEMY`,
    description: `${sport.shortDesc} Professional coaching, age-appropriate drills, and competitive batches for ${sport.name} in Chennai.`,
  };
}

export default async function SportDetailPage({ params }: SportDetailPageProps) {
  const { slug } = await params;
  const sport = getSportBySlug(slug);

  if (!sport) {
    notFound();
  }

  // Find other sports for the related navigation
  const otherSports = SPORTS_LIST.filter((s) => s.slug !== sport.slug).slice(0, 4);

  return (
    <div className="bg-slate-950 pb-24">
      {/* Subpage Hero */}
      <SubpageHero
        badge={`Sport #${sport.id} • ${sport.category}`}
        title={`${sport.name} Coaching`}
        subtitle={sport.shortDesc}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "All Sports", href: "/sports" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <TrialBookingModal
            defaultSport={sport.name}
            triggerButton={
              <Button size="lg" variant="default" className="font-bold gap-2">
                <CalendarCheck className="h-5 w-5" />
                <span>Book Free {sport.name} Trial</span>
              </Button>
            }
          />

          <DirectWhatsAppButton
            message={`Hi Coach Mohammed Javeed, I would like to enquire about ${sport.name} coaching batches, schedule, and fees at JAV'S Sports Academy.`}
            label={`WhatsApp Enquiry for ${sport.name}`}
          />
        </div>
      </SubpageHero>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Full Description & Syllabus */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Program Overview & Philosophy
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {sport.fullDesc}
              </p>
            </div>

            {/* Structured Skills Curriculum */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Trophy className="h-4 w-4" /> Technical & Tactical Syllabus
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                What Athletes Master
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {sport.skillsTaught.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-brand-primary/20 text-brand-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Developmental Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                Developmental Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sport.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900 border border-white/5 flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Guidance */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-brand-primary/20 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Sportswear & Equipment Guidance
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {sport.equipmentNeeded}
              </p>
            </div>
          </div>

          {/* Right Column: Key Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-slate-900 border-white/10 shadow-2xl p-6 space-y-6">
              <CardHeader className="p-0 pb-4 border-b border-white/10">
                <CardTitle className="text-lg font-black uppercase text-white">
                  Batch Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-5 text-xs sm:text-sm">
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-brand-primary" /> Age Categories
                  </p>
                  <ul className="space-y-1 font-semibold text-white">
                    {sport.ageGroups.map((grp, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-brand-primary">•</span>
                        <span>{grp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-cyan-400" /> Coaching Ratio
                  </p>
                  <p className="font-bold text-white font-mono text-sm">
                    {sport.coachingRatio}
                  </p>
                  <p className="text-xs text-brand-text-muted mt-0.5">
                    Ensures individual attention and technical correction.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Schedule & Frequency
                  </p>
                  <p className="font-semibold text-white">
                    {sport.scheduleHighlights}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <TrialBookingModal
                    defaultSport={sport.name}
                    triggerButton={
                      <Button variant="default" className="w-full font-bold">
                        <span>Book {sport.name} Trial Session</span>
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Other Sports Quick Links */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Explore Other Disciplines
              </h4>
              <div className="space-y-2">
                {otherSports.map((other) => (
                  <Link
                    key={other.id}
                    href={`/sports/${other.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>{other.name}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  </Link>
                ))}
              </div>
              <Link
                href="/sports"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline pt-2"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to All 12 Sports</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
