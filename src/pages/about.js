/* eslint-disable max-len */

import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import PageWrapper from '../components/PageWrapper'
import HeadShot from '../components/HeadShot'
import ImageSkydive from '../components/ImageSkydive'

import colors from '../config/colors'

const About = ({ data }) => (
  <PageWrapper>
    <Helmet
      title={`${data.site.siteMetadata.title} - About`}
    />
    <div>
      <h1>About Me</h1>
      <HeadShot style={{
        float: 'left',
        width: 100,
        marginRight: '.75rem',
        border: `solid 1px ${colors.$midGray}`,
        borderRadius: 5,
        boxShadow: '1px 2px 4px',
      }}
      />
      <p>I&apos;ve been working as a Full Stack developer/engineer for more than 19 yrs creating websites and web applications for various companies and clients. The majority of that time I&apos;ve been the sole-proprietor of Webbtech doing consulting and contract work.</p>
      <p>
        I&apos;m passionate about learning and am currently focusing on Graphql, various AWS Services (Lambda and Serverless) and React. For more details on my work and skill set check out my
        &nbsp;
        <Link to="/resume/">Résumé</Link>
        ,&nbsp;my&nbsp;
        <a href="https://github.com/pulpfree?utf8=✓&tab=repositories&q=&type=public&" target="_blank" rel="noopener noreferrer">GitHub account</a>
        ,&nbsp;or&nbsp;
        <Link to="/contact/">contact me directly</Link>
      </p>
      <p>In my spare time I enjoy skydiving, cycling and yoga.</p>
      <p>
        Here&apos;s a photo of my son and myself on his first skydive.
        <ImageSkydive style={{
          border: `solid 1px ${colors.$midGray}`,
          borderRadius: 5,
          boxShadow: '1px 2px 4px',
        }}
        />
      </p>
    </div>
  </PageWrapper>
)
About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export default About

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
