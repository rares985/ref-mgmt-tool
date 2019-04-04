const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /* Entry point  */
  entry: "./src/index.js",

  /* Where the bundle.js file will be created */
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      /* Transpile To <= ES5 */
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ["babel-loader"]
      },

      /* Load CSS */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./dist/index.html",
      inject: true
    })
  ],
  devServer: {
    inline: true,
    contentBase: "dist/",
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    port: 8080
  }
};
