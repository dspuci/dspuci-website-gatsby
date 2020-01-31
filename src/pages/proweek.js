import React from "react"

import ProWeekCover from "../components/ProWeekCover"
import { CoverLayout } from "../components/Layout"

export default () => (
  <CoverLayout navbarTextColor="white" coverElement={<ProWeekCover />} />
)
