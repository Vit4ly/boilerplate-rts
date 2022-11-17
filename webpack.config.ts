import path from "path";
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin'
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import {Configuration} from "webpack";
import {isDev, isProd, filename, chunkFilename} from './tools/webpack/consts'
import optimization from "./tools/webpack/optimization";
import plugins from "./tools/webpack/plugins";
import rules from "./tools/webpack/moduleRules";

const config: Configuration = {
    mode: isDev ? 'development' : undefined,
    devtool: isDev ? 'eval' : 'source-map',
    optimization: optimization(isProd),
    target: ['web', 'es6'],
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: filename('js', isProd),
        chunkFilename: chunkFilename('js', isProd),
        clean: true,
        publicPath: 'auto',
        asyncChunks: true,
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        strictExportPresence: true,
        rules,
    },
    plugins,
}

export default process.env.SMP === 'OFF' ? config : new SpeedMeasurePlugin().wrap(config);
