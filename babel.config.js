// https://babeljs.io/docs/en/options#babelrcroots
module.exports = {
  babelrcRoots: ['./packages/*'],
  plugins: ['inline-react-svg', '@babel/plugin-proposal-class-properties'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false,
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
