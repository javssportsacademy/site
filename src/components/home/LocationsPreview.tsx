import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, Check, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ACADEMY_LOCATIONS } from "@/lib/constants/locations";
import { TrialBookingModal } from "@/components/shared/TrialBookingModal";

export function LocationsPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Training Centers"
          title="Where Champions Train in Chennai"
          subtitle="Premier training centers and fitness hubs across Chennai equipped with professional coaching facilities, turf nets, and athletic conditioning grounds."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ACADEMY_LOCATIONS.map((loc) => (
            <Card
              key={loc.id}
              className="flex flex-col justify-between bg-card border-border hover:border-brand-primary/40 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group"
            >
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="border-brand-primary/40 text-brand-primary text-xs font-bold uppercase">
                    {loc.area}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    Active Batches
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-foreground tracking-tight group-hover:text-brand-primary transition-colors">
                  {loc.name}
                </h3>

                <p className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground mt-2">
                  <MapPin className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>
              </CardHeader>

              <CardContent className="p-8 pt-2 space-y-4 flex-grow">
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border flex items-center gap-2.5 text-xs text-foreground">
                  <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>{loc.timing}</span>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                    Programme Focus & Offerings:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {loc.facilities.slice(0, 4).map((fac, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="p-8 pt-0 border-t border-border flex flex-wrap gap-3">
                <TrialBookingModal
                  defaultLocation={loc.name}
                  triggerButton={
                    <Button variant="default" size="sm" className="font-bold gap-1.5 flex-1 shadow-xs">
                      <Calendar className="h-4 w-4" />
                      <span>Programme Enquiry</span>
                    </Button>
                  }
                />

                <Button asChild variant="outline" size="sm" className="font-bold border-border bg-card text-foreground hover:bg-muted gap-1.5 shadow-2xs">
                  <a
                    href={loc.mapEmbedOrDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Get Directions</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline"
          >
            <span>Need exact directions or phone contact? View Full Contact Page</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
