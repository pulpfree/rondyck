import React from 'react'

import Link from 'gatsby-link'
import g from 'glamorous'
import { css } from 'glamor'
// import { rhythm } from '../utils/typography'

const linkStyle = css({ marginLeft: 10, marginRight: 10, padding: 0 })

export default () => (
  <g.Div
      display={'flex'}
      marginLeft={62}
  >
    <Link
        className={linkStyle}
        to={'/'}
    >
      Blog
    </Link>
    <Link
        className={linkStyle}
        to={'/resume/'}
    >
      Résumé
    </Link>
  </g.Div>
)