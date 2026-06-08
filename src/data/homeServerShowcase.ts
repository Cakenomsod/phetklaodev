export type InfraNodeId =
  | "finance-app"
  | "photo-app"
  | "firestore"
  | "cloudflare-tunnel"
  | "nodejs-manager"
  | "immich"
  | "lm-studio";

export type InfraNode = {
  id: InfraNodeId;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
  layer: "apps" | "registry" | "edge" | "orchestration" | "services";
  purpose: string;
  technologies: string[];
  responsibilities: string[];
};

export type InfraEdge = {
  id: string;
  from: InfraNodeId;
  to: InfraNodeId;
  label?: string;
};

export const HERO_METRICS = {
  category: "Infrastructure",
  serviceCount: 7,
  uptimeLabel: "Continuous",
  tunnelStatus: "Active",
} as const;

export const CHALLENGE_STEPS = [
  {
    id: "problem",
    kicker: "The problem",
    headline: "How can I access private services from anywhere—without exposing my network to the public internet?",
    body: "Traditional port forwarding opens attack surfaces. Static URLs break when tunnels rotate. Apps need a single source of truth for where services live.",
  },
  {
    id: "constraints",
    kicker: "Constraints",
    headline: "No inbound ports. No manual redeploys. No cloud API lock-in for every request.",
    body: "The system must stay secure by default, survive reboots, and let Next.js apps resolve live endpoints at runtime—not from hardcoded env vars.",
  },
  {
    id: "stakes",
    kicker: "What’s at stake",
    headline: "Photos, finances, and local AI—all on hardware I control.",
    body: "If routing fails, apps go dark. If tunnels leak, the home network is exposed. The architecture has to be event-driven, observable, and recoverable.",
  },
] as const;

export const SOLUTION_SEQUENCE = [
  {
    id: "finance-app",
    title: "Finance App",
    subtitle: "Next.js client",
    description:
      "Expense tracking with receipt scanning—reads the current tunnel URL from Firestore instead of a baked-in config.",
  },
  {
    id: "firestore",
    title: "Firestore Registry",
    subtitle: "Live configuration",
    description:
      "Central registry stores tunnel endpoints and service metadata. Any app subscribes once; updates propagate without redeploy.",
  },
  {
    id: "cloudflare-tunnel",
    title: "Cloudflare Tunnel",
    subtitle: "Edge ingress",
    description:
      "Outbound-only HTTPS tunnels—no open ports on the router. Public traffic terminates at Cloudflare, then routes inward.",
  },
  {
    id: "nodejs-manager",
    title: "Node.js Lifecycle Manager",
    subtitle: "Boot orchestration",
    description:
      "On startup, provisions tunnels asynchronously, writes fresh URLs to Firestore, and coordinates service health.",
  },
  {
    id: "immich",
    title: "Immich",
    subtitle: "Photo server",
    description:
      "Self-hosted media with CLIP-powered search. Receipt images and albums resolve through the dynamic tunnel base URL.",
  },
  {
    id: "lm-studio",
    title: "Local AI",
    subtitle: "LM Studio",
    description:
      "Gemma-2B runs offline for receipt parsing and privacy-sensitive inference—bypassing per-request cloud API costs.",
  },
] as const;

export const INFRA_NODES: InfraNode[] = [
  {
    id: "finance-app",
    label: "Finance App",
    shortLabel: "Finance",
    x: 140,
    y: 200,
    layer: "apps",
    purpose: "Personal finance web app with receipt scanning and Immich-backed media storage.",
    technologies: ["Next.js", "React", "Firebase Auth", "Firestore"],
    responsibilities: [
      "Resolve live tunnel URL from Firestore at runtime",
      "Route receipt images to Immich via dynamic base URL",
      "Optional Gemini or local AI for OCR",
    ],
  },
  {
    id: "photo-app",
    label: "Photo App",
    shortLabel: "Photos",
    x: 660,
    y: 200,
    layer: "apps",
    purpose: "Lightweight album sharing surface backed by self-hosted Immich.",
    technologies: ["Next.js", "Firestore", "Immich API"],
    responsibilities: [
      "Read Immich base URL from Firestore registry",
      "Serve shared albums without static deployment URLs",
    ],
  },
  {
    id: "firestore",
    label: "Firestore Registry",
    shortLabel: "Registry",
    x: 400,
    y: 200,
    layer: "registry",
    purpose: "Single source of truth for tunnel URLs, service status, and cross-app configuration.",
    technologies: ["Cloud Firestore", "Firebase SDK", "Security Rules"],
    responsibilities: [
      "Store and publish current Cloudflare tunnel URL",
      "Expose server status for portfolio and monitoring",
      "Sync config changes to all connected clients",
    ],
  },
  {
    id: "cloudflare-tunnel",
    label: "Cloudflare Tunnel",
    shortLabel: "Tunnel",
    x: 400,
    y: 60,
    layer: "edge",
    purpose: "Secure edge ingress with zero inbound ports on the home network.",
    technologies: ["Cloudflare Tunnel", "cloudflared", "HTTPS"],
    responsibilities: [
      "Terminate public HTTPS at Cloudflare edge",
      "Route traffic inward over outbound connections only",
      "Rotate endpoints without router reconfiguration",
    ],
  },
  {
    id: "nodejs-manager",
    label: "Node.js Manager",
    shortLabel: "Lifecycle",
    x: 400,
    y: 360,
    layer: "orchestration",
    purpose: "Boot-time orchestrator that provisions tunnels and updates the registry.",
    technologies: ["Node.js", "cloudflared CLI", "Firestore Admin"],
    responsibilities: [
      "Provision tunnels asynchronously at system boot",
      "Write fresh tunnel URLs to Firestore on change",
      "Coordinate service lifecycle and recovery",
    ],
  },
  {
    id: "immich",
    label: "Immich",
    shortLabel: "Immich",
    x: 240,
    y: 520,
    layer: "services",
    purpose: "Self-hosted photo server with ML-powered search and album APIs.",
    technologies: ["Immich", "Docker", "CLIP", "PostgreSQL"],
    responsibilities: [
      "Store receipt and album media locally",
      "Expose smart search via on-device ML models",
      "Serve assets through tunnel-proxied HTTPS",
    ],
  },
  {
    id: "lm-studio",
    label: "LM Studio",
    shortLabel: "Local AI",
    x: 560,
    y: 520,
    layer: "services",
    purpose: "Offline LLM inference for privacy-sensitive parsing workloads.",
    technologies: ["LM Studio", "Gemma-2B", "Local API"],
    responsibilities: [
      "Parse receipts without cloud API calls",
      "Keep sensitive financial text on local hardware",
      "Fallback path when cloud AI is unavailable",
    ],
  },
];

export const INFRA_EDGES: InfraEdge[] = [
  { id: "e1", from: "finance-app", to: "firestore", label: "read config" },
  { id: "e2", from: "photo-app", to: "firestore", label: "read config" },
  { id: "e3", from: "firestore", to: "cloudflare-tunnel", label: "tunnel URL" },
  { id: "e4", from: "nodejs-manager", to: "firestore", label: "write URL" },
  { id: "e5", from: "nodejs-manager", to: "cloudflare-tunnel", label: "provision" },
  { id: "e6", from: "finance-app", to: "immich", label: "media" },
  { id: "e7", from: "photo-app", to: "immich", label: "albums" },
  { id: "e8", from: "finance-app", to: "lm-studio", label: "OCR" },
  { id: "e9", from: "nodejs-manager", to: "immich", label: "lifecycle" },
  { id: "e10", from: "nodejs-manager", to: "lm-studio", label: "lifecycle" },
];

export const SYSTEM_IMPACT = [
  {
    id: "ports",
    value: 0,
    suffix: "",
    label: "Exposed ports",
    description: "Outbound-only Cloudflare Tunnels—router stays closed.",
  },
  {
    id: "services",
    value: 7,
    suffix: "",
    label: "Orchestrated services",
    description: "Apps, registry, tunnel, manager, Immich, and local AI.",
  },
  {
    id: "ai",
    value: 100,
    suffix: "%",
    label: "Offline AI path",
    description: "Local Gemma-2B available without cloud inference.",
  },
  {
    id: "updates",
    value: 1,
    suffix: "",
    label: "Registry writes per rotation",
    description: "One Firestore update propagates to every connected app.",
  },
] as const;

export const TECH_STACK_GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    connectsTo: "backend",
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Firebase SDK", "Firestore Rules", "REST APIs"],
    connectsTo: "infrastructure",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    items: ["Docker", "Cloudflare Tunnel", "cloudflared", "Linux"],
    connectsTo: "ai",
  },
  {
    id: "ai",
    label: "AI",
    items: ["LM Studio", "Gemma-2B", "Immich CLIP", "Gemini (fallback)"],
    connectsTo: "cloud",
  },
  {
    id: "cloud",
    label: "Cloud",
    items: ["Firebase Hosting", "Cloud Firestore", "Cloudflare Edge"],
    connectsTo: null,
  },
] as const;

export function getConnectedEdges(
  nodeId: InfraNodeId,
  edges: InfraEdge[] = INFRA_EDGES,
): InfraEdge[] {
  return edges.filter((e) => e.from === nodeId || e.to === nodeId);
}

export function getConnectedNodeIds(
  nodeId: InfraNodeId,
  edges: InfraEdge[] = INFRA_EDGES,
): Set<InfraNodeId> {
  const connected = new Set<InfraNodeId>([nodeId]);
  for (const edge of getConnectedEdges(nodeId, edges)) {
    connected.add(edge.from);
    connected.add(edge.to);
  }
  return connected;
}

export function getNodeById(id: InfraNodeId): InfraNode | undefined {
  return INFRA_NODES.find((n) => n.id === id);
}
