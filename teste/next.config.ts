import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@clerk/nextjs", "@clerk/ui"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
