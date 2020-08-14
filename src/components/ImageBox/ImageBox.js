import React from "react"
import { Box, Image } from "rebass"
import styles from "./ImageBox.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ImageBox extends React.Component {
  render() {
    return (
      <Box className={styles.container} width={[1, 1 / 2, 1 / 2, 1 / 3]} >
        <img src={this.props.image} className={styles.image}/>
        <h1 className={styles.title}>{this.props.title}</h1>
        <p className={styles.description}>{this.props.children}</p>
      </Box>
    )
  }
}

export default ImageBox
