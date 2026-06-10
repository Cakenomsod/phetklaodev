import { Project } from "../types";

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/**
 * Resolves the primary actionable hyperlink for a project safely.
 * Prevents runtime crashes from null values and filters out empty strings.
 */
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
    title: "Hybrid-Cloud Home Server Ecosystem",
    shortDesc:
      "Self-hosted infrastructure running Docker containers, Local AI inference, and dynamic URL ingress routing via Cloudflare Tunnel + Cloud Firestore.",
    techStack: [
      "Node.js",
      "Docker",
      "Cloudflare Tunnel",
      "LM Studio (Gemma-2B)",
      "Immich",
      "Cloud Firestore",
    ],
    category: "infrastructure",
    hasLiveUrl: false,
    liveUrl: null,
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A resilient, secure home lab architecture that centralizes edge photo servers, offline LLM inference, and dynamic zero-ingress public routing. Microservices are isolated entirely inside Docker containers. An automated Node.js manager provisions portless Cloudflare Tunnels at boot time, instantly publishing rotated ingress tokens to a central Cloud Firestore registry. This allows distributed clients to resolve dynamic endpoints seamlessly at runtime without redeployment configurations.",
    highlights: [
      "Zero inbound open ports on the router via outbound-only Cloudflare Tunnels.",
      "Asynchronous boot orchestrator updates Firestore registry to prevent routing downtime.",
      "Localized Gemma-2B deployment via LM Studio for offline inference pipelines.",
    ],
  },
  {
    id: "finance-tracker",
    title: "AI-Powered Finance & Trip Tracker",
    shortDesc:
      "Full-stack expense management platform featuring friend debt settlement engines, Trip workflows, and AI-driven receipt extraction pipeline.",
    techStack: ["Next.js (React 19)", "Cloud Firestore", "Firebase Auth", "Gemini API", "Immich API", "Zod"],
    category: "webapp",
    hasLiveUrl: true,
    liveUrl: "https://financetracker-pk.web.app/", // ใส่ลิงก์จริงให้สอดคล้องกับพาร์ทแรก
    githubUrl: "https://github.com/Cakepuarknomsod",
    thumbnail: null,
    fullDescription:
      "A comprehensive financial web application engineered to handle shared travel budgets, ledger auditing, and receipt OCR automation. Built on Next.js server routing, the app feeds receipt attachments into a structured Gemini LLM parsing pipeline validated by Zod schemas and optimized with regex pre-processing. User-uploaded receipt assets are offloaded directly to an on-premise, self-hosted Immich instance, striking a precise balance between fast cloud computing and absolute data privacy.",
    highlights: [
      "Greedy Minimum Transfer Algorithm minimizes peer-to-peer transaction overhead.",
      "Strict schema-validated text-to-JSON extraction pipeline using Gemini and Zod.",
      "Seamless integration with self-hosted home lab servers for secure asset storage.",
    ],
  },
  {
    id: "photo-sharing-immich",
    title: "Dynamic Photo Sharing via Immich Ingress",
    shortDesc:
      "Lightweight media distribution interface backed by self-hosted Immich, resolving shared assets via real-time Firestore registries.",
    techStack: ["Next.js", "Immich API", "Cloud Firestore", "Cloudflare Tunnel"],
    category: "webapp",
    hasLiveUrl: true,
    liveUrl: null, // ฟังก์ชันจะแปลงเป็น null ให้ปลอดภัยจนกว่าจะใส่ลิงก์จริง
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A lightweight album-sharing and content distribution surface built on top of a self-hosted Immich cluster. Instead of depending on static deployment environments or fragile hardcoded URLs, shared albums dynamically discover their endpoint origins by subscribing to the live home server tunnel status registered inside Cloud Firestore.",
    highlights: [
      "Asynchronous endpoint discovery ensures album availability across tunnel rotations.",
      "Leverages localized machine learning (CLIP) models on the host server for media workflows.",
    ],
  },
  {
    id: "freelance-showcase",
    title: "Engineering Portfolio & Deployed CMS Hub",
    shortDesc: "Production-ready hub showcasing full-stack commercial freelance projects and engineering services.",
    techStack: ["React", "Firebase Hosting", "Cloud Firestore", "Tailwind CSS"],
    category: "freelance",
    hasLiveUrl: true,
    liveUrl: "https://pkfreelancebs.web.app",
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "A centralized platform designed to display validated commercial freelance applications, IoT builds, and architecture designs. Features a secure, custom-built Admin CMS panel running full CRUD operations directly through Firebase, allowing real-time portfolio adjustments and state synchronization.",
    highlights: [
      "Custom secure Admin CMS panel for immediate content adjustments.",
      "Real-time data synchronization and live project status auditing powered by Firestore.",
    ],
  },
  {
    id: "fastwork-profile",
    title: "Fastwork Contractor Profile",
    shortDesc: "Verified freelancer service profile on Thailand's premier digital contractor platform.",
    techStack: ["Full-Stack Development", "IoT Engineering", "API Integration"],
    category: "freelance",
    hasLiveUrl: true,
    liveUrl: "https://fastwork.co/en/user/phetklao",
    githubUrl: null,
    thumbnail: null,
    fullDescription:
      "Public engineering and developer profile on Fastwork (Thailand), demonstrating commercial accountability, 5/5 client ratings, on-time project shipping metrics, and specialized solutions ranging from Figma-to-Code pipelines to embedded hardware integrations.",
    highlights: [
      "Maintained a flawless 5.5/5 client review score across full-stack contracts.",
      "100% on-time project delivery metrics validated by the platform ecosystem.",
    ],
  },
  {
    id: "chitosan-research", // เปลี่ยน ID และ Title ให้เป็นสากลและตรงกับ FEATURED_PROJECTS
    title: "Chitosan Extraction for Hydroponics Cultivation",
    shortDesc:
      "Experimental research thesis focused on chemical isolation of chitosan supplements from crustacean shells for organic agriculture.",
    techStack: ["Experimental Design", "Chemical Extraction Protocols", "Hydroponic Systems", "Quantitative Analysis"],
    category: "academic",
    hasLiveUrl: false,
    liveUrl: null,
    githubUrl: "https://drive.google.com/file/d/1h-ayyjHN25TA8JK06wV9irEPHMTHhB1d/view?usp=sharing", // ใส่ลิงก์ PDF งานวิจัยตรงนี้เพื่อให้ resolveProjectHref ดึงไปใช้ได้ถูกต้อง
    thumbnail: null,
    fullDescription:
      "An experimental graduation research paper completed under the school's Young Scientist Program (YSP). The study establishes a structured chemical isolation framework to extract chitosan from golden apple snail, shrimp, and crab shells. The resulting bio-mineral supplement fluid was tested under tightly controlled hydroponic growth conditions against commercial nutrient baselines, measuring quantitative absorption rates and physical crop growth metrics.",
    highlights: [
      "Defended and presented research findings comfortably in both English and Thai.",
      "Applied strict scientific variable control, building the analytical foundation used in current software debugging.",
    ],
  },
];