/** @type {import('next').NextConfig} */
const nextConfig = {async redirects() {
    return [
      {
        source: '/',
        destination: '/services',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
