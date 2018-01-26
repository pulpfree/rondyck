import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import Card from 'react-md/lib/Cards/Card'

class Disqus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card className="md-grid md-cell md-cell--12">
        disqus card
      </Card>
    )
  }
}

export default Disqus