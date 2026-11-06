import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { PlayableChannelFeed } from "@/components/media/PlayableChannelFeed";
import { PlayableConversationsGrid } from "@/components/media/PlayableConversationsGrid";
import { JAVS_INBOX_CHANNEL, FEATURED_CONVERSATIONS } from "@/lib/constants/media";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { YoutubeIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { Play, ExternalLink, BookOpen, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Inside the Game & Jav's Inbox | JAV'S SPORTS ACADEMY Chennai",
  description: "Conversations with the people who shape the game — curated by Coach Mohammed Javeed (M.P.Ed.). Live streamable episodes, YouTube interviews, and Instagram dialogues with international athletes and coaches.",
};

export default function JavsInboxPage() {
  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Editorial Sports Conversations"
        title="Inside the Game — Jav's Inbox"
        subtitle="Live playable video dialogues and podcasts with international cricketers, seasoned mentors, and commentators. Curated by Mohammed Javeed (M.P.Ed.) to provide parents and young athletes with unvarnished sporting wisdom."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold gap-2 shadow-md">
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

          <Button asChild size="lg" variant="outline" className="font-bold gap-2 border-border bg-card text-foreground hover:bg-muted shadow-xs">
            <a
              href="https://instagram.com/javs_inbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-4 w-4 text-pink-600" />
              <span>Instagram @javs_inbox</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* TOP SECTION: PLAYABLE YOUTUBE & INSTAGRAM CHANNEL VIDEOS WITH AUTOMATIC REFRESH */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
                Live Channel Stream
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
                Watch & Play Latest Episodes
              </h2>
            </div>
          </div>

          <PlayableChannelFeed />
        </section>

        {/* EDITORIAL PURPOSE & CURATION STATEMENT SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-md space-y-6">
          <div className="max-w-3xl space-y-3">
            <Badge variant="crimson" className="text-xs font-bold uppercase tracking-wider">
              Editorial Purpose
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Democratizing Elite Sports Wisdom
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {JAVS_INBOX_CHANNEL.description}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {JAVS_INBOX_CHANNEL.curationMission}
            </p>
          </div>

          {/* Evidence Classification Banner */}
          <div className="p-4 rounded-xl bg-muted/60 border border-border flex items-start gap-3 text-xs text-muted-foreground">
            <ShieldAlert className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-foreground">Evidence Classification Notice: </strong>
              {JAVS_INBOX_CHANNEL.evidenceDistinctionNotice}
            </p>
          </div>
        </section>

        {/* VERIFIED GUEST PERSPECTIVES & ACTIONABLE PARENT TAKEAWAYS */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Editorial Curriculum Notes
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              Curated Key Insights & Parent Takeaways
            </h2>
            <p className="text-muted-foreground text-sm">
              Each conversation is curated around verifiable guest credentials and practical guidance for young athletes and families.
            </p>
          </div>

          <PlayableConversationsGrid
            conversations={FEATURED_CONVERSATIONS}
            columns={3}
          />
        </section>
      </div>
    </div>
  );
}
