"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_PRIMARY_NUMBER, getQuickChatWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-card text-foreground text-xs font-semibold px-3.5 py-2 rounded-xl border border-border shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Chat with Coach Javeed</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-muted-foreground hover:text-foreground ml-1 p-0.5 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Trigger */}
      <a
        href={getQuickChatWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background"></span>
        </span>
      </a>
    </div>
  );
}
