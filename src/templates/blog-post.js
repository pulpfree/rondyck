/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import ArrowUpIcon from '@material-ui/icons/ArrowDropUp'

import Disqus from '../components/Disqus'
import PageWrapper from '../components/PageWrapper'
import colors from '../config/colors'

const Post = ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags ? post.frontmatter.tags.join(', ') : ''
  return (
    <>
      <Helmet
        title={post.frontmatter.title}
        meta={[
          { name: 'description', content: post.frontmatter.excerpt },
          { name: 'keywords', content: tags },
        ]}
      />
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
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div
          css={{
            marginTop: 10,
          }}
        >
          <a href="#top">
            <ArrowUpIcon style={{ fontSize: 50, marginBottom: '-19px' }} />
            Back to Top
          </a>
        </div>

        <Disqus post={post} />
      </PageWrapper>
    </>
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
        excerpt
        tags
        title
      }
      fields {
        slug
      }
    }
  }
`
