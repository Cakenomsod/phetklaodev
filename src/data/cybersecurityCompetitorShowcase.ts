export type TimelineCategory = "bootcamp" | "competition" | "training";

export type CyberTimelineEvent = {
  id: string;
  year: string;
  month?: string;
  title: string;
  subtitle: string;
  description: string;
  category: TimelineCategory;
  outcome?: string;
  skills?: string[];
};

export type WalkthroughPhase = "problem" | "investigation" | "solution" | "lessons";

export type WalkthroughStep = {
  id: string;
  phase: WalkthroughPhase;
  title: string;
  body: string;
  detail?: string;
  code?: string;
  insight?: string;
  domains: ("web" | "crypto" | "network" | "methodology")[];
};

export type SkillDomain = {
  id: "web" | "crypto" | "network" | "methodology";
  label: string;
  headline: string;
  approach: string;
  tools: string[];
  example: string;
};

export const HERO_METRICS = {
  rank: 57,
  totalTeams: 518,
  topPercent: 11,
  competitions: 6,
  bootcamps: 2,
} as const;

export const HERO_DOMAINS = [
  "Web Security",
  "Cryptography",
  "Network Analysis",
  "CTF Methodology",
] as const;

export const COMPETITION_CONTEXT = {
  name: "Thailand Cyber Top Talent 2025",
  organizer: "National Cyber Security Agency (NCSA)",
  format: "Live jeopardy-style challenges across web, crypto, forensics, and network domains",
  constraint: "Strict time limits — points decay as hours pass",
} as const;

export const JOURNEY_NARRATIVE = {
  kicker: "The Competitor Arc",
  headline: "Rejection became my syllabus.",
  body: "I failed POSN Camp 1 and was rejected from IT Camp 20. Instead of treating that as a ceiling, I wrote down every concept I couldn't explain. A year of deliberate practice in algorithms, Python, and security fundamentals led to national rankings—not because I memorized tools, but because I learned how to investigate problems I had never seen before.",
  turningPoints: [
    {
      id: "failure",
      label: "2024",
      event: "POSN fail · IT Camp rejection",
      meaning: "Mapped knowledge gaps instead of stopping",
    },
    {
      id: "foundation",
      label: "2024–25",
      event: "Self-study + POSN Camp 1 completion",
      meaning: "Built algorithmic stamina for timed problem-solving",
    },
    {
      id: "training",
      label: "2025",
      event: "NCSA invitation-only bootcamp",
      meaning: "Hands-on exploitation under national experts",
    },
    {
      id: "proof",
      label: "Aug 2025",
      event: "Rank #57 of 518 teams nationally",
      meaning: "Evidence that the method works",
    },
  ],
} as const;

export const TIMELINE_EVENTS: CyberTimelineEvent[] = [
  {
    id: "posn",
    year: "2024",
    month: "October",
    title: "POSN Computer Science Camp 1",
    subtitle: "Olympic Science Foundation",
    description:
      "Earned a nationwide training quota through regional exams. 100+ hours of advanced algorithms and C++ — the foundation for thinking under time pressure.",
    category: "training",
    outcome: "Algorithmic stamina",
    skills: ["C++", "Data Structures", "Proof techniques"],
  },
  {
    id: "self-study",
    year: "2024",
    month: "November",
    title: "Deliberate self-study year",
    subtitle: "Independent curriculum",
    description:
      "After IT Camp 20 rejection, built a structured study plan: Python scripting, web fundamentals, basic cryptography, and CTF write-up analysis. Treated every unknown concept as a to-do item.",
    category: "training",
    outcome: "Security fundamentals",
    skills: ["Python", "HTTP", "Linux CLI", "CTF write-ups"],
  },
  {
    id: "ncsa-bootcamp",
    year: "2025",
    month: "June",
    title: "NCSA Cyber Security Bootcamp",
    subtitle: "National Cyber Security Agency",
    description:
      "Invitation-only practical training under national cybersecurity experts. Live labs in web exploitation and cryptographic analysis — simulated environments with real attack/defense constraints.",
    category: "bootcamp",
    outcome: "Hands-on exploitation",
    skills: ["Web Exploitation", "Crypto Analysis", "Burp Suite", "pwntools"],
  },
  {
    id: "cyber-talent",
    year: "2025",
    month: "August",
    title: "Thailand Cyber Top Talent 2025",
    subtitle: "National Championship · NCSA",
    description:
      "518 teams nationwide. Live challenges across web, crypto, forensics, and network domains. Ranked #57 — top 11%. Every point earned by investigating unfamiliar problems under a ticking clock.",
    category: "competition",
    outcome: "National Rank #57",
    skills: ["Live CTF", "Time management", "Cross-domain pivots"],
  },
  {
    id: "kk-computing",
    year: "2025",
    month: "August",
    title: "KKU Computing Fair — 2nd Runner-Up",
    subtitle: "National Programming Competition",
    description:
      "Competed individually against 120+ programmers. Solved complex algorithmic problems in C — the same disciplined decomposition I apply to security challenges.",
    category: "competition",
    outcome: "2nd Runner-Up nationally",
    skills: ["C", "Algorithms", "Competitive programming"],
  },
  {
    id: "bangmod",
    year: "2025",
    month: "September",
    title: "BangMod Hackathon — Top 36",
    subtitle: "KMUTT · National Finalist",
    description:
      "Top 14% of 252 teams. Designed advanced data structures under strict time constraints — proof that competition training transfers across domains.",
    category: "competition",
    outcome: "National Top 36",
    skills: ["Team collaboration", "Rapid prototyping", "Data structures"],
  },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: "web",
    label: "Web Security",
    headline: "Read the application before attacking it",
    approach:
      "Map endpoints, inspect cookies and headers, trace authentication flows. Most web challenges aren't about exotic exploits — they're about finding where the server trusts the client too much.",
    tools: ["Burp Suite", "Browser DevTools", "curl", "JWT decode"],
    example: "Session tokens with unsigned claims, IDOR in API routes, SQL injection in search parameters",
  },
  {
    id: "crypto",
    label: "Cryptography",
    headline: "Look for implementation mistakes, not math breakthroughs",
    approach:
      "Check key length, mode of operation, and whether randomness is reused. CTF crypto is about spotting where theory meets a shortcut — weak keys, ECB patterns, predictable nonces.",
    tools: ["CyberChef", "Python scripts", "frequency analysis", "GCD / factoring"],
    example: "XOR with reused key, RSA with small primes, Caesar cipher with known plaintext",
  },
  {
    id: "network",
    label: "Network Analysis",
    headline: "Follow the packets to find what the app hides",
    approach:
      "Capture traffic, filter by protocol, reconstruct sessions. Network challenges reveal credentials, hidden endpoints, and protocol misuse that browser-only inspection misses.",
    tools: ["Wireshark", "tcpdump", "tshark", "ngrep"],
    example: "FTP credentials in cleartext, DNS exfiltration, malformed HTTP headers leaking internal paths",
  },
  {
    id: "methodology",
    label: "CTF Methodology",
    headline: "Hypothesize, test, document — don't guess randomly",
    approach:
      "Categorize the challenge, list assumptions, run the cheapest test first. When stuck, pivot domains or pair with a teammate. Time-box exploration; save partial notes for later.",
    tools: ["Challenge tagging", "Shared notes", "Timer discipline", "Write-up review"],
    example: "10-minute recon cap before exploitation, flag format validation, point-value triage",
  },
];

export const CHALLENGE_WALKTHROUGH = {
  title: "The Session Vault",
  subtitle: "A live web challenge from competition conditions",
  context:
    "45 minutes remaining. 150 points. Admin export endpoint locked behind authentication. Guest credentials provided — but no source code.",
  flag: "NCSA{trust_but_verify}",
} as const;

export const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    id: "p1",
    phase: "problem",
    title: "Locked admin panel, guest access only",
    body: "The challenge presents a login page and a hint: \"Administrators export data at /admin/export.\" Guest credentials work, but the dashboard shows read-only access. No source code is provided — only live behavior.",
    insight: "First question: what does the server actually check?",
    domains: ["web", "methodology"],
  },
  {
    id: "i1",
    phase: "investigation",
    title: "Map the attack surface",
    body: "Before exploiting anything, spent five minutes mapping: login flow, dashboard routes, API responses, and cookie behavior. Logged every HTTP status and redirect.",
    detail: "Endpoints found: POST /login, GET /dashboard, GET /api/user, GET /admin/export (403)",
    domains: ["web", "methodology"],
  },
  {
    id: "i2",
    phase: "investigation",
    title: "Inspect the session cookie",
    body: "After login, the server sets a session cookie. Decoded the payload — three dot-separated base64 segments. Classic JWT structure.",
    code: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJyb2xlIjoiZ3Vlc3QiLCJ1c2VyIjoiZ3Vlc3QifQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
    insight: "Payload decodes to: {\"role\":\"guest\",\"user\":\"guest\"}. The question becomes — does the server verify the signature?",
    domains: ["web", "crypto"],
  },
  {
    id: "i3",
    phase: "investigation",
    title: "Test the signature boundary",
    body: "Modified the role field to \"admin\" and re-encoded the payload. Sent the tampered cookie without changing the signature segment.",
    detail: "GET /api/user with modified cookie → 200 OK, response: {\"role\":\"admin\",\"user\":\"guest\"}",
    insight: "Server parsed the payload but never validated the signature. Classic broken authentication.",
    domains: ["web", "crypto"],
  },
  {
    id: "s1",
    phase: "solution",
    title: "Escalate and capture the flag",
    body: "With the tampered session accepted as admin, requested /admin/export. Server returned a CSV attachment containing the flag in a metadata field.",
    code: `# export_metadata\nflag=NCSA{trust_but_verify}\nrecords=1,247`,
    domains: ["web"],
  },
  {
    id: "l1",
    phase: "lessons",
    title: "Verify before you trust",
    body: "JWTs are not encrypted — they're signed. If the server skips signature verification, the payload is just a suggestion. Always validate tokens server-side with the declared algorithm.",
    domains: ["web", "crypto"],
  },
  {
    id: "l2",
    phase: "lessons",
    title: "Recon saves more time than brute force",
    body: "The five-minute surface map revealed that /api/user reflected cookie contents. That single endpoint confirmed the hypothesis before spending time on SQL injection or directory brute-forcing.",
    domains: ["methodology", "network"],
  },
  {
    id: "l3",
    phase: "lessons",
    title: "Competition pressure changes how you think",
    body: "Under a ticking clock, the instinct is to try everything. Discipline means ranking hypotheses by cost: decode cookie (30 seconds) before running a full port scan (10 minutes). This mindset transfers directly to production incident response.",
    domains: ["methodology"],
  },
];

export const RESULTS_METRICS = [
  {
    id: "rank",
    value: 57,
    prefix: "#",
    label: "National rank",
    description: "Thailand Cyber Top Talent 2025",
  },
  {
    id: "teams",
    value: 518,
    label: "Teams nationwide",
    description: "Competing in the championship",
  },
  {
    id: "percentile",
    value: 11,
    suffix: "%",
    label: "Top percentile",
    description: "Among all participating teams",
  },
  {
    id: "competitions",
    value: 6,
    label: "Competitions",
    description: "National events in 2025",
  },
] as const;

export const LESSONS_LEARNED = [
  {
    id: "method",
    kicker: "On preparation",
    headline: "Structured gaps beat random practice",
    body: "After rejection, I listed every concept I couldn't explain and worked through them in order. National rankings followed from that system — not from grinding random challenges.",
  },
  {
    id: "transfer",
    kicker: "On transfer",
    headline: "Algorithms and security share the same muscle",
    body: "POSN algorithms, programming competitions, and CTF challenges all train the same skill: decompose an unfamiliar problem into testable steps under time pressure.",
  },
  {
    id: "humility",
    kicker: "On competition",
    headline: "Rank #57 is evidence, not identity",
    body: "Top 11% proves the approach works. It doesn't mean I've seen every attack vector. The goal is to keep investigating — in competitions and in every system I build.",
  },
] as const;

export const TIMELINE_CATEGORY_LABELS: Record<TimelineCategory, string> = {
  bootcamp: "Bootcamp",
  competition: "Competition",
  training: "Training",
};
