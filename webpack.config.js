const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: './dist',
    },
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.ts',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
};
