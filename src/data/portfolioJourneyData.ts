export type TimelineEvent = {
  id: string;
  year: string;
  month?: string;
  title: string;
  subtitle: string;
  description: string;
  category: "achievement" | "leadership" | "milestone" | "growth";
  featured?: boolean;
};

export type ResearchPublication = {
  title: string;
  institution: string;
  period: string;
  abstract: string;
  documentUrl: string;
};

export const JOURNEY_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "achievements", label: "Results" },
  { id: "home-server", label: "Home Server" },
  { id: "research", label: "Research" },
  { id: "why-yzu", label: "Why YZU" },
  { id: "contact", label: "Contact" },
] as const;

export const HERO_CONTENT = {
  name: "Phetklao Champarath",
  roles: [
    "National Programming Runner-Up",
    "Research-Driven Problem Solver",
    "Self-Hosted Infrastructure Builder",
  ],
  mission:
    "Combining national-level competitive programming logic with structured research to architect, deploy, and maintain robust self-hosted infrastructures.",
  school: "Benchama Maharat School",
  program: "International Bachelor Program in Informatics",
};

export const RESEARCH_PUBLICATION: ResearchPublication = {
  title: "Extraction of Chitosan as a Mineral Supplement for Hydroponic Cultivation",
  institution: "Benchama Maharat School (Young Scientist Program)",
  period: "2023 – 2025",
  abstract:
    "Young Scientist Program graduation thesis: controlled extraction of chitosan from crustacean shells and measured its effect on hydroponic crop growth—variables, failures, and iteration before conclusions.",
  documentUrl:
    "https://drive.google.com/file/d/1h-ayyjHN25TA8JK06wV9irEPHMTHhB1d/view?usp=sharing",
};

export const ACHIEVEMENT_TIMELINE: TimelineEvent[] = [
  {
    id: "kk-computing",
    year: "2025",
    month: "August",
    title: "National Programming Competition Runner-Up",
    subtitle: "KKU Computing Fair 2025 · 120+ competitors",
    description:
      "Solved algorithmic problems in C under strict time pressure—my strongest national programming result, proving core computational logic.",
    category: "achievement",
    featured: true, // 🌟 มาร์คไว้เพื่อให้ Card นี้ใหญ่และเด่นที่สุด
  },
  {
    id: "cyber-talent",
    year: "2025",
    month: "August",
    title: "Thailand Cyber Top Talent · National Rank #57",
    subtitle: "National Cyber Security Agency (NCSA) · 518 teams",
    description:
      "Ranked in the top 11% nationwide. Investigated live jeopardy-style challenges across web vulnerabilities, broken authentication, and cryptography under decay-scoring constraints.",
    category: "achievement",
    featured: false,
  },
  {
    id: "bangmod-hackathon",
    year: "2025",
    month: "September",
    title: "BangMod Hackathon · National Top 36 Finalist",
    subtitle: "KMUTT · Top 14% of 252 teams",
    description:
      "Architected advanced data structures and rapid full-stack prototypes under tight hackathon deadlines, validating team collaboration and deployment agility.",
    category: "achievement",
    featured: false,
  },
];

export const ACHIEVEMENT_SUPPORTING =
  "Also ranked nationally in Thailand Cyber TopTalent (#57) and BangMod Hackathon (Top 36).";

export const WHY_YZU_CONTENT = {
  headline: "Why Informatics. Why YZU.",
  paragraphs: [
    "My journey into technology didn't start in a vacuum; it grew out of necessity across diverse environments. Whether it was automating data collection for my biotechnology research, designing IoT environmental monitors, or deploying an operational screening app for healthcare clinics, I realized that writing isolated code wasn't enough. I needed to understand the entire pipeline—how data moves securely from a local sensor or server to a production environment under real-world constraints.",
    "Informatics appeals to me because it bridges this gap between raw code and systems architecture. My hands-on experience building a secure, hybrid-cloud home server ecosystem taught me how to manage networks, secure outbound tunnels, and deploy local open-source AI models. I've learned that technology is most impactful when infrastructure, security, and software align seamlessly to solve critical human problems, like improving clinical triage workflows.",
    "Yuan Ze University's international program is the precise environment where I want to transition from a self-driven builder to a disciplined software engineer. Taiwan's position as a global technology powerhouse, combined with YZU's rigorous curriculum in data and systems computing, matches my ambition. I am ready to bring my background in national competitive programming and practical systems deployment to your global community, and contribute meaningfully from day one.",
  ],
};

export const CONTACT_LINKS = {
  email: "Cakepuarknomsod2@gmail.com",
  github: "https://github.com/Cakepuarknomsod",
  pdfUrl: "/Portfolio.pdf",
  gpax: "3.27",
  ielts: "5.5",
};
