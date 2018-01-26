import React from 'react'

// import FlatButton from 'material-ui/FlatButton'
import { Button } from 'react-md'

import g from 'glamorous'
// import { css } from 'glamor'
// import { rhythm } from '../utils/typography'
// const activeBut = css({ backgroundColor: 'green' })


const menuLinks = [
  {
    label: 'Blog',
    href: '/',
  },
  {
    label: 'Résumé',
    href: '/resume/',
  },
]

export default ({ history, location }) => ( // eslint-disable-line react/prop-types
  <g.Div
      display={'flex'}
      marginLeft={62}
  >
    {menuLinks.map(link =>
      <Button
          className={location.pathname === link.href ? 'activeMenuBut' : ''}
          flat
          key={link.href}
          onClick={() => history.push(link.href)}
          style={{color: '#fff'}}
      >
        {link.label}
      </Button>
    )}
  </g.Div>
)
