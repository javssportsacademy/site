import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { AGE_PROGRAMS, SPORTS_SCIENCE_SERVICES } from "@/lib/constants/programs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Check, Activity, ShieldCheck, HeartPulse, Brain, Apple, Sun, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Age Programs & Sports Science | JAV'S SPORTS ACADEMY Chennai",
  description: "Age-appropriate athletic development from Early Years Movement (Ages 4-5) to Youth Sports (Ages 6+) and Senior Fitness. Integrated with sports science, mental conditioning, and yoga.",
};

const ICONS_MAP: Record<string, React.ElementType> = {
  Activity,
  ShieldCheck,
  Brain,
  Apple,
  Sun,
  ShoppingBag,
};

export default function ProgramsPage() {
  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Development Pathways"
        title="Programs & Sports Science"
        subtitle="One platform for every stage of growth. Structured coaching tailored to each participant's age, ability, skill level, and long-term development goals."
      >
        <div className="flex flex-wrap items-center gap-4">
          <TrialBookingModal />
          <DirectWhatsAppButton label="Ask About Age Batches" />
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* Section 1: Age Pathways */}
        <section className="space-y-12" id="age-pathways">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Development Milestones
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Age-Appropriate Development
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Children and adults thrive when movement curriculums align with their biological readiness and psychological curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AGE_PROGRAMS.map((prog) => (
              <div key={prog.id} id={prog.id} className="scroll-mt-24 flex flex-col">
                <Card
                  className="flex flex-col justify-between bg-card border-border hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md h-full"
                >
                  <CardHeader className="p-8 pb-4">
                    <Badge variant="default" className="w-fit mb-3 text-xs font-bold uppercase tracking-wider">
                      {prog.ageBracket}
                    </Badge>
                    <CardTitle className="text-2xl font-black uppercase text-foreground tracking-tight">
                      {prog.title}
                    </CardTitle>
                    <p className="text-xs font-semibold text-brand-primary mt-1">
                      {prog.tagline}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-2 space-y-6 flex-grow">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-border">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Core Curriculum Drills:
                      </p>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {prog.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {prog.focusAreas.map((f, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-muted text-[10px] font-bold text-foreground border border-border uppercase"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-8 pt-0 border-t border-border">
                    <TrialBookingModal
                      defaultSport={prog.title}
                      triggerButton={
                        <Button variant="default" className="w-full font-bold shadow-xs">
                          <span>Book Assessment for this Age Group</span>
                        </Button>
                      }
                    />
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Sports Science & Performance Development */}
        <section id="sports-science" className="scroll-mt-24 p-8 sm:p-14 rounded-3xl bg-card border border-border shadow-md space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="cyan" className="text-xs uppercase tracking-widest font-bold">
              Scientific Foundation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Sports Science & Performance Development
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Fitness assessments and physical development • Strength, speed, agility and endurance training • Movement quality and injury prevention practices • Individual skill development and performance preparation • Technology-supported training and performance tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPORTS_SCIENCE_SERVICES.map((serv) => {
              const Icon = ICONS_MAP[serv.iconName] || Activity;
              return (
                <div
                  key={serv.id}
                  className="p-6 rounded-2xl bg-muted/40 border border-border hover:border-brand-cyan/40 transition-all duration-300 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black uppercase text-foreground tracking-tight">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-muted/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-foreground font-bold text-sm">
                Interested in Athlete Physical Profiling or Team Assessments?
              </p>
              <p className="text-xs text-muted-foreground">
                Coach Mohammed Javeed (M.P.Ed.) coordinates data-driven fitness testing for schools and competitive athletes.
              </p>
            </div>
            <DirectWhatsAppButton
              label="Consult Sports Science Team"
              message="Hi Coach Mohammed Javeed, I would like to enquire about fitness assessments and sports science profiling for my athlete/school."
              className="shrink-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
