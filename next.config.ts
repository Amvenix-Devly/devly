import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amvenix.com",
        port: "",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "devly-mu.vercel.app",
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;





