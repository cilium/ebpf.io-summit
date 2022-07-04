// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteTitle: 'eBPF - Introduction, Tutorials & Community Resources', // <title>
    siteDescription:
      'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.',
    // pathPrefix: "",
    siteImage: '/images/social-preview.png',
    siteLanguage: 'en',
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
    /* author */
    authorName: 'pixel point',
    authorTwitterAccount: '@',
  },
  plugins: [
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 85,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#1A1A1A',
        theme_color: '#1A1A1A',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        ],
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        ],
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-96283704-3',
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
