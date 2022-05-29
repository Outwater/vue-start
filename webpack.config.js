const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!axios)/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `
              @use "sass:color";
              @use "sass:list";
              @use "sass:map";
              @import "@/style/_variables";
              `,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8001,
  },
  devtool: "inline-source-map",
};
