import React from 'react'

export default ({ data }) => ( // eslint-disable-line react/prop-types
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
)

// eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
