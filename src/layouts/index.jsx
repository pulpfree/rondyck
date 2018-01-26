import React from 'react'
// import ReactDOM from 'react-dom'


import { Helmet } from 'react-helmet'
// import Link from 'gatsby-link'
import g from 'glamorous'
// import { css } from 'glamor'
import { rhythm } from '../utils/typography'

import Header from './header'

import favicon from '../assets/favicon-32.ico'

import '../styles/index.sass'

// import fontawesome from '@fortawesome/fontawesome'


export default ({ history, location, children, data }) => ( // eslint-disable-line react/prop-types

  <g.Div
      padding={'0'}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link
          href="http://rondyck.com"
          rel="canonical"
      />
      <link
          href={favicon}
          rel="shortcut icon"
      />
    </Helmet>
    <Header
        history={history}
        location={location}
        title={data.site.siteMetadata.title}
    />
    <g.Div
        margin={'0 auto'}
        maxWidth={700}
        padding={rhythm(2)}
        paddingTop={rhythm(1.5)}
    >
      {children()}
    </g.Div>
  </g.Div>
)

// export default App

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
