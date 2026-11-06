import React from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { JAVS_INBOX_CHANNEL, FEATURED_MEDIA_EPISODES } from "@/lib/constants/media";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Radio, MessageSquare, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";

export const metadata = {
  title: "Jav's Inbox (@JavsInbox) | Cricket Podcast & Sports Media Chennai",
  description: "Hosted by Coach Mohammed Javeed of JAV'S Sports Academy. Unfiltered cricket conversations, NCA coach masterclasses, youth parent guidance, and match analyses.",
};

export default function JavsInboxPage() {
  return (
    <div className="bg-slate-950 pb-24">
      <SubpageHero
        badge="Official Media Channel"
        title="Jav's Inbox on YouTube"
        subtitle="Unfiltered cricket conversations, expert coach insights, and grassroots athletic guidance hosted by Coach Mohammed Javeed."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold gap-2 shadow-xl shadow-red-600/30">
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
        {/* Channel Manifesto */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 border border-red-500/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="crimson" className="text-xs font-bold uppercase tracking-wider">
                Behind The Mic
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Democratizing Elite Sports Wisdom
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {JAVS_INBOX_CHANNEL.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {JAVS_INBOX_CHANNEL.coreTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="font-semibold">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-center space-y-4 w-full max-w-sm">
                <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 mx-auto flex items-center justify-center border border-red-500/40">
                  <Radio className="h-8 w-8 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase text-white">Subscribe & Follow</h3>
                  <p className="text-xs text-brand-text-muted mt-1">
                    Watch full podcast episodes, shorts, and drills on YouTube.
                  </p>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold gap-2">
                  <a
                    href={JAVS_INBOX_CHANNEL.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon className="h-4 w-4 fill-current" />
                    <span>Open YouTube Channel</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Episode Guide */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <Badge variant="default" className="text-xs uppercase tracking-widest font-bold">
              Episode Highlights
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Featured Conversations & Masterclasses
            </h2>
            <p className="text-brand-text-muted text-sm">
              Practical guidance for parents, young athletes, and passionate cricket enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_MEDIA_EPISODES.map((ep) => (
              <Card
                key={ep.id}
                className="flex flex-col justify-between bg-slate-900 border-white/10 hover:border-red-500/40 transition-all duration-300 shadow-xl p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-red-500/30 text-red-400 font-bold uppercase">
                      {ep.category}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {ep.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
                    {ep.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-primary">
                    ★ {ep.viewsOrBadge}
                  </span>

                  <a
                    href={JAVS_INBOX_CHANNEL.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white transition-colors"
                  >
                    <span>Watch Episode</span>
                    <ExternalLink className="h-3.5 w-3.5" />
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
