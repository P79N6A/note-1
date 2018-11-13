/**
 * @file webpack preview conf(build as one bundle)
 * @author X-Jray(z.xuanjian@gmail.com)
 */

/* eslint-disable fecs-camelcase */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ROOT_CONTEXT = path.resolve(__dirname, '../');
const ROOT_SRC = path.resolve(__dirname, '../src');
const SRC_ITEMS = fs.readdirSync(ROOT_SRC);
const babelrcFile = fs.readFileSync(path.join(ROOT_CONTEXT, '.babelrc'));
const babelrc = JSON.parse(babelrcFile);

module.exports = {

    context: ROOT_CONTEXT,

    entry: () => {
        const widgetEntry = {};
        SRC_ITEMS.forEach(item => {
            if (item === '.DS_Store') {
                return;
            }
            if (!path.extname(item)) {
                widgetEntry[item] = './src/' + item + '/.schema';
            }
        });
        return widgetEntry;
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]/[name].editor.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
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
                test: /\.(html|tpl)(\?.*)?$/,
                loader: 'html-loader',
                include: [
                    path.resolve(__dirname, '../src')
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true
            },
            output: {
                beautify: false,
                comments: false
            }
        })
    ],

    externals: {
        san: 'san',
        $: '$'
    }
};
