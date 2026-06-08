import type { Metadata } from "next";
import HomeServerShowcase from "@/src/components/home-server/HomeServerShowcase";

export const metadata: Metadata = {
  title: "Home Server Ecosystem",
  description:
    "Interactive case study: secure self-hosted infrastructure with Cloudflare Tunnels, Firestore synchronization, and local AI.",
};

export default function HomeServerPage() {
  return <HomeServerShowcase />;
}
