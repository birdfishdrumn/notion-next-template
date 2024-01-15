/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"], // Notionの画像がホストされているドメインを追加
  },
};

module.exports = nextConfig;
