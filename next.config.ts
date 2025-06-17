/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Optional: if using env vars
  env: {
    NEXT_PUBLIC_LIVEKIT_URL: process.env.NEXT_PUBLIC_LIVEKIT_URL,
  },

  // Optional: if you use custom headers, rewrites, etc.
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },

  // Optional: custom base path if your app runs in a subdirectory
  // basePath: '/your-base-path',
};

module.exports = nextConfig;
