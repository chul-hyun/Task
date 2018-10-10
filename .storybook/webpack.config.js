const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
    options: {
      getCustomTransformers: () => ({
        before: [styledComponentsTransformer],
      }),
    },
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [{
      loader: require.resolve('@storybook/addon-storysource/loader'),
      options: { parser: 'typescript' }
    }],
    enforce: 'pre',
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};