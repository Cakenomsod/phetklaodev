
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
  badge?: string;
  featured?: boolean;
  media?: string | string[];
  mediaAlt?: string;
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
  badge?: string;
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
  badge?: string;
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

export interface SelectiveProgramEntry {
  id: string;
  name: string;
  provider: string;
  period: string;
  summary: string;
  highlights: string[];
  badge?: string;
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
  selectivePrograms: SelectiveProgramEntry[];
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
    ielts: "5.5", // เก็บเป็น string ตามโครงสร้าง interface หลักของคุณ
  },

  bio: [
    "My interest in computer science began with an accidental keypress. In sixth grade, I pressed F12 on my first computer, unexpectedly opening the browser's Developer Tools. Incomprehensible as it was, the idea that websites had a hidden layer most people never see caught me completely. My father and I used to take apart toys to see how they worked. I was doing the same thing digitally. By twelve, I was teaching myself HTML and CSS.",
    "At Benchama Maharat School, I joined the Young Scientist Program and conducted my graduation thesis on extracting chitosan for hydroponics. Designing experiments, controlling variables, and figuring out why results didn't match expectations taught me structured problem-solving for the first time. I noticed the same instinct carry over in code. Before touching the keyboard, I needed to understand what I was actually building and why.",
    "I failed to advance past POSN Computer Olympiad Camp 1 and was rejected from IT Camp 20. I treated both as a syllabus, a list of things I didn't know yet. Over the next year I studied algorithms, C++, Python, and JavaScript on my own before earning admission to IT Camp 21. I also built an anonymous messaging platform for my school's traditional event, the first time I saw people actually use something I'd made.",
    "I earned 2nd Runner-up at the Khon Kaen University Computing Fair 2025, reached the National Top 36 at BangMod Hackathon 2025, and ranked 57th out of 518 teams in Thailand Cyber Top Talent 2025. At eighteen, I started taking freelance projects on Fastwork, full-stack applications, database systems, and IoT builds, translating vague client briefs into working products.",
    "One project I keep coming back to is a Finance Tracker I built to manage shared travel expenses. The existing tools didn't fit how my group actually tracked money, so I built one from scratch with AI-powered transaction classification. Most of the work happened before writing any code, mapping out how people actually split costs, what made existing apps frustrating. The coding part came later, and it was easier because of it."
  ],

  achievements: [
    {
      id: "ach-1",
      title: "National 2nd Runner-Up — High School Computer Programming Competition",
      issuer: "College of Computing, Khon Kaen University (Computing Fair 2025)",
      date: "August 19, 2025",
      badge: "National Ranking",
      description: "Competed individually against 120+ programmers nationwide. Solved complex algorithmic and data structure problems using C under intense time constraints, demonstrating advanced logical reasoning and systematic system design.",
      featured: true
    },
    {
      id: "ach-2",
      title: "National Rank #57 (Top 11% nationally) — Thailand Cyber TopTalent 2025",
      issuer: "National Cyber Security Agency (NCSA)",
      date: "August 30, 2025",
      badge: "Cyber Security",
      description: "Participated in Thailand's premier national cybersecurity championship (57 of 518 Teams). Tackled complex live security challenges including cryptographic and vulnerability analysis under strict time limits.",
      featured: true
    },
    {
      id: "ach-3",
      title: "National Finalist (Top 36 Teams) — BangMod Hackathon 2025",
      issuer: "Computer Engineering, King Mongkut's University of Technology Thonburi (KMUTT)",
      date: "September 20, 2025",
      badge: "National Finalist",
      description: "Selected as a national finalist team (Top 14% out of 252 teams nationwide). Collaborated in a fast-paced environment to design advanced data structures and algorithmic solutions under strict time constraints.",
      featured: true
    }
  ],

  education: [
    {
      id: "edu-1",
      institution: "Benchama Maharat School",
      degree: "Upper Secondary Level — Young Scientist Program (YSP)",
      period: "2023 – 2025",
      location: "Ubon Ratchathani, Thailand",
      gpax: "3.27",
      highlights: [
        "Intensive Science & Mathematics Curriculum",
        "IELTS Academic Band Score: 5.5 (Listening: 6.5 | Reading: 5.5 | Writing: 5.5 | Speaking: 4.5)"
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "AI-Powered Finance & Trip Tracker Web App",
      period: "2026",
      role: "Solo Developer",
      badge: "Featured Project",
      summary: "Developed and deployed a full-stack web application for personal finance and group expense management featuring an AI-driven pipeline and optimized settlement engine.",
      techStack: ["Next.js (React 19)", "Cloud Firestore", "Firebase Auth", "Gemini API", "Immich API"],
      highlights: [
        "Full-Stack Architecture: Built a highly responsive client ecosystem featuring secure Google OAuth and isolated server-side API routing.",
        "AI Pipeline & Schema Validation: Integrated Gemini LLM using strict JSON schemas for structured text-to-JSON parsing, optimized with regex pre-parsing to reduce token footprints.",
        "On-Premise Media Storage: Connected a self-hosted Immich server to handle receipt attachments locally, ensuring absolute financial data privacy.",
        "Algorithmic Debt Settlement: Implemented a Greedy Minimum Transfer Algorithm to calculate net balances and dynamically minimize peer-to-peer transaction overhead."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Cakepuarknomsod" },
        { label: "Live Demo", url: "https://financetracker-pk.web.app/" }
      ]
    },
    {
      id: "proj-2",
      title: "Hybrid-Cloud Home Server & Secure Infrastructure Project",
      period: "2026",
      role: "System Administrator",
      badge: "Infrastructure",
      summary: "Engineered a secure, isolated home server infrastructure that bridges local microservices with public cloud ecosystems seamlessly.",
      techStack: ["Node.js", "Docker", "Cloudflare Tunnel", "LM Studio (Gemma-2B)", "Immich", "Cloud Firestore"],
      highlights: [
        "Edge AI & Inference Cost Efficiency: Deployed a local Gemma-2B LLM via LM Studio to handle privacy-sensitive data parsing, completely bypassing per-request cloud API costs.",
        "Automated Dynamic Tunneling: Developed an asynchronous Node.js orchestrator to provision portless Cloudflare Tunnels at system boot, automatically syncing live ingress URLs to a Firestore registry.",
        "Smart Media Ecosystem: Provisioned a secure on-premise Immich instance utilizing CLIP machine learning models for localized, intelligence-driven smart media searching."
      ]
    },
    {
      id: "proj-3",
      title: "Personal Portfolio & Freelance Showcase Platform",
      period: "2026",
      role: "Solo Developer",
      badge: "Full-Stack",
      summary: "Developed a production-ready central hub to showcase engineering services, commercial freelance projects, and professional capabilities.",
      techStack: ["React", "Firebase Hosting", "Cloud Firestore"],
      highlights: [
        "Architected a secure, custom Admin Content Management System (CMS) panel allowing dynamic, real-time portfolio data updates.",
        "Implemented full CRUD operations running directly through Firebase Firestore for seamless, low-latency state synchronization."
      ],
      links: [
        { label: "Live Demo", url: "https://pkfreelancebs.web.app/" }
      ]
    }
  ],

  freelance: [
    {
      id: "free-1",
      client: "Fastwork Platform & Independent Contractor",
      title: "Technical Freelance Developer",
      period: "2024 – Present",
      badge: "Commercial",
      summary: "Delivered commercial-grade full-stack solutions and automation products on Thailand's leading freelance platform.",
      techStack: ["Figma", "React", "Firebase", "ESP32 / Arduino IoT"],
      highlights: [
        "Performance Metrics: Achieved a flawless 5/5 Star Rating across delivered commercial projects with a 100% on-time completion record.",
        "Core Services Offered: Figma-to-Code conversion, full-stack deployment, custom AI chatbot integrations, and hardware-level IoT systems."
      ]
    },
    {
      id: "free-2",
      client: "Commercial Healthcare Client (via Fastwork)",
      title: "Medical Thai-Chinese Vocabulary & Patient Screening Web App",
      period: "2026",
      badge: "Healthcare Tech",
      summary: "Developed a cross-lingual patient screening and medical vocabulary web application deployed across 11 departments.",
      techStack: ["React 19", "Vite", "Firebase", "Python (Edge-TTS)"],
      highlights: [
        "Accelerated clinical triage workflows and enhanced medical communication safety for Chinese-speaking patients.",
        "Integrated a custom Python backend script to automate AI-generated bilingual audio card rendering pipelines."
      ]
    },
    {
      id: "free-3",
      client: "Commercial Client (via Fastwork)",
      title: "Research-Backed IoT Study Environment Monitor",
      period: "2026",
      badge: "Hardware & IoT",
      summary: "Built an embedded monitor hardware box that evaluates ambient study conditions with physical sensory feedback.",
      techStack: ["Arduino (C++)", "Sensors (LDR / Sound / DHT11)", "Embedded Logic"],
      highlights: [
        "Programmed an Arduino MCU to ingest real-time light, sound, and climate telemetry parameters accurately.",
        "Utilized an embedded threshold algorithm calibrated against research standards to provide instantaneous visual environmental health indicators via a tri-color LED array."
      ]
    }
  ],

  research: [
    {
      id: "res-1",
      title: "Extraction of Chitosan as a Mineral Supplement for Hydroponic Cultivation",
      institution: "Benchama Maharat School (Young Scientist Program)",
      period: "2023 – 2025",
      summary: "Conducted experimental graduation thesis focusing on the chemical extraction of chitosan from golden apple snail, shrimp, and crab shells to develop an organic, sustainable mineral supplement fluid for hydroponic farming systems.",
      language: "English / Thai Presentation",
      links: [
        { label: "Full Document (Google Drive)", url: "https://drive.google.com/file/d/1h-ayyjHN25TA8JK06wV9irEPHMTHhB1d/view?usp=sharing" }
      ]
    }
  ],

  selectivePrograms: [
    {
      id: "sel-1",
      name: "POSN Computer Science Olympiad Training Camp 1",
      provider: "The Promotion of Olympic Science and Technology Olympiad Foundation (POSN)",
      period: "October 5–20, 2024",
      badge: "Olympiad Track",
      summary: "Highly selective national academic training program designed for elite science and technology students. Admission required passing a rigorous regional examination focused on advanced mathematics and algorithmic reasoning.",
      highlights: [
        "Competitive Admission: Earned one of limited nationwide training quotas by outperforming thousands of regional applicants in a rigorous competitive entrance exam.",
        "Advanced Curriculum: Completed 100+ hours of intensive lectures and practical labs covering advanced algorithms, theoretical data structures, and systematic problem-solving using C++."
      ]
    },
    {
      id: "sel-2",
      name: "IT Camp 21 — Web Engineering Track",
      provider: "School of Information Technology, KMITL",
      period: "April 28 – May 1, 2025",
      badge: "Elite Selection",
      summary: "Invitation-only intensive multi-day development bootcamp. Selected through a rigorous multi-stage screening process that rigorously evaluates programming fundamentals and algorithmic logic.",
      highlights: [
        "Selective Screening: Successfully passed a highly competitive multi-stage selection process from a national pool of candidates to enter the specialized Web Engineering Track.",
        "Agile Product Delivery: Collaborated within an accelerated engineering team to design, prototype, and build a production-ready web application using the React ecosystem, successfully pitching to an expert review panel."
      ]
    },
    {
      id: "sel-3",
      name: "National CTF Cyber Security Bootcamp",
      provider: "National Cyber Security Agency (NCSA)",
      period: "2025",
      badge: "National Defense",
      summary: "Elite, invitation-only practical training program focusing on national cybersecurity frameworks and simulated cyber warfare environments.",
      highlights: [
        "Hands-On Vulnerability Exploitation: Trained directly under national cybersecurity experts, solving real-world challenges in Web Exploitation and Cryptographic Analysis.",
        "Strategic Application: Utilized tactical insights and specialized framework knowledge gained from this program to achieve a Top 57 national ranking in the Thailand Cyber TopTalent championship among 518 competing teams."
      ]
    },
    {
      id: "sel-4",
      name: "Regional Finalist Proposal — Coding For Better Life 2024",
      provider: "Digital Economy Promotion Agency (depa)",
      period: "July 11–12, 2024",
      badge: "Innovation Track",
      summary: "Competitive national incubator and hackathon framework targeting regional social innovations through smart hardware and AI integration.",
      highlights: [
        "Selective Advancement: Advanced through highly competitive preliminary rounds to achieve Regional Finalist status in the Lower Northeast tier.",
        "System Architecture: Engineered a fully functional Heat Stroke Risk Assessment System, transforming theoretical concepts into a working prototype integrating micro:bit telemetry with automated AIThaiGen algorithms."
      ]
    }
  ],

  leadership: [
    {
      id: "lead-1",
      role: "Official Campus Photographer & Videographer",
      organization: "School Photography Club",
      period: "2023 – Present (3 Years)",
      summary: "Selected as the official campus media lead, spearheading visual documentation and digital asset pipelines for high-profile institutional events.",
      highlights: [
        "Led production for major events including Teacher's Day, Founder’s Day (King Rama V Ceremony), and major student assemblies.",
        "Managed high-quality visual content published directly on the school's official Public Relations (PR) platforms."
      ]
    },
    {
      id: "lead-2",
      role: "Student Council Officer",
      organization: "Student Council Executive Committee",
      period: "2024 – 2025 (1 Year)",
      summary: "Co-orchestrated large-scale institutional networks and handled dynamic operations between student branches and executives.",
      highlights: [
        "Managed cross-organizational planning, parade logistics, and scheduling for a major joint sports event with partner schools (Narinukul and Benchama Maharat).",
        "Handled on-site student orientation logistics, stage management, crowd control, and acted as an administrative liaison to the School Principal."
      ]
    },
    {
      id: "lead-3",
      role: "Academic & Recreational Volunteer Camp (Sister School Program)",
      organization: "Benchama Maharat School & 22nd Border Patrol Police Subdivision",
      period: "March 2024",
      summary: "Designed and facilitated interactive learning stations and educational games for underprivileged students at a rural Border Patrol Police school.",
      highlights: [
        "Leveraged teamwork and creative problem-solving within the Student Council to build an inclusive learning environment.",
        "Successfully bridged communication gaps and engaged effectively to build foundational learning motivation for young learners."
      ]
    },
    {
      id: "lead-4",
      role: "Royal-Initiative Sister School Volunteer Camp & Fundraising",
      organization: "Under the Royal Initiative of HRH Princess Maha Chakri Sirindhorn",
      period: "July 2024",
      summary: "Co-led a self-funded grassroots initiative to raise development resources for remote student communities.",
      highlights: [
        "Raised 100% of event hosting and donation funds by organizing and performing live music and selling homemade pastries at local markets.",
        "Transformed entrepreneurial efforts into tangible educational donations through strategic planning and resource scheduling."
      ]
    },
    {
      id: "lead-5",
      role: "Clinical Internship",
      organization: "Warin Chamrap Hospital (OPD, Emergency Room & Triage Unit)",
      period: "March 2024",
      summary: "Observed and assisted in high-pressure clinical environments to evaluate initial patient screening workflows.",
      highlights: [
        "Gained operational exposure across general Outpatient Departments (OPD), fast-paced triage, and the Emergency Room (ER).",
        "Developed structured healthcare communication skills while interacting with diverse clinical medical staffs and patients."
      ]
    },
    {
      id: "lead-6",
      role: "Clinical Internship",
      organization: "Sunpasitthiprasong Hospital (OPD-1 & Urology Surgical Ward)",
      period: "March 2025",
      summary: "Acquired critical nursing exposure, public healthcare understanding, and medical infrastructure operations knowledge.",
      highlights: [
        "Gained foundational training in patient monitoring, clinical safety parameters, and professional medical equipment utilization within a specialized surgical ward.",
        "Cultivated interdisciplinary coordination dynamics and rigid professional responsibility inside complex healthcare teams."
      ]
    }
  ],

  // Mapping ลงตัวแปรประเภทไฟล์เอกสารเดี่ยวตามโครงสร้าง Interface เสริมของคุณ
  researchPdf: {
    title: "Extraction of Chitosan as a Mineral Supplement for Hydroponic Cultivation",
    filePath: "https://drive.google.com/file/d/1h-ayyjHN25TA8JK06wV9irEPHMTHhB1d/view?usp=sharing",
    description: "Full research text detailing chemical isolation of chitosan from organic crustacean shells and its quantitative verification on hydroponic crops."
  }
};