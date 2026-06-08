import type { Metadata } from "next";
import FinanceTrackerShowcase from "@/src/components/finance-tracker/FinanceTrackerShowcase";

export const metadata: Metadata = {
  title: "AI-Powered Finance & Trip Tracker",
  description:
    "Interactive case study: AI receipt processing, greedy debt settlement, and hybrid cloud architecture for group travel expenses.",
};

export default function FinanceTrackerPage() {
  return <FinanceTrackerShowcase />;
}
