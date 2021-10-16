const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const jsonPackage = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
           name: 'teacher_manager',
           filename: 'remoteEntry.js',
           exposes: {
               './TeacherManager': './src/bootstrap'
           },
            shared: jsonPackage.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);