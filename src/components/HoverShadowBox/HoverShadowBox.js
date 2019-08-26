import React from "react"
import { Box } from "rebass"
import styles from "./HoverShadowBox.module.css"

class HoverShadowBox extends React.Component {
  render() {
    return (
      <Box width={[1, 1 / 2, 1 / 2, 1 / 3]}>
        <Box
          className={styles.hover_shadow_box}
          sx={{
            margin: [0, 10],
          }}
        >
          <h2>{this.props.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
            ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
            appetere at. Audire facilisis no sit, in diceret.
          </p>
        </Box>
      </Box>
    )
  }
}

export default HoverShadowBox
