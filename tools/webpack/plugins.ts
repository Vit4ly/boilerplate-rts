import CompressionPlugin from "compression-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {isProd} from "./consts";
import webpack from "webpack";

const plugins = [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'BoilerPlate app',
        template: './public/index.template.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),
    new CopyPlugin({
        patterns: [
            {
                from: './src/assets/',
                to: './',
                noErrorOnMissing: true,
            },
        ]
    }),
    new webpack.ProvidePlugin({
        process: "process/browser"
    }),
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         NODE_ENV: JSON.stringify('production')
    //     }
    // })
]

if (isProd) {
    // @ts-ignore
    plugins.push(new CompressionPlugin());
}

export default plugins
