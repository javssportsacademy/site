"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Shield, Calendar, ChevronRight } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { Button } from "@/components/ui/button";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { PRIMARY_PHONE_DISPLAY, WHATSAPP_PRIMARY_NUMBER, createWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Academy", href: "/about" },
  { name: "Sports (12)", href: "/sports" },
  { name: "Programmes", href: "/programs" },
  { name: "For Institutions", href: "/partnerships" },
  { name: "Inside the Game", href: "/javs-inbox", highlight: true },
  { name: "Founder", href: "/founder" },
  { name: "Centers & Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-primary via-amber-600 to-red-600 shadow-lg shadow-brand-primary/25 border border-white/20 group-hover:scale-105 transition-transform">
              <Shield className="h-6 w-6 text-slate-950 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg sm:text-xl text-white group-hover:text-brand-primary transition-colors flex items-center gap-1.5">
                JAV&apos;S <span className="text-brand-primary">SPORTS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400">
                Sport Teaches Life
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors flex items-center gap-1.5",
                    isActive
                      ? "text-brand-primary bg-brand-primary/10 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/5",
                    link.highlight && !isActive && "text-red-400 hover:text-red-300"
                  )}
                >
                  {link.highlight && <YoutubeIcon className="h-3.5 w-3.5 text-red-500 fill-current" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-brand-primary transition-colors px-2 py-1"
            >
              <Phone className="h-4 w-4 text-brand-primary" />
              <span>{PRIMARY_PHONE_DISPLAY}</span>
            </a>

            <TrialBookingModal
              triggerButton={
                <Button size="sm" variant="default" className="font-bold gap-1.5 shadow-md shadow-brand-primary/20">
                  <Calendar className="h-4 w-4" />
                  <span>Book Assessment</span>
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <TrialBookingModal
              triggerButton={
                <Button size="sm" variant="default" className="text-xs font-bold px-3 py-1.5 sm:hidden">
                  Trial
                </Button>
              }
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-white/10 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                    isActive
                      ? "text-brand-primary bg-brand-primary/10 font-bold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <YoutubeIcon className="h-4 w-4 text-red-500 fill-current" />}
                    {link.name}
                  </span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-slate-200 bg-white/5 rounded-lg border border-white/10"
            >
              <Phone className="h-4 w-4 text-brand-primary" />
              <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
            </a>

            <TrialBookingModal
              triggerButton={
                <Button size="lg" variant="default" className="w-full font-bold gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Free Assessment Session</span>
                </Button>
              }
            />
          </div>
        </div>
      )}
    </header>
  );
}
