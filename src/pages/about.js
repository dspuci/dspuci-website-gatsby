import React from "react"
import { Flex, Box } from "rebass"
import { Fade } from "react-reveal"

import { CoverLayout } from "../components/Layout"
import AboutCover from "../components/AboutCover"
import ImageTextRow from "../components/ImageTextRow"
import CareerBox from "../components/CareerBox"
import CenterHeader from "../components/CenterHeader"
import ResponsiveDoughnut from "../components/ResponsiveDoughnut"
import Section from "../components/Section"

import brotherhoodImage from "../images/brotherhood.jpg"
import professionalismImage from "../images/professionalism.jpg"
import communityImage from "../images/community.jpg"

import {
  faBullhorn,
  faPencilRuler,
  faCalculator,
  faMicrochip,
  faLightbulb,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons"

import { genderData, yearData, majorData } from "../data/spring19/chapter_stats"

export default () => (
  <CoverLayout navbarTextColor="white" coverElement={<AboutCover />}>
    <Fade bottom distance="40px">
      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>
          Empowering personal and professional growth.
        </h1>
        <div>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret conclusionemque eum.
          In scripta ceteros mei, tota libris accusamus ea duo.
        </div>
      </Section>
      <Section>
        <Box width={[1, 1 / 2, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>53</div>
          <div style={{ font: "22px Heebo" }}>Active Brothers</div>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>250+</div>
          <div style={{ font: "22px Heebo" }}>Alumni Network</div>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>100%</div>
          <div style={{ font: "22px Heebo" }}>Full Time Rate</div>
        </Box>
      </Section>

      <Section
        sx={{
          textAlign: "center",
          backgroundColor: "purple",
          color: "white",
          fontSize: 36,
          padding: 30,
        }}
      >
        <Box width={1}>UC IRVINE'S</Box>
        <Box width={1} style={{ fontFamily: "Heebo", fontWeight: "bold" }}>
          LARGEST AND OLDEST
        </Box>
        <Box width={1}>BUSINESS FRATERNITY</Box>
      </Section>

      <Section>
        <ResponsiveDoughnut data={genderData} legendLines={1} text="Gender" />
        <ResponsiveDoughnut data={yearData} legendLines={1} text="Year" />
        <ResponsiveDoughnut data={majorData} legendLines={2} text="Major" />
      </Section>

      <CenterHeader>Values</CenterHeader>
      <ImageTextRow
        title="Brotherhood"
        imagePosition="right"
        imageSrc={brotherhoodImage}
      >
        Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes ut
        vix. Cu tamquam vulputate reprimique sea, vis volumus albucius appetere
        at. Audire facilisis no sit, in diceret conclusionemque eum. In scripta
        ceteros mei, tota libris accusamus ea duo.
      </ImageTextRow>
      <ImageTextRow
        title="Professionalism"
        imagePosition="left"
        imageSrc={professionalismImage}
      >
        Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes ut
        vix. Cu tamquam vulputate reprimique sea, vis volumus albucius appetere
        at. Audire facilisis no sit, in diceret conclusionemque eum. In scripta
        ceteros mei, tota libris accusamus ea duo.
      </ImageTextRow>
      <ImageTextRow
        title="Community"
        imagePosition="right"
        imageSrc={communityImage}
      >
        Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes ut
        vix. Cu tamquam vulputate reprimique sea, vis volumus albucius appetere
        at. Audire facilisis no sit, in diceret conclusionemque eum. In scripta
        ceteros mei, tota libris accusamus ea duo.
      </ImageTextRow>

      <CenterHeader>Industries</CenterHeader>
      <Flex flexWrap="wrap">
        <CareerBox title="Finance" icon={faPiggyBank}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </CareerBox>
        <CareerBox title="Marketing" icon={faBullhorn}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </CareerBox>
        <CareerBox title="Tech" icon={faMicrochip}>
          Whether it’s software engineering, product management, or data
          analytics, our brothers are experienced and prepared to shape the
          future of technology.
        </CareerBox>
        <CareerBox title="Accounting" icon={faCalculator}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </CareerBox>
        <CareerBox title="Consulting" icon={faLightbulb}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </CareerBox>
        <CareerBox title="Design" icon={faPencilRuler}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </CareerBox>
      </Flex>
    </Fade>
  </CoverLayout>
)
