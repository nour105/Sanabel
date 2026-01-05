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
        hostname: 'sanabelauto.com',
        pathname: '/storage/**',
      },

      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/storage/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/v1/marketing-leads',
        destination: 'https://sanabelauto.com/api/v1/marketing-leads',
      },
      // Optional: other API rewrites
      {
        source: '/api/v1/lead-search',
        destination: 'https://sanabelauto.com/api/v1/lead-search',
      },
      {
        source: '/api/v1/callback-requests',
        destination: 'https://sanabelauto.com/api/v1/callback-requests',
      },
    ];
  },
};

export default nextConfig;
