// const theme = require('./src/themes/default.js')

// console.log('theme: ', theme)
// import red from '@material-ui/core/colors/red'

/*import createMuiTheme from '@material-ui/core/styles'

import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
})*/

module.exports = {
  siteMetadata: {
    title: 'Ron Dyck',
  },
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
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
        theme_color: '#1C5488',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
