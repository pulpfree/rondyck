import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import compose from 'recompose/compose'

import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { withStyles } from '@material-ui/core/styles'

import colors from '../config/colors'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import Transition from '../components/Transition'
import BottomNavigation from '../components/BottomNavigation'

// import './layout.css'
import './reset.css'

const styles = () => ({
  body: {
    backgroundColor: colors.$background,
  },
  site: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  siteContent: {
    flexGrow: 1,
  },
})

const Layout = ({ children, classes, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          bodyAttributes={{
            class: classes.body,
          }}
        >
          <html lang="en" />
          <link
            href="http://rondyck.com"
            rel="canonical"
          />
        </Helmet>
        {location.pathname === '/' ? ( // No transitions navigating to home page
          <div>{children}</div>
        ) : (
          <div className={classes.site}>
            <Hidden smDown>
              <Header siteTitle={data.site.siteMetadata.title} location={location} />
            </Hidden>
            <Hidden mdUp>
              <MobileMenu siteTitle={data.site.siteMetadata.title} />
            </Hidden>
            <div className={classes.siteContent}>
              <Transition location={location}>{children}</Transition>
            </div>
            <BottomNavigation />
          </div>
        )}
      </>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default compose(
  withStyles(styles),
  withWidth(),
)(Layout)
