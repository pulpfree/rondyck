import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import compose from 'recompose/compose'

import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import colors from '../config/colors'
import navigate from '../config/navigate'

library.add(faEnvelope, faGithub, faLinkedin, faTwitter)


const styles = () => ({
  link: {
    color: colors.$menuLink,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const Icon = ({ icon, url, title }) => (
  <a
    css={{ paddingLeft: 20 }}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
  >
    <FontAwesomeIcon
      icon={icon}
      size="1x"
      style={{
        color: colors.$menuLink,
      }}
    />
  </a>
)
Icon.propTypes = {
  icon: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const BottomNav = ({ classes }) => (
  <div
    css={{
      width: '100%',
      backgroundColor: colors.$black,
      color: colors.$linkText,
      textAlign: 'center',
    }}
  >
    <Hidden smDown>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 500,
          margin: '0 auto',
          padding: '6px 0',
        }}
      >
        <Link className={classes.link} to="/">Home</Link>
        {navigate.map(l => (
          <Link
            className={classes.link}
            key={l.path}
            to={l.path}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </Hidden>
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 300,
        margin: '0 auto',
        padding: '6px 0',
      }}
    >
      <Icon
        icon={['fab', 'twitter']}
        title="Twitter"
        url="https://twitter.com/pulpfree"
      />
      <Icon
        icon={['fab', 'github']}
        title="Github"
        url="https://github.com/pulpfree"
      />
      <Icon
        icon={['fab', 'linkedin']}
        title="LinkedIn"
        url="https://www.linkedin.com/in/pulpfree/"
      />
      <Icon
        icon={faEnvelope}
        title="Email"
        url="mailto:rond@webbtech.net"
      />
    </div>
  </div>
)
BottomNav.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
}

export default compose(
  withStyles(styles),
  withWidth(),
)(BottomNav)
