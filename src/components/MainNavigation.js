import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import colors from '../config/colors'


const styles = {
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 120,
  },
  root: {
    color: 'white',
  },
  active: {
    color: colors.$accentText,
  },
}

const setButtonClass = (classes, searchPath) => {
  const path = window.location.pathname
  return path === searchPath ? classes.active : classes.root
}

const MainNavigation = ({ classes }) => (
  <div className={classes.navContainer}>
    <Button
      className={setButtonClass(classes, '/')}
      // variant="contained"
      component={Link}
      to="/"
    >
      blog
    </Button>
    <Button
      className={setButtonClass(classes, '/about/')}
      // variant="contained"
      component={Link}
      to="/about/"
    >
      about
    </Button>
  </div>
)

MainNavigation.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
}

export default withStyles(styles)(MainNavigation)
