import React from "react"
import { graphql } from "gatsby"
import { Image } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"

export default ({ data }) => {
  return (
    <StandardLayout>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        {data.images.nodes.map(node => (
          <a href={withPrefix(`/images/gallery/${node.relativePath}`)}>
            <Image
              style={{
                height: "200px",
                width: "auto",
                marginLeft: "4px",
                marginRight: "4px",
              }}
              src={withPrefix(`/images/gallery/${node.relativePath}`)}
            />
          </a>
        ))}
      </div>
    </StandardLayout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     images: allFile(
//       filter: {
//         sourceInstanceName: { eq: "gallery" }
//         relativeDirectory: { eq: $slug }
//       }
//     ) {
//       nodes {
//         relativePath
//       }
//     }
//   }
// `
