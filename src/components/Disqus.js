import React from 'react'
import PropTypes from 'prop-types'

import ReactDisqusComments from 'react-disqus-comments'
// import { Card, CardText } from 'react-md'

import config from '../config/disqus'


const Disqus = ({ post }) => {
  // console.log('post props in render: ', post)
  // const { category, slug, title } = this.props.post
  const { title } = post.frontmatter
  const { slug } = post.fields
  // const URL = ''
  const URL = `${config.siteUrl}${slug}`

  return (
    <div
      css={{
        marginTop: '1rem',
      }}
    >
      <ReactDisqusComments
        // category_id={category}
        identifier={slug}
        // onNewComment={this.notifyAboutComment}
        shortname={config.disqusShortname}
        title={title}
        url={URL}
      />
    </div>
  )
}
Disqus.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
}

export default Disqus
