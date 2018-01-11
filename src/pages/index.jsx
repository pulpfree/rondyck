import React from 'react'

import Link from 'gatsby-link'
import g from 'glamorous'
import { rhythm } from '../utils/typography'

require('prismjs/themes/prism-solarizedlight.css')


export default ({ data }) => { // eslint-disable-line react/prop-types
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
              css={{ textDecoration: 'none', color: 'inherit' }}
              to={node.fields.slug}
          >
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{' '}
              <g.Span
                  color="#BBB"
                  fontSize={'smaller'}
              >— {node.frontmatter.date}</g.Span>
            </g.H3>
            <g.P color={'black'}>{node.excerpt}</g.P>
          </Link>
        </div>
      ))}
    </div>
  )
}

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          },
          excerpt
        }
      }
    }
  }
`
