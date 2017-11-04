const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  'devServer': {
    'contentBase': './static',
    'host': '0.0.0.0',
    'open': false,
    'port': 3000,
    'public': 'localhost:80'
  },
  'entry': './app/index.js',
  'module': {
    'rules': [
      { 'test': /\.(js|jsx)$/i, 'use': 'babel-loader' },
      { 'test': /\.css$/i, 'use': [ 'style-loader', 'css-loader' ] },
      { 'test': /\.(jpe?g|png|gif|svg)$/i, 'use': [ 'url-loader?limit=10000', 'img-loader' ] },
      { 'test': /\.json$/i, 'use': 'json-loader' }
    ],
  },
  'output': {
    'path': path.resolve(__dirname, 'dist'),
    'filename': 'bundle.js'
  },
  'plugins': [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
};