import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import colors from '../config/colors'
import navigate from '../config/navigate'


const styles = () => ({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  root: {
    color: colors.$menuLink,
  },
  active: {
    color: colors.$white,
  },
})

const setButtonClass = (classes, location, searchPath) => {
  const path = location.pathname
  return path.indexOf(searchPath) >= 0 ? classes.active : classes.root
}

const MainNavigation = ({ classes, location }) => (
  <div className={classes.navContainer}>
    {navigate.map(l => (
      <Button
        className={setButtonClass(classes, location, l.path)}
        component={Link}
        to={l.path}
        key={l.path}
      >
        {l.label}
      </Button>
    ))}
  </div>
)
MainNavigation.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default withStyles(styles)(MainNavigation)
