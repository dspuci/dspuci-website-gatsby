const path = require(`path`)

// Create slugs for each bio node
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "BiosCurrentdataXlxcXlsx__FormResponses1") {
    // Use safe access (prevents crashes if fields are missing)
    const first = node["First Name"] || ""
    const last = node["Last Name"] || ""

    const slug = `${first} ${last}`
      .trim()
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

// Create pages for each brother
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allBiosCurrentdataXlxcXlsxFormResponses1 {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }

  result.data.allBiosCurrentdataXlxcXlsxFormResponses1.nodes.forEach((node) => {
    if (!node.fields || !node.fields.slug) return

    createPage({
      path: `brothers/${node.fields.slug}`,
      component: path.resolve(`./src/templates/brother.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
