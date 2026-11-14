import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization: convert large JPG/WebP to AVIF/WebP automatically
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24 h browser cache for images
    qualities: [75, 85],
  },

  // Compress responses
  compress: true,
  poweredByHeader: false,

  // Aggressive Caching Headers for Static Assets
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|mp4|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

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
