import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['randomuser.me', 'i.ytimg.com', 'img.youtube.com'], // add more as needed
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api-icebreg-back-git-f4697b-pratikpaliwal355-gmailcoms-projects.vercel.app/api/:path*', // Proxy to backend
      },
    ];
  },
};

export default nextConfig;
