import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'file-zipper.js',
    library: 'FileZipper',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] }
    ]
  },
  plugins: [
//     new UglifyJSPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}

