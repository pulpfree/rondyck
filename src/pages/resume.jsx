import React from 'react'

import { css } from 'glamor'
import { Helmet } from 'react-helmet'

const h2Style = css({ borderBottom: '1px solid #c0c0c0', paddingBottom: 3, marginTop: 30, marginBottom:20 })


export default ({data}) => ( // eslint-disable-line react/prop-types
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title} - Résumé</title>
    </Helmet>
    <h1>Résumé</h1>
    <h2 className={h2Style}>Profile</h2>
    <p>Passionate software engineer with 18+ years of experience developing robust mission-critical solutions for businesses. Successfully lead teams to innovate creative solutions and connect with customers to help them appreciate an ROI. Enjoy the challenge of learning and applying new ideas and technologies to solve problems.</p>
    <h2 className={h2Style}>Skills and Experience</h2>
    <table>
      <tbody>
      <tr>
        <td>Golang (3yrs)</td>
        <td>Docker (3yrs)</td>
        <td>React & React Native (2yrs)</td>
      </tr>
      <tr>
        <td>NodeJS (3yrs)</td>
        <td>AWS (5yrs)</td>
        <td>MongoDB (6yrs)</td>
      </tr>
      <tr>
        <td>Git</td>
        <td>Terraform</td>
        <td></td>
      </tr>
      <tr>
        <td>MySQL (7yrs)</td>
        <td>Ruby (2yrs)</td>
        <td>PHP (10yrs)</td>
      </tr>
      <tr>
        <td>HTML5 & CSS (10yrs)</td>
        <td>Angular (2yrs)</td>
        <td>Sketch & Photoshop (2yrs)</td>
      </tr>
      <tr>
        <td>Microservices</td>
        <td>SPA design</td>
        <td>API development</td>
      </tr>
      </tbody>
    </table>
    <h2 className={h2Style}>Projects</h2>
    <h3>CBT Niagara - Cognitive Therapy Clinic</h3>
    <h4>Scope</h4>
    <p>Provide an easy to use patient scheduling solution that is both cost-effective and provides features specific to the clients` requirements, including multi-user, easy to navigate, and cost-effective while providing features specific to the Company’s needs.</p>
    <h4>Outcome</h4>
    <p>Delivered the product including needs analysis, product development, UAT and go-live within 6 weeks and on budget.</p>

    <h3>Universal Windows - Window Replacement Company</h3>
    <h4>Scope</h4>
    <p>Build an Apple iPad tablet based CRM application. A key feature is the job sheet creation tool designed to make the task of entering window details painless and avoid costly mistakes resulting from inaccurate details. Other features include: Quote Builder; here the client can select from items in the job sheet to build any number of custom versioned quotes to accommodate the changes necessary to meet the customer's budget. Invoicing; Invoices are produced in a PDF format and emailed to the customer. </p>
    <h4>Outcome</h4>
    <p>The application has given the client an edge in this competitive market as the level of professionalism in his presentations has increased. The client quickly saw an ROI with both an increase in sales and the reduction in costly errors.</p>

    <h3>Data Entry & Management Application - Fuel Sales Company</h3>
    <h4>Scope</h4>
    <p>Build a web-based application to manage data from the company’s gas station sales to replace their existing Filemaker based solution. Employ microservices in the application design to better abstract and maintain features and functionality. Utilize React to create an SPA and separate the UI from the backend. Create reports that can be downloaded in various formats: PDF, CSV and Excel to allow management staff to scrutinize the data.</p>
    <h4>Outcome</h4>
    <p>The client is realizing a ROI due to: faster application response times and less time required to enter data. All data is now better categorized and allows management to find any inconsistencies and anomalies.</p>

    <h3>Server Infrastructure - Internal Project</h3>
    <h4>Scope</h4>
    <p>Rebuild existing server infrastructure utilizing Terraform and various AWS services to create a reproducible infrastructure. Separate environments are required for development and production ensuring that changes in the infrastructure are properly tested before deployment.</p>
    <h4>Outcome</h4>
    <p>Entire infrastructure is now code based and a snap to reproduce. Changes can be safely tested in a development environment before deploying. Reporting and logging is greatly improved providing better insight into any issues.</p>

  </div>
)

// eslint-disable-next-line no-undef
export const query = graphql`
  query ResumePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
