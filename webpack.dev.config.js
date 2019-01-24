const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  devtool: false,
  optimization: {
    splitChunks:{
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: "_"
    }
  },
  entry: {
    app: './src/index.js',
    image: './src/image.js'
  },
  mode: 'development',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, './dist'),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options:{
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: 'sass-loader',
            options:{
              sourceMap: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      }
    ]

  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new cleanWebpack('dist'),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['app', 'vendors~app~image'],
    }),
    new htmlWebpackPlugin({
      filename: 'image.html',
      template: './index.html',
      chunks: ['image','vendors~app~image'],
    }),
    new webpack.SourceMapDevToolPlugin({
      exclude: /(?=.*vendors)(?=.*.js)/
    })
  ]
};