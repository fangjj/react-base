/**
 * Created by jim on 2016/6/15.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry:  {
    public:[
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './public/src/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: 'public/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'react-hot',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.jsx$/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'babel',
        query: {
          presets: 'es2015'
        }
      },
      {
        test: /\.less/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'style!css!postcss!less'
      },{
        test: /\.(css)$/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'style!css!postcss'
      }, {
        test: /\.(png|jpg)$/,
        include: [path.join(__dirname, 'public/src')],
        loader: 'url?limit=8192'
      }
    ]
  }
};