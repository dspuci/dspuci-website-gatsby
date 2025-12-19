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
          <Image
            src={this.props.imageSrc}
            sx={{
              borderRadius: "16px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 12px 40px rgba(53, 12, 94, 0.3)",
              },
            }}
          />
        </Box>
        <Box
          width={[1, 1, 1 / 2]}
          sx={{
            padding: [10, 10, 30, 50],
            paddingTop: [40, 30, 20, 10],
            paddingBottom: [40, 30, 20, 10],
          }}
        >
          <h1 style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>{this.props.title}</h1>
          <div style={{ color: "#999", lineHeight: 1.8 }}>{this.props.children}</div>
        </Box>
      </Flex>
    )
  }
}

export default ImageTextRow
