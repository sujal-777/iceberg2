import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {},
  images: {
    domains: ['randomuser.me', 'i.ytimg.com', 'img.youtube.com'], // add more as needed
  },
};

export default nextConfig;
