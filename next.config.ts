import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // <--- ADICIONE ESSA LINHA
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
