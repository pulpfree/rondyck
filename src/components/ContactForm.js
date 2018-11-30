import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'

import PageWrapper from './PageWrapper'


const styles = theme => ({
  container: {
    minHeight: 400,
    maxWidth: 500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    flex: 1,
    marginBottom: theme.spacing.unit,
  },
})

const ContactForm = ({
  classes,
  data,
  dirty,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  status,
  values,
}) => {
  const success = status && status.success

  return (
    <>
      <Helmet
        title={`${data.site.siteMetadata.title} - Contact`}
      />
      <PageWrapper>
        <div className={classes.container}>
          <h1>Contact Ron Dyck</h1>
          {success ? (
            <div>Thank-you! Your info is on it&apos;s way.</div>
          ) : (
          <>
            <p>Enter your details and I&apos;ll respond to you shortly.</p>
            <form
              autoComplete="off"
              className={classes.form}
              noValidate
              onSubmit={handleSubmit}
            >
              <FormControl
                aria-describedby="size-helper-text"
                className={classes.formControl}
                error={!!errors.name}
              >
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  autoFocus
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name || ''}
                />
                <FormHelperText id="name-text">{errors.name}</FormHelperText>
              </FormControl>

              <FormControl
                aria-describedby="email-helper-text"
                className={classes.formControl}
                error={!!errors.email}
              >
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email || ''}
                />
                <FormHelperText id="email-text">{errors.email}</FormHelperText>
              </FormControl>

              <FormControl
                aria-describedby="comments-helper-text"
                className={classes.formControl}
                error={!!errors.comments}
              >
                <InputLabel htmlFor="comments">Comments</InputLabel>
                <Input
                  id="comments"
                  multiline
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.comments || ''}
                />
                <FormHelperText id="comments-text">{errors.comments}</FormHelperText>
              </FormControl>

              <Button
                className={classes.submitButton}
                color="primary"
                disabled={!dirty || isSubmitting}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </>
          )}
        </div>
      </PageWrapper>
    </>
  )
}
ContactForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  dirty: PropTypes.bool.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  status: PropTypes.instanceOf(Object),
}
ContactForm.defaultProps = {
  status: null,
}

export default withStyles(styles)(ContactForm)
