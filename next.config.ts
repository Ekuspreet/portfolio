import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
      {
        protocol: "https",
        hostname: "ejs.co",
      },
      {
        protocol: "https",
        hostname: "webassets.mongodb.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "cdn1.iconfinder.com",
      },
      {
        protocol: "https",
        hostname: "cdn.freebiesupply.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "vectorified.com",
      },
      {
        protocol: "https",
        hostname: "freelogopng.com",
      },
    ],
  },
};

export default nextConfig;
