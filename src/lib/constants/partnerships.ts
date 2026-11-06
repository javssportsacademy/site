import { InstitutionalPartner } from "@/types";

export const INSTITUTIONAL_PARTNERS: InstitutionalPartner[] = [
  {
    id: "schools",
    title: "Schools & Educational Institutions",
    subtitle: "Complete Physical Education Curriculum & Sports Days",
    badge: "K-12 Sports Leadership",
    description: "We partner with leading schools to deliver structured physical education, after-school coaching academies, annual sports day organization, and inter-school tournament representation.",
    offerings: [
      "Age-graded PE curriculum mapping and certified coach deployment",
      "End-to-end Annual Sports Day planning, heats, track setups & officiating",
      "After-school multi-sport coaching batches with zero administrative hassle",
      "Inter-school squad selection, tactical coaching, and tournament logistics"
    ],
    iconName: "GraduationCap"
  },
  {
    id: "colleges",
    title: "Colleges & Universities",
    subtitle: "Competitive Varsity Preparation & Sports Management",
    badge: "Higher Ed Sports",
    description: "Empowering university athletes with high-performance coaching, varsity team selections, fitness conditioning camps, and intramural league management.",
    offerings: [
      "Specialised team coaching in Cricket, Football, Basketball, Badminton, Athletics",
      "Pre-season strength, agility and tactical conditioning camps",
      "Officiating, qualified referees and umpires for campus tournaments",
      "Sports council mentorship, event coordination and scorekeeping systems"
    ],
    iconName: "Award"
  },
  {
    id: "apartments",
    title: "Apartment & Gated Communities",
    subtitle: "On-Campus Coaching & Weekend Sports Leagues",
    badge: "Resident Community Sports",
    description: "Bringing professional coaching directly to your residential clubhouses and community grounds (such as our ongoing programs at Prestige Bella Vista, Iyyappanthangal).",
    offerings: [
      "Convenient doorstep coaching batches for children (Ages 4 to 16)",
      "Weekend fitness, yoga, and badminton sessions for working parents & seniors",
      "Society sports festivals, community box cricket leagues, and badminton cups",
      "Safe, vetted, background-verified coaching personnel within the gated premises"
    ],
    iconName: "Building"
  },
  {
    id: "corporates",
    title: "Corporate Organisations",
    subtitle: "Employee Wellness, Sports Days & Corporate Leagues",
    badge: "Workplace Wellness",
    description: "Energize your workplace through sport. We organize corporate sports tournaments, weekend leagues, stress-busting wellness workshops, and active team-building events.",
    offerings: [
      "Annual Corporate Sports Days and Olympic-style multi-sport tournaments",
      "Inter-departmental and inter-corporate cricket and badminton cups",
      "Desk-worker ergonomic mobility, yoga, and mindfulness sessions",
      "Complete venue booking, live streaming, commentary, and trophies"
    ],
    iconName: "Briefcase"
  }
];

export const EVENT_SUPPORT_SERVICES = [
  {
    title: "Professional Referees & Umpires",
    desc: "Qualified, certified match officials across Cricket, Football, Basketball, Volleyball, and Badminton who uphold strict fair play."
  },
  {
    title: "School Sports Days & Inter-School Meets",
    desc: "Turnkey planning: track marking, equipment rental, order of events, announcer scripts, medals, and podium ceremonies."
  },
  {
    title: "Fixtures, Scheduling & Digital Scorekeeping",
    desc: "Professional tournament bracket formulation, round-robin pool management, tie-breaker rules, and digital live score updates."
  },
  {
    title: "Community & Corporate Sports Events",
    desc: "Engaging, high-energy weekend tournaments with DJ sound setups, hydration stations, first-aid support, and branded merchandise."
  }
];
