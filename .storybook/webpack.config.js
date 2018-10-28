const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const common = require('../build/webpack.config.common.js');
const merge = require('webpack-merge');

module.exports = (baseConfig, env, config) => {
  const newConfig = merge(config, common, {
    // module: {
    //   rules: [
    //     {
    //       test: /\.stories\.tsx?$/,
    //       loaders: [{
    //         loader: require.resolve('@storybook/addon-storysource/loader'),
    //         options: { parser: 'typescript' }
    //       }],
    //       enforce: 'pre',
    //     },
    //   ]
    // },
    plugins:[new TSDocgenPlugin()]
  });
  return newConfig;
};
