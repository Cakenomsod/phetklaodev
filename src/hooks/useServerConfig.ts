"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import {
  ServerStatus,
  isServerStatus,
  getTunnelUrlFromConfig,
} from "@/src/types";

export function useServerConfig(documentId = "status", pollInterval = 60000) {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [tunnelUrl, setTunnelUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchConfig() {
      try {
        if (!db) {
          setStatus({
            status: "unknown",
            message: "Firebase is not configured.",
          });
          setTunnelUrl(null);
          return;
        }

        const docRef = doc(db, "server_config", documentId);
        const docSnap = await getDoc(docRef);

        if (!isMounted) return;

        if (docSnap.exists()) {
          const raw = docSnap.data() as Record<string, unknown>;
          const url = getTunnelUrlFromConfig(raw);

          if (isServerStatus(raw)) {
            setStatus(raw);
          } else if (typeof raw.status === "string") {
            setStatus({
              status: raw.status as ServerStatus["status"],
              message:
                typeof raw.message === "string" ? raw.message : undefined,
            });
          } else {
            setStatus({ status: "unknown" });
          }

          setTunnelUrl(url);
        } else {
          setStatus({ status: "unknown", message: "No server config found." });
          setTunnelUrl(null);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("Error fetching server config:", err);
        if (isMounted) {
          setError(message);
          setStatus({ status: "unknown", message });
          setTunnelUrl(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchConfig();
    const interval = setInterval(fetchConfig, pollInterval);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [documentId, pollInterval]);

  return { status, tunnelUrl, loading, error };
}
