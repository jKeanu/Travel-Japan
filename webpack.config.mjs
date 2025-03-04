import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import dotenv from "dotenv"
import { fileURLToPath } from 'url';


dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cloudfrontUrl = process.env.CLOUDFRONT_URL;


export default {
    mode: 'development',
    entry: {
        home_page: [
            './src/scripts/home_page/styles.js',
            './src/scripts/home_page/dropdown.js',
            './src/scripts/home_page/masonry.js',
            './src/scripts/home_page/swiper.js',
            './src/scripts/home_page/images.js',
            './src/scripts/home_page/regions.js',
            './src/scripts/home_page/sidebar.js',
            './src/scripts/home_page/location_marker.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name][contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 4000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: {
            index: 'travel_japan.html'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'travel_japan.html',
            template: 'public/template.html',
            chunks: ['home_page'],
            templateParameters: {
                cloudfrontURL: cloudfrontUrl
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '.',
                    globOptions: {
                        ignore: ['**/template.html'],
                    },
                },
            ],
        })
    ]
};