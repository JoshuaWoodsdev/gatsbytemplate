import * as React from 'react'
import Layout from "../components/layout"
// Step 1: Import the useStaticQuery hook and graphql tag
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
  `)

  return (
   <Layout>
    <header>
      {/* Step 3: Use the data in your component */}
      <h1>{data.site.siteMetadata.title}</h1>
      <h3>{data.site.siteMetadata.description}</h3>
    </header>
   </Layout>
  )
}

export default Header

