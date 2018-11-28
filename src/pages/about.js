import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageWrapper from '../components/PageWrapper'

const About = ({ data }) => (
  <PageWrapper>
    <Helmet
      title={`${data.site.siteMetadata.title} - About`}
    />
    <div>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
      <p>Such wow. Very React.</p>
    </div>
  </PageWrapper>
)
About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default About

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
