import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  serverExternalPackages: ['jsdom', 'canvas'],

  turbopack: {
  },
};

export default nextConfig;
