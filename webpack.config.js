const path = require("path");
const webpack = require('webpack');

const config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use:"babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss)$/
      },
      {
       test: /\.(jpe?g|png|gif|svg)$/,
       use: [
         {
           loader:"url-loader",
           options: { limit: 40000}
         },
         "image-webpack-loader"
       ]
     }

    ]
  },
  devServer: {
    hot: true,
    publicPath: '/'
  },
  plugins: [
      new webpack.ProvidePlugin({
      $: 'jquery'
    }),
      new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
