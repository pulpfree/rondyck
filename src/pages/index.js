import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

import colors from '../config/colors'
import navigate from '../config/navigate'

import Logo from '!svg-react-loader!../images/rondyck-logo-bk.svg?name=Logo' // eslint-disable-line

const styles = theme => ({
  body: {
    backgroundColor: colors.$black,
    backgroundRepeat: 'no-repeat',
  },
  cardContainer: {
    color: colors.$black,
    margin: '0 auto',
    marginTop: '5em',
    maxWidth: 400,
    [theme.breakpoints.only('xs')]: {
      maxWidth: 300,
    },
    padding: '30px 20px 40px',
    backgroundColor: 'rgba(255, 255, 255, .75)',
    borderRadius: 10,
  },
  linkItem: {
    color: colors.$black,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  logo: {
    width: 350,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const IndexPage = ({ data, classes }) => (
  <>
    <Helmet
      bodyAttributes={{
        class: classes.body,
        style: `
          background-image: url(${data.backgroundImage.childImageSharp.fluid.src});
        `,
      }}
    />
    <div className={classes.cardContainer}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} />
      </div>
      <div
        css={{
          borderBottom: `solid 2px ${colors.$red}`,
        }}
      />
      <div
        css={{
          textAlign: 'center',
          marginTop: 15,
          fontWeight: '600',
          fontSize: '120%',
          letterSpacing: '1.5px',
        }}
      >
        Software Engineer
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '-20',
          marginTop: 30,
        }}
      >
        {navigate.map(l => (
          <Link
            className={classes.linkItem}
            key={l.path}
            to={l.path}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  </>
)

export default compose(
  withStyles(styles),
  withWidth(),
)(IndexPage)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: {eq: "images/irvan-smith-563895-unsplash.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
