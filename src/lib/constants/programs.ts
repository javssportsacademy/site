import { AgeProgram } from "@/types";

export const AGE_PROGRAMS: AgeProgram[] = [
  {
    id: "early-years",
    title: "Early Years Movement Programme",
    ageBracket: "Ages 4 & 5",
    tagline: "Joyful Play, Foundational Balance & Body Awareness",
    description: "A play-based programme focusing on fundamental movement skills, balance, coordination, body awareness, confidence and enjoyment through movement. Before specializing in any single sport, young children build neuromuscular pathways that make them naturally athletic for life.",
    highlights: [
      "Animal walks, hopping, jumping, and spatial awareness obstacle courses",
      "Soft-ball throwing, catching, and eye-tracking games",
      "Rhythm, balance beams, and bilateral coordination drills",
      "Social skills: sharing, taking turns, and listening to coach cues"
    ],
    focusAreas: ["Locomotor Agility", "Bilateral Balance", "Spatial Perception", "Confidence & Joy"],
    ctaText: "Enroll in Early Years Program",
    iconName: "Baby"
  },
  {
    id: "youth-development",
    title: "Sports & Physical Development",
    ageBracket: "Ages 6 and Above",
    tagline: "Structured Coaching Tailored to Age, Ability & Ambition",
    description: "Structured coaching tailored to each participant's age, ability, skill level and development goals. Athletes can choose to train across multiple sports or specialize in their primary discipline (Cricket, Football, Badminton, Athletics, Tennis, etc.) while building speed, strength, and tactical resilience.",
    highlights: [
      "Sport-specific technical drill progressions and match play",
      "Speed, agility, quickness (SAQ) and core strength conditioning",
      "Tactical positioning, team communication, and sportsmanship",
      "Regular progress tracking and tournament exposure opportunities"
    ],
    focusAreas: ["Technical Skill", "Speed & Conditioning", "Game Intelligence", "Leadership"],
    ctaText: "Explore Youth Sports Batches",
    iconName: "Flame"
  },
  {
    id: "senior-adult-fitness",
    title: "Fitness for Adults & Senior Citizens",
    ageBracket: "Adults & Seniors (50+)",
    tagline: "Active Ageing, Functional Mobility & Joint Vitality",
    description: "Age-appropriate activities focusing on mobility, balance, coordination, functional strength and overall wellbeing. Whether returning to a beloved sport or maintaining cardiovascular health and joint independence, our sessions are safe, guided, and deeply rejuvenating.",
    highlights: [
      "Low-impact mobility drills and posture correction",
      "Balance routines to prevent falls and maintain stability",
      "Gentle resistance bands and bodyweight functional strength",
      "Recreational racket games, walking clubs, and swimming sessions"
    ],
    focusAreas: ["Joint Mobility", "Fall Prevention Balance", "Cardio Health", "Social Connection"],
    ctaText: "Join Adult & Senior Sessions",
    iconName: "Heart"
  }
];

export const SPORTS_SCIENCE_SERVICES = [
  {
    id: "assessments",
    title: "Fitness Assessments & Physical Profiling",
    desc: "Comprehensive testing of aerobic capacity, anaerobic power, sprint timing gates, flexibility, and core endurance to benchmark athlete development.",
    iconName: "Activity"
  },
  {
    id: "injury-prevention",
    title: "Movement Quality & Injury Prevention",
    desc: "Biomechanical screening, corrective exercise routines, hamstring/ACL strengthening, and safe kinetic chain loading for growing bodies.",
    iconName: "ShieldCheck"
  },
  {
    id: "mental-conditioning",
    title: "Mental Conditioning & Focus Training",
    desc: "Developing concentration, confidence, emotional composure under scoreboard pressure, pre-match visualization, and resilience after setbacks.",
    iconName: "Brain"
  },
  {
    id: "nutrition",
    title: "Athlete Nutrition & Recovery Education",
    desc: "Practical guidelines on pre-game fueling, hydration strategies, post-training protein recovery, sleep hygiene, and healthy everyday eating.",
    iconName: "Apple"
  },
  {
    id: "yoga-mindfulness",
    title: "Yoga & Mindful Movement",
    desc: "Guided sessions supporting athletic flexibility, breathwork (Pranayama) for lung control, neuromuscular relaxation, and mindful recovery.",
    iconName: "Sun"
  },
  {
    id: "equipment-solutions",
    title: "Sportswear & Equipment Solutions",
    desc: "Professional guidance on selecting proper footwear (studs, turf, court, running), racket tensions, bat weights, and safety protective gear.",
    iconName: "ShoppingBag"
  }
];
