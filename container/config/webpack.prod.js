const {merge} = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const jsonPackage = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'SchoolManager',
            remotes: {
                'student': `student_manager@${domain}/student/latest/remoteEntry.js`,
                'teacher': `teacher_manager@${domain}/teacher/latest/remoteEntry.js`,
                'parent': `parent_manager@${domain}/parent/latest/remoteEntry.js`
            },
            shared: jsonPackage.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
module.exports = merge(commonConfig, prodConfig);