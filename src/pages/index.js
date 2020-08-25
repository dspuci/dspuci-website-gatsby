import React from "react"

import HomeCover from "../components/HomeCover"
import { CoverLayout } from "../components/Layout"
import {Helmet} from "react-helmet";

export default () => (
  <CoverLayout navbarTextColor="white" coverElement={<HomeCover />}>
    <Helmet>
        <title>Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Home Page" content="Delta Sigma Pi - Pi Sigma Chapter Home Page" />
    </Helmet>
  </CoverLayout>
)
