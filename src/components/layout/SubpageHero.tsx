import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SubpageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  className?: string;
}

export function SubpageHero({
  badge,
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  children,
  className,
}: SubpageHeroProps) {
  return (
    <div
      className={cn(
        "relative pt-32 overflow-hidden bg-gradient-to-b from-card via-background to-muted/30 border-b border-border",
        children ? "pb-16 sm:pb-20" : "pb-4 sm:pb-5",
        className
      )}
    >
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-radial-[at_top_center] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-muted-foreground mb-4 font-semibold">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground/60" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <span className="text-primary font-bold">{title}</span>
        </nav>

        <div className="max-w-3xl">
          {badge && (
            <Badge variant="default" className="mb-3 px-3 py-1 uppercase tracking-widest text-xs font-bold">
              {badge}
            </Badge>
          )}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
}
