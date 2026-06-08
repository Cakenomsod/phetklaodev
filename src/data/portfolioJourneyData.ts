import { portfolioData } from "@/src/data/portfolioData";

export type IdentityPillar = {
  id: string;
  label: string;
  headline: string;
  narrative: string;
  evidence: string;
};

export type ImpactMetric = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

export type FeaturedProjectTier = "a" | "b";

export type FeaturedProject = {
  id: string;
  tier: FeaturedProjectTier;
  title: string;
  tagline: string;
  period: string;
  role: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  showcaseHref?: string;
  liveUrl?: string;
  githubUrl?: string;
  accent: "blue" | "slate" | "violet";
};

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
  authors: string;
  abstract: string;
  methodology: string[];
  findings: string[];
  impact: string[];
  documentUrl: string;
};

export const JOURNEY_NAV = [
  { id: "intro", label: "Introduction" },
  { id: "home-server", label: "Home Server" },
  { id: "achievements", label: "Results" },
  { id: "research", label: "Research" },
  { id: "why-yzu", label: "Why YZU" },
  { id: "contact", label: "Contact" },
] as const;

export const HERO_CONTENT = {
  name: portfolioData.personal.name,
  nickname: portfolioData.personal.nickname,
  roles: ["Systems Builder", "National Competitor", "Researcher"],
  mission:
    "Self-hosted infrastructure. National programming and cybersecurity results. Research-grade problem solving before I write code.",
  school: portfolioData.personal.school,
  program: portfolioData.personal.program,
};

export const IDENTITY_PILLARS: IdentityPillar[] = [
  {
    id: "developer",
    label: "Developer",
    headline: "I start with the problem, not the framework.",
    narrative:
      "My Finance Tracker began with mapping how my friends actually split travel costs—not with React components. Freelance clients taught me to translate vague briefs into working products. I write code only after I understand what I'm building and why.",
    evidence: "5/5 Fastwork rating · Full-stack deployments · IoT builds",
  },
  {
    id: "researcher",
    label: "Researcher",
    headline: "I learned rigor before I learned recursion.",
    narrative:
      "In the Young Scientist Program, I designed experiments to extract chitosan from crustacean shells for hydroponics. Controlling variables, documenting failures, and iterating on methodology taught me the same structured thinking I now apply to system design.",
    evidence: "Graduation thesis · Controlled experiments · Published findings",
  },
  {
    id: "competitor",
    label: "Competitor",
    headline: "Rejection became my syllabus.",
    narrative:
      "I failed POSN Camp 1 and was rejected from IT Camp 20. I treated both as lists of things I didn't know yet. A year of self-study in algorithms, C++, Python, and JavaScript led to IT Camp 21—and national rankings in programming and cybersecurity.",
    evidence: "National Top 36 · 2nd Runner-Up KK Computing · Cyber Top 57",
  },
  {
    id: "builder",
    label: "Builder",
    headline: "I ship things people actually use.",
    narrative:
      "An anonymous messaging platform for my school's traditional event was the first time I watched strangers interact with something I made. Today I run a home server ecosystem, deploy finance apps, and deliver commercial healthcare software across 11 departments.",
    evidence: "Home server · Healthcare app · School event platform",
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "projects",
    value: 8,
    label: "Projects built",
    description: "Full-stack apps, infrastructure, IoT, and research prototypes",
  },
  {
    id: "research",
    value: 1,
    label: "Research conducted",
    description: "Graduation thesis with experimental methodology",
  },
  {
    id: "competitions",
    value: 6,
    label: "Competitions",
    description: "National programming, cybersecurity, and hackathon events",
  },
  {
    id: "leadership",
    value: 6,
    label: "Leadership activities",
    description: "Student council, media lead, volunteer camps, clinical exposure",
  },
  {
    id: "experience",
    value: 3,
    suffix: "+",
    label: "Years building",
    description: "From first HTML at twelve to commercial freelance at eighteen",
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "home-server",
    tier: "a",
    title: "Hybrid-Cloud Home Server Ecosystem",
    tagline: "Secure infrastructure without exposed ports",
    period: "2026",
    role: "System Administrator",
    summary:
      "A self-hosted ecosystem bridging local microservices with cloud registries—dynamic Cloudflare Tunnels, Firestore sync, local AI, and Immich media.",
    techStack: ["Node.js", "Docker", "Cloudflare Tunnel", "LM Studio", "Immich", "Firestore"],
    highlights: [
      "Zero inbound ports via outbound-only Cloudflare Tunnels",
      "Boot-time Node.js orchestrator writes live URLs to Firestore",
      "Local Gemma-2B for privacy-centric receipt parsing",
    ],
    showcaseHref: "/projects/home-server",
    accent: "slate",
  },
  {
    id: "research",
    tier: "a",
    title: "Chitosan Extraction for Hydroponics",
    tagline: "Graduation research thesis",
    period: "2023 – 2025",
    role: "Principal Investigator",
    summary:
      "Experimental thesis on extracting chitosan from golden apple snail, shrimp, and crab shells as an organic mineral supplement for hydroponic systems.",
    techStack: ["Experimental Design", "Chemical Extraction", "Hydroponics", "Data Analysis"],
    highlights: [
      "Controlled variable methodology across shell sources",
      "Quantitative verification on hydroponic crop growth",
      "Presented in English and Thai",
    ],
    accent: "violet",
  },
  {
    id: "finance",
    tier: "a",
    title: "AI-Powered Finance & Trip Tracker",
    tagline: "Group expenses, solved properly",
    period: "2026",
    role: "Solo Developer",
    summary:
      "Full-stack expense management with AI-driven receipt parsing, self-hosted media, and a greedy minimum-transfer settlement engine.",
    techStack: ["Next.js", "Firebase", "Gemini API", "Immich", "Zod"],
    highlights: [
      "Gemini + Zod pipeline with regex pre-parsing to cut token costs",
      "Greedy algorithm minimizes peer-to-peer debt transfers",
      "Self-hosted Immich for receipt privacy",
    ],
    showcaseHref: "/projects/finance-tracker",
    liveUrl: "https://financetracker-pk.web.app/",
    githubUrl: "https://github.com/Cakepuarknomsod",
    accent: "blue",
  },
  {
    id: "portfolio",
    tier: "b",
    title: "Portfolio & Freelance Platform",
    tagline: "Production CMS hub",
    period: "2026",
    role: "Solo Developer",
    summary: "Central hub with custom admin CMS and real-time Firestore CRUD.",
    techStack: ["React", "Firebase", "Admin CMS"],
    highlights: ["Dynamic portfolio updates", "Full CRUD through Firestore"],
    liveUrl: "https://pkfreelancebs.web.app/",
    accent: "blue",
  },
  {
    id: "healthcare",
    tier: "b",
    title: "Medical Thai-Chinese Screening App",
    tagline: "Healthcare freelance",
    period: "2026",
    role: "Lead Developer",
    summary: "Cross-lingual patient screening deployed across 11 hospital departments.",
    techStack: ["React 19", "Vite", "Firebase", "Python Edge-TTS"],
    highlights: ["Bilingual audio cards", "Clinical triage workflow"],
    accent: "blue",
  },
  {
    id: "iot-monitor",
    tier: "b",
    title: "IoT Study Environment Monitor",
    tagline: "Research-backed hardware",
    period: "2026",
    role: "Embedded Developer",
    summary: "Arduino-based ambient monitor with tri-color LED health indicators.",
    techStack: ["Arduino", "DHT11", "LDR", "Embedded Logic"],
    highlights: ["Real-time telemetry", "Research-calibrated thresholds"],
    accent: "slate",
  },
];

export const RESEARCH_PUBLICATION: ResearchPublication = {
  title: portfolioData.research[0].title,
  institution: portfolioData.research[0].institution,
  period: portfolioData.research[0].period,
  authors: `${portfolioData.personal.name}`,
  abstract:
    "This graduation thesis investigates the chemical extraction of chitosan from golden apple snail, shrimp, and crab shells to develop an organic, sustainable mineral supplement fluid for hydroponic farming systems. The study compares extraction yields across shell sources and evaluates the supplement's effect on hydroponic crop growth under controlled conditions.",
  methodology: [
    "Isolated chitosan through standardized chemical extraction protocols across three organic shell sources",
    "Controlled hydroponic growth chambers with consistent nutrient baselines and lighting cycles",
    "Measured mineral uptake and plant growth metrics across treatment and control groups",
    "Documented extraction efficiency, pH stability, and supplement concentration gradients",
  ],
  findings: [
    "Successfully produced viable chitosan supplement fluid from multiple crustacean and mollusk shell sources",
    "Demonstrated measurable impact on hydroponic crop mineral absorption compared to baseline nutrients",
    "Identified optimal extraction parameters for yield consistency across batch preparations",
    "Validated the supplement as a sustainable alternative to synthetic mineral additives",
  ],
  impact: [
    "Completed as graduation thesis in the Young Scientist Program—demonstrating interdisciplinary science capability",
    "Established foundation for structured experimental thinking applied later in software system design",
    "Presented findings in both English and Thai, building academic communication skills",
  ],
  documentUrl: portfolioData.researchPdf.filePath,
};

export const LEADERSHIP_TIMELINE: TimelineEvent[] = [
  {
    id: "photo-lead",
    year: "2023",
    month: "Present",
    title: "Campus Photographer & Videographer",
    subtitle: "School Photography Club",
    description:
      "Official media lead for institutional events—Teacher's Day, Founder's Day ceremonies, and major assemblies. Managed visual content for school PR platforms.",
    category: "leadership",
  },
  {
    id: "volunteer-border",
    year: "2024",
    month: "March",
    title: "Sister School Volunteer Camp",
    subtitle: "22nd Border Patrol Police Subdivision",
    description:
      "Designed learning stations and educational games for underprivileged students at a rural Border Patrol Police school.",
    category: "leadership",
  },
  {
    id: "clinical-1",
    year: "2024",
    month: "March",
    title: "Clinical Internship",
    subtitle: "Warin Chamrap Hospital",
    description:
      "Observed OPD, triage, and emergency room workflows—developing structured healthcare communication under pressure.",
    category: "growth",
  },
  {
    id: "coding-life",
    year: "2024",
    month: "July",
    title: "Regional Finalist — Coding For Better Life",
    subtitle: "depa Innovation Track",
    description:
      "Advanced to regional finals with a Heat Stroke Risk Assessment System integrating micro:bit telemetry and AIThaiGen algorithms.",
    category: "milestone",
  },
  {
    id: "royal-volunteer",
    year: "2024",
    month: "July",
    title: "Royal-Initiative Volunteer & Fundraising",
    subtitle: "HRH Princess Sirindhorn Initiative",
    description:
      "Co-led grassroots fundraising through live music and pastry sales—raising 100% of hosting and donation funds for remote student communities.",
    category: "leadership",
  },
  {
    id: "student-council",
    year: "2024",
    month: "2025",
    title: "Student Council Officer",
    subtitle: "Executive Committee",
    description:
      "Co-orchestrated cross-school sports events, orientation logistics, stage management, and liaison with the School Principal.",
    category: "leadership",
    featured: true,
  },
  {
    id: "clinical-2",
    year: "2025",
    month: "March",
    title: "Clinical Internship",
    subtitle: "Sunpasitthiprasong Hospital",
    description:
      "Nursing exposure in OPD-1 and urology surgical ward—patient monitoring, clinical safety, and interdisciplinary coordination.",
    category: "growth",
  },
];

export const ACHIEVEMENT_TIMELINE: TimelineEvent[] = [
  {
    id: "kk-computing",
    year: "2025",
    month: "August",
    title: "National 2nd Runner-Up",
    subtitle: "KKU Computing Fair 2025",
    description:
      "Competed individually against 120+ programmers. Solved complex algorithmic problems in C under intense time constraints.",
    category: "achievement",
    featured: true,
  },
  {
    id: "cyber-talent",
    year: "2025",
    month: "August",
    title: "National Rank #57",
    subtitle: "Thailand Cyber TopTalent",
    description:
      "Top 11% nationally among 518 teams. Tackled live cryptographic and vulnerability analysis challenges.",
    category: "achievement",
    featured: true,
  },
  {
    id: "bangmod",
    year: "2025",
    month: "September",
    title: "National Finalist — Top 36",
    subtitle: "BangMod Hackathon, KMUTT",
    description:
      "Top 14% of 252 teams nationwide. Designed advanced data structures under strict time constraints.",
    category: "achievement",
    featured: true,
  },
];

export const WHY_YZU_CONTENT = {
  headline: "Why Informatics. Why YZU. Why now.",
  paragraphs: [
    "I care about how systems fit together—infrastructure, data, interfaces, and AI running where the software actually lives. Self-hosting and local models taught me that engineering matters most under real constraints.",
    "YZU's international program is where I want to move from self-taught building to disciplined Informatics—with peers from different backgrounds, in Taiwan's technology ecosystem.",
  ],
  goals: [
    "Deepen systems thinking through structured Informatics coursework",
    "Bridge self-taught engineering with academic rigor",
  ],
};

export const CONTACT_LINKS = {
  email: portfolioData.personal.email,
  phone: portfolioData.personal.phone,
  github: portfolioData.personal.github,
  instagram: portfolioData.personal.instagram,
  pdfUrl: "/Portfolio.pdf",
  gpax: portfolioData.personal.gpax,
  ielts: portfolioData.personal.ielts,
};
