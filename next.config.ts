import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: "export",

  // Trailing slashes for cleaner URLs
  trailingSlash: true,

  // Optimize images for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
