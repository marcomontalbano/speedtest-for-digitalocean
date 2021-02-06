
/* eslint-disable no-warning-comments, object-curly-newline */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteAssetsWebpackPlugin = require('write-assets-webpack-plugin');
const webpack = require('webpack');

const paths = require('react-scripts/config/paths');

module.exports = function override(config, env) {

  // switch off chunks
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };

  // js - output filename without sha
  config.output.path = paths.appBuild;
  config.output.filename = 'static/js/main.js';

  // css - output filename without sha
  config.plugins = config.plugins.filter(plugin => !(plugin instanceof MiniCssExtractPlugin));
  config.plugins.push(new MiniCssExtractPlugin({
    filename: 'static/css/[name].css'
  }));

  // make ENVIRONMENT env variable available
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT)
  }));

  return config;

};
