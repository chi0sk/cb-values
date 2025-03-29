/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      'cdn.discordapp.com',
      'ext.same-assets.com',
      'i.imgur.com',
      'i.postimg.cc',
      'same-assets.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
