/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.chec.io",
        pathname: "/merchants/47851/**"
      }
    ]
  }
}

module.exports = nextConfig
