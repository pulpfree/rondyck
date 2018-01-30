import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Card, CardText } from 'react-md'

// import Link from 'gatsby-link'
import g from 'glamorous'
import { rhythm } from '../utils/typography'

import Disqus from '../components/Disqus/Disqus'

import { Helmet } from 'react-helmet'

const R = require('ramda')

// eslint-disable-next-line react/prop-types
// export default ({ data }) => {
class BlogPost extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const { html } = data.markdownRemark
    const post = data.markdownRemark
    const { title } = post.frontmatter
    const postProps = R.merge(post.fields, post.frontmatter)

    return (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title} - {title}</title>
        </Helmet>

        <Card className="post">
          <CardText>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <g.Div
                marginTop={rhythm(1)}
            >
              <a href="#top">^-- top</a>
            </g.Div>
          </CardText>
        </Card>
        <Disqus post={postProps} />
      </div>
    )
  }
}
BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

// eslint-disable-next-line no-undef
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        date
        tags
        title
      }
      fields {
        slug
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`