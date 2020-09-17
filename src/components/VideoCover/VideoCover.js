import React from "react"
import { Text, Image } from "rebass"
import { withPrefix, Link } from "gatsby"
import { darkColor, lightColor } from "../../styles/defaultColors"
import styles from "./Layout.module.css"

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
          }}
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          poster={withPrefix(`/images/cover_images/${this.props.backupImage}`)}
        >
          <source
            src={this.props.coverVideo}
            type="video/mp4"
          ></source>
        </video>
        <Image 
          src={this.props.coverImage}
          sx={{
            position: "relative",
            display: 'block',
            width: ['60%', '20%'],
            margin: "0 auto",
            textAlign: "center",
          }}
          />
        <Text
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            maxWidth: 1000,
            textAlign: "center",
            margin: "10px auto",
            textTransform: "uppercase",
            lineHeight: 1.4,
            fontWeight: "100",
            zIndex: 0,
            letterSpacing: '8px'
          }}
          color={textColor}
          fontSize={[5, 6, 7, 8]}
          fontFamily="Heebo"
        >
          {this.props.textOne}
        </Text>
        <Text
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            maxWidth: '100%',
            textAlign: "center",
            margin: "10px auto",
            textTransform: "uppercase",
            lineHeight: 1.4,
            fontWeight: "100",
            zIndex: 0,
            letterSpacing: '4px'
          }}
          color={textColor}
          fontSize={[1, 2, 2, 1]}
          fontFamily="Heebo"
        >
          {this.props.textTwo}
        </Text>
          <Link to="/recruitment">
            <button className={styles.button}>
              APPLY NOW
            </button>
          </Link>
      </div>
    )
  }
}

export default VideoCover
