module.exports = {
  siteMetadata: {
    title: 'Ron Dyck',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
            // resolve: 'gatsby-remark-responsive-image',
            // options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
              // maxWidth: 590,
              // linkImagesToOriginal: true,
              // sizeByPixelDensity: false,
            // },
          // },
          'gatsby-remark-prismjs',
        ],
      },
    },
    /*'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },*/
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112253318-1',
        // Setting this parameter is optional
        // anonymize: true,
      },
    },
  ],
}
