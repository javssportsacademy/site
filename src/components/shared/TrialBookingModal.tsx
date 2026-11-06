"use client";

import React, { useState } from "react";
import { MessageCircle, CalendarCheck, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SPORTS_LIST } from "@/lib/constants/sports";
import { ACADEMY_LOCATIONS } from "@/lib/constants/locations";
import { getTrialBookingWhatsAppUrl } from "@/lib/whatsapp";

interface TrialBookingModalProps {
  defaultSport?: string;
  defaultLocation?: string;
  triggerButton?: React.ReactNode;
}

export function TrialBookingModal({
  defaultSport = "Cricket",
  defaultLocation = "Thiruverkadu Center (Main Academy)",
  triggerButton,
}: TrialBookingModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sport, setSport] = useState(defaultSport);
  const [ageBracket, setAgeBracket] = useState("Ages 6-12 (Junior)");
  const [location, setLocation] = useState(defaultLocation);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getTrialBookingWhatsAppUrl({
      name: name.trim(),
      phone: phone.trim(),
      sport,
      ageBracket,
      location,
      message: notes.trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button variant="default" size="lg" className="font-bold gap-2">
            <CalendarCheck className="h-5 w-5" />
            <span>Book Free Assessment Session</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px] bg-slate-900 border-white/10 text-white">
        <DialogHeader>
          <div className="flex items-center gap-2 text-brand-primary text-xs uppercase font-bold tracking-widest">
            <CheckCircle2 className="h-4 w-4" /> Free Trial & Physical Assessment
          </div>
          <DialogTitle className="text-2xl font-black uppercase text-white mt-1">
            Book Your Session
          </DialogTitle>
          <DialogDescription className="text-brand-text-muted text-sm">
            Experience our professional coaching firsthand. Fill this quick form to connect directly with Coach Mohammed Javeed on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-brand-text-secondary uppercase mb-1">
                Participant Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul / Aditi"
                className="w-full h-11 px-3 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-text-secondary uppercase mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full h-11 px-3 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-brand-text-secondary uppercase mb-1">
                Select Sport
              </label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-brand-primary text-sm"
              >
                {SPORTS_LIST.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-brand-text-secondary uppercase mb-1">
                Age Category
              </label>
              <select
                value={ageBracket}
                onChange={(e) => setAgeBracket(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-brand-primary text-sm"
              >
                <option value="Ages 4-5 (Early Years Movement)">Ages 4-5 (Early Years)</option>
                <option value="Ages 6-12 (Junior)">Ages 6-12 (Junior)</option>
                <option value="Ages 13-17 (Youth / Competitive)">Ages 13-17 (Youth)</option>
                <option value="Adults & Senior Fitness (18+ / 50+)">Adults & Senior Fitness</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text-secondary uppercase mb-1">
              Preferred Academy Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-11 px-3 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-brand-primary text-sm"
            >
              {ACADEMY_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.name}>
                  {loc.name} ({loc.area})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text-secondary uppercase mb-1">
              Goals or Experience (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Beginner looking to learn basics, or preparing for school team trials..."
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            className="w-full font-bold gap-2 text-base mt-2"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            <span>Send Request on WhatsApp</span>
          </Button>
          <p className="text-center text-xs text-brand-text-muted">
            Instant booking • No commitment • Equipment provided during trial
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
