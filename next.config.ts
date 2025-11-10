import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/books-97d7b.firebasestorage.app/o/**',
      },
    ],
  },
};

export default nextConfig;
