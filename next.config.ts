import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: "export",

  // Trailing slashes for cleaner URLs
  trailingSlash: true,

  // Optimize images for static export
  images: {
    unoptimized: true,
    qualities: [70, 75, 90],
  },

  // Experimental: scroll restoration behavior
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
