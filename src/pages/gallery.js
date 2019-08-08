import { withPrefix } from "gatsby"
import React from "react"
import { Image } from "rebass"
import { StandardLayout } from "../components/Layout"

export default () => (
  <StandardLayout>
    <h1>Gallery</h1>
    <Image src={withPrefix(`/images/brothers/winter19/farbod_rafezy.jpg`)} />
  </StandardLayout>
)
