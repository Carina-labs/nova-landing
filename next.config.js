/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/"
  }
}

module.exports = nextConfig
