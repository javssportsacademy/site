import React from "react";
import Link from "next/link";
import { YoutubeIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { Play, ArrowRight, ExternalLink, ShieldAlert, BookOpen, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  JAVS_INBOX_CHANNEL,
  FEATURED_CONVERSATIONS,
} from "@/lib/constants/media";

export function InsideTheGameSection() {
  const primaryInterview = FEATURED_CONVERSATIONS[0]; // Dayalan Hemalatha (RCB)
  const otherInterviews = FEATURED_CONVERSATIONS.slice(1, 3); // Mr. Srinivasan & Mr. Srivatsan

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Signature Editorial Feature</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Inside the Game — <span className="text-brand-primary">With JAV&apos;S</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Conversations with the people who shape the game. Real perspectives from international cricketers, seasoned mentors, and sports authorities — curated by Coach Mohammed Javeed to educate parents and young athletes.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="border-border bg-card text-foreground hover:bg-muted font-bold text-xs uppercase tracking-wider shadow-sm">
              <Link href="/javs-inbox">
                <span>All 5 Conversations</span>
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-1.5 shadow-sm">
              <a
                href={JAVS_INBOX_CHANNEL.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="h-4 w-4 fill-current" />
                <span>@JavsInbox on YouTube</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Lead Interview: Dayalan Hemalatha Spotlight */}
        <div className="mb-10 rounded-3xl bg-card border border-border overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="lg:col-span-8 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="crimson" className="text-xs uppercase font-bold tracking-wider">
                    {primaryInterview.guestRoleBadge}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground font-semibold">
                    {primaryInterview.format} • Published on Instagram & YouTube
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                    In Conversation with {primaryInterview.guestName}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-brand-primary">
                    {primaryInterview.guestTitle}
                  </p>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-foreground/90">
                  Topic: &ldquo;{primaryInterview.topic}&rdquo;
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {primaryInterview.discussionSummary}
                </p>

                {/* Editorial Takeaway Card */}
                <div className="p-5 rounded-2xl bg-amber-500/10 border-l-4 border-brand-primary space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-amber-400">
                    <BookOpen className="h-4 w-4 text-brand-primary" />
                    <span>Actionable Takeaway for Parents & Athletes</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                    {primaryInterview.actionableTakeaway}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <span className="text-[11px] text-muted-foreground font-mono italic">
                  {primaryInterview.evidenceDisclaimer}
                </span>

                <div className="flex items-center gap-2.5">
                  <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-sm">
                    <a
                      href={JAVS_INBOX_CHANNEL.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" />
                      <span>Watch on @javs_inbox</span>
                    </a>
                  </Button>
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-sm">
                    <a
                      href={JAVS_INBOX_CHANNEL.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeIcon className="h-3.5 w-3.5 fill-current" />
                      <span>YouTube</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side Visual Panel */}
            <div className="lg:col-span-4 bg-muted/40 p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-brand-primary flex items-center justify-center border border-amber-500/20 shadow-sm">
                  <Video className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-base font-black uppercase text-foreground">Why This Matters</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    Coach Mohammed Javeed engages with India and state-level practitioners to bring professional reality into our training curriculums — rejecting outdated methods in favor of contemporary sports pedagogy.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border text-[11px] text-muted-foreground space-y-1 shadow-xs">
                <p className="font-bold text-foreground uppercase tracking-wider">Curated by:</p>
                <p className="text-foreground font-bold">Mohammed Javeed (M.P.Ed.)</p>
                <p>Founder & Director of Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Conversations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherInterviews.map((item) => (
            <Card
              key={item.id}
              className="bg-card border-border p-6 flex flex-col justify-between hover:border-brand-primary/40 transition-colors shadow-sm"
            >
              <CardHeader className="p-0 pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-brand-primary">
                    {item.guestRoleBadge}
                  </Badge>
                  <span className="text-[11px] font-mono text-muted-foreground font-semibold">{item.format}</span>
                </div>
                <h4 className="text-lg font-black text-foreground">
                  {item.guestName}
                </h4>
                <p className="text-xs text-brand-primary font-bold">
                  {item.guestTitle}
                </p>
              </CardHeader>

              <CardContent className="p-0 space-y-3 flex-grow">
                <p className="text-xs font-bold text-foreground/90">
                  Topic: {item.topic}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.discussionSummary}
                </p>
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border text-xs text-foreground">
                  <span className="font-bold text-brand-primary">Takeaway: </span>
                  <span>{item.actionableTakeaway.replace("Key Insight for ", "")}</span>
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground italic font-mono">
                  {item.evidenceDisclaimer}
                </span>
                <a
                  href={item.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors"
                >
                  <span>Watch Feature</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Explicit Evidence Distinction Callout */}
        <div className="mt-8 p-4 rounded-xl bg-card border border-border flex items-start gap-3 text-xs text-muted-foreground shadow-xs">
          <ShieldAlert className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-foreground">Evidence Classification Notice: </strong>
            Guest appearances on <em>Jav&apos;s Inbox</em> represent independent editorial dialogues exploring sports development. They reflect Coach Javeed&apos;s active initiative and continuous engagement with the sporting ecosystem, and are distinguished from direct academy coaching staff or institutional partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
