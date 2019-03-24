const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  // ---Entry section---
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
    another: './src/another.js',
    typed: './src/typed.ts'
  },

  // ---Output section---
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
  },

  // ---Loaders---
  module: {
    rules: [
      // { test: /\.css$/, use: ['css-loader'] }
      // { test: /\.css$/, use: ['style-loader','css-loader'] },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
    ]
  },

  // ---Plugins---
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].styles.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      SOME_VALUE: JSON.stringify("some value from plugin"),
      BOOL_VALUE: true,
    }),
    new HtmlWebpackPlugin(),
  ],

  // ---Dev Server---
  devServer: {
    hot: false
  }
}
