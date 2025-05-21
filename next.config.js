/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'], // adicione domínios externos aqui se necessário
  },
};

module.exports = nextConfig;
