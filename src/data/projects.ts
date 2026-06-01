import { Project } from "../types";

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/** Live site URL or academic PDF path (stored on `githubUrl` for academic entries). */
export function resolveProjectHref(project: Project): string | null {
  if (project.category === "academic") {
    const doc = project.githubUrl?.trim();
    return doc && doc.length > 0 ? doc : null;
  }
  const live = project.liveUrl?.trim();
  return live && live.length > 0 ? live : null;
}

export const projects: Project[] = [
  {
    id: "home-server",
    title: "Home Server System",
    shortDesc:
      "Self-hosted infrastructure running Immich, Local AI (LM Studio), and dynamic URL routing via Cloudflare Tunnel + Firestore",
    techStack: [
      "Docker",
      "LM Studio",
      "Immich",
      "Cloudflare Tunnel",
      "Firebase",
      "Node.js",
    ],
    category: "infrastructure",
    hasLiveUrl: false,
    liveUrl: null,
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A self-hosted home lab that centralizes photo management, local AI inference, and dynamic public routing. Services run in Docker; Cloudflare Tunnel exposes selected endpoints while Firestore holds the current tunnel URL so other apps can resolve it at runtime without redeploying.",
    highlights: [
      "Dynamic tunnel URL stored in Firestore, accessible by any project",
      "Local AI via LM Studio",
      "Immich for photo storage",
    ],
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    shortDesc:
      "Expense tracking app with friend bill splitting, Trip mode, and AI-powered receipt scanning",
    techStack: ["React", "Firebase", "Gemini API", "Immich", "Firestore"],
    category: "webapp",
    hasLiveUrl: true,
    liveUrl: "",
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A personal finance web app for logging expenses, splitting bills with friends, and managing trip-specific spending. Receipts can be scanned with Gemini or routed to local AI; images are stored in Immich with URLs coordinated through Firestore.",
    highlights: [
      "Split bills with friends",
      "Scan receipts via Gemini or Local AI",
      "Store receipt images in Immich via Firestore URL",
    ],
  },
  {
    id: "photo-sharing-immich",
    title: "Photo Sharing via Immich",
    shortDesc:
      "Personal photo sharing using self-hosted Immich, albums accessible via dynamic URL from Firestore",
    techStack: ["Immich", "Firestore", "Cloudflare Tunnel"],
    category: "webapp",
    hasLiveUrl: true,
    liveUrl: "",
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A lightweight photo-sharing surface backed by self-hosted Immich. Albums and shares resolve through a dynamic base URL read from Firestore, aligned with the home server tunnel setup.",
    highlights: [],
  },
  {
    id: "freelance-showcase",
    title: "Freelance Showcase",
    shortDesc: "Portfolio site for freelance web development work",
    techStack: ["React", "Firebase"],
    category: "freelance",
    hasLiveUrl: true,
    liveUrl: "https://pkfreelancebs.web.app",
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A deployed portfolio showcasing freelance web development projects, built with React and hosted on Firebase.",
    highlights: [],
  },
  {
    id: "fastwork-profile",
    title: "Fastwork Profile",
    shortDesc: "Freelance profile on Thailand's Fastwork platform",
    techStack: [],
    category: "freelance",
    hasLiveUrl: true,
    liveUrl: "https://fastwork.co/en/user/phetklao",
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "Public freelancer profile on Fastwork (Thailand), listing services, reviews, and contact for web development work.",
    highlights: [],
  },
  {
    id: "senior-research-m6",
    title: "Senior Research (Mathayom 6)",
    shortDesc:
      "Research paper completed in final year of high school (Thai language)",
    techStack: [],
    category: "academic",
    hasLiveUrl: false,
    liveUrl: null,
    githubUrl: "",
    thumbnail: null,
    fullDescription:
      "Final-year high school (Mathayom 6) research project documented as a formal paper. The full document is written in Thai.",
    highlights: ["Document is in Thai language"],
  },
];
