import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

import { library } from '@fortawesome/fontawesome-svg-core'
import faTags from '@fortawesome/fontawesome-free-solid/faTags'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PageWrapper from '../components/PageWrapper'
import colors from '../config/colors'

library.add(faTags)

const styles = () => ({
  date: {
    fontSize: '80%',
    color: colors.$gray,
  },
  postLink: {
    textDecoration: 'none',
    color: colors.$black,
  },
  tag: {
    backgroundColor: colors.$white,
    border: `solid 1px ${colors.$midGray}`,
    borderRadius: 3,
    marginLeft: '.5em',
    padding: '1px 8px 1px',
  },
  tagsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '.7rem',
    fontSize: '80%',
    color: colors.$gray,
  },
  title: {
    marginBottom: 5,
  },
})

let Tags = ({ classes, tags }) => {
  if (!tags) return null
  return (
    <div className={classes.tagsRow}>
      <FontAwesomeIcon
        icon={faTags}
        size="1x"
        style={{
          color: colors.$gray,
        }}
      />
      {tags.map(t => (
        <div key={t} className={classes.tag}>{t}</div>
      ))}
    </div>
  )
}
Tags.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  tags: PropTypes.instanceOf(Object),
}
Tags.defaultProps = {
  tags: null,
}

Tags = withStyles(styles)(Tags)

const Blog = ({ classes, data }) => (
  <>
    <Helmet
      title={`${data.site.siteMetadata.title} - Blog`}
    />
    <PageWrapper>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            css={{
              marginBottom: '1rem',
            }}
            key={node.id}
          >
            <Link
              className={classes.postLink}
              to={node.fields.slug}
            >
              <h2 className={classes.title}>{node.frontmatter.title}</h2>
              <div className={classes.date}>{node.frontmatter.date}</div>
              <div>{node.frontmatter.excerpt}</div>
            </Link>
            <div><Tags tags={node.frontmatter.tags} /></div>
          </div>
        ))}
      </div>
    </PageWrapper>
  </>
)
Blog.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
}

export default withStyles(styles)(Blog)

export const query = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            excerpt
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
