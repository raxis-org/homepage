import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images:{
    loader: "default",
    domains: ["raxistech.netlify.app","https://raxis.tech"],
  },
  
};

export default nextConfig;
