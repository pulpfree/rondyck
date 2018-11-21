import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*const HeadShot2 = () => {
  // console.log('data: ', data)
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "headshot.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 53) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      // render={data => <Header data={data} {...props} />}
      // <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
    />
  )
}*/

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
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

export default HeadShot
