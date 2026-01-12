/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      // Local backend (development)
      {
        protocol: 'http',
        hostname: '192.168.1.10',
        port: '8000',
        pathname: '/storage/**',
      },

      // Production dashboard
      {
        protocol: 'https',
        hostname: 'admin.sanabelauto.com',
        pathname: '/storage/**',
      },
       {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
