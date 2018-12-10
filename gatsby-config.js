module.exports = {
  siteMetadata: {
    title: 'Ron Dyck',
    siteUrl: 'https://rondyck.com',
  },
  plugins: [
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-helmet',
    {
      resolve: '@wapps/gatsby-plugin-material-ui',
      options: {
        theme: {
          palette: {
            primary: {
              light: '#FC0008',
              main: '#DD0006',
              dark: '#BE0305',
            },
            secondary: {
              light: '#E5E5EA',
              main: '#8E8E93',
              dark: '#666666',
            },
          },
          // error: '#',
          // Used by `getContrastText()` to maximize the contrast between the background and
          // the text.
          contrastThreshold: 3,
          tonalOffset: 0.2,
          typography: {
            fontFamily: 'Roboto',
            useNextVariants: true,
            // htmlFontSize: 6,
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
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
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ron Dyck',
        short_name: 'rondyck',
        start_url: '/',
        background_color: '#1C5488',
        theme_color: '#DD0006',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /images/,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112253318-1',
        // Setting this parameter is optional
        // anonymize: true,
        cookieDomain: 'rondyck.com',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page`
        // and all routes beginning with `category`
        // exclude: ['/category/*', '/path/to/page'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }`,
      },
    },
  ],
}
