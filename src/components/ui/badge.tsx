import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-brand-primary/40 bg-brand-primary/10 text-brand-primary",
        crimson:
          "border-brand-crimson/40 bg-brand-crimson/10 text-brand-crimson",
        cyan:
          "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan",
        secondary:
          "border-brand-border bg-brand-surface text-brand-text-secondary",
        outline:
          "border-brand-border text-brand-text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
