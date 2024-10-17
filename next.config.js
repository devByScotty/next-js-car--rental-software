/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio', 'image.civitai.com'], // Domains where images can be fetched from
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',  // Pexels images
          },
          {
            protocol: 'https',
            hostname: 'www.pexels.com',  // Pexels website (if needed for some assets)
          },
        ],
      },
}

module.exports = nextConfig
