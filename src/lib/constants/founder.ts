export interface FounderTimelineMilestone {
  year: string;
  title: string;
  category: "Competitive League" | "Academic Degree" | "Elite Certification" | "Academy Expansion" | "Broadcast Media";
  description: string;
  evidenceProof: string;
}

export interface MediaAppearance {
  outlet: string;
  title: string;
  description: string;
  role: string;
  url: string;
  badge: string;
  platform: string;
}

export const FOUNDER_TIMELINE: FounderTimelineMilestone[] = [
  {
    year: "2012 – Present",
    title: "Competitive League Play: TNCA & TDCA Divisions",
    category: "Competitive League",
    description: "Competed for over 10 consecutive seasons as a front-line wicketkeeper-batsman across Tamil Nadu Cricket Association (TNCA) lower and middle division leagues and Thiruvallur District Cricket Association (TDCA) competitive tournaments.",
    evidenceProof: "10+ Years active player registration in TNCA & TDCA leagues"
  },
  {
    year: "2016 – 2018",
    title: "Dual Academic Excellence: M.Sc. (CS) & M.P.Ed.",
    category: "Academic Degree",
    description: "Completed Master of Physical Education (M.P.Ed.) focusing on motor learning, exercise physiology, and youth sports pedagogy, alongside Master of Science in Computer Science (M.Sc.) for computational performance and biomechanical video analysis.",
    evidenceProof: "Accredited University Degrees in Physical Education & Computer Science"
  },
  {
    year: "2019 – 2020",
    title: "Elite Coaching Certifications: MSDCA & Coaching Beyond",
    category: "Elite Certification",
    description: "Completed specialized coaching qualifications at the MS Dhoni Cricket Academy (MSDCA) and Coaching Beyond, mastering modern drills, player safety protocols, and age-calibrated talent development.",
    evidenceProof: "Verified MSDCA & Coaching Beyond Certified Coach credentials"
  },
  {
    year: "2021",
    title: "Founding JAV'S Sports Academy & Chennai Training Hubs",
    category: "Academy Expansion",
    description: "Founded JAV'S Sports Academy with a mandate to replace casual coaching with structured, accountable physical education. Established flagship centers at Thiruverkadu and an on-campus community sports hub at Prestige Bella Vista (Iyyappanthangal).",
    evidenceProof: "2 Active Coaching Centers with 500+ mentored children"
  },
  {
    year: "2023 – Present",
    title: "Launch of JAV'S Inbox & Broadcast Media Engagements",
    category: "Broadcast Media",
    description: "Launched 'Jav's Inbox', conducting candid high-performance dialogues with international cricketers (e.g. Dayalan Hemalatha), senior NCA mentors, and biomechanics doctors to educate parents and young athletes on athletic longevity.",
    evidenceProof: "Active broadcast channel @JavsInbox across YouTube & Instagram"
  }
];

export const FOUNDER_MEDIA_APPEARANCES: MediaAppearance[] = [
  {
    outlet: "Behindwoods Sports",
    title: "Cricket Expert Commentary & Match Analysis",
    description: "Featured guest expert analyzing modern international cricket strategies, pressure management in tournament play, and batting biomechanics for digital audiences.",
    role: "Guest Cricket Analyst",
    url: "https://www.youtube.com/@JavsInbox",
    badge: "Digital Broadcast",
    platform: "Behindwoods Digital"
  },
  {
    outlet: "Raj TV",
    title: "Television Panelist on Youth Cricket & Talent Pathways",
    description: "Live television broadcast discussion analyzing Tamil Nadu youth cricket tournament structures, grassroots talent identification, and physical conditioning standards.",
    role: "Television Sports Analyst",
    url: "https://www.youtube.com/@JavsInbox",
    badge: "Television Network",
    platform: "Raj Television Network"
  },
  {
    outlet: "All In All Sportz",
    title: "Grassroots Athletic Pedagogy & Physical Education",
    description: "In-depth podcast dialogue exploring why structured physical education curriculums in schools and residential academies must supersede unscientific casual coaching.",
    role: "Sports Education Keynote",
    url: "https://www.youtube.com/@JavsInbox",
    badge: "Sports Media Feature",
    platform: "All in All Sportz"
  }
];

export const FOUNDER_DATA = {
  name: "Mohammed Javeed",
  role: "Founder & Director of Operations",
  qualifications: "M.Sc. Computer Science | M.P.Ed. (Master of Physical Education)",
  experienceYears: "10+ Years",
  playingBackground: "10+ Years as Wicketkeeper-Batsman in TNCA & TDCA Leagues",
  childrenCoached: "500+ Children Coached",
  certifications: [
    {
      title: "MS Dhoni Cricket Academy (MSDCA)",
      desc: "Certified Cricket Coach with training in high-performance grassroots mentorship and modern drill sequencing."
    },
    {
      title: "Coaching Beyond Certified",
      desc: "Specialized coaching certification in modern athletic biomechanics, workload regulation, and match temperament."
    },
    {
      title: "Master of Physical Education (M.P.Ed.)",
      desc: "Postgraduate degree in physical education, pedagogy, exercise physiology, kinesiology, and sports psychology."
    },
    {
      title: "M.Sc. Computer Science",
      desc: "Analytical approach applied to player performance data, video frame analysis, and modern kinetic metrics."
    }
  ],
  mediaAppearances: FOUNDER_MEDIA_APPEARANCES,
  timeline: FOUNDER_TIMELINE,
  bio: "Mohammed Javeed is a qualified sports and physical education professional with over a decade of combined experience as a competitive league cricketer, certified academy mentor, and athletic director. Holding dual postgraduate degrees in Computer Science (M.Sc.) and Physical Education (M.P.Ed.), he bridges scientific training rigor with practical field mastery.",
  extendedBio: "A dedicated wicketkeeper-batsman with over 10 years playing in the Tamil Nadu Cricket Association (TNCA) and Thiruvallur District Cricket Association (TDCA) leagues, Coach Javeed has coached over 500 children across schools, sports academies, and competitive squads. Certified by MS Dhoni Cricket Academy (MSDCA) and Coaching Beyond, he also hosts the widely acclaimed sports conversation platform 'Jav's Inbox', engaging international players, NCA coaches, and sports doctors in sustained dialogue to democratize sporting knowledge for young athletes and parents.",
  philosophy: "We develop people through sport, not just players for the game.",
  philosophyContext: "Every session is an opportunity to build discipline, confidence, teamwork, resilience, and a growth mindset.",
  evidenceDistinction: {
    interviews: "Independent conversations with prominent sporting figures (e.g. Dayalan Hemalatha, NCA Coaches) demonstrating sustained ecosystem learning.",
    network: "Verified professional affiliations and certifications through MSDCA, Coaching Beyond, and TNCA/TDCA.",
    academy: "Direct training delivery conducted across our operating centers in Thiruverkadu and Prestige Bella Vista."
  }
};
