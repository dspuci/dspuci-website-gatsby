import { graphql, withPrefix } from "gatsby"
import React from "react"
import { Flex, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"

export default ({ data }) => (
  <StandardLayout>
    <h1>Gallery</h1>
    <Flex flexWrap="wrap">
      {data.album_previews.group.map(album_preview => (
        <div>
          <Image
            src={withPrefix(
              `/images/gallery/${album_preview.nodes[0].preview_image_path}`
            )}
          />
          <Text>{album_preview.nodes[0].album_name}</Text>
        </div>
      ))}
    </Flex>
  </StandardLayout>
)

export const query = graphql`
  {
    album_previews: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      group(field: dir, limit: 1) {
        nodes {
          album_name: relativeDirectory
          preview_image_path: relativePath
        }
      }
    }
  }
`
