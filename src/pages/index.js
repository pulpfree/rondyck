import React from 'react'
import Link from 'gatsby-link'

require("prismjs/themes/prism-solarizedlight.css");

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
            to={node.fields.slug}
          >
          <h3>
            {node.frontmatter.title}{" "}
            <span color="#BBB">{node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id,
          frontmatter {
            title,
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          },
          excerpt,
          timeToRead
        }
      }
    }
  }
`