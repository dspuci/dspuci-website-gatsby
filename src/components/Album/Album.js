import React from "react"
import styles from "./Album.module.css"
import { withPrefix } from "gatsby"
import styled from 'styled-components';

const Container = styled.div``;

class Album extends React.Component {
  render() {
    return (
      <Container
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
      </Container>
    )
  }
}

export default Album
