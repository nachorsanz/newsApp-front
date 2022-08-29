/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
      domains: ["*.*", "cdn.computerhoy.com"],
    },
  },
};

module.exports = nextConfig;
