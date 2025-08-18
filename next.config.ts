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
        destination: 'https://icebreg-backend2.onrender.com/api/:path*', // Proxy to backend
      },
    ];
  },
};

export default nextConfig;
