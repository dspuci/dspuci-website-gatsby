import React from "react"
import { Flex, Box, Image } from "rebass"

class ImageTextRowTwo extends React.Component {
  render() {
    return (
      <Flex
        flexWrap="wrap"
        sx={{
          display: "flex",
          width: "103%",
          marginBottom: [20, 20, 40, 90],
          flexDirection:
            this.props.imagePosition === "right" ? "row-reverse" : "row",
        }}
      >
        <Box width={[1, 1, 1 / 3, 3 / 7]}>
          <Image src={this.props.imageSrc} style={{ borderRadius: "16px" }}/>
        </Box>
        <Box
          width={[1, 1, 2 / 3, 4 / 7]}
          sx={{
            padding: [10, 10, 30, 50],
            paddingTop: [40, 30, 0, 0],
            paddingBottom: [40, 30, 20, 10],
          }}
        >
          <div style={{ color: "#999", fontSize: "15px" }}>
            {this.props.children}
          </div>
        </Box>
      </Flex>
    )
  }
}

export default ImageTextRowTwo
