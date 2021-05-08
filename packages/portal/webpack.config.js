
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
// 分析包内容
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isAnaly = process.env.analy === 'true'


const config = {
  NODE_ENV: process.env.NODE_ENV,
  VUE_APP_API_SERVER: '/v2/'
}

const externals = {
  // 包名： 全局变量
  qiankunApp: 'qiankunApp'
}

const cdn = {
  // js: ['https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js']
}

// 使用node的模块
const webpackConfig = {
  // 这就是我们项目编译的入口文件
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    publicPath: isProd ? "/qiankun-mic/" : '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash].js'
  },

  externals,

  resolve: {
    extensions: ['.ts', 'tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname, '../../')
    }
  },
  // 这里可以配置一些对指定文件的处理
  // 这里匹配后缀为ts或者tsx的文件
  // 使用exclude来排除一些文件
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      }
    ]
  },
  // 这个参数就可以在webpack中获取到了
  devtool: isProd ? false : 'inline-source-map',
  devServer: {
    // 这个本地开发环境运行时是基于哪个文件夹作为根目录
    contentBase: './dist',
    // 当你有错误的时候在控制台打出
    stats: 'errors-only',
    // 不启动压缩
    compress: false,
    historyApiFallback: true, // history 模式
    host: 'localhost',
    // historyApiFallback:true,
    proxy: {
      '/platform/': {
        target: 'http://yangjin-art.top',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 改变路径重定向
          '^': ''
        }
      },
      '/v2': {
        target: 'http://yangjin-art.top',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 改变路径重定向
          '^': ''
        }
      },
      '/api/': {
        target: 'http://localhost:8002',
        changeOrigin: true,
        pathRewrite: { '^': '' },
      },

    },
    port: 8787
  },
  // 这里就是一些插件
  plugins: [
    
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(config) }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './public') },
      ],
    }),
    new CompressionPlugin({
      test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      cdn: isProd ? cdn : {}
    })
  ],
  optimization: {
    // webpack4 在 production 环境下默认启动了 ModuleConcatenationPlugin （预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度），它可能会合并webpack-bundle-analyzer 输出中的模块的一部分，从而使报告不太详细。 如果你使用此插件，请在分析过程中将其禁用
    concatenateModules: !isAnaly
  }
}

if (isAnaly) {
  webpackConfig.plugins.push(
    // 开启 BundleAnalyzerPlugin
    new BundleAnalyzerPlugin()
  )
}

module.exports = webpackConfig