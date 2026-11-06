"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  RefreshCw,
  ExternalLink,
  Eye,
  Calendar,
  Sparkles,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface ChannelVideo {
  id: string;
  title: string;
  publishedAt: string;
  url: string;
  thumbnail: string;
  type: "podcast" | "short" | "interview";
  views?: string;
  guestOrTopic?: string;
}

// Initial live verified dataset from @JavsInbox (UC7ObUGjqwwazrOIDXhn9r5w)
const INITIAL_VIDEOS: ChannelVideo[] = [
  {
    id: "sLBk4N8xfF8",
    title: "Podcast ft: Muthuraman | Tamil | Cricket Commentator | Star Sports Tamil | Jav's Inbox",
    publishedAt: "2026-09-27",
    url: "https://www.youtube.com/watch?v=sLBk4N8xfF8",
    thumbnail: "https://i.ytimg.com/vi/sLBk4N8xfF8/hqdefault.jpg",
    type: "podcast",
    views: "2,400+ views",
    guestOrTopic: "Muthuraman (Star Sports Commentator)"
  },
  {
    id: "4x4hhwS5xwg",
    title: "Samuel Ebenezer | Sachin's Favourite Bowler | Tamil | TNPL | Trichy Grand Cholas | Jav's Inbox",
    publishedAt: "2026-10-07",
    url: "https://www.youtube.com/watch?v=4x4hhwS5xwg",
    thumbnail: "https://i.ytimg.com/vi/4x4hhwS5xwg/hqdefault.jpg",
    type: "interview",
    views: "1,438 views",
    guestOrTopic: "Samuel Ebenezer (TNPL Coach & Bowler)"
  },
  {
    id: "g9gGOQYnnrs",
    title: "Samuel Ebenezer Beats Sachin in the Nets | Tamil | Jav's Inbox | TNPL | Trichy Grand Cholas",
    publishedAt: "2026-10-21",
    url: "https://www.youtube.com/shorts/g9gGOQYnnrs",
    thumbnail: "https://i.ytimg.com/vi/g9gGOQYnnrs/hqdefault.jpg",
    type: "short",
    views: "1,290 views",
    guestOrTopic: "Nets Masterclass & Fast Bowling"
  },
  {
    id: "Ficu_SLdrp8",
    title: "Sachin Advised Me Not to Bowl | Tamil | Jav's Inbox | Trichy Grand Cholas | TNPL",
    publishedAt: "2026-10-16",
    url: "https://www.youtube.com/shorts/Ficu_SLdrp8",
    thumbnail: "https://i.ytimg.com/vi/Ficu_SLdrp8/hqdefault.jpg",
    type: "short",
    views: "1,840 views",
    guestOrTopic: "Tactical Bowling Advice"
  },
  {
    id: "yd1xsyQxNl4",
    title: "Best Fielders of Tamil Nadu | Tamil | Jav's Inbox | Trichy Grand Cholas | TNPL",
    publishedAt: "2026-10-12",
    url: "https://www.youtube.com/shorts/yd1xsyQxNl4",
    thumbnail: "https://i.ytimg.com/vi/yd1xsyQxNl4/hqdefault.jpg",
    type: "short",
    views: "4,776 views",
    guestOrTopic: "Fielding Agility & TNPL Standard"
  },
  {
    id: "20mqWZwVLIU",
    title: "We Are Small Daddy's Army | Tamil | Jav's Inbox | Trichy Grand Cholas | TNPL Champion",
    publishedAt: "2026-10-14",
    url: "https://www.youtube.com/shorts/20mqWZwVLIU",
    thumbnail: "https://i.ytimg.com/vi/20mqWZwVLIU/hqdefault.jpg",
    type: "short",
    views: "1,174 views",
    guestOrTopic: "Team Culture & Championship Mindset"
  },
  {
    id: "yIQxxSNyZ9k",
    title: "My 1st TNPL Match | Cricket | Tamil | Jav's Inbox | Coach | Trichy Grand Cholas",
    publishedAt: "2026-10-11",
    url: "https://www.youtube.com/shorts/yIQxxSNyZ9k",
    thumbnail: "https://i.ytimg.com/vi/yIQxxSNyZ9k/hqdefault.jpg",
    type: "short",
    views: "1,321 views",
    guestOrTopic: "Debut Match Experience"
  },
  {
    id: "qmcUIT9JZjQ",
    title: "My Proud Moment with CSK | Tamil | Jav's Inbox | Commentator Star Sports Tamil",
    publishedAt: "2026-10-03",
    url: "https://www.youtube.com/shorts/qmcUIT9JZjQ",
    thumbnail: "https://i.ytimg.com/vi/qmcUIT9JZjQ/hqdefault.jpg",
    type: "short",
    views: "1,500+ views",
    guestOrTopic: "CSK & Broadcaster Insights"
  }
];

export function PlayableChannelFeed() {
  const [videos, setVideos] = useState<ChannelVideo[]>(INITIAL_VIDEOS);
  const [selectedVideo, setSelectedVideo] = useState<ChannelVideo>(INITIAL_VIDEOS[0]);
  const [activeTab, setActiveTab] = useState<"all" | "podcasts" | "shorts" | "instagram">("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>("Live Feed Active");

  // Automatic channel refresh function from official RSS feed
  const refreshFeed = async () => {
    setIsRefreshing(true);
    try {
      const channelId = "UC7ObUGjqwwazrOIDXhn9r5w";
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        if (data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
          const mapped: ChannelVideo[] = data.items.map((item: any) => {
            const videoId = item.guid ? item.guid.replace("yt:video:", "") : "";
            const isShort = item.link?.includes("/shorts/") || item.title?.toLowerCase().includes("short");
            const isPodcast = item.title?.toLowerCase().includes("podcast") || item.title?.toLowerCase().includes("ft:");
            return {
              id: videoId,
              title: item.title,
              publishedAt: item.pubDate ? item.pubDate.split(" ")[0] : "Recent",
              url: item.link || `https://www.youtube.com/watch?v=${videoId}`,
              thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              type: isPodcast ? "podcast" : isShort ? "short" : "interview",
              views: "Live from @JavsInbox",
              guestOrTopic: item.author || "Jav's Inbox Guest"
            };
          });

          // Prepend any new items not in state
          setVideos(mapped);
          setLastRefreshed(`Updated ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
        }
      }
    } catch (err) {
      console.warn("Auto-refresh fallback to pre-cached feed:", err);
      setLastRefreshed("Live Cache Connected");
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    // Initial fetch on mount
    refreshFeed();
  }, []);

  const filteredVideos = videos.filter((v) => {
    if (activeTab === "all") return true;
    if (activeTab === "podcasts") return v.type === "podcast" || v.type === "interview";
    if (activeTab === "shorts") return v.type === "short";
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Live Stream / Channel Header Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border shadow-xs">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/10 text-red-600 border border-red-500/20">
            <YoutubeIcon className="h-5 w-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-foreground">@JavsInbox Official Video Channel</span>
              <Badge variant="outline" className="text-[10px] font-bold border-emerald-500/30 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40">
                Live Feed
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Direct video stream curated by Mohammed Javeed • {lastRefreshed}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            size="sm"
            variant="outline"
            onClick={refreshFeed}
            disabled={isRefreshing}
            className="text-xs font-bold gap-1.5 border-border bg-card text-foreground hover:bg-muted"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-brand-primary" : ""}`} />
            <span>{isRefreshing ? "Refreshing..." : "Refresh Channel Feed"}</span>
          </Button>

          <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs gap-1.5 shadow-xs">
            <a href="https://www.youtube.com/@JavsInbox" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Subscribe @JavsInbox</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Main Direct Embedded Video Player Section */}
      <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Responsive 16:9 Live Video Player */}
          <div className="lg:col-span-8 bg-black relative aspect-video flex items-center justify-center">
            <iframe
              key={selectedVideo.id}
              src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=0&rel=0&modestbranding=1`}
              title={selectedVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Right: Active Video Information & Player Controls */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-muted/40 border-t lg:border-t-0 lg:border-l border-border space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-[10px] font-bold uppercase tracking-wider">
                  Now Playing
                </Badge>
                <Badge variant="outline" className="text-[10px] font-bold uppercase border-border text-muted-foreground">
                  {selectedVideo.type}
                </Badge>
              </div>

              <h3 className="text-lg sm:text-xl font-black uppercase text-foreground leading-snug">
                {selectedVideo.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1">
                {selectedVideo.publishedAt && (
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="h-3.5 w-3.5" /> {selectedVideo.publishedAt}
                  </span>
                )}
                {selectedVideo.views && (
                  <span className="flex items-center gap-1 font-mono">
                    <Eye className="h-3.5 w-3.5" /> {selectedVideo.views}
                  </span>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-card border border-border text-xs text-muted-foreground space-y-1">
                <p className="font-bold text-foreground">Channel Focus:</p>
                <p>Authentic sports interviews, grassroots commentary, player biomechanics, and parent guidance from Coach Mohammed Javeed.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
              <a
                href={selectedVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://instagram.com/javs_inbox"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-600 hover:text-pink-700 transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                <span>@javs_inbox</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className="text-xs font-bold uppercase tracking-wider"
          >
            All Videos ({videos.length})
          </Button>
          <Button
            size="sm"
            variant={activeTab === "podcasts" ? "default" : "outline"}
            onClick={() => setActiveTab("podcasts")}
            className="text-xs font-bold uppercase tracking-wider"
          >
            Podcasts & Interviews
          </Button>
          <Button
            size="sm"
            variant={activeTab === "shorts" ? "default" : "outline"}
            onClick={() => setActiveTab("shorts")}
            className="text-xs font-bold uppercase tracking-wider"
          >
            Shorts & Highlights
          </Button>
          <Button
            size="sm"
            variant={activeTab === "instagram" ? "default" : "outline"}
            onClick={() => setActiveTab("instagram")}
            className="text-xs font-bold uppercase tracking-wider gap-1.5"
          >
            <InstagramIcon className="h-3.5 w-3.5 text-pink-600" />
            <span>Instagram Feed</span>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground font-medium">
          Click any thumbnail below to load into the player above
        </p>
      </div>

      {/* Video Content Grid */}
      {activeTab === "instagram" ? (
        /* Instagram Direct Channel Embed & Reels Spotlight */
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border shadow-md space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5 shadow-md">
                <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center text-pink-600">
                  <InstagramIcon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-black text-foreground">@javs_inbox on Instagram</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Exclusive reels, player dialogues with Dayalan Hemalatha (RCB / India), and behind-the-scenes academy coaching.
                </p>
              </div>
            </div>

            <Button asChild className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-xs uppercase tracking-wider gap-2 shadow-sm">
              <a href="https://instagram.com/javs_inbox" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-4 w-4" />
                <span>Follow @javs_inbox</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* Instagram Featured Dialogue: Dayalan Hemalatha Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-6 rounded-2xl bg-muted/50 border border-border space-y-4">
              <Badge variant="crimson" className="text-xs uppercase font-bold tracking-wider">
                Signature Instagram Dialogue
              </Badge>
              <h5 className="text-xl font-black uppercase text-foreground">
                In Conversation with Dayalan Hemalatha
              </h5>
              <p className="text-xs font-bold text-brand-primary">
                Indian International Cricketer & Royal Challengers Bengaluru (RCB) / Railways All-Rounder
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Coach Mohammed Javeed hosts Dayalan Hemalatha discussing youth pressure, patience with scoring droughts, and physical endurance. The full discussion was officially shared on Instagram.
              </p>
              <div className="pt-2">
                <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs gap-2">
                  <a href="https://www.instagram.com/javs_inbox/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="h-4 w-4" />
                    <span>Watch Full Conversation on Instagram</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Embedded Instagram Feed Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                <InstagramIcon className="h-8 w-8" />
              </div>
              <h6 className="font-bold text-foreground">Explore Daily Athletic Stories & Reels</h6>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Follow @javs_inbox and @javssportsacademy for weekly youth athletic tips, match clips, and live session updates from Chennai.
              </p>
              <a
                href="https://www.instagram.com/javs_inbox/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline"
              >
                <span>Visit Instagram Profile</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* YouTube Videos Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((vid) => {
            const isSelected = selectedVideo.id === vid.id;
            return (
              <Card
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className={`group cursor-pointer overflow-hidden transition-all duration-200 border bg-card hover:shadow-md ${
                  isSelected ? "border-brand-primary ring-2 ring-brand-primary/20 shadow-md" : "border-border hover:border-brand-primary/40"
                }`}
              >
                {/* Thumbnail with Play Overlay */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="text-[9px] font-bold uppercase bg-black/70 text-white border-0">
                      {vid.type}
                    </Badge>
                  </div>
                  {vid.views && (
                    <div className="absolute bottom-2 right-2 text-[10px] font-mono font-semibold bg-black/80 text-white px-1.5 py-0.5 rounded">
                      {vid.views}
                    </div>
                  )}
                </div>

                <CardContent className="p-4 space-y-2">
                  <h4 className="text-xs font-bold text-foreground line-clamp-2 group-hover:text-brand-primary transition-colors leading-snug">
                    {vid.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/50">
                    <span className="font-mono">{vid.publishedAt}</span>
                    <span className="font-semibold text-brand-primary group-hover:underline">Play Now →</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
