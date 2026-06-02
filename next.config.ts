/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🌟 ใส่บรรทัดนี้เพื่อบังคับให้ Next.js สร้างโฟลเดอร์ 'out'
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ['100.66.166.16'],
};

module.exports = nextConfig;