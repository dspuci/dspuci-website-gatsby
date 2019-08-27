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
            padding: [20, 30, 40, 50],
          }}
        >
          <FontAwesomeIcon icon={this.props.icon} className={styles.icon} />
          <h2>{this.props.title}</h2>
          <div>{this.props.children}</div>
        </Box>
      </Box>
    )
  }
}

export default HoverShadowBox
