import React from "react"
import { Flex, Box } from "rebass"
import { Fade } from "react-reveal"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import ImageTextRow from "../components/ImageTextRow"
import CareerBox from "../components/CareerBox"
import CenterHeader from "../components/CenterHeader"
import ResponsiveDoughnut from "../components/ResponsiveDoughnut"
import Section from "../components/Section"

import brotherhoodImage from "../images/brotherhood.jpg"
import professionalismImage from "../images/professionalism.jpg"
import communityImage from "../images/communityservice.jpg"

import { Helmet } from "react-helmet"

import {
  faBullhorn,
  faCalculator,
  faMicrochip,
  faLightbulb,
  faPiggyBank,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"

import { genderData, yearData, majorData } from "../data/spring23/chapter_stats"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="About Us"
        coverImage="about.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Helmet>
      <title>About | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter About Page"
        content="Delta Sigma Pi - Pi Sigma Chapter About Page"
      />
    </Helmet>
    <Fade bottom distance="40px">
      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>
          Empowering personal and professional growth.
        </h1>
        <div>
          As the largest and oldest business fraternity at UC Irvine, Delta
          Sigma Pi - Pi Sigma Chapter has inspired impactful careers for over a
          decade, establishing a higher standard of personal and career success.
          As a professional fraternity, we hold community and brotherhood at our
          core—our growth is guided by the lifelong connections formed between
          brothers.
        </div>
      </Section>
      <Section>
        <Box width={[1, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>39</div>
          <div style={{ font: "22px Heebo" }}>Collegiate Brothers</div>
        </Box>
        <Box width={[1, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>250+</div>
          <div style={{ font: "22px Heebo" }}>Alumni Network</div>
        </Box>
        <Box width={[1, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>100%</div>
          <div style={{ font: "22px Heebo" }}>Internship Placement</div>
        </Box>
      </Section>

      <Section
        sx={{
          textAlign: "center",
          backgroundColor: "#330066",
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
        <ResponsiveDoughnut data={yearData} legendLines={2} text="Year" />
        <ResponsiveDoughnut data={majorData} legendLines={2} text="Major" />
      </Section>

      <ImageTextRow
        title="Brotherhood"
        imagePosition="right"
        imageSrc={brotherhoodImage}
      >
        Our community has cultivated mentorship, inspiration, and countless
        opportunities to learn and grow. Our brothers have built lifelong
        friendships—not only within our chapter, but with brothers in many of
        the 300+ national collegiate chapters.
      </ImageTextRow>
      <ImageTextRow
        title="Professionalism"
        imagePosition="left"
        imageSrc={professionalismImage}
      >
        Delta Sigma Pi offers a career advantage like no other. For over a
        decade, our chapter has cultivated professionalism and kickstarted
        impactful careers through a focus on industry education and workshops,
        industry conferences, recruiting and networking events, and much more.
      </ImageTextRow>
      <ImageTextRow
        title="Community Service"
        imagePosition="right"
        imageSrc={communityImage}
      >
        Our brotherhood actively strengthens our communities through service. By
        organizing more than eight high-impact service initiatives a year, we
        act on our commitment to service.
      </ImageTextRow>

      <CenterHeader>Our Values</CenterHeader>
      <Flex flexWrap="wrap" sx={{ justifyContent: "center" }}>
        <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "26px" }}>Respect</div>
        </Box>
        <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "26px" }}>Integrity</div>
        </Box>
        <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "26px" }}>Initiative</div>
        </Box>
        <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "26px" }}>Innovation</div>
        </Box>
        <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "26px" }}>Humility</div>
        </Box>
      </Flex>

      <CenterHeader marginTop={80} marginBottom={20}>
        Industries
      </CenterHeader>
      <Flex flexWrap="wrap">
        <CareerBox title="Finance" icon={faPiggyBank}>
          Investment banking, wealth management, financial analysts, and
          beyond—our brothers set the standard for impactful careers in finance
          at the world’s biggest firms and corporations.
        </CareerBox>
        <CareerBox title="Marketing" icon={faBullhorn}>
          Our brothers are influencing how companies communicate products and
          services through product marketing, brand strategy, communications,
          and more.
        </CareerBox>
        <CareerBox title="Tech" icon={faMicrochip}>
          Whether it’s software engineering, product management, or data
          analytics, our brothers are experienced and prepared to shape the
          future of technology.
        </CareerBox>
        <CareerBox title="Accounting" icon={faCalculator}>
          We’ve placed countless brothers in every Big Four accounting firm,
          where they build successful careers in audit, tax, assurance, and
          other professional services.
        </CareerBox>
        <CareerBox title="Consulting" icon={faLightbulb}>
          Our brothers are among the few from UC Irvine to start careers in
          management consulting, tasked with providing strategic guidance to the
          world’s biggest companies.
        </CareerBox>
        <CareerBox title="Other" icon={faUserTie}>
          There are limitless applications of business—we have brothers pursuing
          entrepreneurship, experience and interface design, human resources,
          and much more.
        </CareerBox>
      </Flex>

      <CenterHeader marginBottom={20}>History</CenterHeader>
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginBottom: 80,
          color: "#999",
        }}
      >
        Delta Sigma Pi was founded on November 7, 1907 by four business students
        at New York University who saw an opportunity to impact the lives of
        their fellow business students. In 1975, Delta Sigma Pi officially
        became the nation's first co-ed business fraternity. Today, we have over
        300 collegiate chapters and over 290,000 initiated members worldwide.
        <br />
        <br />
        As the oldest business fraternity at UC Irvine, the Pi Sigma Chapter of
        Delta Sigma Pi has championed professionalism and a lifetime of
        opportunity for our members since 2008. We are the only fraternity on
        campus to restrict membership to business and technology related majors,
        which is instrumental to our unrivaled career success and lifelong
        brotherhood. Over a decade later, our chapter has become the premier
        business fraternity on campus, unparalleled in our professional success
        and brotherhood.
      </div>
    </Fade>
  </CoverLayout>
)
