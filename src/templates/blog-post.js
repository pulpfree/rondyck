import React from 'react'
import Link from 'gatsby-link'

import { Helmet } from 'react-helmet'

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title} - {title}</title>
      </Helmet>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Home</Link>
    </div>
  )
}

// eslint-disable-next-line no-undef
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`