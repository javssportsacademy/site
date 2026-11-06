import React from "react";
import Link from "next/link";
import { Building, GraduationCap, Briefcase, Award, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { INSTITUTIONAL_PARTNERS, EVENT_SUPPORT_SERVICES } from "@/lib/constants/partnerships";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";

export function PartnershipsPreview() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="B2B & Community Solutions"
          title="Your Partner in Sports & Wellness"
          subtitle="We work with educational institutions, corporate houses, and residential gated communities to create active, confident, and connected sports environments."
        />

        {/* 4 Partner Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INSTITUTIONAL_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase mb-3 border-white/10 text-brand-primary">
                  {partner.badge}
                </Badge>
                <h3 className="text-xl font-black uppercase text-white tracking-tight mb-1">
                  {partner.title}
                </h3>
                <p className="text-xs font-semibold text-brand-primary mb-3">
                  {partner.subtitle}
                </p>
                <p className="text-xs text-brand-text-muted leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-[11px] font-bold uppercase text-slate-300">
                  Key Deliverables:
                </p>
                <ul className="space-y-1.5 text-xs text-brand-text-secondary">
                  {partner.offerings.slice(0, 2).map((offering, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-primary font-bold">›</span>
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Event Support Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                Turnkey Sports Management
              </Badge>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Complete Sports Event Support
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Hosting an annual sports day, inter-school tournament, or corporate sports festival? We supply licensed referees, electronic scoring systems, track markings, and match coordination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {EVENT_SUPPORT_SERVICES.map((serv, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <ShieldCheck className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                    <span className="font-semibold">{serv.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-3">
              <DirectWhatsAppButton
                label="Enquire for Your Institution"
                message="Hi Coach Mohammed Javeed, I would like to enquire about sports coaching and event partnership for my school / college / apartment / company."
                className="w-full sm:w-auto text-base py-3 px-6 shadow-xl"
              />
              <Button asChild variant="outline" className="w-full sm:w-auto font-bold border-white/20 text-white">
                <Link href="/partnerships">
                  <span>Explore Partnership Models</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
