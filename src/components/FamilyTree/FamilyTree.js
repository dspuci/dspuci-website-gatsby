import React from "react"
import { Box, Image } from "rebass"
import styles from "./FamilyTree.module.css"
import { withPrefix } from "gatsby"
import { Fade } from "react-reveal"
import ImageModal from "../ImageModal/ImageModal"

const term = "winter20"

class FamilyTree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: true,
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    // this.escFunction = this.escFunction.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    this.setState((state) => ({
      modalState: !state.modalState,
    }))
  }

  render() {
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3]}>
        <Fade>
          <Image
            className={styles.image}
            src={withPrefix(
              `/images/families/${term}/${this.props.familyName}.png`
            )}
            borderRadius={8}
            onClick={this.handleClick}
          />
        </Fade>
        {this.state.modalState ? null : (
          <ImageModal
            action={this.handleClick}
            source={`/images/families/${term}/${this.props.familyName}.png`}
          />
        )}
      </Box>
    )
  }
}

export default FamilyTree
