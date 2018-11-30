import { withFormik } from 'formik'
import compose from 'recompose/compose'
import { graphql } from 'gatsby'
import * as Yup from 'yup'

import ContactForm from '../components/ContactForm'
import sendEmail from '../utils/SESService'

const fieldNames = ['email', 'name', 'comments']

function extractFields(names, formValues) {
  const fields = {}
  names.forEach((nm) => {
    if (nm in formValues) {
      fields[nm] = formValues[nm]
    }
  })
  return fields
}

// see: https://jaredpalmer.com/formik/docs/guides/validation
// for alternate way of handling errors
const ContactFormCntr = withFormik({
  enableReinitialize: true,
  validateOnBlur: true,
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(32, 'Maximum number of characters is: 32')
      .required(),
    email: Yup.string()
      .email()
      .required(),
    comments: Yup.string()
      .max(256, 'Maximum number of characters is: 256')
      .nullable(),
  }),
  handleSubmit: async (values, { setStatus, setSubmitting }) => {
    const fields = extractFields(fieldNames, values)
    try {
      await sendEmail(fields)
      setStatus({ success: true })
      setSubmitting(false)
    } catch (err) {
      setStatus({ success: false })
      console.error(err) // eslint-disable-line
    }
  },
  displayName: 'ContactForm',
})

export default compose(
  ContactFormCntr
)(ContactForm)

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
