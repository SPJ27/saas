import type { NextConfig } from "next";

const nextConfig: NextConfig = {
module.exports = {
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://datafa.st/js/script.js',
        source: "/js/script.js",
        destination: "https://datafa.st/js/script.js",
      },
      {
        source: '/api/events',
        destination: 'https://datafa.st/api/events',
        source: "/api/events",
        destination: "https://datafa.st/api/events",
      },
    ]
    ];
  },
};};

export default nextConfig;
