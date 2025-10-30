/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com", // YouTube's image CDN
        pathname: "/vi/**", // Allows all video thumbnails
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // Alternative domain
      },
    ],
  },
  //output: 'export', // Quitar si se usa SSR, dejar solo para exportacion estatica
};

module.exports = nextConfig;