"use client";

import React, { useState } from "react";
import { FeaturedConversation } from "@/lib/constants/media";
import { PlayableConversationCard } from "@/components/media/PlayableConversationCard";

interface PlayableConversationsGridProps {
  conversations: FeaturedConversation[];
  columns?: 2 | 3;
}

export function PlayableConversationsGrid({
  conversations,
  columns = 3,
}: PlayableConversationsGridProps) {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  const gridColsClass =
    columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 lg:grid-cols-3";

  return (
    <div className={`grid ${gridColsClass} gap-8`}>
      {conversations.map((item, idx) => (
        <PlayableConversationCard
          key={item.id}
          conversation={item}
          index={idx}
          activePlayingId={activePlayingId}
          onPlay={(id) => setActivePlayingId(id)}
          onStop={() => setActivePlayingId(null)}
        />
      ))}
    </div>
  );
}
