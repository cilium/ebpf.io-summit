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
          4: '#FDF1D0',
          5: '#FFA41D',
          '1-hover': '#E8CD02',
        },
        gray: {
          1: '#808080',
          2: '#F2F2F2',
          3: '#FAFAFA',
          4: '#D4D4D4',
        },
        yellow: {
          1: '#FEF8E7',
        },
      },
      fontSize: {
        xl: ['1.25rem', '1.5'],
        lg: ['1.125rem', '1.5'],
      },
      backgroundImage: (theme) => ({
        'hero-foundation': "url('/images/foundation-background.svg')",
        'join-banner': "url('/images/join-background.svg')",
        'button-gradient': 'linear-gradient(82.18deg, #DB6C2E -0.66%, #FD9800 97.55%)',
        'orange-gradient': 'linear-gradient(265.88deg, #FFE100 -0.55%, #FF6B00 98.81%)',
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            h1: {
              color: theme('colors.black'),
              fontWeight: theme('font.bold'),
            },
            h2: {
              color: theme('colors.black'),
              fontWeight: theme('font.bold'),
            },
            h3: {
              color: theme('colors.black'),
              fontWeight: theme('font.bold'),
            },
            h4: {
              color: theme('colors.black'),
              fontWeight: theme('font.bold'),
            },
            h5: {
              color: theme('colors.black'),
              fontWeight: theme('font.bold'),
            },
            h6: {
              color: theme('colors.black'),
              fontWeight: theme('font.bold'),
            },
            a: {
              color: theme('colors.primary.2'),
              textDecoration: 'none',
              transitionDuration: theme('transitionDuration.200'),
              transitionProperty: theme('transitionProperty.colors'),
              transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
              '&:hover': {
                color: theme('colors.black'),
              },
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.black'),
                },
              },
            },
            ol: {
              li: {
                '&:before': {
                  color: theme('colors.black'),
                },
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};
