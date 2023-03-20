/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
