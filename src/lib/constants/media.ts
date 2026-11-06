import { MediaEpisode } from "@/types";

export const JAVS_INBOX_CHANNEL = {
  channelName: "Jav's Inbox",
  handle: "@JavsInbox",
  youtubeUrl: "https://www.youtube.com/@JavsInbox",
  host: "Mohammed Javeed",
  tagline: "Unfiltered Cricket Conversations, Expert Coach Insights & Grassroots Athlete Guidance",
  description: "Hosted by Coach Mohammed Javeed (Founder of JAV'S Sports Academy), Jav's Inbox is one of Tamil Nadu's most insightful sports and cricket podcast channels. Featuring in-depth conversations with National Cricket Academy (NCA) coaches, Star Sports Tamil commentators, Ranji Trophy stars, and youth development specialists.",
  subscriberHighlight: "Active Sports Community",
  coreTopics: [
    "Guidance for Cricket Parents & Aspiring Youth Athletes",
    "Conversations with NCA & BCCI Certified Coaches",
    "Tactical Match Breakdowns: IPL, CSK, TNPL & International Cricket",
    "Mental Conditioning & Modern Athlete Biomechanics"
  ]
};

export const FEATURED_MEDIA_EPISODES: MediaEpisode[] = [
  {
    id: "ep-1",
    title: "Parent's Role in Youth Cricket: Advice from Top National Coaches",
    category: "NCA Masterclass",
    duration: "42 mins",
    description: "Coach Mohammed Javeed sits down with senior coaches to discuss realistic age milestones, avoiding burnout, choosing the right academies, and building mental resilience in young athletes.",
    youtubeId: "featured-1",
    publishedDate: "Recent Episode",
    viewsOrBadge: "Must Watch for Parents"
  },
  {
    id: "ep-2",
    title: "Modern Bowling Biomechanics: Pace Variations & Injury Prevention",
    category: "Youth Coaching",
    duration: "28 mins",
    description: "An in-depth breakdown of load-up, front-foot plant, and shoulder rotation mechanics to add yards of pace while shielding the lower back and shoulders from stress injuries.",
    youtubeId: "featured-2",
    publishedDate: "Coaching Series",
    viewsOrBadge: "Technical Masterclass"
  },
  {
    id: "ep-3",
    title: "IPL & CSK Tactical Breakdown: Match Strategy & Field Placements",
    category: "Match Analysis",
    duration: "35 mins",
    description: "Analyzing high-pressure death overs execution, matchup analytics between left-arm spin and power hitters, and how elite captains manipulate field angles.",
    youtubeId: "featured-3",
    publishedDate: "Tactical Series",
    viewsOrBadge: "Tactical Breakdown"
  },
  {
    id: "ep-4",
    title: "Grassroots Sports in Tamil Nadu: Building All-Round Champions",
    category: "Podcast",
    duration: "31 mins",
    description: "Why early multi-sport movement programs (Ages 4-7) produce more durable, adaptable athletes than premature single-sport overspecialization.",
    youtubeId: "featured-4",
    publishedDate: "Academy Philosophy",
    viewsOrBadge: "Grassroots Special"
  }
];
