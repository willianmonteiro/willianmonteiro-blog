import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'
import { ListWrapper } from "../components/ListWrapper/styled"

const ArchivePost = props => {
  const postList = props.data.allMarkdownRemark.edges

  // context from gatsby-node
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home"/>

      <ListWrapper>
        {postList.map(({
           node: {
             frontmatter: { background, featuredImage, imageCopyright, category, date, description, title },
             timeToRead,
             fields: { slug }
           },
         }) => (
          <PostItem
            slug={slug}
            background={background}
            featuredImage={featuredImage}
            imageCopyright={imageCopyright}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        ))}
      </ListWrapper>

      <Pagination 
        isFirst={isFirst} 
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostListQuery ($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: $limit,
        skip: $skip
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              background
              featuredImage
              imageCopyright
            }
            timeToRead
          }
        }
      }
    }
`

export default ArchivePost