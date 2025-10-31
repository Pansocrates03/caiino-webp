/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes de Next.js
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
  output: 'export', // Quitar si se usa SSR, dejar solo para exportacion estatica
  basePath: '', // Ajustar si se despliega en un subdirectorio
  trailingSlash: true, // Agregar slash al final de las rutas
};

module.exports = nextConfig;