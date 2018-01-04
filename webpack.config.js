const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const DotEnvPlugin = require("dotenv-webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].[chunkhash].js",
        publicPath: "/",
        chunkFilename: "[name].[chunkhash].js"
    },
    module:{
        loaders: [
            {
                test: /\.js/, loader: "babel-loader", exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["./node_modules", "./node_modules/grommet/node_modules"]
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: "svg-react-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: path.resolve(__dirname, "src", "img", "favicon.ico")
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new DotEnvPlugin()
    ],
    devServer: {
        historyApiFallback: true
    }
};
