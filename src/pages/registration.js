import React from 'react'

import { StandardLayout } from "../components/Layout"
import {Helmet} from "react-helmet";

export default () => (
  <StandardLayout>
    <Helmet>
        <title>Registration | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Registration Page" content="Delta Sigma Pi - Pi Sigma Chapter Registration Page" />
    </Helmet>
    <div style={{width: "100%", overflow: "hidden"}}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8BIafgzVgDZJ7ZSm2ez_P0tv7FVzbekXdaEAPki7mOHlJlQ/viewform?embedded=true" width="100%" height="1280" frameborder="0" marginheight="0" marginwidth="0" title="registration">Loading…</iframe>
    </div>
  </StandardLayout>
)
