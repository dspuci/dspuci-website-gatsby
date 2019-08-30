import React from "react"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Careers"
        coverImage="careers.jpeg"
        textColor="white"
        darkGradient
      />
    }
  >
    hello
  </CoverLayout>
)
