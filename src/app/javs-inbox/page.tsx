import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { JAVS_INBOX_CHANNEL, FEATURED_CONVERSATIONS } from "@/lib/constants/media";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { Play, ExternalLink, Radio, BookOpen, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Inside the Game & Jav's Inbox | JAV'S SPORTS ACADEMY Chennai",
  description: "Conversations with the people who shape the game — curated by Coach Mohammed Javeed (M.P.Ed.). In-depth interviews with international athletes, NCA mentors, and youth development specialists.",
};

export default function JavsInboxPage() {
  return (
    <div className="bg-slate-950 pb-24">
      <SubpageHero
        badge="Editorial Sports Conversations"
        title="Inside the Game — Jav's Inbox"
        subtitle="Unfiltered conversations with the people who shape the game: international players, NCA coaches, and sports authorities. Curated by Mohammed Javeed to educate parents, mentor young athletes, and advance grassroots sports."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold gap-2 shadow-xl">
            <a
              href={JAVS_INBOX_CHANNEL.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className="h-5 w-5 fill-current" />
              <span>Subscribe on YouTube (@JavsInbox)</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Editorial Purpose & Curation Statement */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <Badge variant="crimson" className="text-xs font-bold uppercase tracking-wider">
              Editorial Purpose
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Democratizing Elite Sports Wisdom
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {JAVS_INBOX_CHANNEL.description}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {JAVS_INBOX_CHANNEL.curationMission}
            </p>
          </div>

          {/* Evidence Classification Banner */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-400">
            <ShieldAlert className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-200">Evidence Classification Notice: </strong>
              {JAVS_INBOX_CHANNEL.evidenceDistinctionNotice}
            </p>
          </div>
        </div>

        {/* Featured Conversations Grid */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Archived Conversations
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Featured Interviews & Masterclasses
            </h2>
            <p className="text-slate-400 text-sm">
              Each conversation is curated around verifiable guest credentials and practical takeaways for young athletes and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_CONVERSATIONS.map((conv) => (
              <Card
                key={conv.id}
                className="flex flex-col justify-between bg-slate-900 border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="crimson" className="text-xs font-bold uppercase">
                      {conv.guestRoleBadge}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {conv.duration} • {conv.format}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                      {conv.guestName}
                    </h3>
                    <p className="text-xs font-semibold text-brand-primary mt-0.5">
                      {conv.guestTitle}
                    </p>
                  </div>

                  <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Topic: &ldquo;{conv.topic}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {conv.discussionSummary}
                  </p>

                  {/* Takeaway */}
                  <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-brand-primary space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Takeaway:</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {conv.actionableTakeaway}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 italic">
                    {conv.evidenceDisclaimer}
                  </span>

                  <a
                    href={conv.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white transition-colors"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch on YouTube</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
