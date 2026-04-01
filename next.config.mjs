/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.173',
    'https://igeniusindia.in',
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'igeniusindia.in',
      },
    ],
  },
};

export default nextConfig;