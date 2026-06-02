import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from 'firebase/analytics'

let firebaseConfig = {};

if (process.env.NEXT_PUBLIC_FIREBASE_CONFIG) {
  try {
    firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);
  } catch (error) {
    console.error("Failed to parse NEXT_PUBLIC_FIREBASE_CONFIG JSON:", error);
  }
} else {
  firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

function hasValidConfig(config: Record<string, unknown>): boolean {
  return Boolean(
    config.apiKey &&
      config.projectId &&
      typeof config.apiKey === "string" &&
      config.apiKey !== "undefined",
  );
}

const configRecord = firebaseConfig as Record<string, unknown>;
const app =
  getApps().length === 0 && hasValidConfig(configRecord)
    ? initializeApp(firebaseConfig)
    : getApps().length > 0
      ? getApp()
      : null;

const db = app ? getFirestore(app) : null;

export const analytics = (typeof window !== 'undefined' && app) ? getAnalytics(app) : null;

export { app, db };
export default app;