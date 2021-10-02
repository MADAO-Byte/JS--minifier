// webpack.config.js
var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
      filename: 'bundle.js'       
    },
    watch :true,
    
    /*module: {
      loaders: [
        { test: /\.coffee$/, loader: 'coffee-loader' },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }*/
  };