// Have downloaded babel and webpack as our transpiler and module bundler
// From here you should be able to spin up a webpack using past projects' syntax and the likes! Lmk if you have any questions or want to know what some of the set up steps were for :)

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {

  entry: './src/index.js',
  output : {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ],
  module: {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_module/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        }, 
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /.tsx?/,
      //   use: ["ts-loader"],
      //   exclude: /node_modules/,
      // },
    ]
  },
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js'],
  // },
};
