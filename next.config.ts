import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  //images: { unoptimized: true }
  experimental: {
    ppr: 'incremental',
  }
};

export default nextConfig;
