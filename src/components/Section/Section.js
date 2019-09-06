import React from "react"
import { Flex } from "rebass"

class Section extends React.Component {
  render() {
    const defaultSx = {
      marginTop: 70,
      marginBottom: 70,
      justifyContent: "center",
    }
    const addedSx = this.props.sx ? this.props.sx : {}
    return (
      <Flex sx={{ ...defaultSx, ...addedSx }} flexWrap="wrap">
        {this.props.children}
      </Flex>
    )
  }
}

export default Section
