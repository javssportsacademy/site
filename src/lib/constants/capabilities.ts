export interface CapabilityFamily {
  id: string;
  familyTitle: string;
  tagline: string;
  description: string;
  scopeList: string[];
  audienceTarget: string;
  link: string;
  badge: string;
}

export const ACADEMY_CAPABILITIES: CapabilityFamily[] = [
  {
    id: "sports-coaching",
    familyTitle: "Multi-Sport Structured Coaching",
    tagline: "12 Disciplines with Technical Progression",
    badge: "12 Sports",
    description: "Professional coaching across Cricket, Football, Basketball, Badminton, Volleyball, Athletics, Archery, Swimming, Handball, Cycling, Table Tennis, and Tennis. Conducted with disciplined coach-to-player ratios.",
    scopeList: [
      "Technical skill acquisition from fundamentals to match tactics",
      "Regular match simulations and situational game intelligence",
      "Tournament pathways for district and state representation",
      "Disciplined coaching ratios (1:6 to 1:10 maximum)"
    ],
    audienceTarget: "Athletes (Ages 6+) & Parents",
    link: "/sports"
  },
  {
    id: "age-development",
    familyTitle: "Age-Appropriate Development",
    tagline: "Early Years Movement to Lifelong Active Living",
    badge: "Ages 4 to Seniors",
    description: "Pedagogically designed curriculums calibrated to biological stages: Early Years Movement (Ages 4–5) for play-based balance, structured youth coaching (Ages 6+), and functional mobility for adults and seniors.",
    scopeList: [
      "Early Years Play (Ages 4-5): Balance, locomotor coordination, joy",
      "Youth Athletics (Ages 6+): Strength, agility, tactical resilience",
      "Senior Fitness (50+): Fall prevention, joint mobility, cardiovascular health",
      "Zero premature burnout or dangerous kinetic chain overspecialization"
    ],
    audienceTarget: "Families & All Age Groups",
    link: "/programs"
  },
  {
    id: "sports-science",
    familyTitle: "Sports Science & Physical Profiling",
    tagline: "Data-Informed Athletic Conditioning",
    badge: "M.P.Ed. Led",
    description: "Scientific fitness assessments, aerobic/anaerobic profiling, sprint timing gates, movement screening, and injury prevention routines supervised by physical education postgraduates.",
    scopeList: [
      "Standardized fitness testing batteries & physical growth profiling",
      "Speed, Agility & Quickness (SAQ) athletic conditioning",
      "Injury prevention & safe kinetic chain loading",
      "Recovery tracking & training load balance"
    ],
    audienceTarget: "Competitive Athletes & School Teams",
    link: "/programs"
  },
  {
    id: "wellness-mind",
    familyTitle: "Fitness, Mind & Holistic Wellness",
    tagline: "Developing Character Beyond The Scoreboard",
    badge: "Holistic Health",
    description: "Whole-person development including mental conditioning under scoreboard pressure, guided athletic yoga for flexibility and lung capacity, nutrition education, and equipment guidance.",
    scopeList: [
      "Mental composure, pre-game visualization & confidence routines",
      "Yoga and mindful mobility for hamstring/shoulder recovery",
      "Practical athlete nutrition: pre-game fueling & hydration",
      "Personalised training plans tailored to individual targets"
    ],
    audienceTarget: "Athletes, Working Adults & Seniors",
    link: "/programs"
  },
  {
    id: "events-institutional",
    familyTitle: "Turnkey Sports Events & Institutional Services",
    tagline: "End-to-End Delivery for Institutions & Communities",
    badge: "B2B Solutions",
    description: "Complete outsourced physical education, annual sports day organization, licensed referees and umpires, tournament fixtures, and residential community coaching (such as Prestige Bella Vista cricket sessions).",
    scopeList: [
      "Annual School Sports Days: Track marking, heats, judging & medals",
      "Qualified referees & umpires for inter-school & corporate tournaments",
      "Doorstep coaching batches for gated residential communities",
      "Corporate sports days, box cricket leagues & employee wellness"
    ],
    audienceTarget: "Schools, Colleges, Apartments & Corporates",
    link: "/partnerships"
  }
];
