/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
    ],
  },
  // experimental: {
  //   serverComponentsExternalPackages: ["react-dom/server"],
  // },
  // reactServerComponents: { use: "react-dom/server" },

  experimental: {
    serverComponentsExternalPackages: ["@react-email/components"],
  },
};

export default nextConfig;
