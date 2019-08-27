import React from "react"
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Fall Recruitment 2019"
        coverImage="beach.jpg"
        textColor="white"
      />
    }
  >
    hello
  </CoverLayout>
)
