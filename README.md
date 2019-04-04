# Referee Management Tool

Application for organizing and allocating referees to matches

## Components

This application consists of 4 pages: News, Referees, Matches and Login

### News

This page is a simple news/post page, where items are displayed as Google-style cards

### Referees

This is a query page, where one can search for various referees in the database using
the dropdown queries provided.

### Matches

This page is also a querying one, where searches can be made using the dropdown queries provided.

### Login

Simple login page, transforms into "My Profile" after a successful login

### Tools used

#### Visual Studio Code

##### Extensions

1. Beautify
2. Bracket Pair Colorizer
3. ESLint
4. Import Cost
5. indent-rainbow
6. TODO Highlight
7. Todo+

#### Webpack

Webpack was used for _bundling_ and minimizing the code _minimizing_
Two configuration files were used: `webpack.config.dev.js` and `webpack.config.prod.js`, the former
for development, and the latter for production.

Here is the `webpack.config.dev.js` file:

```javascript
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
```

And this one is the `webpack.config.prod.js` file:

```javascript
const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

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

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
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
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new BundleAnalyzerPlugin()
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
```
