export interface Sport {
  id: string;
  slug: string;
  name: string;
  category: "Field & Court" | "Racket Sports" | "Precision & Water" | "Endurance";
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  skillsTaught: string[];
  ageGroups: string[];
  coachingRatio: string;
  scheduleHighlights: string;
  benefits: string[];
  equipmentNeeded: string;
  accentColor: string;
}

export interface AgeProgram {
  id: string;
  title: string;
  ageBracket: string;
  tagline: string;
  description: string;
  highlights: string[];
  focusAreas: string[];
  ctaText: string;
  iconName: string;
}

export interface InstitutionalPartner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  offerings: string[];
  iconName: string;
  badge: string;
}

export interface MediaEpisode {
  id: string;
  title: string;
  category: "Podcast" | "NCA Masterclass" | "Youth Coaching" | "Match Analysis";
  duration: string;
  description: string;
  youtubeId: string;
  publishedDate: string;
  viewsOrBadge: string;
}

export interface AcademyLocation {
  id: string;
  name: string;
  area: string;
  address: string;
  plusCode?: string;
  phoneNumbers: string[];
  email: string;
  timing: string;
  facilities: string[];
  mapEmbedOrDirectionsUrl: string;
}

export interface TrialBookingPayload {
  name: string;
  phone: string;
  sport: string;
  ageBracket: string;
  location: string;
  message?: string;
}
