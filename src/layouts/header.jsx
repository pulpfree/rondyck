import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

import brands from '@fortawesome/fontawesome-free-brands'
import fontawesome from '@fortawesome/fontawesome'
fontawesome.library.add(brands, faCoffee, faEnvelope)
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import { Button, SVGIcon, FontIcon } from 'react-md'

// import deleteIcon from 'icons/delete.svg'

// import { Toolbar } from 'react-md/Toolbars'

// import Toolbar from 'react-md/lib/Toolbars'

// import Link from 'gatsby-link'
import g from 'glamorous'
// import { css } from 'glamor'
import { rhythm } from '../utils/typography'

import headshot from '../assets/headshot.png'

import Navigation from './navigation'

export default ({ history, location, title }) => ( // eslint-disable-line react/prop-types
  <g.Header
      backgroundColor={'#2195F3'}
      display={'flex'}
      flexDirection={'column'}
      padding={rhythm(1/3)}
  >
    <g.Div
        display={'flex'}
        flexDirection={'row'}
    >
      <g.Div
          alignItems={'center'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          width={'60%'}
      >
        <g.Img
            className={'as-link'}
            float={'left'}
            margin={0}
            marginRight={15}
            onClick={() => history.push('/')}
            padding={0}
            src={headshot}
        />
        <g.H2
            color={'#ffffff'}
            display={'inline-block'}
            fontStyle={'normal'}
            margin={0}
            onClick={() => history.push('/')}
            padding={0}
        >
          {title} &mdash; Personal Site
        </g.H2>
      </g.Div>

      <g.Div
          alignItems={'center'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-end'}
          width={'40%'}
      >
      <g.A
          className="icon-link"
          fontSize={30}
          href="https://twitter.com/pulpfree"
          target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']}/>
      </g.A>
      <g.A
          className="icon-link"
          fontSize={30}
          href="https://github.com/pulpfree"
          target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'github']}/>
      </g.A>
      <g.A
          className="icon-link"
          fontSize={30}
          href="https://www.linkedin.com/in/pulpfree/"
          target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
      </g.A>
      <g.A
          className="icon-link"
          fontSize={30}
          href="mailto:rond@webbtech.net"
      >
        <FontAwesomeIcon icon={faEnvelope}/>
      </g.A>
      </g.Div>
    </g.Div>
    <Navigation
        history={history}
        location={location}
    />
  </g.Header>
)
