/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
   webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false, // Tell Webpack to ignore 'net' on client side
        tls: false,
        fs: false,
        child_process:false
      };
    }
    return config;
  },
}

export default nextConfig
