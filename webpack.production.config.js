const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const cleanWebpack = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
    }
  },
  entry: {
    app: './src/index.js',
    image: './src/image.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "",

filename: "[name].[hash].js"
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
            loader: miniCss.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: 'sass-loader'
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
    new miniCss({
      filename: '[name].[hash].css'
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
    })
  ]
};