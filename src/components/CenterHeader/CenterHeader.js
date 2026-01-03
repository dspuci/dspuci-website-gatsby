import React from "react"

export default (props) => (
  <h1
    style={{
      marginTop: props.marginTop ? props.marginTop : 55,
      marginBottom: props.marginBottom ? props.marginBottom : 45,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      fontSize: 50,
      fontFamily: "Georgia, serif",
      letterSpacing: "0.02em",
    }}
  >
    {props.children}
  </h1>
)
