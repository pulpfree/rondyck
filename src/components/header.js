import React from 'react'
import PropTypes from 'prop-types'

import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import colors from '../config/colors'
import MainNavigation from './MainNavigation'
import SocialMenu from './SocialMenu'


const HeaderTitle = ({ title }) => (
  <span dangerouslySetInnerHTML={{ __html: `${title} &mdash; Personal Site` }} /> // eslint-disable-line
)
HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

const HeadShot = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "headshot.png" }) {
          childImageSharp {
            fixed(width: 53) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div
        css={{
          padding: 6,
          marginBottom: -6,
        }}
      >
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </div>
    )}
  />
)

const Header = ({ siteTitle }) => (
  <div
    css={{
      background: colors.$primary,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <HeadShot />
        <h2
          css={{
            margin: 0,
            marginLeft: 10,
          }}
        >
          <Link
            to="/"
            css={{
              color: 'rgba(255, 255, 255, .75)',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
            <span
              css={{
                fontSize: '80%',
              }}
              dangerouslySetInnerHTML={{ __html: ' &mdash; Personal Site' }} // eslint-disable-line
            />
          </Link>
        </h2>
      </div>
      <SocialMenu />
    </div>
    <MainNavigation />
  </div>
)
Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
