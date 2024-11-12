/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint : {
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack']
        })
        return config
      },
      experimental: {
        largePageDataBytes: 800 * 1000, // Increases the limit to 800KB
      }
};

export default nextConfig;
