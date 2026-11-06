import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sport } from "@/types";

interface SportCardProps {
  sport: Sport;
}

export function SportCard({ sport }: SportCardProps) {
  return (
    <Card className="group relative flex flex-col justify-between overflow-hidden border-white/5 bg-slate-900/80 hover:border-brand-primary/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10">
      <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-black text-white/5 group-hover:text-brand-primary/20 transition-colors">
        {sport.id}
      </div>

      <CardHeader className="p-6 pb-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant="outline" className="text-[11px] font-semibold border-white/10 text-brand-text-muted">
            {sport.category}
          </Badge>
          <span className="text-xs font-mono font-bold text-brand-primary">
            #{sport.id}
          </span>
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-brand-primary transition-colors">
          {sport.name}
        </h3>
        <p className="text-sm text-brand-text-muted line-clamp-2 mt-1">
          {sport.shortDesc}
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-2 flex-grow">
        <div className="space-y-2 mt-3 pt-3 border-t border-white/5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-text-secondary">
            Key Focus Areas
          </p>
          <ul className="space-y-1.5">
            {sport.skillsTaught.slice(0, 3).map((skill, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="h-3.5 w-3.5 text-brand-primary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 border-t border-white/5 mt-auto">
        <Link
          href={`/sports/${sport.slug}`}
          className="inline-flex w-full items-center justify-between rounded-lg bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-primary hover:text-slate-950 transition-colors group-hover:bg-brand-primary/10 group-hover:text-brand-primary"
        >
          <span>View Curriculum & Batches</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
