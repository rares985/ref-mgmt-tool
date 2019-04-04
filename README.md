# Referee Management Tool

This project is a website whose purpose which allows for the organization and
allocation of referees to matches.

## Project structure

This repository contains both the front-end and the back-end of the application.
The former is included in the `web/` folder, whereas the latter is included in the `api/` folder.
Both folders are npm projects, each with their own separate `package.json` file.

## Front-end

This application consists of 4 pages: News, Referees, Matches and Login

#### News Component

This page is a simple news/post page, where items are displayed as Google-style cards

#### Referees Component

This is a query page, where one can search for various referees in the database using
the dropdown queries provided.

#### Matches Component

This page is also a querying one, where searches can be made using the dropdown queries provided.

#### Login Component

Simple login page, transforms into "My Profile" after a successful login

### Tools used

#### Visual Studio Code

##### Extensions

1. **Bracket Pair Colorizer** - colorizes bracket pairs
2. **ESLint** - Linter for ES5/6
3. **Import Cost** - Show the import size in bytes next to the import
4. **indent-rainbow** - colorizes indentation to make it easier to see
5. **TODO Highlight** - highlights constructs like `//TODO:` and `//FIXME:`
6. **Todo+** - gathers all constructs above together and adds some neat functionalities: time estimates, statuses etc
7. **Markdown Preview Enhanced** - Previews a Markdown file
8. **Markdown All in One** - Tools to help write a .MD file

#### Webpack

Webpack was used for _bundling_ and _minimizing_ the code
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

#### Babel

For transpiling from ES6 to <= ES5, Babel was used. Babel does not work out of the box with react and webpack,
so it also needs a configuration file, `.babelrc`, which exists in the root folder of the project (in our case, `web/`)
because that is the front-end of our application. Below is the `.babelrc` file:

```javascript
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```
