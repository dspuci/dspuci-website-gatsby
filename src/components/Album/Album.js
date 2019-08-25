import React from "react"
import styles from "./Album.module.css"
import { withPrefix } from "gatsby"

class Album extends React.Component {
  render() {
    return (
      <div
        onClick={() =>
          window.open(
            withPrefix(`/gallery/albums/${this.props.albumName}`),
            "_self"
          )
        }
        className={styles.albumCover}
        style={{
          backgroundImage:
            "url(" +
            withPrefix(`/images/gallery/${this.props.previewImagePath}`)
              .split(" ")
              .join("%20") +
            ")",
        }}
      >
        <div className={styles.albumName}>{this.props.albumName}</div>
      </div>
    )
  }
}

export default Album
