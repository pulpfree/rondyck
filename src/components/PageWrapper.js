import React from 'react'
import PropTypes from 'prop-types'

const PageWrapper = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 720,
      padding: '0px 1.0875rem 1.45rem',
    }}
  >
    {children}
  </div>
)
PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper
