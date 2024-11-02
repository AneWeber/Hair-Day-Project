const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  target:"web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
    },
    devServer: {
      static:{
        directory: path.join(__dirname, "dist")
      },
      port: 3333,
      open: true,
      liveReload: true,
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        favicon:path.resolve("src","assets","scissors.svg"),
      }),
      new CopyWebpackPlugin({
       patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets")
        }
       ]
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
          exclude: "/node_modules",
        },
        {
          test: /\.js$/i,
          use: {
            loader: "babel-loader",
            options: {
              presets: [['@babel/preset-env', { targets: "defaults" }]],
            },
          },
          exclude: "/node_modules",
        }
      ],
    },
}