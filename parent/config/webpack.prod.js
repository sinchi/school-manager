const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const jsonPackage = require('../package.json');

const configProd = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/parent/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'parent_manager',
            filename: 'remoteEntry.js',
            exposes: {
                './ParentManager': './src/bootstrap'
            },
            shared: jsonPackage.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, configProd);