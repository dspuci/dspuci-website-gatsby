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
  } else if (
    node.sourceInstanceName === "gallery" &&
    node.internal.type === "Directory"
  ) {
    const slug = node.name.split(" ").join("-")
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (
    node.sourceInstanceName === "gallery" &&
    node.internal.type === "File"
  ) {
    const slug = node.relativePath.split(" ").join("-")
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
      spring19Bios: allBiosSpring19XlsxFormResponses1 {
        nodes {
          fields {
            slug
          }
        }
      }

      albums: allDirectory(
        filter: {
          sourceInstanceName: { eq: "gallery" }
          name: { ne: "gallery" }
        }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.spring19Bios.nodes.forEach(node => {
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

    result.data.albums.nodes.forEach(node => {
      createPage({
        path: "gallery/albums/" + node.fields.slug,
        component: path.resolve(`./src/templates/album.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          albumName: node.name,
          slug: node.fields.slug,
        },
      })
    })
  })
}
