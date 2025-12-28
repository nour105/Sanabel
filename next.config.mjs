/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '192.168.1.10',
      port: '8000',
      pathname: '/storage/**',
    },
  ],
},

};

export default nextConfig;
