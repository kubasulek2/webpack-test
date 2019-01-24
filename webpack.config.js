const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
  devtool: "cheap-eval-source-map",
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "dist/",

filename: "bundle.js"
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
          miniCss.loader,'css-loader','sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          miniCss.loader,'css-loader'
        ]
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
      filename: 'styles.css'
    })
  ]
};