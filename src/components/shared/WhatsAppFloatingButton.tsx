"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const url = createWhatsAppUrl(
      "Hi Coach Mohammed Javeed, I am visiting the JAV'S Sports Academy website and would like details on coaching batches and free trials."
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-white/10 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Chat directly with Coach Javeed</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp with JAV'S Sports Academy"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-brand-whatsapp text-white shadow-xl shadow-brand-whatsapp/30 hover:bg-brand-whatsapp-hover transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-whatsapp/40"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-slate-900"></span>
        </span>
        <MessageCircle className="h-7 w-7 fill-current" />
      </button>
    </aside>
  );
}
