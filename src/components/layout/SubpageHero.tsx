import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SubpageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}

export function SubpageHero({
  badge,
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  children,
}: SubpageHeroProps) {
  return (
    <div className="relative pt-32 pb-16 sm:pb-20 overflow-hidden bg-slate-950 border-b border-white/10">
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-radial-[at_top_center] from-brand-primary/10 via-slate-950/70 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-brand-text-muted mb-4 font-semibold">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="h-3 w-3 text-slate-600" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-brand-primary font-bold">{title}</span>
        </nav>

        <div className="max-w-3xl">
          {badge && (
            <Badge variant="default" className="mb-3 px-3 py-1 uppercase tracking-widest text-xs font-bold">
              {badge}
            </Badge>
          )}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-xl text-brand-text-muted leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
}
