import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポートを有効にする
  loader: "default",
  domains: ["https://raxistech.netlify.app","https://raxis.tech"]
};

export default nextConfig;
