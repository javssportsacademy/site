export interface Testimonial {
  id: string;
  parentName: string;
  childName?: string;
  childAge?: string;
  sport: string;
  hub: "Thiruverkadu Center" | "Prestige Bella Vista" | "Institutional PE";
  quote: string;
  highlight: string;
  verifiedDuration: string;
}

export const APPROVED_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    parentName: "S. Ramanathan",
    childName: "Aditya R.",
    childAge: "Age 11",
    sport: "Cricket Coaching",
    hub: "Thiruverkadu Center",
    quote: "What sets Coach Javeed apart is his focus on fundamental technique and mental composure. He does not push children into dangerous premature competition. Aditya learned proper wicketkeeping stance and batting balance before playing tournament matches. The personal feedback after every session gives us complete confidence.",
    highlight: "Grounded technical foundation without premature tournament pressure",
    verifiedDuration: "Enrolled for 2+ Years"
  },
  {
    id: "test-02",
    parentName: "Priya V.",
    childName: "Diya & Karan",
    childAge: "Ages 6 & 9",
    sport: "Multi-Sport & Physical Conditioning",
    hub: "Prestige Bella Vista",
    quote: "Having JAV'S Academy right inside our residential community at Prestige Bella Vista has been life-changing. Both my children look forward to their evening sessions. The coaches treat every child with patience and respect. Their stamina, agility, and teamwork have visibly improved over the last 18 months.",
    highlight: "Safe, disciplined on-campus coaching with verified coaches",
    verifiedDuration: "Enrolled for 18 Months"
  },
  {
    id: "test-03",
    parentName: "Dr. K. Venkatesh",
    childName: "Naveen V.",
    childAge: "Age 14",
    sport: "Pace Bowling & Conditioning",
    hub: "Thiruverkadu Center",
    quote: "As a doctor, my primary worry was fast bowling injuries in adolescent boys. Coach Javeed and Mr. Srinivasan evaluated Naveen's run-up and corrected a mixed-action flaw that could have caused lumbar stress fractures. Their sports science rigor and workload management are unmatched in Chennai.",
    highlight: "Injury-safe bowling biomechanics and workload management",
    verifiedDuration: "Enrolled for 1 Year"
  },
  {
    id: "test-04",
    parentName: "M. Karthikeyan",
    childName: "Arjun K.",
    childAge: "Age 8",
    sport: "Early Years Movement",
    hub: "Prestige Bella Vista",
    quote: "Coach Javeed's M.P.Ed. background shows in every training drill. Rather than boring repetitive exercises, drills are structured as joyful motor-skill games. Arjun's coordination, balance, and hand-eye speed improved dramatically within the first three months.",
    highlight: "Joyful age-calibrated motor skill development",
    verifiedDuration: "Enrolled for 1 Year"
  }
];
