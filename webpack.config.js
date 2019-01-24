const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const cleanWebpack = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: "cheap-eval-source-map",
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "",

filename: "bundle.[hash].js"
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
        test: /\.css$/,
        use: [
          {
            loader: miniCss.loader
          },
          {
            loader: 'css-loader',
            options:{
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
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
    new miniCss({
      filename: 'styles.[hash].css'
    }),
    new cleanWebpack('dist'),
    new htmlWebpackPlugin({
      template: './index.html',
    })
  ]
};