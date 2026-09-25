/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Next 16 dev server blocks its JS/HMR for every host except localhost.
  // Opening the dev site via LAN IP (phone / another PC) without this = no JS:
  // sliders dead, preloader never closes. Extra hosts: DEV_ORIGINS="1.2.3.4,my.host"
  allowedDevOrigins: [
    "127.0.0.1", "192.168.*.*", "10.*.*.*", "172.*.*.*", "*.local",
    ...(process.env.DEV_ORIGINS ? process.env.DEV_ORIGINS.split(",").map((s) => s.trim()) : []),
  ],
};
export default nextConfig;
