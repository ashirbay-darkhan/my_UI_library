const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: 'react',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ "style-loader", "css-loader"] },
      { test: /\.(ts|tsx)?$/, use: ['ts-loader'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}