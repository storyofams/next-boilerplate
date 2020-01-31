const path = require('path')

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', {flow: false, typescript: true}]],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push({
    test: /\.svg$/,
    use: [{loader: '@svgr/webpack', options: {icon: true, svgo: true}}],
  })

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@components': path.resolve(__dirname, '../src/components'),
        '@lib': path.resolve(__dirname, '../src/lib'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        '@config': path.resolve(__dirname, '../src/config'),
        '@styles': path.resolve(__dirname, '../src/styles'),
      },
    },
  }
}
