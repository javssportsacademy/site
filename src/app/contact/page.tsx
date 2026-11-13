"use client";

import React, { useState } from "react";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { ACADEMY_LOCATIONS } from "@/lib/constants/locations";
import { SPORTS_LIST } from "@/lib/constants/sports";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import {
  PRIMARY_PHONE_DISPLAY,
  SECONDARY_PHONE_DISPLAY,
  WHATSAPP_PRIMARY_NUMBER,
  PRIMARY_EMAIL,
  getTrialBookingWhatsAppUrl,
} from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sport, setSport] = useState("Cricket");
  const [ageGroup, setAgeGroup] = useState("Ages 6-12 (Junior)");
  const [location, setLocation] = useState("Thiruverkadu Center (Main Academy)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getTrialBookingWhatsAppUrl({
      name: name.trim(),
      phone: phone.trim(),
      sport,
      ageBracket: ageGroup,
      location,
      message: notes.trim(),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-background pb-24 text-foreground">
      <SubpageHero
        badge="Connect With JAV'S Academy"
        title="Contact & Training Centers"
        subtitle="Visit our training centers in Thiruverkadu, Prestige Bella Vista (Iyyappanthangal), and Avadi, or reach out directly to Coach Mohammed Javeed on WhatsApp."
      >
        <div className="flex flex-wrap items-center gap-4">
          <DirectWhatsAppButton label="Instant WhatsApp Chat" />
          <a
            href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-card border border-border hover:bg-muted text-foreground font-bold text-sm transition-colors shadow-xs"
          >
            <Phone className="h-4 w-4 text-brand-primary" />
            <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
          </a>
        </div>
      </SubpageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-card border border-border flex items-start gap-4 shadow-xs">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-brand-primary shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call / WhatsApp</p>
              <p className="text-base font-bold text-foreground mt-1">{PRIMARY_PHONE_DISPLAY}</p>
              <p className="text-sm font-semibold text-muted-foreground">{SECONDARY_PHONE_DISPLAY}</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border flex items-start gap-4 shadow-xs">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Enquiries</p>
              <p className="text-base font-bold text-foreground mt-1 break-all">{PRIMARY_EMAIL}</p>
              <p className="text-xs text-muted-foreground">Response within 24 hours</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border flex items-start gap-4 shadow-xs">
            <div className="p-3 rounded-2xl bg-red-500/10 text-red-500 shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Coaching Hours</p>
              <p className="text-base font-bold text-foreground mt-1">Morning: 6:00 AM - 10:00 AM</p>
              <p className="text-xs font-semibold text-muted-foreground">Evening: 4:00 PM - 8:30 PM</p>
            </div>
          </div>
        </div>

        {/* Center Details & Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Centers */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
              Our Training Locations & Fitness Hubs in Chennai
            </h2>

            <div className="space-y-6">
              {ACADEMY_LOCATIONS.map((loc) => (
                <Card
                  key={loc.id}
                  id={loc.id}
                  className="scroll-mt-24 bg-card border-border p-8 rounded-3xl shadow-sm space-y-6"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="default" className="text-xs font-bold uppercase tracking-wider">
                      {loc.area}
                    </Badge>
                    <a
                      href={loc.mapEmbedOrDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Google Maps</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black uppercase text-foreground tracking-tight">
                      {loc.name}
                    </h3>
                    <p className="flex items-start gap-2 text-sm text-muted-foreground mt-2">
                      <MapPin className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Center Timings & Days:
                    </p>
                    <p className="text-xs sm:text-sm text-foreground font-medium">
                      {loc.timing}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Available Facilities:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {loc.facilities.map((fac, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Booking Form */}
          <div className="lg:col-span-5">
            <Card className="bg-card border-border p-8 rounded-3xl shadow-lg space-y-6 sticky top-28">
              <CardHeader className="p-0 pb-2">
                <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider">
                  <CalendarCheck className="h-4 w-4" /> WhatsApp Programme Enquiry
                </div>
                <CardTitle className="text-2xl font-black uppercase text-foreground mt-1">
                  Enquire & Book Assessment
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Fill in your details below. Clicking send will open WhatsApp with your pre-filled inquiry directly to Coach Mohammed Javeed.
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Senthil Kumar"
                      className="w-full h-11 px-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9500161690"
                      className="w-full h-11 px-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary text-sm"
                    />
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
                        <option value="Fitness & Conditioning" className="bg-card text-foreground">
                          Fitness & Conditioning
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                        Age Category
                      </label>
                      <select
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value)}
                        className="w-full h-11 px-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-brand-primary text-sm"
                      >
                        <option value="Ages 4-5 (Early Years Movement)" className="bg-card text-foreground">Ages 4-5 (Early Years)</option>
                        <option value="Ages 6-12 (Junior)" className="bg-card text-foreground">Ages 6-12 (Junior)</option>
                        <option value="Ages 13-17 (Youth)" className="bg-card text-foreground">Ages 13-17 (Youth)</option>
                        <option value="Adults & Senior Fitness" className="bg-card text-foreground">Adults & Senior Fitness</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                      Preferred Training Center
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-brand-primary text-sm"
                    >
                      {ACADEMY_LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.name} className="bg-card text-foreground">
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground uppercase mb-1">
                      Specific Questions or Message
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Inquiring about weekend cricket batches or swimming classes..."
                      className="w-full p-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-primary text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="whatsapp"
                    size="lg"
                    className="w-full font-bold gap-2 text-base shadow-md"
                  >
                    <MessageCircle className="h-5 w-5 fill-current" />
                    <span>Send Message on WhatsApp</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
