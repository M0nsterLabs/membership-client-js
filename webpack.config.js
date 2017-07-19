const webpack = require('webpack');
const path = require('path');
const baseDir = process.cwd();
const buildPath = path.resolve(baseDir, 'dist');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: buildPath,
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {},
  plugins: [
    new webpack.DefinePlugin({
      "process.env" : {
        NODE_ENV : JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        drop_console: true,
        unsafe: true,
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  node: {},
};
