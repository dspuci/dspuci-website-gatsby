import React from "react"
import { Text } from "rebass"

export default (props) => {
  const raw = props.children != null ? String(props.children) : ""
  const lines = raw.split("\n")

  return (
    <Text
      sx={{
        color: "#1a1a1a",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.7,
        fontFamily: "Heebo, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif",
      }}
    >
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line.trim()}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </Text>
  )
}
