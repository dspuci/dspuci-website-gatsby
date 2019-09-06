import React from "react"
import { withPrefix } from "gatsby"
import { darkColor, lightColor } from "../../styles/defaultColors"
import styles from "./HomeVideoCover.module.css"

class HomeVideoCover extends React.Component {
  render() {
    let textColor
    if (this.props.textColor === "white") {
      textColor = lightColor
    } else if (this.props.textColor === "black") {
      textColor = darkColor
    }
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          display: "table-cell",
          verticalAlign: "middle",
          textAlign: "center",
          background: this.props.darkGradient
            ? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
            : "",
        }}
      >
        <video
          style={{
            minWidth: "100%",
            minHeight: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: -1,
            objectFit: "cover",
          }}
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          poster={withPrefix(`/images/cover_images/home.jpg`)}
        >
          <source
            src={withPrefix(`/images/cover_images/home.webm`)}
            type="video/webm"
          ></source>
          <source
            src={withPrefix(`/images/cover_images/home.mp4`)}
            type="video/mp4"
          ></source>
        </video>
        <div
          style={{
            color: textColor,
          }}
          className={styles.homeTitle}
        >
          <h1>ΔΣΠ</h1>
          <hr />
          <h2>Delta Sigma Pi - Pi Sigma Chapter</h2>
        </div>
        {/* <Text color={textColor} fontSize={[6, 6, 7, 8]} fontFamily="Heebo">
          {this.props.text}
        </Text> */}
      </div>
    )
  }
}

export default HomeVideoCover
