const path = require('path');
const { ProgressPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({mode}) => {
  return {
    mode,
    devtool: mode === 'development' ? 'inline-source-map' : 'none',
    entry: {
      background: path.resolve(__dirname, 'src/background/index'),
      options: path.resolve(__dirname, 'src/options-page/component')
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
      }),
      new CopyPlugin([
        { from: 'src/static-content', to: 'static-content', copyUnmodified: true },
        { from: 'manifest.json', copyUnmodified: true }
      ]),
      new HtmlWebpackPlugin({
        template: 'src/options-page/index.html',
        filename: 'options-page.html',
        inject: true,
        chunks: ['options']
      }),
    ]
  }
};
