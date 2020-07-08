import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import RecommendedPosts from '../components/RecommendedPosts'
import Comments from '../components/Comments'

import { PostHeader, PostTitle, PostDescription, PostDate, MainContent, PostFeedback } from '../components/Post/styled'

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const nextPost = pageContext.nextPost
  const previousPost = pageContext.previousPost
  
  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.featuredImage}
      />
      
      <PostHeader>
        <PostDate>{post.frontmatter.date} - {post.timeToRead} min de leitura</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <PostFeedback>
          <hr />
          <h4>Encontrou algum problema no texto? Me ajude a corrigir! 😁</h4>
          <p>
            Esse projeto é open source, então basta alterar o arquivo de texto, 
            <a href='https://github.com/willianmonteiro/pwa-react-graphQL'>
            &nbsp;diretamente no Github&nbsp;
            </a>
            e abrir um pull-request. É uma maneira simples e 
            eficaz de contribuir com a comunidade de desenvolvimento web. (e comigo 😅)
          </p>
          <hr />
        </PostFeedback>
      </MainContent>
      
      <RecommendedPosts next={nextPost} previous={previousPost} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title,
        description,
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        featuredImage
      }
      html
      timeToRead
    }
  }
`

export default SinglePost