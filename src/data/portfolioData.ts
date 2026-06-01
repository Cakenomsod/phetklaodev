
export interface PersonalInfo {
  name: string;
  nickname: string;
  email: string;
  phone: string;
  github: string;
  instagram: string;
  school: string;
  program: string;
  gpax: string;
  ielts: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  featured?: boolean;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location?: string;
  gpax?: string;
  highlights: string[];
}

export interface PortfolioLink {
  label: string;
  url: string;
}
export interface PortfolioProject {
  id: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  links?: PortfolioLink[];
}

export interface FreelanceEntry {
  id: string;
  client: string;
  title: string;
  period: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  links?: PortfolioLink[];
}


export interface ResearchEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  summary: string;
  language?: string;
  links?: PortfolioLink[];
}

export interface BootcampEntry {
  id: string;
  name: string;
  provider: string;
  period: string;
  summary: string;
  certificateUrl?: string;
}


export interface PortfolioPdf {
  title: string;
  description?: string;
  
  filePath: string;
}

export interface LeadershipEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  bio: string[];
  achievements: Achievement[];
  education: EducationEntry[];
  projects: PortfolioProject[];
  freelance: FreelanceEntry[];
  research: ResearchEntry[];
  bootcamps: BootcampEntry[];
  leadership: LeadershipEntry[];
  researchPdf: PortfolioPdf;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Phetklao Champarath",
    nickname: "Phetklao",
    email: "Cakepuarknomsod2@gmail.com",
    phone: "+66 80-802-6677",
    github: "https://github.com/Cakepuarknomsod",
    instagram: "https://instagram.com/Phxt.klao",
    school: "Benchama Maharat School",
    program: "International Bachelor Program in Informatics",
    gpax: "3.27",
    ielts: "5.5",
  },

  bio: [
    "I'm Phetklao, a developer based in Thailand. My journey didn't start with a rigid plan—it began with pure curiosity. I wanted to understand the mechanics behind keeping servers online and the logic of making game mods behave exactly as intended. That curiosity quickly evolved into countless hours of tinkering, breaking systems, and mastering how to build them back stronger.",
    "Today, I freelance in full-stack web development, building applications with React, Next.js, and Firebase. I also manage a self-hosted home server environment utilizing Docker, Immich, local AI models, and secure network tunnels. I thrive on building software that ships to real users and engineering systems that remain resilient when left unattended.",
    "I'm applying to study Informatics at YZU to elevate this foundational instinct. I want to merge structural software engineering with advanced systems thinking—moving beyond midnight hotfixes to designing, optimizing, and scaling complex technical architectures."
  ],



  achievements: [
    {
      id: "achievement-1",
      title: "Verified Full-Stack & IoT Freelance Developer at Fastwork.co",
      issuer: "Fastwork.co (Thailand's Leading Freelance Platform)",
      date: "2024 - Present",
      description: "Delivered production-ready web applications and hardware/IoT integration solutions for diverse clients, achieving a perfect 5/5 star rating.",
      featured: true,
    },
    {
      id: "achievement-2",
      title: "National 2nd Runner-up — Computing Fair 2025",
      issuer: "College of Computing, Khon Kaen University",
      date: "August 19, 2025",
      description: "Awarded 3rd place nationwide in the High School Computer Programming Competition, competing individually against 120+ programmers.",
      featured: true,
    },
    {
      id: "achievement-3",
      title: "National Finalist (Top 36 Teams) — BangMod Hackathon 2025",
      issuer: "Computer Engineering, KMUTT",
      date: "September 20, 2025",
      description: "Top 14% out of 252 teams nationwide. Developed and pitched a rapid tech prototype under high-pressure constraints.",
      featured: true,
    },
    {
      id: "achievement-4",
      title: "National Rank #57 (Out of 518 Teams) — Thailand Cyber TopTalent 2025",
      issuer: "National Cyber Security Agency (NCSA)",
      date: "August 30, 2025",
      description: "Top 11% nationally. Competed in national Capture the Flag (CTF) cybersecurity challenges, demonstrating strong network and data security logic.",
      featured: false,
    }
  ],

  education: [
    {
      id: "education-1",
      institution: "Benchama Maharat School",
      degree: "Upper Secondary Level (Young Scientist Program - YSP)",
      period: "2023 – 2025",
      location: "Ubon Ratchathani, Thailand",
      gpax: "3.27",
      highlights: [
        "Intensive Science & Mathematics Curriculum",
        "IELTS Overall Score: 5.5 (Listening 6.5 | Reading 5.5 | Writing 5.5 | Speaking 4.5)"
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Al-Powered Finance & Trip Tracker Web App",
      period: "2026",
      role: "Solo Developer",
      summary: "Full-stack web application for personal finance and group expense management featuring an AI-driven pipeline, OCR parsing, and debt settlement engine.",
      techStack: ["React (Next.js)", "Firebase", "Gemini API", "Immich"],
      highlights: [
        "Integrated Gemini LLM with Zod schemas for text-to-JSON automated receipt OCR parsing.",
        "Implemented a Greedy Minimum Transfer Algorithm to calculate and minimize peer-to-peer debt transfers."
      ],
    },
    {
      id: "project-2",
      title: "Hybrid-Cloud Home Server & Secure Infrastructure Project",
      period: "2026",
      role: "System Administrator",
      summary: "Engineered a secure, isolated home server infrastructure that bridges local microservices with public cloud ecosystems dynamically.",
      techStack: ["Node.js", "Docker", "Cloudflare Tunnel", "LM Studio (Gemma-2B)", "Immich", "Firestore"],
      highlights: [
        "Deployed a local Gemma-2B LLM via LM Studio as an offline, privacy-centric data parser.",
        "Built an asynchronous Node.js script to provision portless Cloudflare Tunnels and dynamically update live routing registries."
      ],
    }
  ],

  freelance: [
    {
      id: "freelance-1",
      client: "Commercial Client (Fastwork)",
      title: "Medical Thai-Chinese Vocabulary & Patient Screening Web App",
      period: "2026",
      summary: "Developed a cross-lingual patient screening and medical vocabulary web app for 11 departments to accelerate triage workflows.",
      techStack: ["React 19", "Firebase", "Python (Edge-TTS)"],
      highlights: [
        "Implemented React 19 and Vite for high-performance frontend interfaces.",
        "Integrated a custom Python script to automate AI-generated bilingual audio card rendering for clinical use cases."
      ],
    },
    {
      id: "freelance-2",
      client: "Commercial Client (Fastwork)",
      title: "Research-Backed IoT Study Environment Monitor",
      period: "2026",
      summary: "Built an embedded monitor that evaluates ambient study conditions, providing instant visual feedback on environment quality.",
      techStack: ["Arduino (C++)", "Hardware Sensors (LDR, Sound, DHT11)"],
      highlights: [
        "Programmed an Arduino MCU to ingest light, sound, and climate telemetry data.",
        "Utilized an embedded threshold algorithm calibrated against established research standards via a tri-color LED array."
      ],
    }
  ],

  research: [
    {
      id: "research-1",
      title: "Extraction of Chitosan as a Mineral Supplement for Hydroponic Cultivation",
      institution: "Benchama Maharat School (Young Scientist Program)",
      period: "2023 – 2025",
      summary: "Conducted experimental research focusing on the chemical extraction of chitosan from golden apple snail, shrimp, and crab shells to develop sustainable organic fluid for hydroponic systems.",
      language: "Thai",
    },
  ],

  researchPdf: {
    title: "Research Paper (Thai)",
    description:
      "Full report: extraction of chitosan from golden apple snail, shrimp, and crab shells for hydroponic mineral supplementation.",
    filePath: "/research-chitosan-hydroponics.pdf",
  },

  bootcamps: [
    {
      id: "bootcamp-1",
      name: "Olympic Academic Training POSN Computer Camp 1",
      provider: "The Promotion of Olympic Science and Technology Olympiad Foundation (POSN)",
      period: "October 5–20, 2024",
      summary: "Selected for the prestigious POSN program, focusing on Advanced Algorithms and Data Structures. Built a solid foundation in core computer science using C++.",
    },
    {
      id: "bootcamp-2",
      name: "IT Camp 21 — Web Track",
      provider: "School of Information Technology, KMITL",
      period: "April 28 – May 1, 2025",
      summary: "Screened and selected for an intensive IT bootcamp. Collaborated within a team to develop a competitive web project using the React ecosystem.",
    },
    {
      id: "bootcamp-3",
      name: "Regional Proposal Finalist — Coding For Better Life 2024",
      provider: "Digital Economy Promotion Agency (depa)",
      period: "July 11–12, 2024",
      summary: "Developed a research-backed Heat Stroke Risk Assessment System. Integrated micro:bit IoT sensors with AIThaiGen for automated, real-time climate analysis.",
    },
    {
      id: "bootcamp-4",
      name: "Cybersecurity CTF Bootcamp",
      provider: "National Cyber Security Agency (NCSA)",
      period: "2025",
      summary: "Completed an intensive 3-day practical training workshop focusing on industry-standard security frameworks and modern cybersecurity career pathways.",
    }
  ],

  leadership: [
    {
      id: "leadership-1",
      role: "Official Campus Photographer & Videographer",
      organization: "School Photography Club",
      period: "2023 - Present (3 Years)",
      summary: "Selected as the official campus media lead, spearheading visual documentation and high-quality visual content distribution for high-profile institutional events.",
      highlights: [
        "Managed visual asset production for Teacher's Day, Founder's Day (King Rama V Ceremony), and major student assemblies.",
        "Published assets directly on the school's official PR platform and photography club channels."
      ],
    },
    {
      id: "leadership-2",
      role: "Student Council Officer",
      organization: "Student Council Executive Committee",
      period: "2024 - 2025 (1 Year)",
      summary: "Co-orchestrated large-scale regional events and served as an administrative liaison between the Student Council and the School Principal.",
      highlights: [
        "Managed dynamic on-site logistics, crowd control, and parade workflows for regional joint sports events.",
        "Handled on-site stage configuration and administrative duties for student orientations."
      ],
    },
    {
      id: "leadership-3",
      role: "Academic & Recreational Volunteer Camp",
      organization: "Benchama Maharat School & 22nd Border Patrol Police Subdivision",
      period: "March 2024",
      summary: "Designed and facilitated interactive learning stations and educational games for underprivileged students at a rural Border Patrol Police school.",
      highlights: [
        "Leveraged teamwork and creative problem-solving within the Student Council to build an inclusive environment.",
        "Bridged communication gaps and engaged effectively with young learners."
      ],
    },
    {
      id: "leadership-4",
      role: "Royal-Initiative Sister School Volunteer Camp & Fundraising",
      organization: "Under the Royal Initiative of HRH Princess Maha Chakri Sirindhorn",
      period: "July 2024",
      summary: "Co-led a self-funded grassroots initiative to raise funds for event hosting and donations for remote student communities.",
      highlights: [
        "Raised 100% of event funds by selling homemade pastries and performing live music at local markets.",
        "Maximized time and resources through strategic planning to transform efforts into tangible educational donations."
      ],
    },
    {
      id: "leadership-5",
      role: "Clinical Internship",
      organization: "Warin Chamrap Hospital (OPD, ER, & Triage Unit)",
      period: "March 2024",
      summary: "Observed and assisted in fast-paced clinical environments to understand initial patient assessment workflows.",
      highlights: [
        "Gained clinical exposure within general OPD, patient screening/triage, and the Emergency Room (ER).",
        "Developed strong healthcare communication skills emphasizing empathy and structured medical operations."
      ],
    },
    {
      id: "leadership-6",
      role: "Clinical Internship",
      organization: "Sunpasitthiprasong Hospital (OPD-1 & Urology Surgical Ward)",
      period: "March 2025",
      summary: "Gained foundational knowledge in nursing care, patient monitoring, and public healthcare systems.",
      highlights: [
        "Monitored patient telemetry and basic medical equipment utilization within a specialized Urology Surgical Ward.",
        "Practiced effective interdisciplinary communication and rigorous responsibility with the medical team."
      ],
    }
  ],
};