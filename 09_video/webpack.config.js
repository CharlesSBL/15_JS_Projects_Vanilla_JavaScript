const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
  entry: {
    main: './src/main.ts',
    // second: './src/second.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "video"
            }
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin(),
  ].concat(
    [
      "index", 
      // "about", 
      // "contact-us",
    ].map((page, index) => {
      // if(index == 1){
      //   return new HtmlWebpackPlugin({
      //     inject: 'body',
      //     title: `${page} Page`,
      //     filename: `${page}.html`,
      //     template: `./view/${page}.hbs`,
      //     chunks: ["second"],
      //   });
      // }

      return new HtmlWebpackPlugin({
        inject: 'body',
        title: `${page} Page`,
        filename: `${page}.html`,
        template: `./view/${page}.hbs`,
        chunks: ["main"],
      });
    }),
  ),

  devtool: "inline-source-map",
  devServer: {
    port:8080,
    open:true,
    compress:true,
    hot:true,
    liveReload:true,
    // watchFiles: ["src/*.html"],
    // static: "./dist",
    // hot: true,
  },
  optimization: {
    // runtimeChunk: "single",
  },

  mode: 'development',
};