import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  serverExternalPackages: ['jsdom', 'canvas'],
  turbopack: {
  },
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
  },

};

export default nextConfig;
