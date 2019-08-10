import React from "react"
import { graphql } from "gatsby"
import { Image } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"

export default ({ data }) => {
  return (
    <StandardLayout>
      {data.images.nodes.map(node => (
        <Image src={withPrefix(`/images/gallery/${node.relativePath}`)} />
      ))}
    </StandardLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "gallery" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      nodes {
        relativePath
      }
    }
  }
`
