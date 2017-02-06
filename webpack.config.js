'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const S3Plugin = require('webpack-s3-plugin');

let appEntry;
let devtool;
let plugins;
let publicPath;

if (process.env.NODE_ENV === 'production') {
  appEntry = [path.join(__dirname, 'client/index.js')];
  devtool = 'cheap-module-source-map';
  publicPath = '/';
  plugins = [
    new CleanWebpackPlugin(['build'], {
      root: '/Users/macbook_front/docker/khronos',
      verbose: true,
      dry: false,
      exclude: []
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new BundleTracker({filename: './webpack-stats-production.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CONFIG: JSON.stringify(require('./client/config/config.prod.json'))
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Comparamejor :: Khronos - Integrated with Relay, GraphQL, Express, ES6/ES7, JSX, Webpack, Babel, Material Design Lite, and PostCSS',
      template: './client/index.html',
      mobile: true,
      inject: false
    }),
    new FaviconsWebpackPlugin('./client/assets/images/logo.png'),
    new S3Plugin({
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
      },
      s3UploadOptions: {
        Bucket: 'khronos-front'
      }
    }),
    new OfflinePlugin()
  ];
} else if (process.env.NODE_ENV === 'stage') {
  appEntry = [path.join(__dirname, 'client/index.js')];
  devtool = 'cheap-module-source-map';
  publicPath = '/';
  plugins = [
    new CleanWebpackPlugin(['build'], {
      root: '/Users/macbook_front/docker/khronos',
      verbose: true,
      dry: false,
      exclude: []
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new BundleTracker({filename: './webpack-stats-production.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CONFIG: JSON.stringify(require('./client/config/config.stage.json'))
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Comparamejor :: Khronos - Integrated with Relay, GraphQL, Express, ES6/ES7, JSX, Webpack, Babel, Material Design Lite, and PostCSS',
      template: './client/index.html',
      mobile: true,
      inject: false
    }),
    new FaviconsWebpackPlugin('./client/assets/images/logo.png'),
    new S3Plugin({
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
      },
      s3UploadOptions: {
        Bucket: 'khronos-stage'
      }
    }),
    new OfflinePlugin()
  ];
} else {
  appEntry = [
    path.join(__dirname, 'client/index.js'),
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ];
  devtool = 'eval';
  publicPath = '/';
  plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleTracker({filename: './webpack-stats-dev.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        CONFIG: JSON.stringify(require('./client/config/config.dev.json'))
      }
    }),
    new HtmlWebpackPlugin({
      title: 'ReactJS Apollo client :: Integrated with Apollo, GraphQL, Express, ES6/ES7, JSX, Webpack, Babel, Material Design Lite, and PostCSS',
      template: './client/index.html',
      mobile: true,
      inject: false
    }),
    new FaviconsWebpackPlugin('./client/assets/images/logo.png'),
  ];
}

module.exports = {
  entry: {
    app: appEntry,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: publicPath,
    filename: '[name]-[hash].js'
  },
  performance: {
    maxAssetSize: 4e6,
    maxEntrypointSize: 6e6,
  },
  devtool,
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        // plugins: ['./babelRelayPlugin'].map(require.resolve)
      }
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader?limit=10000&name=assets/[hash].[ext]'
    }]
  },
  postcss: () => [precss, autoprefixer],
  plugins
};


