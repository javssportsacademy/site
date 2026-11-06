"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { createWhatsAppUrl, WHATSAPP_PRIMARY_NUMBER } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface DirectWhatsAppButtonProps extends ButtonProps {
  message?: string;
  phoneNumber?: string;
  label?: string;
  showIcon?: boolean;
}

export function DirectWhatsAppButton({
  message = "Hello Coach Mohammed Javeed, I would like to enquire about coaching batches at JAV'S Sports Academy.",
  phoneNumber = WHATSAPP_PRIMARY_NUMBER,
  label = "Chat on WhatsApp",
  showIcon = true,
  className,
  variant = "whatsapp",
  ...props
}: DirectWhatsAppButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = createWhatsAppUrl(message, phoneNumber);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={cn("gap-2 font-bold transition-transform hover:scale-105", className)}
      {...props}
    >
      {showIcon && <MessageCircle className="h-5 w-5 fill-current" />}
      <span>{label}</span>
    </Button>
  );
}
