require('dotenv').config();

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = () => merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost',
        port: process.env.CLIENT_PORT,
        proxy: {
            '/api': {
                target: `http://localhost:${process.env.SERVER_PORT}`,
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.API_URL': '\'/\'',
            'process.env.NODE_ENV': '\'development\'',
        }),
    ],
});