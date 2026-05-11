import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "filestoragesuper.blob.core.windows.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
