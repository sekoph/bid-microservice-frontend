/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8002', // The port your FastAPI app is running on
        pathname: '/uploads/category_image/**', // Match all images in this folder
      },
    ],
  },
};
  
export default nextConfig;
  