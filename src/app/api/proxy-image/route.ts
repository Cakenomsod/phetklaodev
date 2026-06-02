import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type FirestoreTunnelConfigResponse = {
  fields?: {
    immich_url?: {
      stringValue?: string;
    };
  };
};

async function fetchImmichTunnelUrl(projectId: string): Promise<string> {
  const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(
    projectId,
  )}/databases/(default)/documents/system/tunnel_config`;

  const response = await fetch(firestoreUrl);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Firestore request failed with ${response.status}: ${body}`);
  }

  const json = (await response.json()) as FirestoreTunnelConfigResponse;
  const immichUrl = json.fields?.immich_url?.stringValue?.trim();

  if (!immichUrl) {
    throw new Error("Firestore document is missing fields.immich_url.stringValue");
  }

  return immichUrl.replace(/\/+$/, "");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const assetId = url.searchParams.get("assetId")?.trim();

  if (!assetId) {
    return NextResponse.json({ error: "Missing assetId query parameter." }, { status: 400 });
  }

  const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
  const immichApiKey = process.env.IMMICH_API_KEY;

  if (!firebaseProjectId) {
    return NextResponse.json(
      { error: "FIREBASE_PROJECT_ID is not configured in the environment." },
      { status: 500 },
    );
  }

  if (!immichApiKey) {
    return NextResponse.json(
      { error: "IMMICH_API_KEY is not configured in the environment." },
      { status: 500 },
    );
  }

  let immichUrl: string;

  try {
    immichUrl = await fetchImmichTunnelUrl(firebaseProjectId);
  } catch (error) {
    return NextResponse.json(
      { error: `Unable to read immich_url from Firestore: ${(error as Error).message}` },
      { status: 502 },
    );
  }

  const assetUrl = `${immichUrl}/api/assets/${encodeURIComponent(assetId)}/original`;

  let immichResponse: Response;
  try {
    immichResponse = await fetch(assetUrl, {
      headers: {
        "x-api-key": immichApiKey,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Unable to fetch asset from Immich: ${(error as Error).message}` },
      { status: 502 },
    );
  }

  if (!immichResponse.ok) {
    const body = await immichResponse.text();
    return NextResponse.json(
      { error: `Immich asset request failed with ${immichResponse.status}: ${body}` },
      { status: immichResponse.status === 404 ? 404 : 502 },
    );
  }

  const contentType = immichResponse.headers.get("content-type") ?? "application/octet-stream";
  const arrayBuffer = await immichResponse.arrayBuffer();

  return new NextResponse(arrayBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
