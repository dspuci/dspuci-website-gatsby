import React from "react"
import { Box, Image, Text } from "rebass"
import styles from "./FamilyTree.module.css"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import { Fade } from "react-reveal"

class FamilyTree extends React.Component {
  render() {
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3]}>
        <a href={`/images/families/winter19/${this.props.familyName}.png`}>
          <Fade>
            <Image
              className={styles.image}
              src={withPrefix(
                `/images/families/winter19/${this.props.familyName}.png`
              )}
              borderRadius={8}
            />
          </Fade>
        </a>
      </Box>
    )
  }
}

export default FamilyTree
