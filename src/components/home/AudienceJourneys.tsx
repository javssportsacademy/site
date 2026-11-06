import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Users, GraduationCap, Building, Briefcase } from "lucide-react";
import { AUDIENCE_PATHWAYS } from "@/lib/constants/audiences";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";

const AUDIENCE_ICONS: Record<string, React.ElementType> = {
  parents: Users,
  schools: GraduationCap,
  communities: Building,
  corporates: Briefcase,
};

export function AudienceJourneys() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
            Audience Pathways
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Find Your Path
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you are a parent seeking disciplined coaching for your child, or a school principal organizing an annual sports day, we provide specialized solutions for your needs.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUDIENCE_PATHWAYS.map((path) => {
            const Icon = AUDIENCE_ICONS[path.id] || Users;
            return (
              <div
                key={path.id}
                className="p-8 rounded-3xl bg-card border border-border hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-3 rounded-2xl bg-primary/10 text-brand-primary border border-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs font-bold uppercase border-border text-brand-primary">
                      {path.badge}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {path.eyebrow}
                    </p>
                    <h3 className="text-2xl font-black uppercase text-foreground tracking-tight mt-1">
                      {path.headline}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                      What We Deliver:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {path.primaryValuePoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <DirectWhatsAppButton
                    label={path.ctaLabel}
                    message={path.whatsappMessage}
                    className="flex-1 font-bold text-xs uppercase tracking-wider shadow-xs"
                  />
                  <Button asChild variant="outline" className="font-bold text-xs uppercase tracking-wider border-border bg-card text-foreground hover:bg-muted">
                    <Link href={path.ctaLink}>
                      <span>Explore Details</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
