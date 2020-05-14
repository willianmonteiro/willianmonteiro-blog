import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/Layout"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark
  
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter { title }
      html
    }
  }
`

export default SinglePost