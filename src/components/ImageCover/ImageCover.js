import React from "react"
import styles from "./ImageCover.module.css"
import { Text } from "rebass"
import { withPrefix } from "gatsby"
import { darkColor, lightColor } from "../../styles/defaultColors"

class ImageCover extends React.Component {
  render() {
    let textColor
    if (this.props.textColor === "white") {
      textColor = lightColor
    } else if (this.props.textColor === "black") {
      textColor = darkColor
    }
    return (
      <div
        className={styles.imageCover}
        style={{
          backgroundImage:
            (this.props.darkGradient
              ? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), "
              : "") +
            "url(" +
            withPrefix(`/images/cover_images/${this.props.coverImage}`) +
            ")",
        }}
      >
        <div className={styles.coverTitleContainer}>
          <Text
            className={styles.coverTitle}
            color={textColor}
            fontSize={[6, 6, 7, 8]}
            fontFamily="Heebo"
          >
            {this.props.text}
            {this.props.text2 ? <><br/> {this.props.text2}</> : null}
          </Text>
        </div>
      </div>
    )
  }
}

export default ImageCover
