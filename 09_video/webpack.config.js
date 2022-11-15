const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.ts',
        // second: './src/second.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    // target: 'es5',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./video"
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        // new MiniCssExtractPlugin(),
    ].concat(
        ["index"].map((page, index) => {
            if (index == 1) {
                return new HtmlWebpackPlugin({
                    inject: 'body',
                    title: `${page} Page`,
                    filename: `${page}.html`,
                    template: `./view/${page}.html`,
                    chunks: ["second"],
                });
            }

            return new HtmlWebpackPlugin({
                inject: 'body',
                title: `${page} Page`,
                filename: `${page}.html`,
                template: `./view/${page}.html`,
                chunks: ["main"],
            });
        }),
    ),


    devtool: "inline-source-map",
    devServer: {
        port: 8080,
        open: true,
        compress: true,
        hot: true,
        liveReload: true,
    },

    mode: 'development',
};