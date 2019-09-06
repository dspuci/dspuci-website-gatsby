import React from "react"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import Section from "../components/Section"
import CareersTables from "../components/CareersTables"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Careers"
        coverImage="careers.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Section sx={{ justifyContent: "left" }}>
      <h1 style={{ marginBottom: 10 }}>A higher standard of career success.</h1>
      <div>
        At UC Irvine, we’re redefining and raising the bar of successful
        careers, and our experiences speak to our commitment to professional
        development. We have countless brothers with competitive internships and
        full-time experience at Fortune 500 companies, prestigious firms, and
        unicorn startups.
      </div>
    </Section>
    <CareersTables />
  </CoverLayout>
)
