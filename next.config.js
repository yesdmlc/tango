/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        ws: false,
      };
    }

    // Ignore the dynamic require warning that bubbles up from @supabase/realtime-js
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /Critical dependency: the request of a dependency is an expression/,
    ];

    return config;
  },
};

module.exports = nextConfig;
