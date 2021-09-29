module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: '#D8D0FF',
        200: '#8A73FF',
        300: '#6344FF', // base
        400: '#4A33BF',
        500: '#31227F',
      },
      secondary: {
        100: '#FCF0D0',
        200: '#F8D274',
        300: '#F6C434', // base
        400: '#B89234',
        500: '#7A6122',
      },
      third: {
        100: '#CBF1D9',
        200: '#64D48E',
        300: '#30C668', // base
        400: '#24944E',
        500: '#186334',
      },
      fourth: {
        100: '#C2DAFD',
        200: '#488FF8',
        300: '#0B6AF6', // base
        400: '#084FB8',
        500: '#05357B',
      },
      fifth: {
        100: '#FBCBD7',
        200: '#F46388',
        300: '#F02F60', // base
        400: '#B42348',
        500: '#781730',
      },
      basic: {
        white: '#FFFFFF',
        black: '#000000',
      },
      gray: {
        50: '#FBFBFB',
        100: '#E9E9E9',
        200: '#C4C4C4',
        300: '#888888',
        400: '#444444',
        500: '#302E2E',
        600: '#242729',
      },
    },
    fontSize: {
      display: [
        '4.5rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '4.545rem',
        },
      ],
      h1: [
        '3rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '3.15rem',
        },
      ],
      h2: [
        '2.5rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '2.625rem',
        },
      ],
      h3: [
        '2rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '2.3rem',
        },
      ],
      h4: [
        '1.5rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.875rem',
        },
      ],
      subtitle: [
        '1.25rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.5625rem',
        },
      ],
      paragraph: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      'paragraph-sm': [
        '0.875rem',
        {
          lineHeight: '1.3125rem',
        },
      ],
      caption: [
        '0.75rem',
        {
          lineHeight: '1.125rem',
        },
      ],
      'label-sm': [
        '0.5rem',
        {
          lineHeight: '0.505rem',
        },
      ],
      'button-label': [
        '0.875rem',
        {
          letterSpacing: '-0.02em',
          lineHeight: '0.88375rem',
        },
      ],
    },
    fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      regular: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    boxShadow: {
      '2xl': '9px -2px 16px -1px #888',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
