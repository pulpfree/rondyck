import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Card, CardText } from 'react-md'

import config from '../../config/config'
import ReactDisqusComments from 'react-disqus-comments'


class Disqus extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { category, slug, title } = this.props.post
    const URL = `${config.siteUrl}${slug}`

    return (
      <Card className="disqus-card">
        <CardText>
          <ReactDisqusComments
              category_id={category}
              identifier={title}
              // onNewComment={this.notifyAboutComment}
              shortname={config.disqusShortname}
              title={title}
              url={URL}
          />
        </CardText>
      </Card>
    )
  }
}
Disqus.propTypes = {
  category: PropTypes.string,
  post: PropTypes.object.isRequired,
  title: PropTypes.string,
}

export default Disqus