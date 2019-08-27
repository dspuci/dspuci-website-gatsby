import React from "react"
import { Box } from "rebass"
import styles from "./HoverShadowBox.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
          <FontAwesomeIcon icon={this.props.icon} className={styles.icon} />
          <h2>{this.props.title}</h2>
          <div>
            Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
            ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
            appetere at. Audire facilisis no sit, in diceret.
          </div>
        </Box>
      </Box>
    )
  }
}

export default HoverShadowBox
