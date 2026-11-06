import React from "react";
import Link from "next/link";
import { Play, ArrowRight, Radio, Mic, Users, ExternalLink } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  JAVS_INBOX_CHANNEL,
  FEATURED_MEDIA_EPISODES,
} from "@/lib/constants/media";

export function JavsInboxPreview() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Red ambient studio glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Digital Media & Podcast Hub"
          badgeVariant="crimson"
          title="Jav's Inbox on YouTube"
          subtitle="Behind the mic with Coach Mohammed Javeed. In-depth cricket analysis, tactical conversations, and guidance from senior coaches."
        />

        {/* Featured Studio Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 border border-red-500/20 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                <Badge variant="crimson" className="font-bold text-xs uppercase">
                  Official Sports Media Channel
                </Badge>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {JAVS_INBOX_CHANNEL.channelName} <span className="text-red-500 font-mono">({JAVS_INBOX_CHANNEL.handle})</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {JAVS_INBOX_CHANNEL.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {JAVS_INBOX_CHANNEL.coreTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <span className="text-red-500 font-bold">▶</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-black gap-2 shadow-xl shadow-red-600/25">
                  <a
                    href={JAVS_INBOX_CHANNEL.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon className="h-5 w-5 fill-current" />
                    <span>Subscribe to @JavsInbox</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold">
                  <Link href="/javs-inbox">
                    <span>Explore Media Library</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Card: Studio Badge */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-slate-950/80 border border-white/10 p-6 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-600/20 text-red-500 mx-auto flex items-center justify-center border border-red-500/30">
                  <Radio className="h-8 w-8 animate-pulse" />
                </div>
                <div>
                  <p className="text-lg font-black uppercase text-white">Podcasts & Masterclasses</p>
                  <p className="text-xs text-brand-text-muted mt-1">
                    Connecting young athletes & parents with insights from national level coaches.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs text-brand-text-secondary font-mono">
                  Hosted by Mohammed Javeed (M.P.Ed.)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Episode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_MEDIA_EPISODES.map((ep) => (
            <Card
              key={ep.id}
              className="flex flex-col justify-between bg-slate-900 border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="p-5 pb-2">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-[10px] border-red-500/30 text-red-400 font-semibold">
                    {ep.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-400">
                    {ep.duration}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                  {ep.title}
                </h4>
              </CardHeader>

              <CardContent className="p-5 pt-2 flex-grow">
                <p className="text-xs text-brand-text-muted line-clamp-3">
                  {ep.description}
                </p>
              </CardContent>

              <CardFooter className="p-5 pt-0 border-t border-white/5">
                <a
                  href={JAVS_INBOX_CHANNEL.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white pt-2 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <Play className="h-3 w-3 fill-current" />
                    <span>Watch on YouTube</span>
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
