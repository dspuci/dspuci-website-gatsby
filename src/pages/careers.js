import React from "react"
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Where we work"
        coverImage="careers2.jpeg"
        textColor="white"
      />
    }
  >
    hello
  </CoverLayout>
)
