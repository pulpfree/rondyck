import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageWrapper from '../components/PageWrapper'

const Contact = ({ data }) => (
  <PageWrapper>
    <Helmet
      title={`${data.site.siteMetadata.title} - Contact`}
    />
    <div>
      <h1>Contact Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  </PageWrapper>
)
Contact.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default Contact

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
