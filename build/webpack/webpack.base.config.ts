
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import {VueLoaderPlugin} from 'vue-loader';
// const pathResolve = _path => path.join(__dirname, '../..', _path);
function pathResolve(dir) {
    return path.join(__dirname, '../..', dir);
}

const config: webpack.Configuration | webpack.WebpackOptionsNormalized  = {
    entry: './src/main.ts',
    output: {
        path: pathResolve('dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '@': pathResolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
           
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'vue-ts-webpack'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
    ]
}

export default config;