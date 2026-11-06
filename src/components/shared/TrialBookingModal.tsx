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
            <span>Programme Enquiry & Assessment</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px] bg-card border-border text-foreground shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 text-brand-primary text-xs uppercase font-bold tracking-widest">
            <CheckCircle2 className="h-4 w-4" /> Assessment Session & Programme Enquiry
          </div>
          <DialogTitle className="text-2xl font-black uppercase text-foreground mt-1">
            Book Your Assessment
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Experience our structured coaching and discuss age-appropriate batches directly with Coach Mohammed Javeed on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                Participant Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul / Aditi"
                className="w-full h-11 px-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full h-11 px-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                Select Sport
              </label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-brand-primary text-sm"
              >
                {SPORTS_LIST.map((s) => (
                  <option key={s.id} value={s.name} className="bg-card text-foreground">
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                Age Category
              </label>
              <select
                value={ageBracket}
                onChange={(e) => setAgeBracket(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-brand-primary text-sm"
              >
                <option value="Ages 4-5 (Early Years Movement)" className="bg-card text-foreground">Ages 4-5 (Early Years)</option>
                <option value="Ages 6-12 (Junior)" className="bg-card text-foreground">Ages 6-12 (Junior)</option>
                <option value="Ages 13-17 (Youth / Competitive)" className="bg-card text-foreground">Ages 13-17 (Youth)</option>
                <option value="Adults & Senior Fitness (18+ / 50+)" className="bg-card text-foreground">Adults & Senior Fitness</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase mb-1">
              Preferred Academy Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-brand-primary text-sm"
            >
              {ACADEMY_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.name} className="bg-card text-foreground">
                  {loc.name} ({loc.area})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase mb-1">
              Goals or Experience (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Beginner looking to learn fundamentals, or preparing for school team trials..."
              className="w-full p-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            className="w-full font-bold gap-2 text-base mt-2 shadow-md"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            <span>Send Enquiry on WhatsApp</span>
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Direct response from Coach Mohammed Javeed • No commitment required
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
