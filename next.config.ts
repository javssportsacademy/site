import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || (process.env.NODE_ENV === "production" && repoName ? `/${repoName}` : ""),
  images: {
    unoptimized: true,
  },
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
