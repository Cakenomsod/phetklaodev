export function isServerStatus(data: unknown): data is ServerStatus {
  return (
    typeof data === "object" &&
    data !== null &&
    "status" in data &&
    typeof (data as ServerStatus).status === "string"
  );
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  techStack: string[];
  category: string;
  hasLiveUrl: boolean;
  liveUrl: string | null;
  githubUrl: string | null;
  thumbnail: string | null;
  fullDescription: string;
  highlights: string[];
}

export interface ServerStatus {
  status: "online" | "offline" | "unknown";
  message?: string;
  url?: string;
  tunnelUrl?: string;
  liveUrl?: string;
}

export function getTunnelUrlFromConfig(
  data: Record<string, unknown> | null | undefined,
): string | null {
  if (!data) return null;
  for (const key of ["tunnelUrl", "url", "liveUrl", "homelabUrl"] as const) {
    const value = data[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return null;
}