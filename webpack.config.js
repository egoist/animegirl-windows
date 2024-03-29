var path = require('path')
var vue = require('vue-loader')
var nib = require('nib')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] },
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          // apply babel transform to all javascript
          // inside *.vue files.
          js: 'babel?optional[]=runtime&stage=0',
          css: 'style!css!stylus'
        })
      },
    ]
  },
  plugins: [],
  stylus: {
    use: [nib()]
  }
}
