// import type { NextConfig } from "next";
const NextFederationPlugin = require('@module-federation/nextjs-mf');

// module.exports = {
//   webpack(config: { plugins: any[]; }, options: any) {
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'newsfeed',
//         filename: 'static/chunks/remoteEntry.js',
//         exposes: {
//           './FeedApp': './components/FeedApp',
//         },
//         shared: {
//           react: { singleton: true },
//           'react-dom': { singleton: true },
//         },
//       })
//     );
//     return config;
//   },
// };
// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [{
//       protocol: 'https',
//       hostname: 'ik.imagekit.io',
//       port: ''
//     }],
//   },
//   experimental:{
//     serverActions:{
//       bodySizeLimit:'50mb'
//     }
//   }
// };

module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'newsfeed',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          //'./FeedApp': './components/Feed'
          './FeedApp': './pages/layout',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      })
    );
    return config;
  },
};

//export default nextConfig;
