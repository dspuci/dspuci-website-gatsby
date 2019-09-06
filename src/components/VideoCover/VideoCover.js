import React from "react"
import { Text } from "rebass"
import { withPrefix } from "gatsby"
import { darkColor, lightColor } from "../../styles/defaultColors"

class VideoCover extends React.Component {
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
          height: "70vh",
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
          }}
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          poster={withPrefix(`/images/cover_images/${this.props.backupImage}`)}
        >
          <source
            src={withPrefix(
              `/images/cover_images/${this.props.coverVideo}.webm`
            )}
            type="video/webm"
          ></source>
          <source
            src={withPrefix(
              `/images/cover_images/${this.props.coverVideo}.mp4`
            )}
            type="video/mp4"
          ></source>
        </video>
        <Text
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            maxWidth: 500,
            textAlign: "center",
            margin: "0 auto",
            textTransform: "uppercase",
            lineHeight: 1.4,
            fontWeight: "bold",
            zIndex: 0,
          }}
          color={textColor}
          fontSize={[6, 6, 7, 8]}
          fontFamily="Heebo"
        >
          {this.props.text}
        </Text>
      </div>
    )
  }
}

export default VideoCover
