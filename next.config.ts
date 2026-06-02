import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Keep static export for Firebase Hosting
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ['100.66.166.16'],

  // Proxy /api/proxy-image to your Cloud Function (replace placeholder URL)
  async rewrites() {
    return [
      {
        source: '/api/proxy-image',
        // During `npm run dev`, this will forward requests to your Cloud Function.
        // ⚠️ Replace the following with your deployed Cloud Function URL.
        destination: 'https://proxyimage-xxxxx-uc.a.run.app',
      },
    ];
  },
};

export default nextConfig;