import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 'home-server',
    title: 'Home Server System',
    shortDesc: 'Self-hosted infrastructure with AI, photo management, and dynamic tunnel routing',
    techStack: ['Docker', 'LM Studio', 'Immich', 'Cloudflare', 'Firebase', 'Node.js'],
    category: 'infrastructure',
    hasLiveUrl: false,
    liveUrl: null,         // ดึงจาก Firestore แทน
    githubUrl: null,       // private
    thumbnail: '/images/homeserver.png',
    fullDescription: `...อธิบายยาวๆ...`,
    highlights: [
      'Dynamic URL routing via Firestore',
      'Local AI via LM Studio',
      'Immich self-hosted photo storage',
    ]
  }
];
