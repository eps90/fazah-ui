const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash].js'
    },
    module:{
        loaders: [
            {
                test: /\.js/, loader: 'babel-loader', exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new WebpackCleanupPlugin()
    ]
};
