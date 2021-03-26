const POST_PER_PAGE = 1

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  //   create paginated pages for posts
  const NUMBER_OF_PAGES = Math.ceil(data.allMdx.edges.length / POST_PER_PAGE)

  Array.from({ length: NUMBER_OF_PAGES }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/` : `/${index + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: POST_PER_PAGE,
        skip: index * POST_PER_PAGE,
        currentPage: index + 1,
        numberOfPages: NUMBER_OF_PAGES,
      },
    })
  })

  // create single blog post
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: {
        id,
      },
    })
  })
}
