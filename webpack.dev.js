const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {

  entry: './src/client/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    writeToDisk: true,
    headers: {
    'Access-Control-Allow-Origin': '*'
    }
  },
  mode: 'development',
  output: {
    libraryTarget: 'var',
    library: 'Client'
    },
  module: {
    rules: [
    {
    test: '/.js$/',
    exclude: /node_modules/,
    loader: "babel-loader"
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    },
    {
      test: /.scss$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
    },
    plugins: [
      new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
      })
      ]
}