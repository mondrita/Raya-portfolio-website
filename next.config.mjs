/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // use remotePatterns instead of domains
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/themes',
      '@radix-ui/react-*',
      'lucide-react',
    ],
  },
};

export default nextConfig;
