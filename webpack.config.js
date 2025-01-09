path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { dirname } = require('path')
module.exports = {
    mode: 'development',
    entry: 
        {
        home_page:['./src/scripts/home_page/styles.js', './src/scripts/home_page/dropdown.js', 
        './src/scripts/home_page/masonry.js', './src/scripts/home_page/swiper.js', './src/scripts/home_page/images.js',
        './src/scripts/home_page/regions.js', './src/scripts/home_page/sidebar.js', './src/scripts/home_page/location_marker.js']
        //this bundle will replace the [name] on the file name on the output; bundle.js.
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }             
            }
        ]
    },
    devtool: 'source-map',
    //add "dev": "webpack serve" to the script of the package.json, and run it using npm run dev, and add this
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 4000,
        open: true, //when we run the dev, it would run the browser automatically
        hot: true,
        compress: true,
        historyApiFallback: {
            index: 'travel_japan.html' //if the html file on the dist is not index.html, put this
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'travel_japan.html',
            template: 'public/template.html',
            chunks:['home_page'],
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: 'public',
                to: '.',
                globOptions: {
                  ignore: ['**/template.html'], // Adjust this based on your needs
                },
              },
            ],
          })
    ]
}   