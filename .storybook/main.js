const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const pathToInlineSvg = path.resolve(__dirname, '../src/assets/icons');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    const rules = config.module.rules;
    const resolve = config.resolve;

    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    rules.push({
      test: /\.s[ac]ss$/i,
      use: {
        loader: 'sass-loader',
        options: {
          additionalData: '@import "src/assets/styles/variables.scss";',
        },
      },
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [new TsconfigPathsPlugin()],
      },
    };
  },
};
