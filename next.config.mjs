/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        port: '',
        pathname: '/8493/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fntr6-1.fna.fbcdn.net',
        port: '',
        pathname: '/v/**',
      },
    ],
  },
  poweredByHeader: false,
}

export default nextConfig
