const path = require(`path`)

// TO CHANGE BIO CHANGE THIS
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "allGoogleSheetSummer2020Row") {
    const slug = `${node.firstname.trim()} ${node.lastname.trim()}`
      .split(" ")
      .join("_")
      .toLowerCase()
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  // } else if (
  //   node.sourceInstanceName === "gallery" &&
  //   node.internal.type === "Directory"
  // ) {
  //   const slug = node.name
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   })
  // } else if (
  //   node.sourceInstanceName === "gallery" &&
  //   node.internal.type === "File"
  // ) {
  //   const slug = node.relativePath
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      bios: allGoogleSheetSummer2020Row {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.bios.nodes.forEach(node => {
      createPage({
        path: "brothers/" + node.slug,
        component: path.resolve(`./src/templates/brother.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    })

    // result.data.albums.nodes.forEach(node => {
    //   createPage({
    //     path: "gallery/albums/" + node.slug,
    //     component: path.resolve(`./src/templates/album.js`),
    //     context: {
    //       // Data passed to context is available
    //       // in page queries as GraphQL variables.
    //       // albumName: node.name,
    //       slug: node.slug,
    //     },
    //   })
    // })
  })
}
