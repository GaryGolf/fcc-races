const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const mode = process.env.NODE_ENV;

const devCilentConfig = {
  mode: 'development',
  entry: './src/client.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 3000
  },

  module: {
    rules: [
   
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.css$/, use: [ { loader: 'style-loader' } ,
        { loader: 'css-loader', options: {
          module: true,
          sourceMap: true,
          localIdentName: '[local]__[hash:base64:5]'
        } }
      ]}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const prodCilentConfig = {
  mode: 'production',
  entry: './src/client.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: false,

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: {
          loader: 'css-loader',
          query: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]__[hash:base64:5]'
          }
        }
      })}
    ]
  },

  plugins: [
    new UglifyJsPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
};

module.exports = mode == 'production' ? devCilentConfig : devCilentConfig;
