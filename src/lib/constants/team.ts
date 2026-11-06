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
    title: "Thiruverkadu High-Performance Cricket Nets",
    hub: "Thiruverkadu Center",
    specs: "3 Turf Practice Nets • Floodlights • Automated Bowling Machine • Match Practice Pitch",
    description: "Equipped for all-weather evening net sessions, video-assisted batting drill sequencing, and match simulation bowling.",
    tag: "Turf Practice Facility"
  },
  {
    id: "bella-vista-arena",
    title: "Prestige Bella Vista Multi-Sport Campus",
    hub: "Iyyappanthangal",
    specs: "Full Badminton Courts • Dedicated Turf Box • Functional Athletic Field",
    description: "Safe, enclosed gated-community athletic environment providing age-specific coaching for residents and nearby neighborhoods.",
    tag: "Residential Arena"
  },
  {
    id: "sports-science-lab",
    title: "Movement Analysis & Kinetic Screening Unit",
    hub: "Both Hubs",
    specs: "High-Speed Video Frame Capture • Bowling Action Review • Footwork Alignment",
    description: "Scientific video playback used during 1-on-1 mentor reviews to assess kinetic chain alignment and bowler injury risks.",
    tag: "Sports Science"
  },
  {
    id: "agility-conditioning-zone",
    title: "Youth Fitness & Recovery Zone",
    hub: "Both Hubs",
    specs: "Agility Ladders • Plyometric Hurdles • Resistance Bands • Hydration Protocol",
    description: "Dedicated safe space for neuromuscular warm-ups, multi-directional speed training, and post-session stretching routines.",
    tag: "Conditioning Facility"
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
    title: "Prestige Bella Vista Residential Sports Program",
    category: "Community Model",
    description: "Successfully established on-campus multi-sport coaching and society sports leagues at Prestige Bella Vista, Iyyappanthangal, serving resident families with doorstep sports excellence.",
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
