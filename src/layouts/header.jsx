import React from 'react'

import Link from 'gatsby-link'
import g from 'glamorous'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'

import headshot from '../assets/headshot.png'
import twitterIcon from '../assets/twitter-icon.svg'
import emailIcon from '../assets/email-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import githubIcon from '../assets/github-icon.svg'

import Navigation from './navigation'
const iconStyle = css({ marginTop: 8, marginBottom: 0, paddingLeft: 10, paddingRight: 10 })


export default ({ title }) => ( // eslint-disable-line react/prop-types
  <g.Header
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
            float={'left'}
            margin={0}
            marginRight={15}
            padding={0}
            src={headshot}
        />
        <Link to={'/'}>
          <g.H2
              display={'inline-block'}
              fontStyle={'normal'}
              margin={0}
              padding={0}
          >
            {title} &mdash; Personal Site
          </g.H2>
        </Link>
      </g.Div>
      <g.Div
          alignItems={'center'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-end'}
          width={'40%'}
      >
        <a
            href="https://twitter.com/pulpfree"
            target="_blank"
        >
          <g.Img
              className={iconStyle}
              src={twitterIcon}
          />
        </a>
        <a
            href="https://github.com/pulpfree"
            target="_blank"
        >
          <g.Img
              className={iconStyle}
              src={githubIcon}
          />
        </a>
        <a
            href="https://www.linkedin.com/in/pulpfree/"
            target="_blank"
        >
          <g.Img
              className={iconStyle}
              src={linkedinIcon}
          />
        </a>
        <a
            href="mailto:rond@webbtech.net"
        >
          <g.Img
              className={iconStyle}
              src={emailIcon}
          />
        </a>
      </g.Div>
    </g.Div>
    <Navigation />
  </g.Header>
)
