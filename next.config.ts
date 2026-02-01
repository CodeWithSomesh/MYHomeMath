import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ESLint and TypeScript run during build; fix any errors before deploy
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
