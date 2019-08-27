import React from "react"

import HomeCover from "../components/HomeCover"
import { CoverLayout } from "../components/Layout"

export default () => (
  <CoverLayout navbarTextColor="white" coverElement={<HomeCover />} />
)
