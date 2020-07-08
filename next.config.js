const path = require('path')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true, svgo: false}}],
    })

    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: false,
      }),
    )

    return config
  },
}
