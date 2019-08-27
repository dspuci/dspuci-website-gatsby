import React from "react"

export default props => (
  <h1
    style={{
      marginTop: 60,
      marginBottom: 40,
      fontWeight: 500,
      width: "100%",
      textAlign: "center",
      fontSize: 50,
    }}
  >
    {props.children}
  </h1>
)
