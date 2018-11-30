import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeadShot = ({ style }) => (
  <StaticQuery
    query={graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => <Img style={style} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
HeadShot.propTypes = {
  style: PropTypes.instanceOf(Object).isRequired,
}

export default HeadShot
