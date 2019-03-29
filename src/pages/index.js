import React from "react"
import HomeCover from "../components/HomeCover"
import { CoverLayout } from "../components/Layout"
import { lightColor } from "../styles/defaultColors"

export default () => (
  <CoverLayout navbarTextColor={lightColor} coverElement={<HomeCover />} />
)
