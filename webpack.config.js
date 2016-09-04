var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: [APP_PATH],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [{
            test: /\.tsx?$/, loaders: ['ts-loader'], exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: APP_PATH
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'test typescript webpack'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};