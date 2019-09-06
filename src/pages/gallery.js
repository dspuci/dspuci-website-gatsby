import React from "react"
import { graphql } from "gatsby"

import { StandardLayout } from "../components/Layout"
import Album from "../components/Album"
import CenterHeader from "../components/CenterHeader"

import styles from "./gallery.module.css"

export default ({ data }) => (
  <StandardLayout>
    <CenterHeader>Gallery</CenterHeader>
    <div className={styles.grid}>
      {data.albumPreviews.group.map(albumPreview => (
        <Album
          albumName={albumPreview.nodes[0].albumName}
          previewImagePath={albumPreview.nodes[0].previewImagePath}
        />
      ))}
    </div>
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
