import { Sport } from "@/types";

export const SPORTS_LIST: Sport[] = [
  {
    id: "01",
    slug: "cricket",
    name: "Cricket",
    category: "Field & Court",
    iconName: "Flame",
    shortDesc: "Batting, bowling, fielding, wicketkeeping and match awareness.",
    fullDesc: "Our flagship cricket programme develops modern, technically sound cricketers. Directed by Coach Mohammed Javeed (TNCA/TDCA league player, MSDCA and Coaching Beyond certified), athletes undergo structured drills covering batting biomechanics, pace and spin variations, reactive fielding, wicketkeeping agility, and match-simulation pressure training.",
    skillsTaught: [
      "Stance, grip, front & back-foot stroke play mechanics",
      "Pace & spin bowling biomechanics, run-up rhythm, and release points",
      "Ground fielding, slip catching, direct hitting drills",
      "Tactical game awareness & situational decision-making under scoreboard pressure",
      "Power hitting & modern death-overs execution"
    ],
    ageGroups: ["Ages 5-8 (Grassroots)", "Ages 9-14 (Junior)", "Ages 15 and Above (Competitive)"],
    coachingRatio: "1:8 Coach-to-Player",
    scheduleHighlights: "Morning & Evening Batches | Weekend Specialised Net Sessions",
    benefits: ["Hand-eye coordination", "Mental composure under pressure", "Strategic field thinking", "Endurance & stamina"],
    equipmentNeeded: "Cricket bat, batting pads, gloves, helmet, spiked/turf shoes. Academy provides match balls, cones, and practice nets.",
    accentColor: "#D97706",
    locationAvailability: ["Thiruverkadu Center (Main Academy)", "Prestige Bella Vista (Net Drills)"]
  },
  {
    id: "02",
    slug: "football",
    name: "Football",
    category: "Field & Court",
    iconName: "Shield",
    shortDesc: "Ball control, passing, dribbling, shooting and teamwork.",
    fullDesc: "Designed on structured youth academy principles, our football curriculum combines explosive agility, spatial awareness, and collective tactical cohesion. Players master first-touch receiving, 1v1 attacking, zonal pressing, and set-piece strategies in high-energy sessions.",
    skillsTaught: [
      "Ball control, dribbling with both feet, and change of pace",
      "Short & long-range passing accuracy and spatial vision",
      "Shooting technique, volleys, and heading precision",
      "Defensive positioning, interception, and recovery runs",
      "Team formations, transition play, and communication"
    ],
    ageGroups: ["Ages 4-7 (Little Champs)", "Ages 8-13 (Junior Stars)", "Ages 14 and Above (Youth)"],
    coachingRatio: "1:10 Coach-to-Player",
    scheduleHighlights: "Weekday Evenings & Weekend Tournament League Play",
    benefits: ["Aerobic stamina", "Lower-body power", "Rapid reflex decision-making", "Team leadership"],
    equipmentNeeded: "Football boots (studs/turf), shin guards, breathable athletic sportswear.",
    accentColor: "#0284C7",
    locationAvailability: ["Thiruverkadu Center (Main Academy)", "Prestige Bella Vista"]
  },
  {
    id: "03",
    slug: "basketball",
    name: "Basketball",
    category: "Field & Court",
    iconName: "Trophy",
    shortDesc: "Dribbling, passing, shooting, defence and teamwork.",
    fullDesc: "Elevate your game with high-tempo basketball coaching. From fundamental footwork and crossover ball handling to jump shots, pick-and-roll offense, and lockdown perimeter defense, athletes gain court vision and athletic explosiveness.",
    skillsTaught: [
      "Two-handed dribbling, speed dribble, spin moves",
      "Layups, mid-range jump shots, and free-throw routines",
      "Chest, bounce, and overhead passing mechanics",
      "Man-to-man defense, sliding footwork, and box-outs",
      "Fast-break transitions and offensive spacing"
    ],
    ageGroups: ["Ages 6-9 (Minis)", "Ages 10-14 (Cadets)", "Ages 15 and Above (Varsity)"],
    coachingRatio: "1:8 Coach-to-Player",
    scheduleHighlights: "Evening Floodlit Court Sessions | Weekend 3v3 / 5v5 Scrimmages",
    benefits: ["Vertical leap & calf power", "Full-body agility", "Rapid court perception", "Unmatched team camaraderie"],
    equipmentNeeded: "Non-marking basketball shoes, comfortable basketball shorts and jersey.",
    accentColor: "#D97706",
    locationAvailability: ["Prestige Bella Vista Center"]
  },
  {
    id: "04",
    slug: "badminton",
    name: "Badminton",
    category: "Racket Sports",
    iconName: "Zap",
    shortDesc: "Racket skills, footwork, agility and match strategy.",
    fullDesc: "Fast-paced, precision-driven badminton coaching conducted on professional indoor courts. Players master lightning-quick six-corner footwork, deceptive net play, steep jump smashes, and singles/doubles court positioning.",
    skillsTaught: [
      "Forehand & backhand grip transitions",
      "Six-corner multi-directional court footwork",
      "Overhead clears, drop shots, and steep attacking smashes",
      "Deceptive net tumbling and cross-court flicking",
      "Singles rally building and doubles rotational tactics"
    ],
    ageGroups: ["Ages 5-9 (Beginners)", "Ages 10-14 (Intermediate)", "Ages 15 and Above (Advanced & Adults)"],
    coachingRatio: "1:6 Coach-to-Player",
    scheduleHighlights: "Indoor Wooden/Synthetic Court Slots (Daily Morning & Evening)",
    benefits: ["Explosive deceleration & reflex speed", "Shoulder & wrist mobility", "Cardiovascular fitness"],
    equipmentNeeded: "Badminton racket, non-marking indoor court shoes, grip wraps.",
    accentColor: "#059669",
    locationAvailability: ["Thiruverkadu Center (Main Academy)", "Prestige Bella Vista"]
  },
  {
    id: "05",
    slug: "volleyball",
    name: "Volleyball",
    category: "Field & Court",
    iconName: "Award",
    shortDesc: "Serving, passing, setting, spiking, blocking and teamwork.",
    fullDesc: "Master the sport of vertical jump, precision setting, and synchronization. We train players in underhand and jump serves, forearm platform passing, setter fingertip control, spike approach footwork, and net block positioning.",
    skillsTaught: [
      "Underhand, float, and jump-top-spin serving",
      "Bump passing and overhead setting calibration",
      "Spike approach (3-step & 4-step) and wrist snap execution",
      "Individual and tandem blocking along the net",
      "Court rotation, floor defense, and libero diving technique"
    ],
    ageGroups: ["Ages 8-12 (Junior)", "Ages 13-17 (Youth)", "Colleges & Adults"],
    coachingRatio: "1:10 Coach-to-Player",
    scheduleHighlights: "Weekday Evenings & Weekend Match Practice",
    benefits: ["Exceptional vertical jump", "Upper body & core strength", "Deep trust and real-time communication"],
    equipmentNeeded: "Cushioned court shoes, knee pads, active breathable wear.",
    accentColor: "#4F46E5",
    locationAvailability: ["Thiruverkadu Center (Main Academy)"]
  },
  {
    id: "06",
    slug: "athletics",
    name: "Athletics",
    category: "Endurance",
    iconName: "Activity",
    shortDesc: "Running, jumping, throwing, speed and endurance.",
    fullDesc: "The foundation of all athletic ability. Our track-and-field curriculum provides essential physical conditioning for all sports: sprint mechanics, stride acceleration, hurdle rhythm, long jump takeoff, and throwing safety.",
    skillsTaught: [
      "Sprint form, knee lift, arm drive, and block start acceleration",
      "Middle & long-distance pacing and VO2 max conditioning",
      "Horizontal & vertical jumps (Long Jump approach)",
      "Throwing fundamentals (Shot put, javelin safety)",
      "Plyometrics, core stability, and hamstring injury prevention"
    ],
    ageGroups: ["Ages 4-7 (Fundamental Movement)", "Ages 8-14 (Track Squad)", "Ages 15 and Above (Competitive)"],
    coachingRatio: "1:10 Coach-to-Player",
    scheduleHighlights: "Early Morning Track Drills (6:00 AM - 7:30 AM) & Weekend Sessions",
    benefits: ["Peak cardiovascular endurance", "Explosive linear speed", "Core posture & stride mechanics"],
    equipmentNeeded: "Quality running/sprint trainers, lightweight athletic gear.",
    accentColor: "#DB2777",
    locationAvailability: ["Thiruverkadu Center (Main Academy)"]
  },
  {
    id: "07",
    slug: "archery",
    name: "Archery",
    category: "Precision & Water",
    iconName: "Crosshair",
    shortDesc: "Aiming, concentration, coordination and precision.",
    fullDesc: "Channel stillness, focus, and unwavering precision. Athletes learn bow handling, consistent drawing and anchoring mechanics, breathing control, and target alignment under certified archery instructors.",
    skillsTaught: [
      "Standard archery stance, body alignment, and bow grip",
      "Draw stroke, anchor point consistency, and sight calibration",
      "Breathing synchronization and trigger release smoothness",
      "Wind calculation and mental focus under competition pressure",
      "Recurve and compound bow maintenance and safety protocols"
    ],
    ageGroups: ["Ages 7-12 (Cadet Archery)", "Ages 13-17 (Junior)", "Adults & Seniors"],
    coachingRatio: "1:5 Coach-to-Player (Strict range safety)",
    scheduleHighlights: "Dedicated Range Practice Sessions (Morning & Late Afternoon)",
    benefits: ["Laser-sharp mental focus", "Upper back, shoulder & core posture", "Patience and emotional calm"],
    equipmentNeeded: "Academy provides bows, target arrows, arm guards, and finger tabs during sessions.",
    accentColor: "#D97706",
    locationAvailability: ["Thiruverkadu Center (Main Academy)"]
  },
  {
    id: "08",
    slug: "swimming",
    name: "Swimming",
    category: "Precision & Water",
    iconName: "Waves",
    shortDesc: "Water confidence, swimming techniques, endurance and water safety.",
    fullDesc: "From overcoming water apprehension to mastering all four competitive strokes (Freestyle, Backstroke, Breaststroke, Butterfly), our swimming program emphasizes safe buoyancy, rhythmic breathing, streamlined body lines, and pool survival safety.",
    skillsTaught: [
      "Water confidence, floating, gliding, and relaxed rhythmic breathing",
      "Freestyle high-elbow catch and bilateral breathing",
      "Backstroke rotational kick and stroke cadence",
      "Breaststroke glide timing and whip kick mechanics",
      "Butterfly undulation and water safety rescue basics"
    ],
    ageGroups: ["Ages 4-6 (Learn to Float)", "Ages 7-14 (Stroke Technique)", "Adults & Senior Fitness"],
    coachingRatio: "1:6 (Strict lifeguard & safety supervision)",
    scheduleHighlights: "Morning & Evening Heated/Treated Pool Batches",
    benefits: ["Zero-impact full-body conditioning", "Enhanced lung capacity", "Life-saving aquatic survival skills"],
    equipmentNeeded: "Swimming costume/trunks, silicone swim cap, anti-fog goggles.",
    accentColor: "#0284C7",
    locationAvailability: ["Prestige Bella Vista Center"]
  },
  {
    id: "09",
    slug: "handball",
    name: "Handball",
    category: "Field & Court",
    iconName: "Target",
    shortDesc: "Passing, catching, shooting, defence and movement.",
    fullDesc: "An Olympic discipline fusing rapid court transitions, 3-step jump shots, powerful perimeter throws, agile defensive shifting, and goalkeeper reflexes in high-tempo play.",
    skillsTaught: [
      "One-handed ball grip, overhead, and bounce passing",
      "3-step running rhythm and jump-shot execution",
      "Wing shooting angles and pivot play on the line",
      "6-0 and 5-1 defensive barrier structures",
      "Goalkeeper positional coverage and fast-break distribution"
    ],
    ageGroups: ["Ages 8-13 (Junior)", "Ages 14 and Above (Senior)", "Colleges & Clubs"],
    coachingRatio: "1:10 Coach-to-Player",
    scheduleHighlights: "Weekend Evening Court Sessions",
    benefits: ["Dynamic upper body power", "Rapid directional agility", "High-intensity calorie burn"],
    equipmentNeeded: "Indoor court sports shoes, breathable kit.",
    accentColor: "#DC2626",
    locationAvailability: ["Thiruverkadu Center (Main Academy)"]
  },
  {
    id: "10",
    slug: "cycling",
    name: "Cycling",
    category: "Endurance",
    iconName: "Compass",
    shortDesc: "Balance, coordination, cycling techniques, road safety and endurance.",
    fullDesc: "We teach young riders bicycle balance, cadence optimization, gear shifting rhythm, emergency braking, group riding etiquette, and endurance pacing on safe enclosed tracks.",
    skillsTaught: [
      "Bike fit, mounting, balance, and straight-line control",
      "Cadence optimization and efficient gear shifting",
      "Cornering lean angles and progressive braking technique",
      "Road safety signals, helmet checks, and hazard anticipation",
      "Long-distance endurance pacing and hydration strategies"
    ],
    ageGroups: ["Ages 5-8 (Beginner Balance)", "Ages 9-14 (Road & Speed)", "Adults & Weekend Riders"],
    coachingRatio: "1:6 Coach-to-Rider",
    scheduleHighlights: "Weekend Morning Rides & Enclosed Safe Track Drills",
    benefits: ["Joint-friendly cardiovascular health", "Leg strength and endurance", "Environmental consciousness"],
    equipmentNeeded: "Geared or standard bicycle, certified safety helmet, reflective cycling gloves.",
    accentColor: "#0D9488",
    locationAvailability: ["Thiruverkadu Enclosed Circuit"]
  },
  {
    id: "11",
    slug: "table-tennis",
    name: "Table Tennis",
    category: "Racket Sports",
    iconName: "Sparkles",
    shortDesc: "Racket skills, reaction time, footwork and match strategy.",
    fullDesc: "The ultimate reflex sport. Players master penhold and shakehand grips, topspin brush strokes, backhand push defense, heavy-spin serves, and millisecond reaction footwork across the table.",
    skillsTaught: [
      "Shakehand and penhold grip mechanics",
      "Forehand loop, topspin drive, and backhand flick",
      "Short backspin push and chop defensive tactics",
      "Advanced pendulum and reverse-pendulum spin serves",
      "Table anticipation and 2-step side-to-side footwork"
    ],
    ageGroups: ["Ages 6-10 (Foundation)", "Ages 11-15 (Competitive)", "Adults & Seniors"],
    coachingRatio: "1:4 Coach-to-Player",
    scheduleHighlights: "Air-Conditioned Indoor Table Slots (Morning & Evening)",
    benefits: ["Ultra-sharp hand-eye reflexes", "Brain neuroplasticity and focus", "Zero risk of high impact injury"],
    equipmentNeeded: "Custom rubber TT racket, non-marking indoor shoes.",
    accentColor: "#7C3AED",
    locationAvailability: ["Thiruverkadu Center (Main Academy)"]
  },
  {
    id: "12",
    slug: "tennis",
    name: "Tennis",
    category: "Racket Sports",
    iconName: "CircleDot",
    shortDesc: "Racket skills, serving, groundstrokes, footwork, agility, coordination and match strategy.",
    fullDesc: "Play with power, tactical composure, and graceful footwork. Our tennis program instructs players on modern topspin forehands, two-handed backhands, slice variations, kick serves, and net volleys.",
    skillsTaught: [
      "Eastern, Semi-Western, and Continental grip usage",
      "Topspin groundstrokes and heavy baseline rally consistency",
      "First serve power, second serve kick, and service rhythm",
      "Approach shots, split-step timing, and crisp volleying",
      "Singles court angles and doubles poaching strategies"
    ],
    ageGroups: ["Ages 5-8 (Red Ball/Mini Tennis)", "Ages 9-12 (Orange/Green Ball)", "Ages 13 and Above (Championship)"],
    coachingRatio: "1:6 Coach-to-Player",
    scheduleHighlights: "Court Practice Slots (Early Morning & Evening)",
    benefits: ["Complete anaerobic & aerobic conditioning", "Shoulder, arm & core power", "Mental fortitude and self-reliance"],
    equipmentNeeded: "Age-appropriate tennis racket, tennis court shoes, comfortable sports apparel.",
    accentColor: "#65A30D",
    locationAvailability: ["Prestige Bella Vista Center"]
  }
];

export function getSportBySlug(slug: string): Sport | undefined {
  return SPORTS_LIST.find((s) => s.slug === slug);
}
