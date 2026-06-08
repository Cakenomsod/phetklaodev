import type { Metadata } from "next";
import CyberCompetitorShowcase from "@/src/components/cybersecurity-competitor/CyberCompetitorShowcase";

export const metadata: Metadata = {
  title: "Cybersecurity Competitor — Thailand Cyber Top Talent 2025",
  description:
    "Interactive case study: national CTF ranking, competition timeline, and a technical challenge walkthrough across web security, cryptography, and network analysis.",
};

export default function CybersecurityCompetitorPage() {
  return <CyberCompetitorShowcase />;
}
