import React from "react"
import { graphql } from "gatsby"

import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"

import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numberOfPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages

  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Welcome to my personal blog posts
        </H1>
        <P textAlign="center">
          My name is Praveen yadav, currently working at gojek. I love to share
          my thought by writing blog posts on this platform. Please feel free to
          give your feedback and suggestions on this
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPosts
export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            excerpt
          }
        }
      }
    }
  }
`
