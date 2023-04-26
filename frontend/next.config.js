/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_BASE_URL: process.env.API_BASE_URL,
  },
};
