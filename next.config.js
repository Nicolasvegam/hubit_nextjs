/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['carvuk.com','carvuk.com/images'],
  },
}

const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    skipWaiting: true
  },
  nextConfig
})

