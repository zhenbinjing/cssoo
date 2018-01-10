﻿const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {'vue': 'vue/dist/vue.js'}
  },
  module: { // 配置loader
      rules: [
             {
             test: /\.vue$/, 
                  loader: 'vue-loader', options: { 
                        loaders:{ 
                        sass: ExtractTextPlugin.extract({
                              use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                              fallback: 'vue-style-loader'
                        }),
                        css: ExtractTextPlugin.extract({
                              use: ['css-loader?minimize', 'autoprefixer-loader', 'px2rem-loader?remUnit=100'],
                              fallback: 'vue-style-loader'
                        })
                        }}
            }, 
            {
            test: /\.css$/,
                  use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader', 'px2rem-loader?remUnit=100']
                  })
            },  
            {
            test: /\.scss/,
                  use: ExtractTextPlugin.extract({
                       use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader']
                  })
            },          
            {
            test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            }, // .js文件使用babel-loader，切记排除node_modules目录    
            {
                  test: /\.(png|jpg|svg|gif|webp)$/,
                  loader: 'file-loader',
                  options: {
                    name: 'static/img/[name].[ext]?[hash]'
                  }
            }      
  ]},
  plugins: [      
      //复制编辑html
      new HtmlWebpackPlugin({
            template: path.join(root, 'v-src/index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部            
      }),     
      new ExtractTextPlugin({ filename: 'static/css/index.[chunkhash].css', allChunks:true }),
      new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
      })
 ]
}