import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  AlertTriangle,
  FileText,
  HeartHandshake,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { PRIMARY_PHONE_DISPLAY, PRIMARY_EMAIL } from "@/lib/whatsapp";
import { ACADEMY_SAFEGUARDING_STATEMENT } from "@/lib/constants/site";

export const metadata = {
  title: "Safeguarding & Child Protection Policy | JAV'S SPORTS ACADEMY Chennai",
  description: "Official Child Protection and Safeguarding Policy at JAV'S Sports Academy. Coach code of conduct, safe training environments, privacy notice for minors, and reporting protocols.",
};

export default function SafeguardingPage() {
  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Official Academy Standards"
        title="Safeguarding & Child Protection"
        subtitle={ACADEMY_SAFEGUARDING_STATEMENT}
      >
        <div className="flex flex-wrap items-center gap-4">
          <TrialBookingModal />
          <DirectWhatsAppButton label="Speak With Safeguarding Officer" />
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {/* Core Principles Header */}
        <section className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-md space-y-6">
          <div className="max-w-3xl space-y-3">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-wider">
              Core Institutional Policy
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              A Duty of Care to Every Young Athlete
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              At JAV&apos;S Sports Academy, we recognise that parents place immense trust in our coaches and programmes. We maintain an uncompromising duty of care to ensure that every sports session is physically safe, emotionally encouraging, and respectful of individual development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-muted/50 border border-border space-y-2">
              <ShieldCheck className="h-6 w-6 text-brand-primary" />
              <h3 className="font-bold text-foreground">Zero-Tolerance Harassment</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Absolute zero tolerance for physical intimidation, verbal abuse, cyber-bullying, or derogatory commentary.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border space-y-2">
              <UserCheck className="h-6 w-6 text-brand-primary" />
              <h3 className="font-bold text-foreground">Screened Coaching Staff</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All coaches undergo professional background verification, reference cross-checks, and training in positive youth pedagogy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border space-y-2">
              <Lock className="h-6 w-6 text-brand-primary" />
              <h3 className="font-bold text-foreground">Privacy Protection for Minors</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Participant data and media consent are strictly managed with prior parental approval and compliance with data privacy norms.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Academy Safeguarding */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs uppercase font-bold tracking-wider border-border text-brand-primary">
              Standards in Action
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
              Four Operating Pillars of Safety
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border shadow-xs p-8 space-y-4">
              <h4 className="text-xl font-black uppercase text-foreground">
                1. Safe Training Environments & Workloads
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Hydration Schedules: </strong>Mandatory water intervals every 20 minutes, calibrated for Chennai's tropical heat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Growth-Plate Protection: </strong>Strict workload tracking preventing overuse tendonitis and bone-stress injuries in adolescent fast bowlers and runners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Certified First Aid: </strong>On-site first aid kits, ice therapy packs, and emergency transport protocols maintained at all centres.</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-border shadow-xs p-8 space-y-4">
              <h4 className="text-xl font-black uppercase text-foreground">
                2. Coach Code of Professional Conduct
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Encouraging Pedagogy: </strong>Feedback is constructive and instructional, celebrating process and technique rather than scolding errors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Open Visibility: </strong>All coaching drills occur in open, publicly visible facilities; one-on-one sessions in secluded spaces are strictly prohibited.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Professional Boundaries: </strong>Direct private messaging between coaches and minor athletes without parental inclusion is forbidden.</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-border shadow-xs p-8 space-y-4">
              <h4 className="text-xl font-black uppercase text-foreground">
                3. Privacy Notice for Minor Enquiries
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Parental Consent: </strong>Registration forms, health disclosures, and batch allocations require express parental or legal guardian authorisation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Media Publishing Rights: </strong>Action photographs and academy tournament highlights are published only with prior opt-in parental release.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Data Confidentiality: </strong>Contact numbers and medical details are never shared with commercial third parties or external marketing agencies.</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-border shadow-xs p-8 space-y-4">
              <h4 className="text-xl font-black uppercase text-foreground">
                4. Incident Reporting & Escalation Protocol
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Direct Escalation Line: </strong>Parents can directly reach Director Mohammed Javeed for any safety or coaching concerns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Immediate Suspension: </strong>Any credible allegation regarding safety violation initiates an immediate temporary suspension pending enquiry.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Documented Resolution: </strong>Every incident is logged, reviewed, and communicated back to the concerned parents within 48 hours.</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Contact Safeguarding Officer Bar */}
        <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-black text-foreground">
              Questions or Concerns Regarding Athlete Safety?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Contact Academy Operations Director Mohammed Javeed (M.P.Ed.) directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PRIMARY_PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-card border border-border text-xs font-bold text-foreground hover:bg-muted"
            >
              <Phone className="h-3.5 w-3.5 text-brand-primary" />
              <span>{PRIMARY_PHONE_DISPLAY}</span>
            </a>
            <DirectWhatsAppButton
              label="Confidential Safety Chat"
              message="Hello Coach Javeed, I have a safeguarding / wellbeing enquiry regarding JAV'S Sports Academy."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
