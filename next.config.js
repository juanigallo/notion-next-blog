/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_LOGO: process.env.APP_LOGO,
  },
};

module.exports = nextConfig;
