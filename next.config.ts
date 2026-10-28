import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization: convert large JPG/WebP to AVIF/WebP automatically
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24 h browser cache for images
  },

  // Compress responses
  compress: true,

  // Experimental
  experimental: {
    agentFeedback: true,
    optimizePackageImports: ["lucide-react", "gsap"], // tree-shake icon bundles
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
