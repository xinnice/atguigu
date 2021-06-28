const {
    resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/main.js',
        path: resolve(__dirname, 'build'),
        clean: true
    },
    mode: 'development',
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
                use: ["style-loader", "css-loader", "less-loader"]
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
    ],
    devServer: {
        contentBase: './build', // 打包根路径
        port: 8080, // 端口号
        open: true, // 自动打开浏览器
        progress: true // 进度条
    },
    target: 'web'
}