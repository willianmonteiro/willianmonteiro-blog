import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'

import { PostHeader, PostTitle, PostDescription, PostDate, MainContent } from '../components/Post/styled'

const SinglePost = ({ data }) => {
  const post = data.markdownRemark
  
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      
      <PostHeader>
        <PostDate>{post.frontmatter.date} - {post.timeToRead}min de leitura</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </MainContent>
    </Layout>
  )
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter { 
        title,
        description,
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default SinglePost