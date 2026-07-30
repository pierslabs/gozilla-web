/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export to ./out (required for GitHub Pages)
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
