/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

import colors from '../config/colors'
import PageWrapper from '../components/PageWrapper'
import SkillSet from '../components/SkillSet'

const styles = () => ({
  h2: {
    borderBottom: `1.5px solid ${colors.$midGray}`,
    paddingBottom: 5,
    marginTop: 30,
    marginBottom: 20,
    marginRight: 50,
  },
  linkList: {
    '& li': {
      marginBottom: 3,
    },
  },
  listItem: {
    margin: 0,
  },
  sep: {
    height: 40,
    borderTop: `3px solid ${colors.$midGray}`,
    margin: '30px 80px 0',
  },
})

const Resume = ({ classes, data }) => (
  <>
    <Helmet
      title={`${data.site.siteMetadata.title} - Résumé`}
    />
    <PageWrapper>
      <h1>Résumé</h1>

      <h2 className={classes.h2}>Profile</h2>
      <p>Passionate software engineer with 18+ years of experience developing robust mission-critical solutions for businesses. Successfully innovated creative solutions and connected with customers to help them appreciate an ROI. Enjoy the challenge of learning and applying new ideas and technologies to solve problems.</p>
      <h2 className={classes.h2}>Skills and Experience</h2>
      <p>My primary focus recently has been with Golang and Javascript languages developing applications and microservices utilizing Graphql to query either MongoDB or DynamoDB. My deployment strategies have focused on AWS services to leverage the benefits of serverless technologies.</p>
      <SkillSet />

      <h2 className={classes.h2}>Projects</h2>

      <h3>Data Entry & Management Application - Fuel Sales Company</h3>
      <h4>Scope</h4>
      <p>Build a web-based application to manage data from the company’s gas station sales to replace their existing Filemaker based solution. Employ microservices in the application design to better abstract and maintain features and functionality. Utilize React to create an SPA and separate the UI from the backend. Create reports that can be downloaded in various formats: PDF, CSV and Excel to allow management staff to scrutinize the data.</p>
      <h4>Outcome</h4>
      <p>The client is realizing a ROI due to: faster application response times and less time required to enter data. All data is now better categorized and allows management to find any inconsistencies and anomalies.</p>
      <h4>Repositories</h4>
      <ul className={classes.linkList}>
        <li>
          <a href="https://github.com/pulpfree/gales-dips-client" target="_blank" rel="noopener noreferrer">
            Front-end Client
          </a>
        </li>
        <li>
          <a href="https://github.com/pulpfree/gales-dips-graphql-server" target="_blank" rel="noopener noreferrer">
            Graphql Server
          </a>
        </li>
        <li>
          <a href="https://github.com/pulpfree/gales-fuelsale-report" target="_blank" rel="noopener noreferrer">
            Lambda Function
          </a>
        </li>
        <li>
          <a href="https://github.com/pulpfree/gdps-fs-dwnld" target="_blank" rel="noopener noreferrer">
            Lambda Function
          </a>
        </li>
      </ul>
      <div className={classes.sep} />

      <h3>CBT Niagara - Cognitive Therapy Clinic</h3>
      <h4>Scope</h4>
      <p>Provide an easy to use patient scheduling solution that is both cost-effective and provides features specific to the clients` requirements, including multi-user, easy to navigate, and cost-effective while providing features specific to the Company’s needs.</p>
      <h4>Outcome</h4>
      <p>Delivered the product including needs analysis, product development, UAT and go-live within 6 weeks and on budget.</p>
      <div className={classes.sep} />

      <h3>Universal Windows - Window Replacement Company</h3>
      <h4>Scope</h4>
      <p>Build an Apple iPad tablet based CRM application. A key feature is the job sheet creation tool designed to make the task of entering window details painless and avoid costly mistakes resulting from inaccurate details. Other features include: Quote Builder; here the client can select from items in the job sheet to build any number of custom versioned quotes to accommodate the changes necessary to meet the customer&apos;s budget. Invoicing; Invoices are produced in a PDF format and emailed to the customer. </p>
      <h4>Outcome</h4>
      <p>The application has given the client an edge in this competitive market as the level of professionalism in his presentations has increased. The client quickly saw an ROI with both an increase in sales and the reduction in costly errors.</p>

      <h3>Server Infrastructure - Internal Project</h3>
      <h4>Scope</h4>
      <p>Rebuild existing server infrastructure utilizing Terraform and various AWS services to create a reproducible infrastructure. Separate environments are required for development and production ensuring that changes in the infrastructure are properly tested before deployment.</p>
      <h4>Outcome</h4>
      <p>Entire infrastructure is now code based and a snap to reproduce. Changes can be safely tested in a development environment before deploying. Reporting and logging is greatly improved providing better insight into any issues.</p>

    </PageWrapper>
  </>
)
Resume.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
}

export default withStyles(styles)(Resume)

export const query = graphql`
  query ResumePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
