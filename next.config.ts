import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        jquery: require.resolve('jquery'),
      };
    }
    return config;
  },

};
// next.config.js
module.exports = {
  images: {
    domains: ['appinventiv.com', 'videos.ctfassets.net','images.ctfassets.net'],
  },
};

export default nextConfig;
