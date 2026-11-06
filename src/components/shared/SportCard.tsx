import React from "react";
import Link from "next/link";
import { ArrowRight, Users, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sport } from "@/types";

interface SportCardProps {
  sport: Sport;
}

export function SportCard({ sport }: SportCardProps) {
  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden border-slate-200 bg-white hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm">
      <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-black text-slate-100 group-hover:text-amber-500/10 transition-colors pointer-events-none">
        {sport.id}
      </div>

      <CardHeader className="p-6 pb-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant="outline" className="text-[11px] font-semibold border-slate-300 text-slate-600">
            {sport.category}
          </Badge>
          <span className="text-xs font-mono font-bold text-brand-primary">
            #{sport.id}
          </span>
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 group-hover:text-brand-primary transition-colors">
          {sport.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
          {sport.shortDesc}
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-2 flex-grow">
        <div className="space-y-2 mt-2 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
            <Users className="h-3.5 w-3.5 text-brand-primary shrink-0" />
            <span>Age Suitability: <strong className="text-slate-900">{sport.ageGroups}</strong></span>
          </div>
          <p className="text-[11px] text-slate-500 line-clamp-1">
            Focus: {sport.skillsTaught.slice(0, 2).join(" • ")}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 border-t border-slate-100 mt-auto">
        <Link
          href={`/sports/${sport.slug}`}
          className="inline-flex w-full items-center justify-between rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all group-hover:bg-amber-50 group-hover:text-amber-900 group-hover:border-amber-200"
        >
          <span>Curriculum & Batches</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
