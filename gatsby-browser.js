import React from "react"
import "./src/styles/global.css"
import PageTransition from "./src/components/PageTransition"

export const wrapPageElement = ({ element, props }) => {
  if (!props || !props.location) {
    return element
  }
  return (
    <PageTransition location={props.location}>{element}</PageTransition>
  )
}
