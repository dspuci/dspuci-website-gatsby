import React from "react"
import { Flex, Box, Image } from "rebass"

class ImageTextRow extends React.Component {
  render() {
    return (
      <Flex
        flexWrap="wrap"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: [20, 20, 40, 90],
          flexDirection:
            this.props.imagePosition === "right" ? "row-reverse" : "row",
        }}
      >
        <Box width={[1, 1, 1 / 2]}>
          <Image src={this.props.imageSrc} />
        </Box>
        <Box
          width={[1, 1, 1 / 2]}
          sx={{
            padding: [10, 10, 30, 50],
            paddingTop: [40, 30, 20, 10],
            paddingBottom: [40, 30, 20, 10],
          }}
        >
          <h1>{this.props.title}</h1>
          <div style={{ color: "#999" }}>{this.props.children}</div>
        </Box>
      </Flex>
    )
  }
}

export default ImageTextRow
