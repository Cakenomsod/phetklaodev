import * as admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";
import { Request, Response } from "express";

admin.initializeApp();

const db = admin.firestore();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

function applyCors(res: Response) {
  Object.entries(corsHeaders).forEach(([key, value]) => res.setHeader(key, value));
}

export const proxyImage = onRequest(
  {
    secrets: ["IMMICH_API_KEY"],
  },
  async (req: Request, res: Response) => {
    applyCors(res);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

  const assetId = typeof req.query.assetId === "string"
    ? req.query.assetId.trim()
    : Array.isArray(req.query.assetId)
      ? String(req.query.assetId[0]).trim()
      : "";

  if (!assetId) {
    res.status(400).json({ error: "Missing assetId query parameter." });
    return;
  }

  const immichApiKey = process.env.IMMICH_API_KEY;
  if (!immichApiKey) {
    res.status(500).json({ error: "IMMICH_API_KEY is not configured." });
    return;
  }

  try {
    const docRef = db.doc("system/tunnel_config");
    const snapshot = await docRef.get();

    if (!snapshot.exists) {
      res.status(502).json({ error: "Firestore document system/tunnel_config does not exist." });
      return;
    }

    const immichUrl = (snapshot.get("immich_url") as string | undefined)?.trim();
    if (!immichUrl) {
      res.status(502).json({ error: "Missing immich_url in system/tunnel_config document." });
      return;
    }

    const normalizedImmichUrl = immichUrl.replace(/\/+$/, "");
    const assetUrl = `${normalizedImmichUrl}/api/assets/${encodeURIComponent(assetId)}/original`;

    const immichResponse = await fetch(assetUrl, {
      headers: {
        "x-api-key": immichApiKey,
      },
    });

    if (!immichResponse.ok) {
      const body = await immichResponse.text();
      res
        .status(immichResponse.status === 404 ? 404 : 502)
        .json({ error: `Immich asset request failed with ${immichResponse.status}: ${body}` });
      return;
    }

    const contentType = immichResponse.headers.get("content-type") ?? "application/octet-stream";
    const imageBuffer = Buffer.from(await immichResponse.arrayBuffer());

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    applyCors(res);
    res.status(200).send(imageBuffer);
    return;
  } catch (error) {
    console.error("proxyImage error:", error);
    res.status(502).json({ error: `Unable to fetch Immich asset: ${(error as Error).message}` });
    return;
  }
});
