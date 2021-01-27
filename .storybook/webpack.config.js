const webpack = require("webpack")
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
  config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })]

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
    },
  });

  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.svg$/,
    use: [{ loader: "@svgr/webpack", options: { icon: true, svgo: true } }],
  });

  config.plugins.push(new webpack.DefinePlugin({
    'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['placekitten.com', 'res.cloudinary.com'],
      path: '/',
      loader: 'default',
    }),
  }));

  return config;
};
