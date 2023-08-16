const path = require(`path`)

// TO CHANGE BIO CHANGE THIS
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "BiosSummerfall23Xlsx__FormResponses1") {
    const slug = `${node["First Name"].trim()} ${node["Last Name"].trim()}`
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
      bios: allBiosSummerfall23XlsxFormResponses1 {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    console.log(result);
    result.data.bios.nodes.forEach((node) => {
      console.log(node.fields.slug);
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
