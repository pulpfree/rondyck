import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import colors from '../config/colors'
import MainNavigation from './MainNavigation'
import SocialMenu from './SocialMenu'

import Logo from '!svg-react-loader!../images/rondyck-logo-wh.svg?name=Logo' // eslint-disable-line

const Header = ({ location }) => (
  <div
    css={{
      background: colors.$primary,
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1.5em',
      borderBottom: `solid 2px ${colors.$red}`,
      padding: '4px 0',
    }}
  >
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          css={{
            textDecoration: 'none',
            marginBottom: '-10px',
          }}
        >
          <Logo
            css={{
              width: 200,
              height: 50,
              marginLeft: 10,
            }}
          />
        </Link>
      </div>
      <MainNavigation location={location} />
      <SocialMenu />
    </div>
  </div>
)
Header.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
}

export default Header
