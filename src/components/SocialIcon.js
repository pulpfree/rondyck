import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import colors from '../config/colors'

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
      size="2x"
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

export default Icon
