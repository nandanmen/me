const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
            next {
              frontmatter {
                path
              }
            }
            previous {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const projectPostTemplate = path.resolve(`src/templates/Project.tsx`)
  result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: projectPostTemplate,
      context: {
        pagePath: path,
        next,
        previous,
      },
    })
  })
}
