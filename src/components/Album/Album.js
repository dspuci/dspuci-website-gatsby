import React from "react"
import { Box, Text, Image } from "rebass"
import styles from "./Album.module.css"
import { withPrefix } from "gatsby"
import { Fade } from "react-reveal"

class Album extends React.Component {
  render() {
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3]}>
        <a href={withPrefix(`/gallery/albums/${this.props.albumName}`)}>
          <Fade>
            <Image
              className={styles.image}
              src={withPrefix(`/images/gallery/${this.props.previewImagePath}`)}
            />
            <Text>{this.props.albumName}</Text>
          </Fade>
        </a>
      </Box>
    )
  }
}

export default Album
