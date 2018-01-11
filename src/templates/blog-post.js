import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to='/'>Home</Link>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`