"use client";

import React, { useState } from "react";
import { Play, ExternalLink, ShieldCheck, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FeaturedConversation } from "@/lib/constants/media";
import { YoutubeIcon, InstagramIcon } from "@/components/shared/SocialIcons";

interface PlayableConversationCardProps {
  conversation: FeaturedConversation;
  index: number;
  activePlayingId?: string | null;
  onPlay?: (id: string) => void;
  onStop?: () => void;
}

export function PlayableConversationCard({
  conversation,
  index,
  activePlayingId,
  onPlay,
  onStop,
}: PlayableConversationCardProps) {
  const [localPlaying, setLocalPlaying] = useState(false);

  const isControlled = activePlayingId !== undefined;
  const isPlaying = isControlled ? activePlayingId === conversation.id : localPlaying;

  const handlePlay = () => {
    if (isControlled && onPlay) {
      onPlay(conversation.id);
    } else {
      setLocalPlaying(true);
    }
  };

  const handleStop = () => {
    if (isControlled && onStop) {
      onStop();
    } else {
      setLocalPlaying(false);
    }
  };

  return (
    <Card className="bg-card border-border flex flex-col justify-between hover:border-brand-primary/40 transition-all duration-300 hover:shadow-lg shadow-sm group overflow-hidden">
      {/* 16:9 Responsive Video Header - Playable directly in-place */}
      <div className="relative aspect-video w-full bg-black border-b border-border overflow-hidden select-none">
        {isPlaying ? (
          <div className="relative w-full h-full">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${conversation.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
              title={`${conversation.guestName} - ${conversation.topic}`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Quick-Close Overlay Button */}
            <button
              type="button"
              onClick={handleStop}
              className="absolute top-3 right-3 z-30 px-2.5 py-1 rounded-md bg-black/85 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/20 transition-transform active:scale-95"
              title="Close video and return to preview"
            >
              <span>✕</span>
              <span>Close Video</span>
            </button>

            {/* Live Playing Badge */}
            <div className="absolute bottom-3 left-3 z-30 pointer-events-none">
              <Badge className="bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border-0 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Playing in Card</span>
              </Badge>
            </div>
          </div>
        ) : (
          <div
            onClick={handlePlay}
            className="relative w-full h-full cursor-pointer group/thumb"
            title="Click to play this video directly"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePlay();
              }
            }}
          >
            {/* Real YouTube thumbnail preview */}
            <img
              src={conversation.thumbnailUrl || `https://i.ytimg.com/vi/${conversation.youtubeVideoId}/hqdefault.jpg`}
              alt={`${conversation.guestName} interview`}
              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300 opacity-90 group-hover/thumb:opacity-100"
              loading="lazy"
            />

            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 group-hover/thumb:from-black/70 group-hover/thumb:via-black/20 transition-colors flex items-center justify-center">
              {/* YouTube-styled Play Button with Hover Zoom */}
              <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl shadow-red-600/40 group-hover/thumb:scale-115 transition-transform">
                <Play className="h-6 w-6 fill-white translate-x-0.5" />
              </div>
            </div>

            {/* Top-left: Episode Pill */}
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="outline" className="text-[10px] font-bold uppercase bg-black/75 backdrop-blur-xs border-white/20 text-white shadow-xs">
                Episode 0{index + 1}
              </Badge>
            </div>

            {/* Top-right: Click to play direct indicator */}
            <div className="absolute top-3 right-3 z-10 opacity-90 group-hover/thumb:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-white bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20 shadow-xs flex items-center gap-1">
                <Play className="h-2.5 w-2.5 fill-current text-red-500" />
                <span>Play Directly</span>
              </span>
            </div>

            {/* Bottom-right: Format Tag */}
            <div className="absolute bottom-2.5 right-2.5 z-10 text-[10px] font-mono text-white/90 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded border border-white/15">
              {conversation.format}
            </div>

            {/* Bottom-left: Platform */}
            <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 text-[10px] font-semibold text-white/90 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded border border-white/15">
              {conversation.primaryPlatform === "Instagram" ? (
                <>
                  <InstagramIcon className="h-3 w-3 text-pink-400" />
                  <span>Instagram</span>
                </>
              ) : (
                <>
                  <YoutubeIcon className="h-3 w-3 text-red-500 fill-current" />
                  <span>YouTube</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Card Header */}
      <CardHeader className="p-6 pb-2 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="crimson" className="text-[10px] font-bold uppercase tracking-wider">
            {conversation.guestRoleBadge}
          </Badge>
          <span className="text-[11px] font-mono text-muted-foreground">{conversation.primaryPlatform}</span>
        </div>

        <h4 className="text-xl font-black uppercase text-foreground group-hover:text-brand-primary transition-colors">
          {conversation.guestName}
        </h4>
        <p className="text-xs font-bold text-brand-primary line-clamp-1">
          {conversation.guestTitle}
        </p>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-6 pt-2 space-y-4 flex-grow">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Topic of Inquiry:</p>
          <p className="text-sm font-bold text-foreground leading-snug">
            &ldquo;{conversation.topic}&rdquo;
          </p>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {conversation.discussionSummary}
        </p>

        {/* Concrete Takeaway Box */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border-l-3 border-brand-primary text-xs space-y-1">
          <span className="font-bold text-brand-primary dark:text-amber-400 block text-[11px] uppercase tracking-wider">
            Actionable Takeaway:
          </span>
          <span className="text-foreground/90 text-xs leading-relaxed line-clamp-3">
            {conversation.actionableTakeaway
              .replace("Key Insight for Parents: ", "")
              .replace("Key Insight for Bowlers: ", "")
              .replace("Key Insight for Spinners: ", "")}
          </span>
        </div>
      </CardContent>

      {/* Card Footer with Direct Play Button & External Link */}
      <CardFooter className="p-6 pt-3 border-t border-border mt-auto flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono text-muted-foreground italic truncate max-w-[130px]">
          Verified Dialogue
        </span>

        <div className="flex items-center gap-2">
          {isPlaying ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleStop}
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground h-8 px-2.5"
            >
              <span>✕ Stop</span>
            </Button>
          ) : (
            <Button
              type="button"
              size="sm"
              onClick={handlePlay}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider h-8 px-3 gap-1.5 shadow-xs"
            >
              <Play className="h-3 w-3 fill-current" />
              <span>Play Video</span>
            </Button>
          )}

          <a
            href={conversation.mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title={`Open original feature on ${conversation.primaryPlatform}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
