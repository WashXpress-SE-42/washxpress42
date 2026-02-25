import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production bundle sizes
  experimental: {
    optimizePackageImports: ["lucide-react", "date-fns"],
  },
  // Prefer smaller, modern image formats
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
