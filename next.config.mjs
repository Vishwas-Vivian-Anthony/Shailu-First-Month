/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages; the repo name becomes the URL prefix there.
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
