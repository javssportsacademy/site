import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { INSTITUTIONAL_PARTNERS, EVENT_SUPPORT_SERVICES } from "@/lib/constants/partnerships";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { Check, ShieldCheck, Trophy, Sparkles, Building2, Handshake } from "lucide-react";

export const metadata = {
  title: "Sports Partnerships & Event Support | JAV'S SPORTS ACADEMY Chennai",
  description: "Sports partnership solutions for Schools, Colleges, Gated Apartment Communities, and Corporate Organisations. Professional referees, annual sports days, and tournament management in Chennai.",
};

export default function PartnershipsPage() {
  return (
    <div className="bg-slate-950 pb-24">
      <SubpageHero
        badge="Institutional & Community Solutions"
        title="Sports Partnerships & Events"
        subtitle="We work with institutions and communities to create active, confident, and connected environments through sport. Flexible programmes customized around each partner's needs."
      >
        <div className="flex flex-wrap items-center gap-4">
          <DirectWhatsAppButton
            label="Discuss Partnership on WhatsApp"
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
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Tailored Sporting Solutions
            </h2>
            <p className="text-brand-text-muted text-sm sm:text-base">
              From school playgrounds to corporate boardrooms and gated residential enclaves across Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTITUTIONAL_PARTNERS.map((partner) => (
              <Card
                key={partner.id}
                className="flex flex-col justify-between bg-slate-900 border-white/10 hover:border-brand-primary/40 transition-all duration-300 shadow-2xl p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                      {partner.badge}
                    </Badge>
                    <Handshake className="h-5 w-5 text-brand-primary" />
                  </div>

                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    {partner.title}
                  </h3>
                  <p className="text-sm font-semibold text-brand-primary mt-1 mb-4">
                    {partner.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Our Program Offerings:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {partner.offerings.map((off, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{off}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <DirectWhatsAppButton
                    label={`Partner With Us for ${partner.title}`}
                    message={`Hi Coach Mohammed Javeed, I would like to discuss a ${partner.title} sports partnership with JAV'S Sports Academy.`}
                    className="w-full font-bold"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2: Event Support Services */}
        <section className="p-8 sm:p-14 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="cyan" className="text-xs uppercase tracking-widest font-bold">
              Turnkey Logistics
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Comprehensive Event Support
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide qualified sports officials, tournament architects, electronic scorekeeping, and logistical coordination for seamless athletic events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_SUPPORT_SERVICES.map((serv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-brand-primary flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white">
                  {serv.title}
                </h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  {serv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-xs text-brand-text-muted italic">
            Note: Services are subject to availability, sport-specific requirements, qualified personnel, and suitable venue arrangements.
          </div>
        </section>
      </div>
    </div>
  );
}
