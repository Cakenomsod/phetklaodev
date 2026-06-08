export type ArchNodeId =
  | "frontend"
  | "auth"
  | "firestore"
  | "ai-pipeline"
  | "gemini"
  | "local-llm"
  | "immich";

export type ArchNode = {
  id: ArchNodeId;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
  layer: "client" | "cloud" | "ai" | "storage";
  purpose: string;
  technologies: string[];
  responsibilities: string[];
};

export type ArchEdge = {
  id: string;
  from: ArchNodeId;
  to: ArchNodeId;
  label?: string;
};

export type Transfer = {
  id: string;
  from: string;
  to: string;
  amount: number;
};

export const HERO_METRICS = {
  activeUsers: 12,
  techCount: 7,
  settlementReduction: 67,
  accuracyRate: 94,
} as const;

export const HERO_TECHNOLOGIES = [
  "Next.js",
  "Firestore",
  "Firebase Auth",
  "Gemini",
  "Zod",
  "Immich",
  "Local LLM",
] as const;

export const PROBLEM_SCENARIO = {
  tripName: "Krabi Beach Trip · 4 days · 5 friends",
  expenses: [
    { id: "e1", payer: "Phet", item: "Villa deposit", amount: 8400, split: 5 },
    { id: "e2", payer: "Nam", item: "Airport van", amount: 1200, split: 5 },
    { id: "e3", payer: "Beam", item: "Grocery run", amount: 1860, split: 5 },
    { id: "e4", payer: "Fah", item: "Island tour", amount: 4500, split: 5 },
    { id: "e5", payer: "Tor", item: "Late-night grab", amount: 680, split: 5 },
    { id: "e6", payer: "Phet", item: "BBQ supplies", amount: 2340, split: 5 },
    { id: "e7", payer: "Nam", item: "Scooter rental", amount: 1600, split: 2 },
    { id: "e8", payer: "Beam", item: "Pharmacy", amount: 420, split: 3 },
  ],
  chaosPoints: [
    "Three different spreadsheets, none in sync",
    "Receipt photos buried in a group chat",
    "Manual math errors on day three",
    "Nobody knew who still owed whom at checkout",
  ],
} as const;

export const PRODUCT_INSIGHTS = [
  {
    id: "behavior",
    kicker: "Observed behavior",
    headline: "People track expenses late, not in real time",
    body: "Friends photographed receipts immediately but logged amounts hours later—often from memory. The friction wasn't willingness; it was typing structured data on a phone after a long day.",
    signal: "Receipt capture must be faster than typing",
  },
  {
    id: "gaps",
    kicker: "Existing solutions",
    headline: "Splitwise solves splitting, not settlement clarity",
    body: "Popular apps calculate who owes what but leave groups with too many peer-to-peer transfers. For a 5-person trip, users still manually figure out the simplest way to settle up.",
    signal: "Minimize transfers, not just record debts",
  },
  {
    id: "interviews",
    kicker: "User interviews",
    headline: "Privacy and trust mattered as much as math",
    body: "Four of five interviewees said they would not upload financial receipts to unknown cloud storage. They wanted group features with personal control—shared ledgers, private media.",
    signal: "Self-hosted media + cloud compute hybrid",
  },
] as const;

export const ARCH_NODES: ArchNode[] = [
  {
    id: "frontend",
    label: "Next.js Frontend",
    shortLabel: "Frontend",
    x: 400,
    y: 80,
    layer: "client",
    purpose: "React 19 client with trip workspaces, expense forms, and settlement dashboards. Server routes proxy AI and media calls.",
    technologies: ["Next.js", "React 19", "Tailwind", "Server Actions"],
    responsibilities: [
      "Trip-scoped expense CRUD",
      "Receipt upload orchestration",
      "Settlement preview UI",
      "OAuth session handling",
    ],
  },
  {
    id: "auth",
    label: "Firebase Authentication",
    shortLabel: "Auth",
    x: 120,
    y: 200,
    layer: "cloud",
    purpose: "Google OAuth with per-user identity. Trip membership enforced at the Firestore rules layer—not in client code.",
    technologies: ["Firebase Auth", "Google OAuth", "ID Tokens"],
    responsibilities: [
      "Sign-in / sign-out flows",
      "JWT propagation to API routes",
      "User-scoped document access",
    ],
  },
  {
    id: "firestore",
    label: "Cloud Firestore",
    shortLabel: "Firestore",
    x: 400,
    y: 280,
    layer: "cloud",
    purpose: "Canonical ledger for trips, expenses, members, and settlement snapshots. Real-time listeners keep group views synchronized.",
    technologies: ["Firestore", "Security Rules", "Composite Indexes"],
    responsibilities: [
      "Trip & member documents",
      "Expense records with audit trail",
      "Net balance snapshots",
      "Rules-enforced isolation",
    ],
  },
  {
    id: "ai-pipeline",
    label: "AI Receipt Pipeline",
    shortLabel: "AI Pipeline",
    x: 680,
    y: 200,
    layer: "ai",
    purpose: "Server-side pipeline: regex pre-parse → structured Gemini prompt → Zod validation → typed expense draft.",
    technologies: ["Node.js API Routes", "Regex", "Zod", "JSON Schema"],
    responsibilities: [
      "OCR text normalization",
      "Token-efficient prompting",
      "Schema validation & retry",
      "Fallback routing",
    ],
  },
  {
    id: "gemini",
    label: "Gemini API",
    shortLabel: "Gemini",
    x: 680,
    y: 380,
    layer: "ai",
    purpose: "Primary LLM for receipt field extraction. Structured output mode with strict JSON schema reduces hallucination.",
    technologies: ["Gemini 1.5 Flash", "Structured Output", "Vision"],
    responsibilities: [
      "Merchant & amount extraction",
      "Date & category inference",
      "Multi-language receipt support",
    ],
  },
  {
    id: "local-llm",
    label: "Local LLM (LM Studio)",
    shortLabel: "Local LLM",
    x: 520,
    y: 480,
    layer: "ai",
    purpose: "Privacy fallback when cloud AI is unavailable or user opts out. Gemma-2B runs on home server via LM Studio.",
    technologies: ["LM Studio", "Gemma-2B", "OpenAI-compatible API"],
    responsibilities: [
      "Offline receipt parsing",
      "Zero per-request cloud cost",
      "Sensitive data stays on-premise",
    ],
  },
  {
    id: "immich",
    label: "Immich Media Server",
    shortLabel: "Immich",
    x: 120,
    y: 420,
    layer: "storage",
    purpose: "Self-hosted receipt image storage. Files never touch third-party CDNs—resolved via dynamic tunnel registry.",
    technologies: ["Immich API", "Cloudflare Tunnel", "Self-hosted"],
    responsibilities: [
      "Receipt image persistence",
      "Album-scoped access per trip",
      "Tunnel-aware URL resolution",
    ],
  },
];

export const ARCH_EDGES: ArchEdge[] = [
  { id: "a1", from: "frontend", to: "auth", label: "OAuth" },
  { id: "a2", from: "frontend", to: "firestore", label: "CRUD" },
  { id: "a3", from: "frontend", to: "ai-pipeline", label: "scan receipt" },
  { id: "a4", from: "frontend", to: "immich", label: "upload" },
  { id: "a5", from: "ai-pipeline", to: "gemini", label: "extract" },
  { id: "a6", from: "ai-pipeline", to: "local-llm", label: "fallback" },
  { id: "a7", from: "ai-pipeline", to: "firestore", label: "save draft" },
  { id: "a8", from: "auth", to: "firestore", label: "rules check" },
  { id: "a9", from: "ai-pipeline", to: "immich", label: "fetch receipt image" },];

export const AI_PIPELINE_STAGES = [
  {
    id: "receipt",
    label: "Receipt Image",
    kicker: "Input",
    content: {
      merchant: "7-Eleven · Krabi",
      total: "฿347.00",
      items: ["Water ×6", "Snacks", "Ice"],
      raw: "[blurred receipt photo]",
    },
  },
  {
    id: "regex",
    label: "Regex Preprocessing",
    kicker: "Normalize",
    content: {
      extracted: [
        "TOTAL: 347.00",
        "DATE: 14/03/2026",
        "STORE: 7-ELEVEN",
      ],
      stripped: ["barcode noise", "footer ads", "duplicate spaces"],
      tokenSaved: "~38%",
    },
  },
  {
    id: "prompt",
    label: "Structured Prompt",
    kicker: "Constrain",
    content: {
      system: "Extract expense fields. Return JSON only.",
      schema: "{ merchant, amount, date, category, currency }",
      context: "Thai receipt · THB · travel snacks",
    },
  },
  {
    id: "gemini",
    label: "Gemini",
    kicker: "Infer",
    content: {
      response: {
        merchant: "7-Eleven",
        amount: 347,
        date: "2026-03-14",
        category: "food",
        currency: "THB",
      },
      latency: "1.2s",
      model: "gemini-1.5-flash",
    },
  },
  {
    id: "zod",
    label: "Zod Validation",
    kicker: "Verify",
    content: {
      checks: [
        { field: "amount", status: "pass", note: "positive number" },
        { field: "date", status: "pass", note: "ISO 8601" },
        { field: "currency", status: "pass", note: "enum THB|USD" },
        { field: "category", status: "pass", note: "known enum" },
      ],
      retries: 0,
    },
  },
  {
    id: "record",
    label: "Expense Record",
    kicker: "Persist",
    content: {
      id: "exp_8f2a",
      trip: "Krabi Beach",
      payer: "Beam",
      split: 5,
      perPerson: 69.4,
      status: "confirmed",
    },
  },
] as const;

export const DEBT_MEMBERS = [
  { id: "phet", name: "Phet", balance: 820, color: "#3b82f6" },
  { id: "nam", name: "Nam", balance: -340, color: "#8b5cf6" },
  { id: "beam", name: "Beam", balance: -180, color: "#06b6d4" },
  { id: "fah", name: "Fah", balance: -210, color: "#f59e0b" },
  { id: "tor", name: "Tor", balance: -90, color: "#10b981" },
] as const;

export const NAIVE_TRANSFERS: Transfer[] = [
  { id: "n1", from: "Nam", to: "Phet", amount: 120 },
  { id: "n2", from: "Nam", to: "Beam", amount: 80 },
  { id: "n3", from: "Nam", to: "Fah", amount: 95 },
  { id: "n4", from: "Beam", to: "Phet", amount: 200 },
  { id: "n5", from: "Beam", to: "Fah", amount: 60 },
  { id: "n6", from: "Fah", to: "Phet", amount: 150 },
  { id: "n7", from: "Fah", to: "Tor", amount: 45 },
  { id: "n8", from: "Tor", to: "Phet", amount: 90 },
  { id: "n9", from: "Nam", to: "Tor", amount: 45 },
  { id: "n10", from: "Beam", to: "Tor", amount: 30 },
  { id: "n11", from: "Fah", to: "Beam", amount: 35 },
  { id: "n12", from: "Nam", to: "Fah", amount: 40 },
];

export const OPTIMIZED_TRANSFERS: Transfer[] = [
  { id: "o1", from: "Nam", to: "Phet", amount: 340 },
  { id: "o2", from: "Beam", to: "Phet", amount: 180 },
  { id: "o3", from: "Fah", to: "Phet", amount: 210 },
  { id: "o4", from: "Tor", to: "Phet", amount: 90 },
];

export const SETTLEMENT_ALGO = {
  name: "Greedy Minimum Transfer",
  complexity: "O(n log n)",
  steps: [
    "Compute net balance per member from all expenses",
    "Partition into creditors (+) and debtors (−)",
    "Sort both lists by absolute magnitude",
    "Greedily match largest creditor with largest debtor",
    "Transfer min(creditor, |debtor|), update balances, repeat",
  ],
  rationale:
    "Unlike graph-based min-cost flow, greedy matching on net balances is O(n log n), easy to audit, and reduces transfers to at most n−1 for n members—critical for mobile UX where every extra transfer is friction.",
} as const;

export const RELIABILITY_ITEMS = [
  {
    id: "auth",
    title: "Authentication",
    icon: "shield" as const,
    summary: "Google OAuth with server-verified ID tokens on every API route.",
    tradeoff: "Chose Firebase Auth over custom JWT to ship faster while keeping Firestore rules as the real security boundary.",
  },
  {
    id: "firestore",
    title: "Firestore Security Rules",
    icon: "lock" as const,
    summary: "Trip membership checked in rules—not client code. Users can only read/write expenses in trips they belong to.",
    tradeoff: "Rules complexity grows with features; every new collection needs explicit allow/deny paths tested in emulator.",
  },
  {
    id: "immich",
    title: "Local Media Storage",
    icon: "hard-drive" as const,
    summary: "Receipt images stored on self-hosted Immich. Cloud only sees OCR text, never raw financial photos.",
    tradeoff: "Tunnel-dependent availability vs. absolute privacy. Accepted occasional latency for sensitive assets.",
  },
  {
    id: "fallback",
    title: "Local LLM Fallback",
    icon: "cpu" as const,
    summary: "When Gemini is down or user opts out, pipeline routes to Gemma-2B on the home server.",
    tradeoff: "Lower extraction accuracy (~88% vs 94%) but zero cloud cost and full data sovereignty.",
  },
] as const;

export const RESULTS_METRICS = [
  {
    id: "time",
    value: 4,
    suffix: " min",
    label: "Avg. expense entry",
    description: "Down from ~12 min manual entry per receipt",
  },
  {
    id: "calc",
    value: 100,
    suffix: "%",
    label: "Manual math eliminated",
    description: "Settlement computed automatically on trip close",
  },
  {
    id: "users",
    value: 12,
    suffix: "",
    label: "Active users",
    description: "Friends & family across 3 deployed trips",
  },
  {
    id: "accuracy",
    value: 94,
    suffix: "%",
    label: "Receipt accuracy",
    description: "Gemini + Zod pipeline on Thai/EN receipts",
  },
] as const;

export const LESSONS_LEARNED = [
  {
    id: "product-first",
    kicker: "Product",
    headline: "Interview before interface",
    body: "The settlement algorithm came from watching friends argue about transfers—not from reading algorithm textbooks. User research directly shaped the MVP scope.",
  },
  {
    id: "ai-failures",
    kicker: "AI Engineering",
    headline: "Zod saved more time than Gemini",
    body: "Early pipeline returned plausible-but-wrong JSON. Strict Zod schemas with field-level error messages cut retry loops from 3.2 to 0.4 on average.",
  },
  {
    id: "hybrid",
    kicker: "Systems",
    headline: "Hybrid cloud isn't compromise—it's design",
    body: "Firestore for real-time sync, Immich for private media, Gemini for compute. Each layer does what it's best at. Monolith would have been simpler to deploy but worse on privacy.",
  },
  {
    id: "future",
    kicker: "Next",
    headline: "Multi-currency and offline-first",
    body: "Current greedy solver assumes single currency. Next iteration: FX-aware net balances and IndexedDB queue for expense capture without connectivity.",
  },
] as const;

export function getConnectedEdges(nodeId: ArchNodeId) {
  return ARCH_EDGES.filter((e) => e.from === nodeId || e.to === nodeId);
}

export function getConnectedNodeIds(nodeId: ArchNodeId): Set<ArchNodeId> {
  const ids = new Set<ArchNodeId>([nodeId]);
  for (const edge of getConnectedEdges(nodeId)) {
    ids.add(edge.from);
    ids.add(edge.to);
  }
  return ids;
}

export function getNodeById(id: ArchNodeId): ArchNode | undefined {
  return ARCH_NODES.find((n) => n.id === id);
}
