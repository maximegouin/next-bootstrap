/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  sassOptions: {
    additionalData: `@import "src/assets/styles/variables.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
