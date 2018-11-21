/**
 * @file webpack dev conf(build for debug)
 * @author X-Jray(z.xuanjian@gmail.com)
 */

/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const ROOT_CONTEXT = path.resolve(__dirname, '../');
const ROOT_SRC = path.resolve(__dirname, '../src');
const babelrcFile = fs.readFileSync(path.join(ROOT_CONTEXT, '.babelrc'));
const babelrc = JSON.parse(babelrcFile);

module.exports = {

    context: ROOT_CONTEXT,

    entry: [
        './build/dev-client',
        './preview/index'
    ],

    output: {
        filename: '[name].[hash:7].js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader?cacheDirectory',
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../node_modules/@baidu')
                ],
                query: babelrc
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            {
                test: /\.(webp|png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1024 * 1024 * 5,
                    name: '[name].[hash:7].[ext]'
                },
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            {
                test: /\.(html|tpl)(\?.*)?$/,
                loader: 'html-loader',
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-cssnext')()
                            ]
                        }
                    },
                    'stylus-loader'
                ]
            }
        ],
        noParse: [
            /san$/
        ]
    },

    resolve: {
        alias: {
            'SRC_COMPONENT': ROOT_SRC
        },
        mainFields: [
            'jsnext:main',
            'browser',
            'main'
        ],
        modules: [
            path.resolve(__dirname, '../node_modules')
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../preview/index.html'),
            inject: true
        })
    ],

    devtool: 'cheap-module-eval-source-map',

    externals: {
        san: 'san',
        $: '$'
    }
};
