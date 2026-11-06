export interface FeaturedConversation {
  id: string;
  guestName: string;
  guestTitle: string;
  guestRoleBadge: string;
  topic: string;
  format: "Video Interview" | "Technical Masterclass" | "Parent Guidance" | "Match Analysis";
  duration: string;
  discussionSummary: string;
  actionableTakeaway: string;
  evidenceDisclaimer: string;
  primaryPlatform: "YouTube" | "Instagram" | "Multi-Platform";
  mediaUrl: string;
}

export const JAVS_INBOX_CHANNEL = {
  channelName: "Jav's Inbox",
  handle: "@JavsInbox",
  youtubeUrl: "https://www.youtube.com/@JavsInbox",
  instagramUrl: "https://instagram.com/javs_inbox",
  host: "Mohammed Javeed (M.Sc., M.P.Ed.)",
  tagline: "Conversations With The People Who Shape The Game",
  description: "Curated by Coach Mohammed Javeed (M.P.Ed.), Jav's Inbox is an editorial interview and sporting podcast platform. Featuring candid, in-depth dialogues with international cricketers, seasoned TNCA league veterans, physical education authorities, and commentators.",
  curationMission: "We believe parents and young athletes deserve authentic, unvarnished guidance from real practitioners who have competed in first-class circuits and international arenas.",
  evidenceDistinctionNotice: "Note: Guest appearances on Jav's Inbox represent independent editorial conversations exploring athletic development. They demonstrate Coach Javeed's proactive engagement with the sporting ecosystem and are distinguished from direct commercial endorsements or academy coaching contracts."
};

export const FEATURED_CONVERSATIONS: FeaturedConversation[] = [
  {
    id: "dayalan-hemalatha-interview",
    guestName: "Dayalan Hemalatha",
    guestTitle: "Indian International Cricketer & Royal Challengers Bengaluru (RCB) / Railways All-Rounder",
    guestRoleBadge: "International Athlete",
    topic: "Handling Pressure, Patience, and Physical Conditioning in Young Athletes",
    format: "Video Interview",
    duration: "Full Video Dialogue",
    discussionSummary: "In this candid discussion hosted by Mohammed Javeed, international cricketer Dayalan Hemalatha (RCB / Team India) explores the emotional pressures aspiring youth athletes face from match scoreboards and parental expectations. She reflects on her climb through domestic cricket, emphasizing that mental patience, core physical stamina, and process consistency far outweigh rushing for early selection.",
    actionableTakeaway: "Key Insight for Parents: Rushing young athletes into high-stakes competitive tournaments before their core physical conditioning and emotional composure are grounded leads to early dropout. Consistent technical routines and patient parental encouragement build durable athletes.",
    evidenceDisclaimer: "Published on Instagram @javs_inbox & YouTube @JavsInbox • Independent Sporting Dialogue",
    primaryPlatform: "Instagram",
    mediaUrl: "https://www.instagram.com/javs_inbox/"
  },
  {
    id: "srinivasan-pace-bowling",
    guestName: "Mr. Srinivasan",
    guestTitle: "Pace Bowling Mentor • Former Colleague of Dav Whatmore • 10+ Yrs TNCA League",
    guestRoleBadge: "Pace Bowling Authority",
    topic: "Pace Bowling Biomechanics, Seam Presentation & Lower-Back Injury Prevention",
    format: "Technical Masterclass",
    duration: "Masterclass Dialogue",
    discussionSummary: "Drawing from more than a decade of TNCA league bowling and his experience collaborating with World Cup-winning coach Dav Whatmore, Mr. Srinivasan dissects fast bowling biomechanics: run-up rhythm, front-foot brace mechanics, shoulder alignment, and eliminating mixed-action flaws that cause adolescent lumbar stress fractures.",
    actionableTakeaway: "Key Insight for Bowlers: Bowling velocity originates in kinetic chain sequencing and core alignment, not strained arm violence. Safe action mechanics must be mastered before increasing weekly bowling volume.",
    evidenceDisclaimer: "Academy Mentor Feature • Jav's Inbox Technical Series",
    primaryPlatform: "YouTube",
    mediaUrl: "https://www.youtube.com/@JavsInbox"
  },
  {
    id: "srivatsan-spin-craft",
    guestName: "Mr. Srivatsan",
    guestTitle: "Spin Bowling Mentor • Thiruvallur District Captain (SS Rajan Trophy) • 15+ Yrs TNCA",
    guestRoleBadge: "Spin Bowling Veteran",
    topic: "The Craft of Flight, Subtle Revolutions & Match Temperament for Spinners",
    format: "Technical Masterclass",
    duration: "Technical Discussion",
    discussionSummary: "With over 15 years in 1st & 2nd division TNCA leagues and district captaincy in the SS Rajan Trophy, Mr. Srivatsan details the tactical patience required in spin bowling. He explains why young spinners should focus on drift, dip, and deceptive trajectory variations rather than flat, darting deliveries.",
    actionableTakeaway: "Key Insight for Spinners: True spin bowling is a game of patience and revs. Developing aerial flight and drift requires strong fingers and repeatable body rotation, which demands years of focused net drills.",
    evidenceDisclaimer: "Academy Mentor Feature • Jav's Inbox Technical Series",
    primaryPlatform: "YouTube",
    mediaUrl: "https://www.youtube.com/@JavsInbox"
  },
  {
    id: "thousif-ahamed-conditioning",
    guestName: "Mr. Thousif Ahamed (A.)",
    guestTitle: "Youth Fitness Mentor • B.P.Ed • AFI Pre Level-1 Athletics Coach • State Technical Official",
    guestRoleBadge: "Athletic Conditioning",
    topic: "Safe Kinetic Chain Loading, Speed Agility & Growth-Plate Protection in Children",
    format: "Parent Guidance",
    duration: "Pedagogy Session",
    discussionSummary: "A grounded conversation on pediatric exercise physiology: growth-plate vulnerabilities, adequate recovery windows, foundational agility, and why children aged 6-12 should master multi-directional motor skills before specialized barbell strength training.",
    actionableTakeaway: "Key Insight for Coaches & Parents: Young bodies adapt during recovery. Workload monitoring against chronological age is critical for long-term athletic health and preventing early burnout.",
    evidenceDisclaimer: "Youth Conditioning Feature • Jav's Inbox Sports Science Series",
    primaryPlatform: "YouTube",
    mediaUrl: "https://www.youtube.com/@JavsInbox"
  },
  {
    id: "muthu-broadcast-commentary",
    guestName: "Muthu",
    guestTitle: "Regional Sports Broadcaster & Grassroots Cricket Commentator",
    guestRoleBadge: "Sports Broadcaster",
    topic: "Grassroots Talent Recognition, Communication on Field & Building Composure",
    format: "Match Analysis",
    duration: "Broadcast Dialogue",
    discussionSummary: "Exploring how young athletes handle on-field pressure when cameras and crowds are watching. Muthu discusses the value of player communication, body language, and sportsmanship during live competition.",
    actionableTakeaway: "Key Insight for Athletes: How you carry yourself between deliveries and how you support teammates defines your character and catches selectors' eyes just as much as technical statistics.",
    evidenceDisclaimer: "Editorial Dialogue • Jav's Inbox Media Series",
    primaryPlatform: "YouTube",
    mediaUrl: "https://www.youtube.com/@JavsInbox"
  }
];
