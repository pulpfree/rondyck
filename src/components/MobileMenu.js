import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import colors from '../config/colors'
import navigate from '../config/navigate'

const styles = () => ({
  button: {
    // margin: theme.spacing.unit,
    color: colors.$menuLink,
    padding: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: colors.$primary,
    borderBottom: `solid 2px ${colors.$red}`,
    marginBottom: '1em',
  },
  titleLink: {
    color: colors.$menuLink,
    textDecoration: 'none',
    fontFamily: "'Fira Sans',sans-serif",
    fontSize: '1.5rem',
    letterSpacing: '1.2px',
  },
})

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, siteTitle } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.container}>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon style={{ fontSize: 35 }} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {navigate.map(l => (
            <MenuItem
              key={l.path}
              onClick={this.handleClose}
              component={Link}
              to={l.path}
            >
              {l.label}
            </MenuItem>
          ))}
        </Menu>
        <h2
          css={{
            margin: 0,
            marginLeft: 10,
          }}
        >
          <Link
            to="/"
            className={classes.titleLink}
          >
            {siteTitle}
          </Link>
        </h2>
      </div>
    )
  }
}
SimpleMenu.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  siteTitle: PropTypes.string.isRequired,
}

export default withStyles(styles)(SimpleMenu)
