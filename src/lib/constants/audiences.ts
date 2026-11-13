export interface AudiencePathway {
  id: string;
  audienceName: string;
  eyebrow: string;
  headline: string;
  description: string;
  primaryValuePoints: string[];
  ctaLabel: string;
  ctaLink: string;
  whatsappMessage: string;
  badge: string;
}

export const AUDIENCE_PATHWAYS: AudiencePathway[] = [
  {
    id: "parents",
    audienceName: "Parents & Young Athletes",
    eyebrow: "Grassroots to Competitive Sports",
    headline: "Nurturing Character, Discipline & Athletic Skill",
    badge: "For Families",
    description: "Looking for an academy that teaches genuine sporting technique without toxic pressure? We offer age-calibrated programs where character, discipline, and fun come first.",
    primaryValuePoints: [
      "Age-graded programs from Early Years (Ages 4-5) to Youth (Ages 6+)",
      "Disciplined coach-to-player ratios (1:6 to 1:10)",
      "Safe, encouraging, anti-bullying environment with certified coaches",
      "Assessment session to determine your child's natural athletic aptitude"
    ],
    ctaLabel: "Enquire for Your Child",
    ctaLink: "/contact",
    whatsappMessage: "Hi Coach Mohammed Javeed, I am a parent interested in enrolling my child for sports coaching at JAV'S Sports Academy."
  },
  {
    id: "schools",
    audienceName: "Schools & Colleges",
    eyebrow: "Educational Institutions",
    headline: "Outsourced PE, Sports Days & Tournament Officiating",
    badge: "For Educators",
    description: "Elevate your institution's sporting reputation. From managing your complete annual sports day to deploying certified physical education teachers and tournament referees.",
    primaryValuePoints: [
      "Turnkey Annual Sports Day execution: Order of events, track marking, scoring, medals",
      "Licensed referees and umpires for inter-school competitions",
      "Structured Physical Education curriculum aligned with age progression",
      "Varsity team selection, conditioning camps, and championship coaching"
    ],
    ctaLabel: "Partner for School Sports",
    ctaLink: "/partnerships",
    whatsappMessage: "Hi Coach Mohammed Javeed, I represent a school/college and would like to discuss sports day management and PE coaching solutions."
  },
  {
    id: "communities",
    audienceName: "Apartment & Gated Communities",
    eyebrow: "Residential Living",
    headline: "On-Campus Coaching in Your Society Clubhouse",
    badge: "For Residents",
    description: "Bring professional coaching directly to your residential campus. Like our proven ongoing cricket sessions at Prestige Bella Vista (Iyyappanthangal), we run safe, verified sports batches inside your society.",
    primaryValuePoints: [
      "Doorstep convenience: Zero travel hassle for working parents",
      "Cricket, football, badminton, and swimming batches within society gates",
      "Weekend wellness, walking clubs, and yoga for working residents and seniors",
      "Annual community sports festivals, box cricket cups, and badminton leagues"
    ],
    ctaLabel: "Bring JAV'S to Your Society",
    ctaLink: "/partnerships",
    whatsappMessage: "Hi Coach Mohammed Javeed, I am an apartment association/resident representative interested in starting sports batches in our gated community."
  },
  {
    id: "corporates",
    audienceName: "Corporate Organisations",
    eyebrow: "Workplace Wellness & Leagues",
    headline: "Corporate Olympics, Leagues & Employee Health",
    badge: "For Enterprises",
    description: "Energize employee morale, foster cross-departmental collaboration, and reduce sedentary fatigue with professionally officiated corporate sports leagues.",
    primaryValuePoints: [
      "Annual Corporate Sports Days & multi-discipline Olympiads",
      "Weekend inter-corporate and intra-company cricket and badminton tournaments",
      "Desk-worker ergonomic mobility workshops, mindfulness, and yoga",
      "Full venue arrangement, refereeing, live scorekeeping, and trophies"
    ],
    ctaLabel: "Plan Corporate Tournament",
    ctaLink: "/partnerships",
    whatsappMessage: "Hi Coach Mohammed Javeed, I represent a corporate organization looking to organize sports tournaments and employee wellness programs."
  }
];
