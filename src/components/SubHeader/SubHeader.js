import React from "react"

export default (props) => (
  <h2
    style={{
      marginTop: props.marginTop ? props.marginTop : 0,
      marginBottom: props.marginBottom ? props.marginBottom : 20,
      fontWeight: 500,
      width: "100%",
      textAlign: "center",
      fontSize: 30,
    }}
  >
    {props.children}
  </h2>
)
