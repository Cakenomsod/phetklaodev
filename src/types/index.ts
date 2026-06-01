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
  thumbnail: string;
  fullDescription: string;
  highlights: string[];
}

export interface ServerStatus {
  status: "online" | "offline" | "unknown";
  message?: string;
}