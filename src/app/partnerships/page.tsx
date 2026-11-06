import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { INSTITUTIONAL_PARTNERS, EVENT_SUPPORT_SERVICES } from "@/lib/constants/partnerships";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Check, ShieldCheck, Trophy, Sparkles, Building2, Handshake, Calendar, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Sports Partnerships & Event Support | JAV'S SPORTS ACADEMY Chennai",
  description: "Sports partnership solutions for Schools, Colleges, Gated Apartment Communities, and Corporate Organisations. Professional referees, annual sports days, and tournament management in Chennai.",
};

export default function PartnershipsPage() {
  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Institutional & Community Solutions"
        title="Sports Partnerships & Events"
        subtitle="We work with institutions and communities to create active, confident, and connected environments through sport. Flexible programmes customized around each partner's needs."
      >
        <div className="flex flex-wrap items-center gap-4">
          <DirectWhatsAppButton
            label="Discuss a Sports Partnership"
            message="Hi Coach Mohammed Javeed, I represent an institution/community and would like to explore a sports partnership with JAV'S Sports Academy."
          />
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* Section 1: The 4 Partnership Verticals */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Who We Partner With
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Tailored Sporting Solutions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              From school playgrounds to corporate boardrooms and gated residential enclaves across Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTITUTIONAL_PARTNERS.map((partner) => (
              <Card
                key={partner.id}
                id={partner.id}
                className="scroll-mt-24 flex flex-col justify-between bg-card border-border hover:border-brand-primary/40 transition-all duration-300 shadow-sm hover:shadow-md p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                      {partner.badge}
                    </Badge>
                    <Handshake className="h-5 w-5 text-brand-primary" />
                  </div>

                  <h3 className="text-2xl font-black uppercase text-foreground tracking-tight">
                    {partner.title}
                  </h3>
                  <p className="text-sm font-semibold text-brand-primary mt-1 mb-4">
                    {partner.subtitle}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Our Program Offerings:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {partner.offerings.map((off, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{off}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <DirectWhatsAppButton
                    label="Discuss a Sports Partnership"
                    message={`Hi Coach Mohammed Javeed, I would like to discuss a ${partner.title} sports partnership with JAV'S Sports Academy.`}
                    className="w-full font-bold shadow-xs"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2: Tangible Case Studies (Blocker 5 & 2) */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="outline" className="text-xs uppercase tracking-widest font-bold border-border text-brand-primary">
              Demonstrated Case Studies
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Proven Delivery in Action
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Real institutional execution models operating across educational campuses and premium residential societies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1: School Sports Day Model */}
            <Card id="sports-days" className="scroll-mt-24 bg-card border-border p-8 rounded-3xl shadow-sm space-y-5">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                  School Execution Model
                </Badge>
                <Calendar className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground">
                  Turnkey Annual School Sports Day
                </h3>
                <p className="text-xs text-brand-primary font-bold mt-1">
                  Comprehensive Event Architecture & Officiating
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Schools eliminate operational headaches by delegating event choreography to JAV&apos;S Academy. We manage track line markings, electronic timing, certified referees, march-past coordination, and awards ceremony protocols for over 800 student participants.
              </p>
              <div className="space-y-2 pt-3 border-t border-border">
                <p className="text-xs font-bold uppercase text-foreground">Deliverables Included:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>15 Track & Field events with certified athletics officials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>Age-group heat sheets and computerized score consolidation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>Emergency first-aid station and hydration management</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Case Study 2: Prestige Bella Vista Residential Model */}
            <Card className="bg-card border-border p-8 rounded-3xl shadow-sm space-y-5">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                  Residential Society Model
                </Badge>
                <Building2 className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground">
                  Prestige Bella Vista Sports Complex
                </h3>
                <p className="text-xs text-brand-primary font-bold mt-1">
                  On-Campus Multi-Sport Society Coaching
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Operating directly inside the prestigious Prestige Bella Vista community in Iyyappanthangal. Residents benefit from structured after-school coaching in swimming, badminton, tennis, and cricket right at their doorstep, without commuting across Chennai.
              </p>
              <div className="space-y-2 pt-3 border-t border-border">
                <p className="text-xs font-bold uppercase text-foreground">Impact Delivered:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>Daily evening batches for children ages 4 to 17</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>Weekend society cricket and badminton tournaments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                    <span>Adult fitness conditioning and swimming masterclasses</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3: Event Support Services */}
        <section className="p-8 sm:p-14 rounded-3xl bg-card border border-border shadow-md space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="cyan" className="text-xs uppercase tracking-widest font-bold">
              Turnkey Logistics
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Comprehensive Event Support
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We provide qualified sports officials, tournament architects, electronic scorekeeping, and logistical coordination for seamless athletic events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_SUPPORT_SERVICES.map((serv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-muted/40 border border-border space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-brand-primary flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-foreground">
                  {serv.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {serv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-muted/50 border border-border text-xs text-muted-foreground italic">
            Note: Services are subject to availability, sport-specific requirements, qualified personnel, and suitable venue arrangements.
          </div>
        </section>
      </div>
    </div>
  );
}
