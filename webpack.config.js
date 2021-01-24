const path = require('path');
const WebpackBar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: './src/main.js',
  watch: false,
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }],
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
    },
    {
      test: /\.s(a|c)ss$/,
      // test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(eot|svg|jpg|png|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }

    ]
  },
  plugins: [
    new WebpackBar(), new VueLoaderPlugin()],
  resolve: {
    extensions: [ '.js']
  },
  output: {
    filename: 'personalsite.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'empty',
    globalObject: 'this'
  }
};