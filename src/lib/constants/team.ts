export interface CoachMentor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  specialty: string;
  bio: string;
  quoteOrHighlight: string;
  badge: string;
}

export const COACHING_TEAM: CoachMentor[] = [
  {
    id: "mohammed-javeed",
    name: "Mohammed Javeed",
    role: "Founder & Director of Operations",
    credentials: "M.Sc. Computer Science | M.P.Ed.",
    experience: "10+ Years Coaching & League Play",
    specialty: "All-Round Development & Wicketkeeping",
    bio: "Certified by MS Dhoni Cricket Academy (MSDCA) and Coaching Beyond. 10+ years as active wicketkeeper-batsman in TNCA and TDCA leagues. Coached over 500 children across grassroots to competitive squads. Host of '@JavsInbox'.",
    quoteOrHighlight: "Official Academy Director & Master of Physical Education",
    badge: "Director"
  },
  {
    id: "srinivasan",
    name: "Mr. Srinivasan",
    role: "Pace Bowling Mentor",
    credentials: "Former Colleague of Dav Whatmore | 10+ Yrs TNCA",
    experience: "10+ Years League Experience",
    specialty: "Fast Bowling Biomechanics & Seam Mechanics",
    bio: "A passionate cricket mentor who worked alongside former Sri Lanka World Cup-winning coach Dav Whatmore. Brings over a decade of TNCA league bowling experience, specializing in safe run-up rhythm, wrist snap, and preventing lower-back stress injuries in adolescent bowlers.",
    quoteOrHighlight: "Collaborated with World Cup Coach Dav Whatmore",
    badge: "Pace Bowling Mentor"
  },
  {
    id: "srivatsan",
    name: "Mr. Srivatsan",
    role: "Spin Bowling Mentor",
    credentials: "SS Rajan Trophy Captain | 1st & 2nd Division TNCA",
    experience: "15+ Years TNCA League Play",
    specialty: "Flight Variations, Spin Craft & Match Tactics",
    bio: "Over 15 years of competitive TNCA league experience. Represented U-19 and U-22 District and State squads, and captained Thiruvallur District in the prestigious SS Rajan Trophy. Instructs spin bowlers in drift, revolution rate, and deceiving batsmen in flight.",
    quoteOrHighlight: "15+ Years League Veteran & Former District Captain",
    badge: "Spin Bowling Mentor"
  },
  {
    id: "thousif-ahamed",
    name: "Mr. Thousif Ahamed (A.)",
    role: "Fitness & Conditioning Coach",
    credentials: "Certified Youth Strength & Conditioning Specialist",
    experience: "8+ Years Athletic Conditioning",
    specialty: "Agility, Stamina & Kinetic Chain Injury Prevention",
    bio: "Dedicated fitness professional focused on youth stamina, movement efficiency, core stability, and functional athletic endurance. Calibrates training workloads around biological growth plates to build injury-free athletic foundations.",
    quoteOrHighlight: "Specialist in Youth Movement & Injury Prevention",
    badge: "Conditioning Coach"
  }
];

export const ACADEMY_FACILITIES = [
  {
    id: "thiruverkadu-turf",
    title: "Thiruverkadu Sports & Performance Center",
    hub: "Thiruverkadu Center",
    specs: "Multi-Sport Disciplines • Structured Coaching Programmes • Safe Training Environment",
    description: "Structured coaching programmes designed to develop fundamental skills, sporting ability, tactical understanding and confidence.",
    tag: "Sports & Performance"
  },
  {
    id: "bella-vista-arena",
    title: "Prestige Bella Vista Cricket Sessions",
    hub: "Iyyappanthangal",
    specs: "Cricket Net Drills • Batting, Bowling & Fielding • Age-Appropriate Coaching",
    description: "Dedicated on-campus cricket sessions focusing on batting, bowling, fielding, wicketkeeping, and match awareness for resident participants.",
    tag: "Cricket Sessions"
  },
  {
    id: "sports-science-lab",
    title: "Sports Science & Performance Development",
    hub: "Academy Wide",
    specs: "Fitness Assessments • Movement Quality • Injury Prevention Practices",
    description: "Fitness assessments and physical development, strength, speed, agility and endurance training, and individual skill preparation.",
    tag: "Sports Science"
  },
  {
    id: "agility-conditioning-zone",
    title: "Fitness, Wellness & Movement Zone",
    hub: "Thiruverkadu & Avadi",
    specs: "Movement Development • Physical Conditioning • Active Lifestyles",
    description: "Programmes for physical fitness, sporting performance, mental wellbeing, and healthy habits across early years, youth, and adults.",
    tag: "Fitness & Wellness"
  }
];

export const ACADEMY_EVENTS = [
  {
    id: "event-01",
    title: "Annual JAV'S Academy Champions Trophy",
    format: "Inter-Batch Tournament",
    participants: "Junior (U-12) & Senior (U-16) Squads",
    summary: "Annual tournament giving every enrolled student real competitive match pressure, field placements, and live umpiring experience.",
    outcomes: "Medals, Best Batsman, Best Bowler & Most Disciplined Athlete awards"
  },
  {
    id: "event-02",
    title: "Institutional Sports Day Turnkey Execution",
    format: "School Sports Operations",
    participants: "Over 1,200 Students Across 3 Schools",
    summary: "Full turnkey organization of track and field heats, event scoring, march-past coordination, and safe athletic event management.",
    outcomes: "Flawless on-time execution, professional race timing, zero safety incidents"
  },
  {
    id: "event-03",
    title: "Summer High-Performance Conditioning Camp",
    format: "Intensive 4-Week Workshop",
    participants: "80+ Aspiring Athletes",
    summary: "Multi-sport intensive covering batting technique, bowling seam position, agility drills, nutrition fundamentals, and match mindset.",
    outcomes: "Comprehensive player diagnostic card & personalized skill roadmap"
  }
];

export const ACADEMY_ACHIEVEMENTS = [
  {
    id: "league-representation",
    title: "TNCA & District League Player Representation",
    category: "Player Pathways",
    description: "Athletes developed at JAV'S Academy have progressed to play in competitive TNCA division leagues and Thiruvallur District Cricket Association (TDCA) age-group squads.",
    tag: "Competitive Milestones"
  },
  {
    id: "annual-awards",
    title: "Annual Academy Awards & Milestone Celebrations",
    category: "Academy Culture",
    description: "Regular awards ceremonies recognizing consistent attendance, sporting discipline, technical breakthroughs, and tournament victories across junior and youth batches.",
    tag: "Merit & Recognition"
  },
  {
    id: "community-partnership-success",
    title: "Prestige Bella Vista Cricket Sessions",
    category: "Community Model",
    description: "Successfully established on-campus cricket coaching batches and society cricket leagues at Prestige Bella Vista, Iyyappanthangal, serving resident families with doorstep cricket excellence.",
    tag: "Community Impact"
  },
  {
    id: "broadcast-dialogues",
    title: "Media Commentary & Sports Analysis Engagements",
    category: "Public Voice",
    description: "Keynote sports appearances and commentary features across Behindwoods, Raj TV, and All In All Sportz, championing ethical youth physical education.",
    tag: "Media & Outreach"
  }
];
