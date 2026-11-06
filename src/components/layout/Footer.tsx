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
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative sports glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary via-amber-600 to-red-600 shadow-md">
                <Shield className="h-6 w-6 text-slate-950 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white">
                  JAV&apos;S <span className="text-brand-primary">SPORTS ACADEMY</span>
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Sport Teaches Life
                </span>
              </div>
            </Link>

            <p className="text-sm text-brand-text-muted leading-relaxed max-w-sm">
              One platform for every stage of growth. We develop character, mental strength, physical vitality, and sporting excellence through structured, professionally guided coaching.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600/10 text-red-400 border border-red-500/20 hover:bg-red-600 hover:text-white transition-all text-xs font-bold"
              >
                <YoutubeIcon className="h-4 w-4 fill-current" />
                <span>{YOUTUBE_HANDLE}</span>
              </a>
              <a
                href="https://instagram.com/javssportsacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-600/10 text-pink-400 border border-pink-500/20 hover:bg-pink-600 hover:text-white transition-all text-xs font-bold"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>

            <div className="pt-3">
              <DirectWhatsAppButton
                label="Direct WhatsApp Enquiry"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* 12 Sports Quick Directory */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4 flex items-center gap-1.5">
              <span>Sports Disciplines (12)</span>
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-brand-text-muted">
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
            <ul className="space-y-2 text-xs text-brand-text-muted">
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Early Years Movement (Ages 4-5)
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Youth Sports Coaching (Ages 6+)
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Adults & Senior Fitness
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">
                  School PE & Sports Days
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">
                  Gated Communities & Prestige Bella Vista
                </Link>
              </li>
              <li>
                <Link href="/javs-inbox" className="hover:text-red-400 transition-colors font-semibold text-slate-300">
                  Jav&apos;s Inbox Cricket Podcast
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-white transition-colors">
                  Founder Mohammed Javeed (M.P.Ed)
                </Link>
              </li>
            </ul>
          </div>

          {/* Centers & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4">
              Chennai Centers
            </h4>
            <div className="space-y-4 text-xs text-brand-text-muted">
              <div>
                <p className="font-bold text-white mb-0.5">1. Thiruverkadu Center</p>
                <p className="text-[11px] leading-relaxed">
                  349C+564, Karpagambal Nagar, Thambusamy Nagar, Thiruverkadu, Tamil Nadu 600077
                </p>
              </div>

              <div>
                <p className="font-bold text-white mb-0.5">2. Prestige Bella Vista</p>
                <p className="text-[11px] leading-relaxed">
                  Mount Poonamallee Rd, Iyyappanthangal, Chennai, Tamil Nadu 600056
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1">
                <a
                  href={`tel:${PRIMARY_PHONE_DISPLAY}`}
                  className="flex items-center gap-1.5 text-white hover:text-brand-primary"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-primary" />
                  <span>{PRIMARY_PHONE_DISPLAY} / {SECONDARY_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{PRIMARY_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} JAV&apos;S Sports Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Safeguarding & Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Locate Centers
            </Link>
            <Link href="/javs-inbox" className="hover:text-slate-300 transition-colors">
              Jav&apos;s Inbox Media
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
