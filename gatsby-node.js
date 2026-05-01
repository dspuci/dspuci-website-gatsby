const path = require(`path`)

// TO CHANGE BIO CHANGE THIS
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "BiosCurrentdataXlxcXlsx__FormResponses1") {
    const slug = `${node["First Name"].trim()} ${node["Last Name"].trim()}`
      .split(" ")
      .join("_")
      .toLowerCase()

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
      allBiosCurrentdataXlxcXlsxFormResponses1 {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allBiosCurrentdataXlxcXlsxFormResponses1.nodes.forEach((node) => {
      createPage({
        path: `brothers/${node.fields.slug}`,
        component: path.resolve(`./src/templates/brother.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
