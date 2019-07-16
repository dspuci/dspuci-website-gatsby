const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "BiosSpring19Xlsx__FormResponses1") {
    const slug = (
      node["First Name"].trim() +
      "_" +
      node["Last Name"].trim()
    ).toLowerCase()
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allBiosSpring19XlsxFormResponses1 {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allBiosSpring19XlsxFormResponses1.nodes.forEach(node => {
      createPage({
        path: "brothers/" + node.fields.slug,
        component: path.resolve(`./src/templates/brother.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
