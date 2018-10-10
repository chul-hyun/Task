const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRootPlugin = require('html-webpack-root-plugin');
const path = require('path');
const webpack = require('webpack');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const styledComponentsTransformer = createStyledComponentsTransformer();

const publicConfig = require('./publicConfig');

const rootPath = filePath => path.resolve(__dirname, '..', filePath);

module.exports = {
  entry: rootPath('src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: rootPath('dist'),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ReactRootPlugin(publicConfig.ROOT_TAG_ID),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(publicConfig),
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
