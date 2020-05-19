/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Fetch content of the spcific nodes only
  // console.log(JSON.stringify(node, undefined, 4))
  if (node.internal.type === "MarkdownRemark") {
    // Create a url slug with the filename
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // const slug = createFilePath({ node, getNode, basePath: `posts` })

    // Once the slug is created, add it to cerate node fields
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Creating pages for the respective slug
// Either a promise or async await can be used
module.exports.createPages = async ({ graphql, actions }) => {
  // Destructuring the createPage function
  const { createPage } = actions
  // Path to the slide template file using resolve method in path module
  const slideTemplate = path.resolve("./src/templates/post.js")
  // Fetch the markdown data using graphl and not static query
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Map over and create pages using the slug string
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // Providing component the filename
      component: slideTemplate,
      // Path of the slide to create
      path: `/slides/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
