const path = require('path');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true, svgo: false } }],
    });
    return config;
  },
};
