import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-slate-950 hover:bg-brand-primary-hover shadow-md shadow-brand-primary/20",
        crimson:
          "bg-brand-crimson text-white hover:bg-brand-crimson-hover shadow-md shadow-brand-crimson/20",
        cyan:
          "bg-brand-cyan text-slate-950 hover:bg-brand-cyan-hover shadow-md shadow-brand-cyan/20",
        whatsapp:
          "bg-brand-whatsapp text-white hover:bg-brand-whatsapp-hover shadow-md shadow-brand-whatsapp/25",
        outline:
          "border border-brand-border bg-transparent text-brand-text-primary hover:border-brand-primary hover:bg-brand-surface",
        outlineGold:
          "border border-brand-primary/60 bg-transparent text-brand-primary hover:bg-brand-primary/10",
        ghost:
          "text-brand-text-primary hover:bg-brand-surface hover:text-brand-primary",
        link:
          "text-brand-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-13 rounded-xl px-7 text-base font-bold",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
