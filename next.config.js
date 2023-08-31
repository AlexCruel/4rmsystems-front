/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const images = {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '8888',
      pathname: '/4rmsystems-server/storage/app/media/**',
    },
    {
      protocol: 'https',
      hostname: 'bipbap.ru',
      //port: '8888',
      //pathname: '/4rmsystems-server/storage/app/media/**',
    },
  ]
}

module.exports = {
  nextConfig,
  images
}
