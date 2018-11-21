import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        color: 'rgba(255, 255, 255, .5)',
      }}
    />
  </a>
)
Icon.propTypes = {
  icon: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Icon
