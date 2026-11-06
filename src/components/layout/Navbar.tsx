"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Play,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Shield,
  ShieldCheck,
  Calendar,
  Phone,
  MapPin,
  GraduationCap,
  Trophy,
  Building2,
  Users,
  Activity,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { PRIMARY_PHONE_DISPLAY, WHATSAPP_PRIMARY_NUMBER, getQuickChatWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

// --- Dropdown Navigation Items ---
interface DropdownItem {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const SPORTS_ITEMS: DropdownItem[] = [
  {
    title: "Cricket",
    subtitle: "Net & turf drills, biomechanics & match awareness",
    href: "/sports#cricket",
    icon: Trophy,
    badge: "Flagship",
  },
  {
    title: "Football",
    subtitle: "Grass pitch technical skills & tactical teamwork",
    href: "/sports#football",
    icon: Activity,
  },
  {
    title: "Badminton",
    subtitle: "Indoor synthetic courts, footwork & strokeplay",
    href: "/sports#badminton",
    icon: Sparkles,
  },
  {
    title: "Swimming",
    subtitle: "Stroke correction, safety & lane conditioning",
    href: "/sports#swimming",
    icon: ShieldCheck,
  },
  {
    title: "Tennis & Pickleball",
    subtitle: "Hard courts, agility & modern racket mechanics",
    href: "/sports#tennis",
    icon: Trophy,
  },
  {
    title: "Athletics & Track",
    subtitle: "Sprinting rhythm, agility (SAQ) & endurance",
    href: "/sports#athletics",
    icon: Users,
  },
];

const PROGRAM_ITEMS: DropdownItem[] = [
  {
    title: "Early Years Movement",
    subtitle: "Ages 4 & 5 — Joyful balance & neuromuscular foundations",
    href: "/programs#early-years",
    icon: Sparkles,
  },
  {
    title: "Youth Physical Development",
    subtitle: "Ages 6+ — Age-graded multi-sport technical mastery",
    href: "/programs#youth-development",
    icon: Activity,
    badge: "Popular",
  },
  {
    title: "Adults & Senior Fitness",
    subtitle: "Ages 50+ — Joint vitality, functional mobility & wellness",
    href: "/programs#senior-adult-fitness",
    icon: Users,
  },
  {
    title: "Sports Science & Conditioning",
    subtitle: "Physiotherapy, movement screening & injury prevention",
    href: "/programs#sports-science",
    icon: ShieldCheck,
  },
];

const INSTITUTION_ITEMS: DropdownItem[] = [
  {
    title: "Schools & PE Curriculums",
    subtitle: "Structured K-12 physical education & after-school squads",
    href: "/partnerships#schools",
    icon: GraduationCap,
  },
  {
    title: "Annual Sports Day Turnkey",
    subtitle: "Complete heats, track setup, scoring & officiating",
    href: "/partnerships#sports-days",
    icon: Trophy,
    badge: "Turnkey",
  },
  {
    title: "Gated Communities & Clubhouses",
    subtitle: "On-site coaching (e.g., Prestige Bella Vista hub)",
    href: "/partnerships#apartments",
    icon: Building2,
  },
  {
    title: "Corporate Leagues & Wellness",
    subtitle: "Executive tournaments, fitness camps & team sports",
    href: "/partnerships#corporates",
    icon: Users,
  },
];

const ACADEMY_ITEMS: DropdownItem[] = [
  {
    title: "Founder & Director",
    subtitle: "Coach Mohammed Javeed (M.P.Ed., TNCA/MSDCA, @JavsInbox host)",
    href: "/founder",
    icon: Users,
    badge: "Leadership",
  },
  {
    title: "Coaching Team & Mentors",
    subtitle: "Specialist pace, spin, batting & conditioning mentors",
    href: "/about#team",
    icon: Trophy,
  },
  {
    title: "Proven Milestones & Records",
    subtitle: "Verified athlete honours, state selections & achievements",
    href: "/about#achievements",
    icon: Sparkles,
  },
  {
    title: "Safeguarding & Ethics Policy",
    subtitle: "Child protection, POCSO alignment & Safe Sport standards",
    href: "/safeguarding",
    icon: ShieldCheck,
    badge: "Safeguarded",
  },
  {
    title: "Vision & 'Sport Teaches Life'",
    subtitle: "Multi-sport philosophy building resilience and character",
    href: "/about",
    icon: Shield,
  },
];

const CENTRES_ITEMS: DropdownItem[] = [
  {
    title: "Thiruverkadu Center (Main Academy)",
    subtitle: "Karpagambal Nagar — Cricket nets, turf pitches & track",
    href: "/contact#thiruverkadu",
    icon: MapPin,
    badge: "Main Campus",
  },
  {
    title: "Prestige Bella Vista Multi-Sport Hub",
    subtitle: "Iyyappanthangal / Porur — Swimming, badminton & courts",
    href: "/contact#iyyappanthangal",
    icon: Building2,
    badge: "Porur Hub",
  },
];

type MobileSectionKey = "sports" | "programs" | "institutions" | "academy" | "centres" | null;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<MobileSectionKey>(null);

  // Scroll detection for subtle elevation styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }, [pathname]);

  const toggleMobileSection = (key: MobileSectionKey) => {
    setMobileExpandedSection((prev) => (prev === key ? null : key));
  };

  const isSportsActive = pathname === "/sports" || pathname.startsWith("/sports");
  const isProgramsActive = pathname === "/programs" || pathname.startsWith("/programs");
  const isInstitutionsActive = pathname === "/partnerships" || pathname.startsWith("/partnerships");
  const isAcademyActive =
    pathname === "/about" ||
    pathname === "/founder" ||
    pathname === "/safeguarding" ||
    pathname.startsWith("/about");
  const isCentresActive = pathname === "/contact" || pathname.startsWith("/contact");
  const isInboxActive = pathname === "/javs-inbox";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200 select-none",
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background/95 backdrop-blur-sm border-b border-border/60"
      )}
    >
      {/* 80px Compact Navbar Container */}
      <div className="max-w-7xl mx-auto h-20 px-3 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* DESKTOP 3-COLUMN BALANCED GRID: 1fr - auto - 1fr          */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-full">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Logo + Sports ▾ | Programmes ▾ | Institutions ▾ */}
          {/* ======================================================== */}
          <div className="flex items-center justify-start gap-4 xl:gap-6 min-w-0">
            {/* Academy Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
              aria-label="JAV'S Sports Academy — Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary via-amber-600 to-amber-700 shadow-sm shadow-brand-primary/20 border border-white/20 group-hover:scale-105 transition-transform motion-reduce:transform-none">
                <Shield className="h-5 w-5 text-white fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-tight text-base xl:text-lg leading-tight text-foreground group-hover:text-brand-primary transition-colors flex items-center gap-1">
                  JAV&apos;S <span className="text-brand-primary">SPORTS</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold text-muted-foreground leading-none">
                  Sport Teaches Life
                </span>
              </div>
            </Link>

            {/* Left Navigation Dropdowns (Direct Link + Hover Dropdown) */}
            <nav className="flex items-center gap-1 xl:gap-1.5" aria-label="Main sports and programme navigation">
              {/* 1. Sports Dropdown */}
              <div className="relative group">
                <Link
                  href="/sports"
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary",
                    isSportsActive
                      ? "text-brand-primary bg-primary/10 font-bold"
                      : "text-foreground/85 hover:text-foreground hover:bg-muted group-hover:text-brand-primary group-hover:bg-muted"
                  )}
                >
                  <span>Sports</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transform-none text-muted-foreground group-hover:rotate-180 group-hover:text-brand-primary" />
                </Link>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-2 w-[460px] z-50 hidden group-hover:block group-focus-within:block">
                  <div className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-4 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        12 Olympic & Athletic Disciplines
                      </span>
                      <Link
                        href="/sports"
                        className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                      >
                        <span>All Curriculums</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SPORTS_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-muted transition-colors"
                          >
                            <div className="p-1.5 rounded-lg bg-amber-500/10 text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-foreground group-hover/item:text-brand-primary transition-colors truncate">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-muted-foreground line-clamp-1">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-border bg-muted/50 rounded-xl p-2.5 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Also training Basketball, Skating, Karate, Table Tennis & Archery.
                      </span>
                      <Link
                        href="/sports"
                        className="text-xs font-bold text-brand-primary shrink-0 ml-2 hover:underline"
                      >
                        View 12 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Programmes Dropdown */}
              <div className="relative group">
                <Link
                  href="/programs"
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary",
                    isProgramsActive
                      ? "text-brand-primary bg-primary/10 font-bold"
                      : "text-foreground/85 hover:text-foreground hover:bg-muted group-hover:text-brand-primary group-hover:bg-muted"
                  )}
                >
                  <span>Programmes</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transform-none text-muted-foreground group-hover:rotate-180 group-hover:text-brand-primary" />
                </Link>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-2 w-[380px] z-50 hidden group-hover:block group-focus-within:block">
                  <div className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-4 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Lifelong Athletic Pathways
                      </span>
                      <Link
                        href="/programs"
                        className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                      >
                        <span>Full Overview</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      {PROGRAM_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted transition-colors"
                          >
                            <div className="p-2 rounded-lg bg-amber-500/10 text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-foreground group-hover/item:text-brand-primary transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-muted-foreground">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Institutions Dropdown */}
              <div className="relative group">
                <Link
                  href="/partnerships"
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary",
                    isInstitutionsActive
                      ? "text-brand-primary bg-primary/10 font-bold"
                      : "text-foreground/85 hover:text-foreground hover:bg-muted group-hover:text-brand-primary group-hover:bg-muted"
                  )}
                >
                  <span>Institutions</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transform-none text-muted-foreground group-hover:rotate-180 group-hover:text-brand-primary" />
                </Link>

                {/* Dropdown Card */}
                <div className="absolute left-0 top-full pt-2 w-[400px] z-50 hidden group-hover:block group-focus-within:block">
                  <div className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-4 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Institutional Sports Solutions
                      </span>
                      <Link
                        href="/partnerships"
                        className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                      >
                        <span>Partner Pathways</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      {INSTITUTION_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted transition-colors"
                          >
                            <div className="p-2 rounded-lg bg-amber-500/10 text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-foreground group-hover/item:text-brand-primary transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-muted-foreground">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* ======================================================== */}
          {/* CENTER COLUMN: YouTube-Style Red Play Icon (Viewport Midpoint) */}
          {/* ======================================================== */}
          <div className="flex items-center justify-center px-2">
            <div className="relative group">
              <Link
                href="/javs-inbox"
                className={cn(
                  "relative flex items-center justify-center w-12 h-8 xl:w-14 xl:h-9 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-95 text-white shadow-md hover:shadow-lg hover:shadow-red-600/30 transition-all duration-200 motion-reduce:transform-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
                  isInboxActive && "ring-2 ring-red-500 ring-offset-2"
                )}
                aria-label="JAV'S Inbox — Inside the Game: Watch and listen to sports conversations with athletes, coaches, and sports science specialists"
              >
                {/* White Play Glyph */}
                <Play className="h-4 w-4 xl:h-5 xl:w-5 fill-white text-white translate-x-0.5" />
              </Link>

              {/* Branded Tooltip on Desktop Hover */}
              <div
                role="tooltip"
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2.5 z-50 hidden group-hover:flex group-focus-within:flex flex-col items-center animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="w-2.5 h-2.5 bg-neutral-900 rotate-45 mb-[-5px]" />
                <div className="bg-neutral-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap flex items-center gap-2 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-bold text-red-400">JAV&apos;S Inbox</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-200">Inside the Game</span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Academy ▾ | Centres ▾ | ThemeToggle | Book Assessment */}
          {/* ======================================================== */}
          <div className="flex items-center justify-end gap-3 xl:gap-4 min-w-0">
            {/* 4. Academy Dropdown */}
            <div className="relative group">
              <Link
                href="/about"
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary",
                  isAcademyActive
                    ? "text-brand-primary bg-primary/10 font-bold"
                    : "text-foreground/85 hover:text-foreground hover:bg-muted group-hover:text-brand-primary group-hover:bg-muted"
                )}
              >
                <span>Academy</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transform-none text-muted-foreground group-hover:rotate-180 group-hover:text-brand-primary" />
              </Link>

              {/* Dropdown Card */}
              <div className="absolute right-0 top-full pt-2 w-[420px] z-50 hidden group-hover:block group-focus-within:block">
                <div className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Institutional Leadership & Safeguarding
                    </span>
                    <Link
                      href="/about"
                      className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                    >
                      <span>About Academy</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {ACADEMY_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-amber-500/10 text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-foreground group-hover/item:text-brand-primary transition-colors">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-muted-foreground">
                              {item.subtitle}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Centres Dropdown */}
            <div className="relative group">
              <Link
                href="/contact"
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary",
                  isCentresActive
                    ? "text-brand-primary bg-primary/10 font-bold"
                    : "text-foreground/85 hover:text-foreground hover:bg-muted group-hover:text-brand-primary group-hover:bg-muted"
                )}
              >
                <span>Centres</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transform-none text-muted-foreground group-hover:rotate-180 group-hover:text-brand-primary" />
              </Link>

              {/* Dropdown Card */}
              <div className="absolute right-0 top-full pt-2 w-[360px] z-50 hidden group-hover:block group-focus-within:block">
                <div className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Academy Locations
                    </span>
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                    >
                      <span>Map & Hours</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {CENTRES_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-amber-500/10 text-brand-primary group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-foreground group-hover/item:text-brand-primary transition-colors">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-muted-foreground">
                              {item.subtitle}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Direct Coaching Desk Call action inside Centres dropdown */}
                  <div className="mt-3 pt-3 border-t border-border">
                    <a
                      href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
                      className="flex items-center justify-between p-2 rounded-xl bg-muted/60 hover:bg-muted text-xs font-bold text-foreground transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-brand-primary" />
                        <span>Direct Coaching Desk</span>
                      </span>
                      <span className="text-brand-primary">{PRIMARY_PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Toggle Button */}
            <div className="shrink-0">
              <ThemeToggle />
            </div>

            {/* 6. Athletic Amber Book Assessment CTA */}
            <div className="shrink-0">
              <TrialBookingModal
                triggerButton={
                  <Button
                    size="sm"
                    variant="default"
                    className="font-bold text-xs xl:text-sm px-4 py-2 h-9 shadow-sm hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
                  >
                    <Calendar className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                    <span>Book Assessment</span>
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TABLET & MOBILE NAVBAR: Logo (Left), Play Icon (Center), Actions & Menu (Right) */}
        {/* ======================================================== */}
        <div className="relative flex items-center justify-between h-full lg:hidden">
          {/* Mobile Left: Academy Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
            aria-label="JAV'S Sports Academy — Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-brand-primary via-amber-600 to-amber-700 shadow-sm border border-white/20">
              <Shield className="h-4 w-4 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-xs sm:text-sm leading-tight text-foreground flex items-center gap-0.5">
                JAV&apos;S <span className="text-brand-primary">SPORTS</span>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-muted-foreground leading-none">
                Academy
              </span>
            </div>
          </Link>

          {/* Mobile Center: JAV'S Inbox Red Play Icon (Exact Geometric Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link
              href="/javs-inbox"
              className={cn(
                "flex items-center justify-center w-11 h-7.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white shadow-sm transition-transform",
                isInboxActive && "ring-2 ring-red-500 ring-offset-1"
              )}
              aria-label="JAV'S Inbox — Inside the Game: Watch & Listen"
            >
              <Play className="h-3.5 w-3.5 fill-white text-white translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Right: ThemeToggle, Quick Assessment, Hamburger Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <TrialBookingModal
              triggerButton={
                <Button
                  size="sm"
                  variant="default"
                  className="font-bold text-xs px-2.5 py-1 h-8 shadow-xs cursor-pointer whitespace-nowrap"
                >
                  Book
                </Button>
              }
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-muted border border-border text-foreground hover:bg-accent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE DRAWER: Categorized & Accordion Progressive Collapse */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="lg:hidden bg-card/98 border-b border-border backdrop-blur-xl px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200"
        >
          {/* Quick Header inside Mobile Drawer */}
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Navigation Menu
            </span>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/javs-inbox"
                className="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5"
              >
                <Play className="h-3 w-3 fill-current" />
                <span>JAV&apos;S Inbox</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {/* 1. Sports Accordion */}
            <div className="border border-border rounded-xl overflow-hidden bg-background/50">
              <div className="flex items-center justify-between px-3.5 py-3 hover:bg-muted/60 transition-colors">
                <Link
                  href="/sports"
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-primary"
                >
                  <Trophy className="h-4 w-4 text-brand-primary" />
                  <span>Sports (12 Curriculums)</span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection("sports")}
                  className="p-1 text-muted-foreground hover:text-brand-primary cursor-pointer"
                  aria-expanded={mobileExpandedSection === "sports"}
                  aria-label="Toggle sports sub-menu"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileExpandedSection === "sports" && "rotate-180 text-brand-primary"
                    )}
                  />
                </button>
              </div>

              {mobileExpandedSection === "sports" && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-muted/20 border-t border-border">
                  {SPORTS_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-foreground/90 hover:bg-muted hover:text-brand-primary transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border/40">
                    <Link
                      href="/sports"
                      className="block text-center text-xs font-bold text-brand-primary py-1.5 hover:underline"
                    >
                      View All 12 Sports & Curriculums →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Programmes Accordion */}
            <div className="border border-border rounded-xl overflow-hidden bg-background/50">
              <div className="flex items-center justify-between px-3.5 py-3 hover:bg-muted/60 transition-colors">
                <Link
                  href="/programs"
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-primary"
                >
                  <Activity className="h-4 w-4 text-brand-primary" />
                  <span>Programmes & Pathways</span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection("programs")}
                  className="p-1 text-muted-foreground hover:text-brand-primary cursor-pointer"
                  aria-expanded={mobileExpandedSection === "programs"}
                  aria-label="Toggle programmes sub-menu"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileExpandedSection === "programs" && "rotate-180 text-brand-primary"
                    )}
                  />
                </button>
              </div>

              {mobileExpandedSection === "programs" && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-muted/20 border-t border-border">
                  {PROGRAM_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-foreground/90 hover:bg-muted hover:text-brand-primary transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border/40">
                    <Link
                      href="/programs"
                      className="block text-center text-xs font-bold text-brand-primary py-1.5 hover:underline"
                    >
                      Explore Full Age Pathways →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Institutions Accordion */}
            <div className="border border-border rounded-xl overflow-hidden bg-background/50">
              <div className="flex items-center justify-between px-3.5 py-3 hover:bg-muted/60 transition-colors">
                <Link
                  href="/partnerships"
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-primary"
                >
                  <Building2 className="h-4 w-4 text-brand-primary" />
                  <span>Institutional Partnerships</span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection("institutions")}
                  className="p-1 text-muted-foreground hover:text-brand-primary cursor-pointer"
                  aria-expanded={mobileExpandedSection === "institutions"}
                  aria-label="Toggle institutions sub-menu"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileExpandedSection === "institutions" && "rotate-180 text-brand-primary"
                    )}
                  />
                </button>
              </div>

              {mobileExpandedSection === "institutions" && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-muted/20 border-t border-border">
                  {INSTITUTION_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-foreground/90 hover:bg-muted hover:text-brand-primary transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border/40">
                    <Link
                      href="/partnerships"
                      className="block text-center text-xs font-bold text-brand-primary py-1.5 hover:underline"
                    >
                      View Institutional Services & Turnkey PE →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Academy Accordion */}
            <div className="border border-border rounded-xl overflow-hidden bg-background/50">
              <div className="flex items-center justify-between px-3.5 py-3 hover:bg-muted/60 transition-colors">
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-primary"
                >
                  <ShieldCheck className="h-4 w-4 text-brand-primary" />
                  <span>Academy Leadership & Ethics</span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection("academy")}
                  className="p-1 text-muted-foreground hover:text-brand-primary cursor-pointer"
                  aria-expanded={mobileExpandedSection === "academy"}
                  aria-label="Toggle academy sub-menu"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileExpandedSection === "academy" && "rotate-180 text-brand-primary"
                    )}
                  />
                </button>
              </div>

              {mobileExpandedSection === "academy" && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-muted/20 border-t border-border">
                  {ACADEMY_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-foreground/90 hover:bg-muted hover:text-brand-primary transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-[9px] font-extrabold uppercase px-1 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Centres Accordion */}
            <div className="border border-border rounded-xl overflow-hidden bg-background/50">
              <div className="flex items-center justify-between px-3.5 py-3 hover:bg-muted/60 transition-colors">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-primary"
                >
                  <MapPin className="h-4 w-4 text-brand-primary" />
                  <span>Academy Centres & Contact</span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection("centres")}
                  className="p-1 text-muted-foreground hover:text-brand-primary cursor-pointer"
                  aria-expanded={mobileExpandedSection === "centres"}
                  aria-label="Toggle centres sub-menu"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileExpandedSection === "centres" && "rotate-180 text-brand-primary"
                    )}
                  />
                </button>
              </div>

              {mobileExpandedSection === "centres" && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-muted/20 border-t border-border">
                  {CENTRES_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-foreground/90 hover:bg-muted hover:text-brand-primary transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border/40">
                    <Link
                      href="/contact"
                      className="block text-center text-xs font-bold text-brand-primary py-1.5 hover:underline"
                    >
                      View Map Directions & Timings →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Contact & Assessment CTA buttons */}
          <div className="pt-3 border-t border-border space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-foreground bg-muted hover:bg-muted/80 rounded-xl border border-border transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                <span>Call Coaching Desk</span>
              </a>

              <a
                href={getQuickChatWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl border border-emerald-500/20 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 fill-current shrink-0" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            <TrialBookingModal
              triggerButton={
                <Button size="lg" variant="default" className="w-full font-bold gap-2 text-sm shadow-md cursor-pointer">
                  <Calendar className="h-4 w-4" />
                  <span>Book Programme Assessment</span>
                </Button>
              }
            />
          </div>
        </div>
      )}
    </header>
  );
}
