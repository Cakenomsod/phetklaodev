/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ['100.66.166.16'],
};

module.exports = nextConfig;
