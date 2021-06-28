const {
    resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "js/[name].[contenthash:8].js", // 添加了hash值, 实现静态资源的长期缓存
        path: resolve(__dirname, "../build"),
        publicPath: "/", // 所有输出资源公共路径
    },
    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/, // 只检测js文件
                exclude: /node_modules/, // 排除node_modules文件夹
                enforce: "pre", // 提前加载使用
                use: {
                    // 使用eslint-loader解析
                    loader: "eslint-loader",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
                    },
                },
            },
            {
                test: [/\.ttf$/, /\.woff$/, /\.woff2$/],
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[id].[contenthash:8].css",
        }),
        new CssMinimizerPlugin({})
    ],
    target: 'browserslist'
}