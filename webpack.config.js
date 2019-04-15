const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const json = require('./src/data/data.json');
const lottie = require('lottie-web');

module.exports = {
    entry: {
        main: './src/index.js'
        // ser: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'dist/' //это для браузера. дев сервер запуститься, и будет знать где брать временный файлик js
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                 exclude: '/node_modules'
            },
            {
              test: /\.sass$/,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                { 
                  loader: "css-loader",
                  options: { sourceMap: true}
                }, { 
                  loader: "postcss-loader",
                  options: { sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                }, { 
                  loader: "sass-loader",
                  options: { sourceMap: true}
                }
                
              ]
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                { 
                  loader: "css-loader",
                  options: { sourceMap: true}
                }, { 
                  loader: "postcss-loader",
                  options: { sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                }, { 
                  loader: "sass-loader",
                  options: { sourceMap: true}
                }
                
              ]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  { 
                    loader: "css-loader",
                    options: { sourceMap: true}
                  }, { 
                    loader: "postcss-loader",
                    options: { sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                  }
                ]
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {name: '[name].[ext]', outputPath: 'img', publicPath: 'img' },
                  },
                ],
              },
              {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts', publicPath: 'fonts' 
                        
                    }
                }]
            },
            // {
            //   test: /\.json$/,
            //   loader: 'file-loader',
            //   options: {
            //     name: '[name].[ext]',
            //     outputPath: 'data', publicPath: 'data' 
                
            // }
            // }
        ]
    },
    devServer: {
        overlay: true //вывод ошибок н в консоле, а в браузере
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css"
        })
      ],
};