import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header } from '../components'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="indexContainer">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div style={{minWidth: '110px'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
    </div>
    
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        overflow: 'hidden',
        height: '100vh'
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
