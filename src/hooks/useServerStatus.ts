import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ServerStatus, isServerStatus } from "../types";



export function useServerStatus(documentId = "status", pollInterval = 60000) {
  const [data, setData] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchStatus() {
      try {
        if (!db) {
          if (isMounted) {
            setError("Firebase is not configured.");
            setData({ status: "unknown", message: "Firebase is not configured." });
            setLoading(false);
          }
          return;
        }

        const docRef = doc(db, "server_config", documentId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const raw = docSnap.data();
          if (isMounted) {
            if (isServerStatus(raw)) {
              setData(raw);
            } else {
              setData({ status: "unknown", message: "Invalid data format from Firestore." });
            }
          }
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("Error fetching status from Firestore:", err);
        if (isMounted) {
          setError(message);
          setData({ status: "unknown", message });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchStatus();

    const interval = setInterval(fetchStatus, pollInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [documentId, pollInterval]);

  return { data, loading, error };
}

export default useServerStatus;
