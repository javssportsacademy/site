"use client";

import React, { useState } from "react";
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
import { PlayableConversationCard } from "@/components/media/PlayableConversationCard";

export function InsideTheGameSection() {
  const [isPlayingLead, setIsPlayingLead] = useState(false);
  const primaryInterview = FEATURED_CONVERSATIONS[0]; // Dayalan Hemalatha (RCB)
  const otherInterviews = FEATURED_CONVERSATIONS.slice(1, 3); // Mr. Srinivasan & Mr. Srivatsan

  return (
    <section className="py-20 md:py-24 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Signature Feature: Jav&apos;s Inbox</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Inside the Game — <span className="text-brand-primary">With JAV&apos;S</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Candid conversations with international athletes and seasoned mentors, curated by Coach Mohammed Javeed to educate parents and young athletes on athletic longevity.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" className="border-border bg-card text-foreground hover:bg-muted font-bold text-xs uppercase tracking-wider shadow-xs">
              <Link href="/founder#conversations">
                <span>View Founder Dialogues</span>
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-1.5 shadow-xs">
              <a
                href={JAVS_INBOX_CHANNEL.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="h-4 w-4 fill-current" />
                <span>@JavsInbox</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Lead Interview: Dayalan Hemalatha Spotlight */}
        <div className="mb-8 rounded-3xl bg-card border border-border overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="lg:col-span-8 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="crimson" className="text-xs uppercase font-bold tracking-wider">
                    {primaryInterview.guestRoleBadge}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground font-semibold">
                    {primaryInterview.format} • Instagram & YouTube
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                    In Conversation with {primaryInterview.guestName}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-brand-primary">
                    {primaryInterview.guestTitle}
                  </p>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-foreground/90">
                  Topic: &ldquo;{primaryInterview.topic}&rdquo;
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {primaryInterview.discussionSummary}
                </p>

                {/* Editorial Takeaway Card */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border-l-3 border-brand-primary space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-amber-400">
                    <BookOpen className="h-3.5 w-3.5 text-brand-primary" />
                    <span>Actionable Takeaway for Parents & Athletes</span>
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                    {primaryInterview.actionableTakeaway.replace("Key Insight for Parents: ", "")}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-muted-foreground font-mono italic">
                  Independent Sporting Dialogue
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => setIsPlayingLead(!isPlayingLead)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider gap-1.5 shadow-xs"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>{isPlayingLead ? "Stop Video" : "Play in Card"}</span>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="text-xs font-bold uppercase tracking-wider gap-1.5 border-border bg-card hover:bg-muted text-foreground">
                    <a
                      href={primaryInterview.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeIcon className="h-3.5 w-3.5 fill-current text-red-600" />
                      <span>Watch on YouTube</span>
                      <ExternalLink className="h-3 w-3 ml-0.5" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="text-xs font-bold uppercase tracking-wider gap-1.5 border-border bg-card hover:bg-muted text-foreground">
                    <a
                      href={JAVS_INBOX_CHANNEL.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-3.5 w-3.5 text-pink-600" />
                      <span>Reels</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side Visual Panel - Playable directly */}
            <div className="lg:col-span-4 bg-muted/40 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-between space-y-5">
              {/* Responsive 16:9 Video Area */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-border shadow-md select-none">
                {isPlayingLead ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${primaryInterview.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                      title={primaryInterview.topic}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <button
                      type="button"
                      onClick={() => setIsPlayingLead(false)}
                      className="absolute top-2 right-2 z-20 px-2 py-0.5 rounded-md bg-black/85 hover:bg-black text-white text-[10px] font-bold flex items-center gap-1 shadow-md border border-white/20 transition-all active:scale-95"
                      title="Close player"
                    >
                      <span>✕ Close</span>
                    </button>
                    <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
                      <Badge className="bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 border-0 shadow-sm py-0.5 px-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Live Playing</span>
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsPlayingLead(true)}
                    className="relative w-full h-full cursor-pointer group/lead"
                    title="Click to play this video directly"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsPlayingLead(true);
                      }
                    }}
                  >
                    <img
                      src={primaryInterview.thumbnailUrl}
                      alt={primaryInterview.guestName}
                      className="w-full h-full object-cover group-hover/lead:scale-105 transition-transform duration-300 opacity-90 group-hover/lead:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/lead:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover/lead:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold text-white bg-black/75 px-2 py-0.5 rounded border border-white/20 flex items-center gap-1">
                        <Play className="h-2.5 w-2.5 fill-current text-red-500" />
                        <span>Play Direct</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-black uppercase text-foreground">Why This Matters</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  Coach Mohammed Javeed brings real first-class insights into our training sessions, rejecting outdated drills in favor of contemporary sports science.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-card border border-border text-[11px] text-muted-foreground space-y-0.5 shadow-2xs">
                <p className="font-bold text-foreground">Curated by Mohammed Javeed (M.P.Ed.)</p>
                <p className="text-[10px]">Founder & Director of Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Conversations Grid - Playable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherInterviews.map((item, idx) => (
            <PlayableConversationCard
              key={item.id}
              conversation={item}
              index={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
