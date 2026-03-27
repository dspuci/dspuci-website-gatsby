import React from "react"
import { Flex, Box } from "rebass"
import { Fade } from "react-reveal"
import { withPrefix } from "gatsby"

import { CoverLayout } from "../components/Layout"
import ImageTextRow from "../components/ImageTextRow"
import CareerBox from "../components/CareerBox"
import CenterHeader from "../components/CenterHeader"
import ResponsiveDoughnut from "../components/ResponsiveDoughnut"
import Section from "../components/Section"

import professionalismImage from "../images/professionalism_2024.jpg"
import communityImage from "../images/community_service_hype.jpg"
import seniors from "../images/seniors.jpeg"

import { Helmet } from "react-helmet"
import styles from "./about.module.css"

import {
  faBullhorn,
  faCalculator,
  faMicrochip,
  faLightbulb,
  faPiggyBank,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"

import { genderData, yearData, majorData } from "../data/current_data/chapter_stats"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <div className={styles.aboutHeroWrap}>
        <div
          className={styles.aboutHeroImage}
          style={{
            backgroundImage: `url(${withPrefix("/images/cover_images/AU_Initiation_Fall25.JPEG")})`,
          }}
          aria-hidden="true"
        />
        <div className={styles.aboutHeroOverlay} aria-hidden="true" />
        <div
          className={styles.aboutHeroContent}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1120,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "120px 24px 80px",
          }}
        >
          <h1
            className={styles.aboutHeroTitle}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            About Us
          </h1>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(22px, 3vw, 30px)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Personal and Professional Growth
          </h2>
          <p
            style={{
              maxWidth: 640,
              lineHeight: 1.7,
              fontSize: 16,
              marginTop: 10,
              marginBottom: 24,
              color: "#ffffff",
            }}
          >
            As the largest and oldest business fraternity at UC Irvine, Delta Sigma Pi - Pi Sigma Chapter
            has inspired impactful careers for over a decade, establishing a higher standard of personal and
            career success. As a professional fraternity, we hold community and brotherhood at our core— our
            growth is guided by the lifelong connections formed between brothers.
          </p>
        </div>
      </div>
    }
  >
    <div className={styles.aboutPage}>
      <Helmet>
        <title>About | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta
          name="Delta Sigma Pi - Pi Sigma Chapter About Page"
          content="Delta Sigma Pi - Pi Sigma Chapter About Page"
        />
      </Helmet>

      <Fade bottom distance="40px">
        <Section sx={{ marginTop: 72, marginBottom: 24 }}>
          <Box width={1} style={{ textAlign: "center" }}>
            <h2 className={styles.aboutStatsHeading}>
              UC IRVINE'S • LARGEST & OLDEST • BUSINESS FRATERNITY
            </h2>
          </Box>
        </Section>

        <Section sx={{ marginTop: 24, marginBottom: 72 }}>
          <Box width={[1, 1 / 3]} style={{ textAlign: "center" }}>
            <div className={styles.aboutStatNumber}>46</div>
            <div className={styles.aboutStatLabel}>Collegiate Brothers</div>
          </Box>
          <Box width={[1, 1 / 3]} style={{ textAlign: "center" }}>
            <div className={styles.aboutStatNumber}>400 +</div>
            <div className={styles.aboutStatLabel}>Alumni Network</div>
          </Box>
          <Box width={[1, 1 / 3]} style={{ textAlign: "center" }}>
            <div className={styles.aboutStatNumber}>100 %</div>
            <div className={styles.aboutStatLabel}>Internship Placement</div>
          </Box>
        </Section>

        <Section>
          <ResponsiveDoughnut data={genderData} legendLines={1} text="Gender" />
          <ResponsiveDoughnut data={yearData} legendLines={2} text="Year" />
          <ResponsiveDoughnut data={majorData} legendLines={2} text="Major" />
        </Section>

        <hr className={styles.aboutHr} />

        <ImageTextRow title="Brotherhood" imagePosition="right" imageSrc={seniors}>
          Our community has cultivated mentorship, inspiration, and countless opportunities to learn and
          grow. Our brothers have built lifelong friendships—not only within our chapter, but with brothers
          in many of the 300 + national collegiate chapters.
        </ImageTextRow>

        <ImageTextRow title="Professionalism" imagePosition="left" imageSrc={professionalismImage}>
          Delta Sigma Pi offers a career advantage like no other. For over a decade, our chapter has
          cultivated professionalism and kickstarted impactful careers through a focus on industry education
          and workshops, industry conferences, recruiting and networking events, and much more.
        </ImageTextRow>

        <ImageTextRow title="Community Service" imagePosition="right" imageSrc={communityImage}>
          Our brotherhood actively strengthens our communities through service. By organizing more than
          eight high - impact service initiatives a year, we act on our commitment to service.
        </ImageTextRow>

        <hr className={styles.aboutHr} />

        <CenterHeader>Our Values</CenterHeader>
        <Flex flexWrap="wrap" sx={{ justifyContent: "center" }}>
          <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
            <div className={styles.aboutValueItem}>Respect</div>
          </Box>
          <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
            <div className={styles.aboutValueItem}>Integrity</div>
          </Box>
          <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
            <div className={styles.aboutValueItem}>Initiative</div>
          </Box>
          <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
            <div className={styles.aboutValueItem}>Innovation</div>
          </Box>
          <Box width={[1, 1 / 3, 1 / 5]} style={{ textAlign: "center" }}>
            <div className={styles.aboutValueItem}>Humility</div>
          </Box>
        </Flex>

        <CenterHeader marginTop={80} marginBottom={20}>
          Industries
        </CenterHeader>
        <Flex flexWrap="wrap" sx={{ justifyContent: "center", textAlign: "center" }}>
          <CareerBox title="Finance" icon={faPiggyBank}>
            Investment banking, wealth management, financial analysts, and beyond— our brothers set the
            standard for impactful careers in finance at the world’ s biggest firms and corporations.
          </CareerBox>
          <CareerBox title="Marketing" icon={faBullhorn}>
            Our brothers are influencing how companies communicate products and services through product
            marketing, brand strategy, communications, and more.
          </CareerBox>
          <CareerBox title="Tech" icon={faMicrochip}>
            Whether it’ s software engineering, product management, or data analytics, our brothers are
            experienced and prepared to shape the future of technology.
          </CareerBox>
          <CareerBox title="Accounting" icon={faCalculator}>
            We’ ve placed countless brothers in every Big Four accounting firm, where they build successful
            careers in audit, tax, assurance, and other professional services.
          </CareerBox>
          <CareerBox title="Consulting" icon={faLightbulb}>
            Our brothers are among the few from UC Irvine to start careers in management consulting, tasked
            with providing strategic guidance to the world’ s biggest companies.
          </CareerBox>
          <CareerBox title="Other" icon={faUserTie}>
            There are limitless applications of business— we have brothers pursuing entrepreneurship,
            experience and interface design, human resources, and much more.
          </CareerBox>
        </Flex>

        <hr className={styles.aboutHr} />

        <CenterHeader marginBottom={20}>History</CenterHeader>
        <div className={styles.aboutHistory}>
          Delta Sigma Pi was founded on November 7, 1907 by four business students at New York University who
          saw an opportunity to impact the lives of their fellow business students. In 1975, Delta Sigma Pi
          officially became the nation 's first co-ed business fraternity. Today, we have over 300 collegiate
          chapters and over 290, 000 initiated members worldwide.
          <br />
          <br />
          As the oldest business fraternity at UC Irvine, the Pi Sigma Chapter of Delta Sigma Pi has championed
          professionalism and a lifetime of opportunity for our members since 2008. We are the only fraternity on
          campus to restrict membership to business school majors, which is instrumental to our unrivaled career
          success and lifelong brotherhood. Over a decade later, our chapter has become the premier business
          fraternity on campus, unparalleled in our professional success and brotherhood.
        </div>
      </Fade>
    </div>
  </CoverLayout>
)
