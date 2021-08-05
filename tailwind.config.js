/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      // TODO: Remove this one in case it won't be useful
      '2xl': { max: '1535.98px' },
      xl: { max: '1279.98px' },
      lg: { max: '1023.98px' },
      md: { max: '767.98px' },
      sm: { max: '639.98px' },
      // TODO: Remove this one in case it won't be useful
      xs: { max: '413.98px' },
    },
    extend: {
      colors: {
        white: '#ffffff',
        black: ' #1A1A1A',
        'black-hover': '#2E2D2D',
        primary: {
          1: '#FFE100',
          2: '#00ACE6',
          3: '#CFEDFC',
          '1-hover': '#E8CD02',
        },
        gray: {
          1: '#808080',
          2: '#F2F2F2',
          3: '#FAFAFA',
        },
      },
      fontSize: {
        xl: ['1.25rem', '1.5'],
        lg: ['1.125rem', '1.5'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
