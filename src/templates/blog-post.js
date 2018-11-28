import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import PageWrapper from '../components/PageWrapper'
import colors from '../config/colors'

const Post = ({ data }) => {
  const post = data.markdownRemark
  // console.log('post: ', post)
  return (
    <PageWrapper>
      <h1>{post.frontmatter.title}</h1>
      <div
        css={{
          fontSize: '80%',
          color: colors.$gray,
          marginBottom: '1em',
        }}
      >
        {post.frontmatter.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div
        css={{
          marginTop: 10,
        }}
      >
        <a href="#top">^-- top</a>
      </div>
    </PageWrapper>
  )
}
Post.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
      }
    }
  }
`
