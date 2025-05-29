// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Any request starting with /api
        destination: "http://localhost:5000/api/:path*", // will be forwarded to your backend running on port 5000
      },
    ];
  },
};

module.exports = nextConfig;
