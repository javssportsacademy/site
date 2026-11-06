import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Activity, Sparkles, Heart } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AGE_PROGRAMS, SPORTS_SCIENCE_SERVICES } from "@/lib/constants/programs";

export function ProgramsPreview() {
  return (
    <section className="py-24 bg-muted/20 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Age-Appropriate Development"
          title="From First Steps to Elite Performance"
          subtitle="Every stage of human development has unique physiological and cognitive needs. Our curriculums are calibrated to nurture without premature burnout."
        />

        {/* 3 Age Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {AGE_PROGRAMS.map((program) => (
            <Card
              key={program.id}
              className="flex flex-col justify-between bg-card border-border hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md"
            >
              <CardHeader className="p-6">
                <Badge variant="default" className="w-fit mb-3 text-xs font-bold uppercase tracking-wider">
                  {program.ageBracket}
                </Badge>
                <CardTitle className="text-2xl font-black uppercase text-foreground tracking-tight">
                  {program.title}
                </CardTitle>
                <p className="text-xs font-semibold text-brand-primary mt-1">
                  {program.tagline}
                </p>
              </CardHeader>

              <CardContent className="p-6 pt-0 space-y-4 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-border">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                    Curriculum Highlights:
                  </p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {program.highlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 border-t border-border">
                <Button asChild variant="outline" className="w-full font-bold text-xs uppercase tracking-wider hover:border-brand-primary hover:text-brand-primary border-border bg-card text-foreground hover:bg-muted shadow-2xs">
                  <Link href="/programs">
                    <span>{program.ctaText}</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Sports Science & Wellness Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border">
            <div>
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Activity className="h-4 w-4" /> Sports Science & Athlete Development
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                Holistic Performance & Care
              </h3>
            </div>
            <Button asChild variant="default" className="font-bold shrink-0">
              <Link href="/programs">
                <span>View All Science & Wellness Services</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {SPORTS_SCIENCE_SERVICES.slice(0, 3).map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-muted/50 border border-border space-y-2">
                <h4 className="text-base font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
