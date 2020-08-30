const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Shop Books',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   extractComments: true,
      // }),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ], splitChunks: {
      chunks: 'all',
    },
  },
  // resolve: {
  //   alias: {
  //     fontawesomeCSS: path.resolve(
  //       __dirname,
  //       'node_modules/@fortawesome/fontawesome-free/css/all.css'
  //     ),
  //     fontawesomeJS: path.resolve(
  //       __dirname,
  //       'node_modules/@fortawesome/fontawesome-free/js/all.js'
  //     ),
  //     bootstrap: path.resolve(
  //       __dirname,
  //       'node_modules/bootstrap/dist/css/bootstrap.min.css'
  //     ),
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },
};
