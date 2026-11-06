import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "crimson" | "cyan" | "secondary" | "outline";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 mb-12",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} className="px-3.5 py-1 text-xs uppercase tracking-widest font-bold">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-brand-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-brand-primary rounded-full mt-2" />
    </div>
  );
}
