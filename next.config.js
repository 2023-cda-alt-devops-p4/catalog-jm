/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '2023-cda-alt-devops-p4.github.io',
        port: '',
        pathname: '/catalog-jm/img/**',
      },
    ],
  },

}

module.exports = nextConfig
