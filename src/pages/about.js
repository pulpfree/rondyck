import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const About = ({ data }) => (
  <Layout>
    <Helmet
      title={`${data.site.siteMetadata.title} - About`}
    />
    <div style={{ color: 'teal' }}>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
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
