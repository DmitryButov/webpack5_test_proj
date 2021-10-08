const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production"

babel_loader_options = {
    "presets":
    [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": 'entry',
                "corejs": '3.18'
            }
        ]
    ]
}

wp_config = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true
    },
    stats: {
        entrypoints: true,
        assets: true,
    },
    optimization: {
        //splitChunks: { chunks: 'all' },
        minimizer: [ new CssMinimizerPlugin(), '...' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns:
            [
                {
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babel_loader_options
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
}

const create_webpack_config = () =>
{
    if (devMode)
    {
        wp_config.devtool = 'source-map'
        wp_config.devServer = { port: 8888 }
    }
    return wp_config
}

module.exports = create_webpack_config()