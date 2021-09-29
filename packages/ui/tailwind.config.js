const env = process.env.NODE_ENV || 'production';

const tailwind = require('../../tailwind.config.js');

module.exports = {
  ...tailwind,
  purge: {
    enabled: false,
    content: [
      '../app/src/**/*.{js,jsx,ts,tsx}',
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
  },
};
