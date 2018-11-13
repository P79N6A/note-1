/**
 * @file webpack prod conf
 * @author X-Jray(z.xuanjian@gmail.com)
 */

/* eslint-disable */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_CONTEXT = path.resolve(__dirname, '..');
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
                widgetEntry[item] = './src/' + item + '/.widget';
            }
        });
        return widgetEntry;
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]/[name]-compile.js',
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
                query: 'babelrc'
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
                use: [
                    {
                        loader: '@baidu/bosupload-loader',
                        options: {
                            accountConfig: {
                                credentials: {
                                    ak: '9ba279a352154d55bc3ce5352ff41239',
                                    sk: 'c56e58c46ed44ace81d4f6f59c9ddfef'
                                },
                                endpoint: 'http://bj.bcebos.com',
                                urlPrefix: '//eopa.bdstatic.com/',
                                bucket: 'jadyoap'
                            },
                            publicPath: path.join(ROOT_CONTEXT, 'dist/')
                        }
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 5,
                            name: '[name].[hash:7].[ext]'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            plugins: [
                                require('imagemin-gifsicle')({
                                    interlaced: false
                                }),
                                require('imagemin-mozjpeg')({
                                    progressive: true,
                                    arithmetic: false
                                }),
                                require('imagemin-pngquant')({
                                    floyd: 0.5,
                                    speed: 2
                                }),
                                require('imagemin-svgo')({
                                    plugins: [
                                        {
                                            removeTitle: true
                                        },
                                        {
                                            convertPathData: false
                                        }
                                    ]
                                })
                            ]
                        }
                    }
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
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
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
                })
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
        }),
        new ExtractTextPlugin({
            filename: `[name]/[name]-compile.css`
        })
    ],

    externals: {
        san: 'san',
        $: '$'
    }
};
