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
  webpack: (config) => {
    /**
     * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
     * Module parse failed: Unexpected character '�' (1:0)" error
     */
    config.resolve.alias.canvas = false;

    // You may not need this, it's just to support moduleResolution: 'node16'
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };

    return config;
  },
};

export default nextConfig;
