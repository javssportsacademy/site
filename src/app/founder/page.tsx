import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { FOUNDER_DATA, FOUNDER_TIMELINE, FOUNDER_MEDIA_APPEARANCES } from "@/lib/constants/founder";
import { COACHING_TEAM, ACADEMY_ACHIEVEMENTS, ACADEMY_FACILITIES, ACADEMY_EVENTS } from "@/lib/constants/team";
import { FEATURED_CONVERSATIONS, JAVS_INBOX_CHANNEL } from "@/lib/constants/media";
import { APPROVED_TESTIMONIALS } from "@/lib/constants/testimonials";
import { PlayableConversationsGrid } from "@/components/media/PlayableConversationsGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Tv,
  ShieldAlert,
  Trophy,
  Users,
  Video,
  Play,
  ExternalLink,
  BookOpen,
  Calendar,
  Sparkles,
  MapPin,
  Camera,
  GraduationCap,
  MessageSquareQuote,
  Clock,
  ArrowRight
} from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export const metadata = {
  title: "Founder Leadership & Evidence-Backed Storytelling | Coach Mohammed Javeed (M.P.Ed.)",
  description: "Explore the verified journey of Coach Mohammed Javeed (M.Sc., M.P.Ed.) — 10+ years TNCA/TDCA league player, certified coach by MSDCA & Coaching Beyond, host of Jav's Inbox, and Director of JAV'S Sports Academy.",
};

export default function FounderPage() {
  // 3 Primary documented sporting conversations as requested
  const threePrimaryConversations = FEATURED_CONVERSATIONS.slice(0, 3);

  return (
    <div className="bg-background pb-28 text-foreground">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Evidence-Backed Founder Story"
        title="Coach Mohammed Javeed"
        subtitle="Founder & Director of Operations • M.Sc. Computer Science • Master of Physical Education (M.P.Ed.)"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <DirectWhatsAppButton
            label="Connect with Coach Javeed"
            message="Hi Coach Mohammed Javeed, I am reaching out through the JAV'S Sports Academy website to discuss coaching/partnerships."
          />
          <TrialBookingModal
            triggerButton={
              <Button size="lg" className="font-bold text-sm tracking-wide gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/20">
                <Users className="h-4 w-4" />
                <span>Book Player Assessment</span>
              </Button>
            }
          />
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* ======================================================== */}
        {/* SECTION 1: STRONG FOUNDER PORTRAIT & EXECUTIVE CREDENTIALS */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Styled Portrait Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xl space-y-6">
              {/* Founder Portrait Frame */}
              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-border shadow-md group bg-muted">
                <Image
                  src="/images/founder-portrait.png"
                  alt="Coach Mohammed Javeed (M.P.Ed.) addressing audience at sports conference"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Subtle gradient overlay at bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Verified Director Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="default" className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white shadow-sm flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified Director</span>
                  </Badge>
                </div>

                {/* Bottom Credential Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-white space-y-1">
                  <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow-sm">
                    Mohammed Javeed
                  </p>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    M.Sc. (CS) • M.P.Ed.
                  </p>
                  <p className="text-[11px] text-white/80 font-mono">
                    Wicketkeeper-Batsman • TNCA / TDCA Leagues
                  </p>
                </div>
              </div>

              {/* Core Vital Stats */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3.5 rounded-2xl bg-muted/40 border border-border">
                  <p className="text-2xl font-black text-foreground font-mono">10+ Yrs</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Competitive League</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-muted/40 border border-border">
                  <p className="text-2xl font-black text-foreground font-mono">500+</p>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">Children Mentored</p>
                </div>
              </div>

              {/* Direct Media CTA Button */}
              <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-sm py-5">
                <a
                  href={JAVS_INBOX_CHANNEL.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon className="h-4 w-4 fill-current" />
                  <span>Watch @JavsInbox on YouTube</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-auto" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Evidence */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
                Director&apos;s Profile & Scientific Pedagogy
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-foreground tracking-tight leading-[1.1]">
                Competitive League Mastery Meets <span className="text-brand-primary">Sports Science</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Coach Mohammed Javeed bridges the gap between active competitive cricket and academic physical education. Unlike commercial franchise academies that rely on untrained assistants, every curriculum at JAV&apos;S is authored, monitored, and refined directly under Coach Javeed&apos;s active direction.
              </p>
            </div>

            {/* Official Philosophy Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border-l-4 border-brand-primary border-t border-r border-b border-border space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Sparkles className="h-4 w-4" />
                <span>Core Athletic Manifesto</span>
              </div>
              <p className="text-xl sm:text-2xl font-black italic text-foreground leading-snug">
                &ldquo;{FOUNDER_DATA.philosophy}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {FOUNDER_DATA.philosophyContext} We reject the premature commercial pressure that burns out 70% of junior athletes by age 14. We develop durable biomechanics, athletic resilience, and mental composure that serve students for life.
              </p>
            </div>

            {/* Playing Credentials Callout */}
            <div className="p-5 rounded-2xl bg-muted/40 border border-border flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-brand-primary shrink-0 mt-0.5">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Active First-Hand Competitive Playing Record
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  {FOUNDER_DATA.playingBackground}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Decade-long experience reading pitch conditions, handling high-pressure match finishes, and directing field placements translates directly into tactical cricket instruction for our junior and senior batches.
                </p>
              </div>
            </div>

            {/* Evidence Policy Banner */}
            <div className="p-4 rounded-xl bg-card border border-border text-xs text-muted-foreground space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-foreground font-bold">
                <ShieldAlert className="h-4 w-4 text-brand-primary shrink-0" />
                <span>Our Clear 3-Tier Evidence Distinction:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                <strong>1. Jav&apos;s Inbox Dialogues: </strong>Independent conversations with prominent figures (Dayalan Hemalatha, NCA mentors) demonstrating continuous learning.
                <br />
                <strong>2. Professional Standing: </strong>Verified certifications through MSDCA, Coaching Beyond, and TNCA/TDCA player registries.
                <br />
                <strong>3. Academy Operations: </strong>Direct coaching delivery across our dedicated hubs in Thiruverkadu and Prestige Bella Vista.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: 3 AUTHENTIC SPORTING INTERACTIONS (JAV'S INBOX) */}
        {/* ======================================================== */}
        <section id="conversations" className="space-y-10 pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                <Video className="h-3.5 w-3.5" />
                <span>Documented Sporting Interactions</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
                Dialogues with Distinguished <span className="text-brand-primary">Sports Personalities</span>
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A founder actively engaging with elite sporting figures generates true pedagogical credibility. Here are three documented, candid conversations hosted by Coach Mohammed Javeed exploring physical conditioning, biomechanics, and match temperament.
              </p>
            </div>

            <Button asChild variant="outline" className="border-border bg-card text-foreground hover:bg-muted font-bold text-xs uppercase tracking-wider shadow-xs shrink-0">
              <Link href="/javs-inbox">
                <span>View Full Media Archive</span>
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>

          <PlayableConversationsGrid
            conversations={threePrimaryConversations}
            columns={3}
          />
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: SHORT PROFESSIONAL CAREER TIMELINE */}
        {/* ======================================================== */}
        <section className="space-y-10 pt-12 border-t border-border">
          <div className="space-y-3 max-w-3xl">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Milestone Progression
            </Badge>
            <h3 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              A Decade of Dedicated <span className="text-brand-primary">Athletic Leadership</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every phase of Coach Javeed&apos;s journey is documented and verifiable — from competitive league play to academic physical education credentials and institutional academy leadership.
            </p>
          </div>

          <div className="relative border-l-2 border-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {FOUNDER_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-card border-2 border-brand-primary flex items-center justify-center shadow-xs group-hover:bg-brand-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-primary group-hover:bg-white transition-colors" />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-xs hover:shadow-md transition-shadow space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-brand-primary dark:text-amber-400 font-mono text-xs font-bold">
                      {item.year}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-muted-foreground">
                      {item.category}
                    </Badge>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black uppercase text-foreground tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Evidence: {item.evidenceProof}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: QUALIFICATIONS & VERIFIED CERTIFICATIONS */}
        {/* ======================================================== */}
        <section className="space-y-10 pt-12 border-t border-border">
          <div className="space-y-3 max-w-3xl">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Academic & Professional Rigor
            </Badge>
            <h3 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Dual Post-Graduation & <span className="text-brand-primary">Accreditations</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Why does Coach Javeed&apos;s qualification matter to your child? Because training young bodies requires deep scientific understanding of growth-plate vulnerabilities, motor skill pedagogy, and data-backed performance tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUNDER_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-card border border-border hover:border-brand-primary/40 transition-all duration-300 shadow-xs hover:shadow-md space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-brand-primary dark:text-amber-400 shrink-0">
                    {idx < 2 ? <ShieldCheck className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase text-foreground leading-snug">
                      {cert.title}
                    </h4>
                    <span className="text-[10px] font-bold uppercase text-brand-primary tracking-wider">
                      {idx === 0 ? "Cricket Pedagogy" : idx === 1 ? "Biomechanics & Strategy" : idx === 2 ? "University Postgraduate" : "Analytical Computing"}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5: AUTHENTIC MEDIA APPEARANCES WITH DIRECT LINKS */}
        {/* ======================================================== */}
        <section className="space-y-10 pt-12 border-t border-border">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-brand-primary dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Tv className="h-3.5 w-3.5" />
              <span>Broadcast Media Appearances</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Direct Media Appearances & <span className="text-brand-primary">Commentary</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Coach Mohammed Javeed is regularly invited to share sports commentary, match analysis, and grassroots coaching pedagogy across Tamil Nadu&apos;s leading television and digital broadcast channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDER_MEDIA_APPEARANCES.map((media, idx) => (
              <Card key={idx} className="bg-card border-border flex flex-col justify-between hover:border-brand-primary/40 transition-colors shadow-sm">
                <CardHeader className="p-6 pb-2 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-brand-primary">
                      {media.badge}
                    </Badge>
                    <span className="text-[10px] font-mono text-muted-foreground">{media.platform}</span>
                  </div>
                  <h4 className="text-lg font-black uppercase text-foreground">
                    {media.outlet}
                  </h4>
                  <p className="text-xs font-bold text-brand-primary">
                    {media.title}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-2 flex-grow">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {media.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 border-t border-border mt-auto flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-foreground">
                    Role: {media.role}
                  </span>
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary hover:underline"
                  >
                    <span>View Feature</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 6: REAL ACADEMY PROOF: COACHES, FACILITIES & PHOTOS */}
        {/* ======================================================== */}
        <section className="space-y-12 pt-12 border-t border-border">
          <div className="space-y-3 max-w-3xl">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Real Academy Proof
            </Badge>
            <h3 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Actual Coaches, Facilities & <span className="text-brand-primary">Training Grounds</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              True credibility lives on the field. Beyond Coach Javeed, JAV&apos;S Academy brings together verified TNCA league bowlers, Dav Whatmore colleagues, and university physical education mentors.
            </p>
          </div>

          {/* Actual Coaches Grid */}
          <div className="space-y-4">
            <h4 className="text-xl font-black uppercase text-foreground tracking-tight flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-primary" /> Specialist Coaching Faculty
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COACHING_TEAM.map((coach) => (
                <Card key={coach.id} className="bg-card border-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-brand-primary">
                        {coach.badge}
                      </Badge>
                      <span className="text-[11px] font-mono text-muted-foreground">{coach.experience}</span>
                    </div>
                    <h5 className="text-lg font-black uppercase text-foreground">
                      {coach.name}
                    </h5>
                    <p className="text-xs font-bold text-brand-primary">
                      {coach.role}
                    </p>
                    <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                      {coach.credentials}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 space-y-3 flex-grow">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-foreground">
                      {coach.quoteOrHighlight}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {coach.bio}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 border-t border-border mt-auto">
                    <p className="text-[11px] text-muted-foreground font-medium pt-2">
                      Specialty: {coach.specialty}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Facilities & Photographic Placeholders */}
          <div className="space-y-4 pt-4">
            <h4 className="text-xl font-black uppercase text-foreground tracking-tight flex items-center gap-2">
              <Camera className="h-5 w-5 text-brand-primary" /> Facilities & Training Photography
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACADEMY_FACILITIES.map((facility) => (
                <div key={facility.id} className="rounded-2xl bg-card border border-border overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
                  {/* Photo Placeholder Box */}
                  <div className="relative aspect-4/3 w-full bg-gradient-to-tr from-muted via-card to-amber-500/10 flex flex-col items-center justify-center p-4 border-b border-border text-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-brand-primary flex items-center justify-center mb-2">
                      <Camera className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      [ {facility.tag} Placeholder ]
                    </span>
                    <Badge variant="outline" className="mt-2 text-[9px] font-mono border-border text-foreground">
                      {facility.hub}
                    </Badge>
                  </div>

                  <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm font-black uppercase text-foreground leading-snug">
                        {facility.title}
                      </h5>
                      <p className="text-[11px] font-semibold text-brand-primary mt-1">
                        {facility.specs}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documented Sporting Events & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {/* Events */}
            <div className="p-6 sm:p-8 rounded-3xl bg-muted/40 border border-border space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Calendar className="h-4 w-4" />
                <span>Documented Academy Events</span>
              </div>
              <h4 className="text-2xl font-black uppercase text-foreground tracking-tight">
                Tournaments & School Sports Execution
              </h4>
              <div className="space-y-4">
                {ACADEMY_EVENTS.map((event) => (
                  <div key={event.id} className="p-4 rounded-xl bg-card border border-border space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-foreground">{event.title}</h5>
                      <Badge variant="secondary" className="text-[9px] uppercase font-bold">{event.format}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{event.summary}</p>
                    <p className="text-[11px] font-semibold text-brand-primary">Outcome: {event.outcomes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 sm:p-8 rounded-3xl bg-muted/40 border border-border space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Trophy className="h-4 w-4" />
                <span>Documented Athlete Milestones</span>
              </div>
              <h4 className="text-2xl font-black uppercase text-foreground tracking-tight">
                Verified Progress Across Chennai
              </h4>
              <div className="space-y-4">
                {ACADEMY_ACHIEVEMENTS.map((ach) => (
                  <div key={ach.id} className="p-4 rounded-xl bg-card border border-border space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-foreground">{ach.title}</h5>
                      <Badge variant="outline" className="text-[9px] uppercase font-bold border-border text-muted-foreground">{ach.tag}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 7: APPROVED TESTIMONIALS */}
        {/* ======================================================== */}
        <section className="space-y-10 pt-12 border-t border-border">
          <div className="space-y-3 max-w-3xl">
            <Badge variant="default" className="text-xs uppercase font-bold tracking-widest">
              Parent & Community Voices
            </Badge>
            <h3 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Approved <span className="text-brand-primary">Testimonials</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Real feedback from families enrolled at our Thiruverkadu Center and Prestige Bella Vista hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APPROVED_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <MessageSquareQuote className="h-5 w-5 text-brand-primary" />
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">{test.sport}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono border-border text-muted-foreground">
                      {test.verifiedDuration}
                    </Badge>
                  </div>

                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-foreground">{test.parentName}</p>
                    <p className="text-[11px] text-muted-foreground">Parent of {test.childName} ({test.childAge})</p>
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground px-2.5 py-1 rounded-lg bg-muted">
                    {test.hub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 8: DIRECT CONVERSATION & ENQUIRY CTA */}
        {/* ======================================================== */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-card via-card to-amber-500/10 border border-border shadow-xl text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="default" className="text-xs uppercase tracking-widest font-bold mx-auto">
            Direct Access
          </Badge>
          <h3 className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
            Speak Directly with <span className="text-brand-primary">Coach Mohammed Javeed</span>
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you want an honest assessment of your child&apos;s athletic readiness or wish to discuss an institutional sports partnership for your school, Coach Javeed is accessible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <DirectWhatsAppButton
              label="WhatsApp Coach Javeed Directly"
              message="Hi Coach Mohammed Javeed, I would like to schedule a direct discussion regarding sports coaching."
            />
            <TrialBookingModal
              triggerButton={
                <Button size="lg" variant="outline" className="font-bold text-sm tracking-wide gap-2 border-border bg-card text-foreground hover:bg-muted shadow-xs">
                  <Users className="h-4 w-4 text-brand-primary" />
                  <span>Book Free Assessment Session</span>
                </Button>
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
