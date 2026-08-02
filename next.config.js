/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Remove experimental entirely (or keep only if needed)
  // experimental: {
  //   serverActions: true, // Next.js 14 enables by default
  // },
}

module.exports = nextConfig