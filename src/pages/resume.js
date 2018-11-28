import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageWrapper from '../components/PageWrapper'

const Resume = ({ data }) => (
  <PageWrapper>
    <Helmet
      title={`${data.site.siteMetadata.title} - Resume`}
    />
    <div>
      <h1>Resume Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  </PageWrapper>
)
Resume.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  // location: PropTypes.instanceOf(Object).isRequired,
}

export default Resume

export const query = graphql`
  query ResumePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
