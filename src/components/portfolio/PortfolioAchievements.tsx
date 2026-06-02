import { useMemo, useState } from "react";
import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import AchievementDetailModal from "@/src/components/portfolio/AchievementDetailModal";
import type { Achievement } from "@/src/data/portfolioData";
import { cn } from "@/src/lib/utils";

type PortfolioAchievementsProps = {
  items: Achievement[];
};

export default function PortfolioAchievements({
  items,
}: PortfolioAchievementsProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const modalMedia = useMemo(() => {
    if (!selectedAchievement?.media) return undefined;

    const mediaItems = Array.isArray(selectedAchievement.media)
      ? selectedAchievement.media.filter(Boolean)
      : selectedAchievement.media
      ? [selectedAchievement.media]
      : [];

    if (mediaItems.length === 0) return undefined;

    return mediaItems.map((item) => {
      if (item.startsWith("/api/proxy-image") || item.startsWith("http://") || item.startsWith("https://")) {
        return item;
      }
      return `/api/proxy-image?assetId=${encodeURIComponent(item)}`;
    });
  }, [selectedAchievement]);

  return (
    <PortfolioSection
      id="achievements"
      label="Recognition"
      title="Achievements & awards"
    >
      <ul className="space-y-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-l-2 border-[var(--portfolio-border)] pl-5"
          >
            <button
              type="button"
              onClick={() => setSelectedAchievement(item)}
              className="group w-full text-left"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex flex-col">
                  <h3
                    className={cn(
                      "text-lg font-semibold transition-colors duration-150",
                      item.featured
                        ? "text-[var(--portfolio-red)]"
                        : "text-[var(--portfolio-text)]",
                    )}
                  >
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="mt-1 inline-block w-fit rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      {item.badge}
                    </span>
                  )}
                </div>

                <time
                  dateTime={item.date}
                  className="text-sm font-medium text-[var(--portfolio-muted)]"
                >
                  {item.date}
                </time>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--portfolio-blue)]">
                {item.issuer}
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--portfolio-muted)]">
                {item.description}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <AchievementDetailModal
        open={selectedAchievement !== null}
        achievement={selectedAchievement}
        media={modalMedia}
        onClose={() => setSelectedAchievement(null)}
      />
    </PortfolioSection>
  );
}
