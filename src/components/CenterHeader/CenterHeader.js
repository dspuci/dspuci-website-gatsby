import React from "react"

export default props => (
  <h1
    style={{
      marginTop: props.marginTop ? props.marginTop : 60,
      marginBottom: props.marginBottom ? props.marginBottom : 40,
      fontWeight: 500,
      width: "100%",
      textAlign: "center",
      fontSize: 50,
    }}
  >
    {props.children}
  </h1>
)
