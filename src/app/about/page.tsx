import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Shield, Target, Compass, Award, Heart, CheckCircle2, Trophy, Sparkles, UserCheck } from "lucide-react";
import { COACHING_TEAM, ACADEMY_ACHIEVEMENTS } from "@/lib/constants/team";

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
    <div className="bg-background pb-24 text-foreground">
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
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              One Organization. Total Development.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We bring together sports coaching, fitness, performance development, mental conditioning and sporting experiences within one organization. From early years movement to competitive sports, individual fitness to community programmes, we aim to make quality sporting experiences accessible, engaging, and meaningful for everyone.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Through structured coaching, responsible training and strong institutional partnerships, we aim to create sporting experiences that build skills, character and healthier communities across Chennai.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-brand-primary" />
                <h3 className="text-xl font-black uppercase text-foreground">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To build a trusted and progressive sports organisation that transforms how people learn, play, perform and live through sport.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <Compass className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-black uppercase text-foreground">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Developing More Than Athletes
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              The physical drills we teach on the court translate into foundational human values off it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border space-y-2 hover:border-brand-primary/40 transition-colors shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-brand-primary flex items-center justify-center font-bold text-xs font-mono">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-foreground pt-1">
                  {val.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Coaching Team & Mentors */}
        <section id="team" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Experienced Mentorship
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Coaching Team & Mentors
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Led by Director Coach Mohammed Javeed (M.P.Ed.), alongside specialist mentors in pace bowling, spin bowling, and athletic physical conditioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COACHING_TEAM.map((coach) => (
              <Card
                key={coach.id}
                className="bg-card border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                    {coach.badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {coach.experience}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase text-foreground tracking-tight">
                    {coach.name}
                  </h3>
                  <p className="text-sm font-bold text-brand-primary mt-0.5">
                    {coach.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {coach.credentials}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {coach.bio}
                </p>

                <div className="pt-3 border-t border-border flex items-center gap-2 text-xs font-semibold text-foreground/90">
                  <UserCheck className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Specialty: <strong className="text-foreground">{coach.specialty}</strong></span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section: Proven Milestones & Achievements */}
        <section id="achievements" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Proven Track Record
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Proven Milestones & Records
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Verifiable athlete honours, district league representations, institutional case studies, and sports education outreach across Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ACADEMY_ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-3xl bg-card border border-border shadow-xs hover:border-brand-primary/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400">
                    {ach.tag}
                  </span>
                  <Trophy className="h-4 w-4 text-brand-primary" />
                </div>
                <h3 className="text-lg font-black uppercase text-foreground tracking-tight">
                  {ach.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Safety, Safeguarding & Wellbeing */}
        <section className="p-8 sm:p-14 rounded-3xl bg-card border border-border shadow-md space-y-6">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-5 w-5" /> Safety & Athlete Wellbeing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
            Safety, Safeguarding & Wellbeing
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl">
            We prioritise safe training environments, responsible coaching practices, age-appropriate activities, and individual attention to participant development. We aim to create a positive, respectful and inclusive sporting environment where every participant can learn and grow with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-muted/50 border border-border space-y-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h5 className="text-sm font-bold text-foreground">First Aid & Hydration</h5>
              <p className="text-xs text-muted-foreground">Certified first-aid protocols, emergency contact trees, and strict hydration checks.</p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/50 border border-border space-y-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h5 className="text-sm font-bold text-foreground">Vetted Coaches</h5>
              <p className="text-xs text-muted-foreground">Qualified physical education professionals screened for safe, encouraging youth interaction.</p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/50 border border-border space-y-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h5 className="text-sm font-bold text-foreground">Zero Tolerance</h5>
              <p className="text-xs text-muted-foreground">Strict anti-bullying, anti-harassment, and inclusive sporting culture for all genders and abilities.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
