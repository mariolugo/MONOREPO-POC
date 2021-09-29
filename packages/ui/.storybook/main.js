const path = require('path');
/**
 * changes to default:
 * fix #1: fixing (Error: "version" is a required argument.): https://github.com/storybookjs/storybook/issues/13255#issuecomment-740713924
 */
module.exports = {
  stories: [
    '../src/**/*.stories.mdx', //fix #1, previous: "../stories/**/*.stories.mdx"
    '../src/**/*.stories.@(js|jsx|ts|tsx)', //fix #1, previous: "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    // Add SVGR Loader
    // ========================================================
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });
    // tailwind
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss')('./tailwind.config.js'),
              require('postcss-preset-env')({ stage: 1 }),
              require('postcss-nested'),
              require('autoprefixer'),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
