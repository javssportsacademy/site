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
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Signature Editorial Feature</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
              Inside the Game — <span className="text-brand-primary">With JAV&apos;S</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Conversations with the people who shape the game. Real perspectives from international cricketers, seasoned mentors, and sports authorities — curated by Coach Mohammed Javeed to educate parents and young athletes.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider shadow-sm">
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
        <div className="mb-10 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="lg:col-span-8 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="crimson" className="text-xs uppercase font-bold tracking-wider">
                    {primaryInterview.guestRoleBadge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {primaryInterview.format} • Published on Instagram & YouTube
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 tracking-tight">
                    In Conversation with {primaryInterview.guestName}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-brand-primary">
                    {primaryInterview.guestTitle}
                  </p>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-800">
                  Topic: &ldquo;{primaryInterview.topic}&rdquo;
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {primaryInterview.discussionSummary}
                </p>

                {/* Editorial Takeaway Card */}
                <div className="p-5 rounded-2xl bg-amber-50 border-l-4 border-brand-primary space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                    <BookOpen className="h-4 w-4 text-brand-primary" />
                    <span>Actionable Takeaway for Parents & Athletes</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {primaryInterview.actionableTakeaway}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500 font-mono italic">
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
            <div className="lg:col-span-4 bg-slate-100/70 p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-brand-primary flex items-center justify-center border border-amber-200 shadow-sm">
                  <Video className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-base font-black uppercase text-slate-900">Why This Matters</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Coach Mohammed Javeed engages with India and state-level practitioners to bring professional reality into our training curriculums — rejecting outdated methods in favor of contemporary sports pedagogy.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1 shadow-xs">
                <p className="font-bold text-slate-900 uppercase tracking-wider">Curated by:</p>
                <p className="text-slate-900 font-bold">Mohammed Javeed (M.P.Ed.)</p>
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
              className="bg-white border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-sm"
            >
              <CardHeader className="p-0 pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase border-slate-300 text-brand-primary">
                    {item.guestRoleBadge}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">{item.format}</span>
                </div>
                <h4 className="text-lg font-black text-slate-900">
                  {item.guestName}
                </h4>
                <p className="text-xs text-brand-primary font-bold">
                  {item.guestTitle}
                </p>
              </CardHeader>

              <CardContent className="p-0 space-y-3 flex-grow">
                <p className="text-xs font-bold text-slate-800">
                  Topic: {item.topic}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.discussionSummary}
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <span className="font-bold text-brand-primary">Takeaway: </span>
                  <span>{item.actionableTakeaway.replace("Key Insight for ", "")}</span>
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 italic font-mono">
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
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 text-xs text-slate-600 shadow-xs">
          <ShieldAlert className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-900">Evidence Classification Notice: </strong>
            Guest appearances on <em>Jav&apos;s Inbox</em> represent independent editorial dialogues exploring sports development. They reflect Coach Javeed&apos;s active initiative and continuous engagement with the sporting ecosystem, and are distinguished from direct academy coaching staff or institutional partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
