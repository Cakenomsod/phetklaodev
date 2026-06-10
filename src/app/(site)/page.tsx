"use client";

import { useRouter } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import LandingIntro from "@/src/components/sections/LandingIntro";
import { siteConfig } from "@/src/config/site";
import { db, analytics } from "../../lib/firebase";

async function trackPortfolioClick(buttonType: string) {
  if (analytics) {
    logEvent(analytics, "view_portfolio", {
      type: buttonType,
      clicked_at: new Date().toISOString(),
    });
  }

  if (!db) return;

  try {
    let locationData = {
      ip: "Unknown",
      country: "Unknown",
      region: "Unknown",
      city: "Unknown",
    };

    try {
      const response = await fetch("https://ipapi.co/json/");
      if (response.ok) {
        const data = await response.json();
        locationData = {
          ip: data.ip || "Unknown",
          country: data.country_name || "Unknown",
          region: data.region || "Unknown",
          city: data.city || "Unknown",
        };
      }
    } catch (error) {
      console.error("Failed to fetch location, proceeding with defaults:", error);
    }

    await addDoc(collection(db, "click_logs"), {
      button: buttonType,
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      country: locationData.country,
      region: locationData.region,
      city: locationData.city,
      ip: locationData.ip,
    });
  } catch (error) {
    console.error("Error tracking click to Firestore:", error);
  }
}

export default function LandingPage() {
  const router = useRouter();
  const webPortfolioEnabled = siteConfig.features.webPortfolio;

  return (
    <LandingIntro
      onPdfClick={() => trackPortfolioClick("pdf")}
      onWebClick={
        webPortfolioEnabled
          ? () => {
              void trackPortfolioClick("web");
              router.push("/portfolio");
            }
          : undefined
      }
    />
  );
}
