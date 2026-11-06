"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Shield, Calendar, ChevronRight } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/SocialIcons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";
import { PRIMARY_PHONE_DISPLAY, WHATSAPP_PRIMARY_NUMBER } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Academy", href: "/about" },
  { name: "Sports (12)", href: "/sports" },
  { name: "Programmes", href: "/programs" },
  { name: "For Institutions", href: "/partnerships" },
  { name: "Inside the Game", href: "/javs-inbox", highlight: true },
  { name: "Founder", href: "/founder" },
  { name: "Safeguarding", href: "/safeguarding" },
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
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-xs py-3 text-foreground"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50 py-4 text-foreground"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary via-amber-600 to-amber-700 shadow-md shadow-brand-primary/20 border border-white/20 group-hover:scale-105 transition-transform">
              <Shield className="h-5 w-5 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-base sm:text-lg text-foreground group-hover:text-brand-primary transition-colors flex items-center gap-1.5">
                JAV&apos;S <span className="text-brand-primary">SPORTS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">
                Sport Teaches Life
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors flex items-center gap-1.5",
                    isActive
                      ? "text-brand-primary bg-primary/10 font-bold"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted",
                    link.highlight && !isActive && "text-red-600 dark:text-red-400 font-bold"
                  )}
                >
                  {link.highlight && <YoutubeIcon className="h-3.5 w-3.5 text-red-600 fill-current" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
              className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            >
              <Phone className="h-3.5 w-3.5 text-brand-primary" />
              <span>{PRIMARY_PHONE_DISPLAY}</span>
            </a>

            <ThemeToggle />

            <TrialBookingModal
              triggerButton={
                <Button size="sm" variant="default" className="font-bold gap-1.5 shadow-sm text-xs px-3.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Programme Assessment</span>
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <TrialBookingModal
              triggerButton={
                <Button size="sm" variant="default" className="text-xs font-bold px-2.5 py-1 sm:hidden">
                  Assess
                </Button>
              }
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-muted border border-border text-foreground hover:bg-accent focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card/98 border-b border-border backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                    isActive
                      ? "text-brand-primary bg-primary/10 font-bold"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <YoutubeIcon className="h-4 w-4 text-red-600 fill-current" />}
                    {link.name}
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-border flex flex-col gap-2.5">
            <a
              href={`tel:${WHATSAPP_PRIMARY_NUMBER}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-foreground bg-muted rounded-xl border border-border"
            >
              <Phone className="h-4 w-4 text-brand-primary" />
              <span>Call: {PRIMARY_PHONE_DISPLAY}</span>
            </a>

            <TrialBookingModal
              triggerButton={
                <Button size="lg" variant="default" className="w-full font-bold gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Programme Enquiry & Assessment</span>
                </Button>
              }
            />
          </div>
        </div>
      )}
    </header>
  );
}
