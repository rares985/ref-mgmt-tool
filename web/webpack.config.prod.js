const webpack = require("webpack");
<<<<<<< HEAD
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
var nodeExternals = require("webpack-node-externals");
=======
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
>>>>>>> 48ebc436fc786c47252b9625781b563fd7a6a0ae

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
<<<<<<< HEAD
        exclude: path.resolve(__dirname, "node_modules"),
=======
        exclude: /node_modules/,
>>>>>>> 48ebc436fc786c47252b9625781b563fd7a6a0ae
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
<<<<<<< HEAD
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
=======

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new BundleAnalyzerPlugin(),
>>>>>>> 48ebc436fc786c47252b9625781b563fd7a6a0ae
    new OpenBrowserPlugin({ url: "http://localhost:8080" })
  ],
  devServer: {
    inline: true,
    contentBase: "./dist",
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    port: 8080
  }
};
