import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
export default {
  plugins: [
 
  ],
  optimization: {
    //minimize: true,
    //removeEmptyChunks: false,
    //mergeDuplicateChunks: false,
    splitChunks: {
      //minSize: 0,
      maxSize: 4500000,
      //minChunks: 1,
      //automaticNameDelimiter: '-',
      //hidePathInfo: true
    }
  }
} as webpack.Configuration;
