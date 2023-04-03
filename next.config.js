const hostnames = [
  'images.unsplash.com',
  'openweathermap.org',
]
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname
    }))
  },
}

module.exports = nextConfig
