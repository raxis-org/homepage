import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images:{
    loader: "default",
    domains: ["https://raxistech.netlify.app","https://raxis.tech"],
    unoptimized: true,
  },
  
};

export default nextConfig;
