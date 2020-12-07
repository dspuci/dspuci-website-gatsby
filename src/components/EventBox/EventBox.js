import React from "react"
import { Box, Image } from "rebass"
import HoverShadowBox from "../HoverShadowBox"
import styles from "./EventBox.module.css"

class EventBox extends React.Component {
  render() {
    return (
      <Box className={styles.container} width={[1, 1 / 2, 1 / 2, 1 / 3]} >
        <HoverShadowBox raise className="styles.containershadow">
            <div className={styles.image}>
                <Image src={this.props.imageSrc} />
            </div>
          <h2 className={styles.title}>
            {this.props.title}
          </h2>
          <div className={styles.description}>
            {this.props.children}
          </div>
        </HoverShadowBox>
      </Box>
    )
  }
}

export default EventBox
