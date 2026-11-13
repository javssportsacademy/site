import React from "react";
import Link from "next/link";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { ThemeToggle } from "@/components/theme-toggle";
import { SPORTS_LIST } from "@/lib/constants/sports";
import { ACADEMY_LOCATIONS } from "@/lib/constants/locations";
import { DirectWhatsAppButton } from "@/components/shared/DirectWhatsAppButton";
import {
  PRIMARY_PHONE_DISPLAY,
  SECONDARY_PHONE_DISPLAY,
  PRIMARY_EMAIL,
  INSTAGRAM_HANDLE,
  YOUTUBE_HANDLE,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t border-border pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary via-amber-600 to-amber-700 shadow-md">
                <Shield className="h-5 w-5 text-white fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-foreground">
                  JAV&apos;S <span className="text-brand-primary">SPORTS ACADEMY</span>
                </span>
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                  Sport Teaches Life
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              One platform for every stage of growth. We develop character, mental strength, physical vitality, and sporting excellence through structured, professionally guided coaching.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600/10 text-red-600 border border-red-500/20 hover:bg-red-600 hover:text-white transition-all text-xs font-bold"
              >
                <YoutubeIcon className="h-4 w-4 fill-current" />
                <span>{YOUTUBE_HANDLE}</span>
              </a>
              <a
                href="https://instagram.com/javs_inbox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-600/10 text-pink-600 border border-pink-500/20 hover:bg-pink-600 hover:text-white transition-all text-xs font-bold"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>@javs_inbox</span>
              </a>
              <ThemeToggle />
            </div>

            <div className="pt-3">
              <DirectWhatsAppButton
                label="Direct WhatsApp Enquiry"
                className="w-full sm:w-auto shadow-xs"
              />
            </div>
          </div>

          {/* 12 Sports Quick Directory */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4 flex items-center gap-1.5">
              <span>Sports Disciplines (12)</span>
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-muted-foreground">
              {SPORTS_LIST.map((sport) => (
                <li key={sport.id}>
                  <Link
                    href={`/sports/${sport.slug}`}
                    className="hover:text-brand-primary transition-colors flex items-center gap-1"
                  >
                    <span className="text-brand-primary/60">›</span> {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Pathways */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4">
              Explore Academy
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/programs" className="hover:text-foreground transition-colors">
                  Early Years Movement (Ages 4-5)
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-foreground transition-colors">
                  Youth Sports Coaching (Ages 6+)
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-foreground transition-colors">
                  Adults & Senior Fitness
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-foreground transition-colors">
                  School PE & Sports Days
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-foreground transition-colors">
                  Gated Communities & Bella Vista Cricket
                </Link>
              </li>
              <li>
                <Link href="/javs-inbox" className="hover:text-red-600 transition-colors font-semibold text-foreground">
                  Jav&apos;s Inbox Video & Podcast
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-foreground transition-colors">
                  Founder Mohammed Javeed (M.P.Ed)
                </Link>
              </li>
              <li>
                <Link href="/safeguarding" className="hover:text-brand-primary transition-colors font-medium">
                  Safeguarding & Child Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Centers & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4">
              Chennai Centers
            </h4>
            <div className="space-y-3.5 text-xs text-muted-foreground">
              {ACADEMY_LOCATIONS.map((loc, idx) => (
                <div key={loc.id}>
                  <p className="font-bold text-foreground mb-0.5">{idx + 1}. {loc.name}</p>
                  <p className="text-[11px] leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}

              <div className="pt-2 border-t border-border space-y-1">
                <a
                  href={`tel:${PRIMARY_PHONE_DISPLAY}`}
                  className="flex items-center gap-1.5 text-foreground hover:text-brand-primary font-medium"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-primary" />
                  <span>{PRIMARY_PHONE_DISPLAY} / {SECONDARY_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{PRIMARY_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} JAV&apos;S Sports Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/safeguarding" className="hover:text-foreground transition-colors font-semibold text-brand-primary">
              Safeguarding Policy
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Locate Centers
            </Link>
            <Link href="/javs-inbox" className="hover:text-foreground transition-colors">
              Jav&apos;s Inbox Media
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
