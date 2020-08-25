import React from "react"
import { graphql } from "gatsby"

import { StandardLayout } from "../components/Layout"
import Album from "../components/Album"
import CenterHeader from "../components/CenterHeader"
import {Helmet} from "react-helmet";

import styles from "./gallery.module.css"

export default ({ data }) => (
  <StandardLayout>
    <Helmet>
        <title>Gallery | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Gallery Page" content="Delta Sigma Pi - Pi Sigma Chapter Gallery Page" />
    </Helmet>
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
