const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  devServer: {
    port: 8080,
    static: {
      directory: "./public",
    },
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["es2015", "react", "preset-env"],
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: "file",
      },
    ],
  },
};
