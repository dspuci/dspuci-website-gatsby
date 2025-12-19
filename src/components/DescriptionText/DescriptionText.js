import React from "react"
import { Text } from "rebass"

export default (props) => (
  <Text
    sx={{
      color: "#fff",
      fontWeight: 100,
      fontSize: 16,
      lineHeight: 1.9,
    }}
  >
    {props.children}
  </Text>
)
