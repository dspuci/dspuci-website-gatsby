import { graphql } from "gatsby"
import React from "react"
import { Flex } from "rebass"
import { StandardLayout } from "../components/Layout"
import Album from "../components/Album/Album"

export default ({ data }) => (
  <StandardLayout>
    <h1>Gallery</h1>
    <Flex flexWrap="wrap">
      {data.albumPreviews.group.map(albumPreview => (
        <Album
          albumName={albumPreview.nodes[0].albumName}
          previewImagePath={albumPreview.nodes[0].previewImagePath}
        />
      ))}
    </Flex>
  </StandardLayout>
)

export const query = graphql`
  {
    albumPreviews: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      group(field: dir, limit: 1) {
        nodes {
          albumName: relativeDirectory
          previewImagePath: relativePath
        }
      }
    }
  }
`
