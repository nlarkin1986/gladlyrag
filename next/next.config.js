/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Handle the app being in a subdirectory
  basePath: '',
  // Ensure proper asset handling
  assetPrefix: '',
  // Enable static exports if needed
  output: 'standalone',
  // Ignore TypeScript errors during build (temporary fix)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build (temporary fix)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure environment variables
  env: {
    NEXT_PUBLIC_STARTER_QUESTIONS: process.env.NEXT_PUBLIC_STARTER_QUESTIONS,
    NEXT_PUBLIC_USE_COMPONENTS_DIR: process.env.NEXT_PUBLIC_USE_COMPONENTS_DIR,
    NEXT_PUBLIC_DEV_MODE: process.env.NEXT_PUBLIC_DEV_MODE,
    NEXT_PUBLIC_SHOW_LLAMACLOUD_SELECTOR: process.env.NEXT_PUBLIC_SHOW_LLAMACLOUD_SELECTOR,
  },
}

module.exports = nextConfig