/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
          6: '#F5CEB7',
          '1-hover': '#E8CD02',
        },
        gray: {
          1: '#808080',
          2: '#F2F2F2',
          3: '#FAFAFA',
          4: '#F6F6F6',
          5: '#EBEBEB',
          6: '#D8D8D8',
        },
        yellow: {
          1: '#FEF8E7',
        },
      },
      fontSize: {
        xl: ['1.25rem', '1.5'],
        lg: ['1.125rem', '1.5'],
      },
      lineHeight: {
        denser: '1.125',
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: () => ({
        'hero-foundation': "url('/images/foundation-background.svg')",
        'join-banner': "url('/images/join-background.svg')",
        'button-gradient': 'linear-gradient(82.18deg, #EC6113 -0.66%, #FF9900 97.55%)',
        'orange-gradient': 'linear-gradient(290.88deg, #FFE100 4%, #FF6B00 98%)',
        'cards-gradient':
          'linear-gradient(87.75deg, #FFFFFF 1.89%, rgba(255, 255, 255, 0) 9.43%, rgba(255, 255, 255, 0) 87.07%, #FFFFFF 98.11%)',
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
