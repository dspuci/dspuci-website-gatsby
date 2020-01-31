import React from 'react'

import HomeCover from "../components/HomeCover"
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"


export default () => (
  <CoverLayout>
      <ImageCover
        text="sample registration page"
        coverImage=""
        textColor="white"
        darkGradient
      />
  </CoverLayout>
)
