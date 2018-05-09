const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = `${path.resolve(__dirname)}/`;

let config = [
  {
    watch: process.env.NODE_ENV !== 'production',
    entry: [
      './modules/application/stylesheets/less/styles.less',
      './modules/application/stylesheets/sass/styles.scss'
    ],
    output: {
      path: PATH,
      publicPath: '/',
      filename: './scripts/stylesheet.min.js'
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {loader: 'css-loader', options: {minimize: true}}
            ], fallback: "style-loader"
          })
        },
        {
          test: /\.(less)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {loader: 'css-loader', options: {minimize: true}},
              {loader: 'less-loader', options: {minimize: true}}
            ], fallback: "style-loader"
          })
        },
        {
          test: /\.(scss)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {loader: 'css-loader', options: {minimize: true}},
              {loader: 'less-loader', options: {minimize: true}}
            ], fallback: "style-loader"
          })
        },
        {
          test: /\.(woff|woff2|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {loader: "url-loader", options: {name: 'fonts/[name]-[hash:7].[ext]', limit: 8192}}
          ]
        },
        {
          test: /\.(svg|png|gif|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {loader: "url-loader", options: {name: 'images/[name]-[hash:7].[ext]', limit: 8192}}
          ]
        },
        {
          test: /\.(mp4)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {loader: "url-loader", options: {name: 'videos/[name]-[hash:7].[ext]', limit: 8192}},
          ]
        }
      ]
    },
    devtool: process.env.NODE_ENV === 'production' ? 'cheap-source-map' : 'eval',
    plugins: [
      new ExtractTextPlugin({filename: './styles/application.min.css', allChunks: true}),
    ],
    stats: {children: false}
  },
  {
    watch: process.env.NODE_ENV !== 'production',
    entry: {
      application: './modules/application'
    },
    output: {
      path: PATH,
      publicPath: './',
      filename: "./scripts/[name].min.js",
      chunkFilename: './scripts/[name].min.js',
    },
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: [
            {loader: 'file-loader', options: {name: 'views/[name]-[hash:7].[ext]'}},
            {loader: 'extract-loader'},
            {loader: 'html-loader', options: {attrs: ['img:src', 'link:href']}},
          ]
        },
        {
          test: /\.(css)$/,
          use: [
            {loader: 'url-loader', options: {name: 'styles/[name]-[hash:7].css', limit: 8192}},
            {loader: 'css-loader'},
          ]
        },
        {
          test: /\.(less)$/,
          use: [
            {loader: 'url-loader', options: {name: 'styles/[name]-[hash:7].css', mimetype: 'text/css', limit: 8192}},
            {loader: 'less-loader'},
          ]
        },
        {
          test: /\.(scss)$/,
          use: [
            {loader: 'url-loader', options: {name: 'styles/[name]-[hash:7].css', mimetype: 'text/css', limit: 8192}},
            {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(js|jsx)$/, exclude: /node_modules/,
          use: [
            {loader: 'ng-annotate-loader'},
            {loader: 'babel-loader', options: {presets: ['env', 'stage-0']}}
          ]
        },
        {
          test: /\.(woff|woff2|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {loader: "url-loader", options: {name: 'fonts/[name]-[hash:7].[ext]', limit: 8192}}
          ]
        },
        {
          test: /\.(svg|png|gif|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {loader: "url-loader", options: {name: 'images/[name]-[hash:7].[ext]', limit: 8192}},
          ]
        },
        {
          test: /\.(mp4)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {loader: "url-loader", options: {name: 'videos/[name]-[hash:7].[ext]', limit: 8192}},
          ]
        }
      ]
    },
    devtool: process.env.NODE_ENV === 'production' ? 'cheap-source-map' : 'eval',
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        chunks: "async",
        minSize: 15000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new Webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}}),
      new Webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", Popper: ['popper.js', 'default']}),
    ],
    stats: {children: false},
    devServer: {contentBase: PATH, port: 3000, historyApiFallback: true}
  }
];

module.exports = config;