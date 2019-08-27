import React from "react"
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import ImageTextRow from "../components/ImageTextRow"
import { Text, Image } from "rebass"
import { Fade } from "react-reveal"
import CenterHeader from "../components/CenterHeader"

import brotherhoodImage from "../images/brotherhood.jpg"
import professionalismImage from "../images/professionalism.jpg"
import communityImage from "../images/community.jpg"
import recruitmentSchedule from "../images/recruitment_schedule_fall19.png"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Fall Recruitment 2019"
        coverImage="beach.jpg"
        textColor="white"
      />
    }
  >
    <Fade bottom distance="40px">
      <Text
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "50px auto",
          marginBottom: 90,
          textAlign: "center",
        }}
      >
        Our chapter aims to create a high-impact, supportive culture where
        immensely passionate people are encouraged to pursue their professional
        and personal dreams. Attend our recruitment events to find out what sets
        Delta Sigma Pi above and apart.
      </Text>

      <CenterHeader>Schedule</CenterHeader>
      <a href={recruitmentSchedule}>
        <Image
          src={recruitmentSchedule}
          sx={{
            marginBottom: 50,
            boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          }}
        />
      </a>

      <CenterHeader marginBottom={70}>Why join?</CenterHeader>
      <ImageTextRow
        title="Career Advantage"
        imagePosition="right"
        imageSrc={brotherhoodImage}
      >
        Delta Sigma Pi offers a career advantage like no other. For over a
        decade, our chapter has kickstarted and cultivated impactful careers in
        finance, consulting, marketing, accounting, technology,
        entrepreneurship, and more. Unsure of what path to choose? We’ll help
        you out.
      </ImageTextRow>
      <ImageTextRow
        title="Lifelong Brotherhood"
        imagePosition="left"
        imageSrc={professionalismImage}
      >
        Joining the DSP family means mentorship, inspiration, and countless
        opportunities to learn and grow. Build lifelong friendships alongside an
        extensive network of business professionals -- with over 220 collegiate
        chapters, no matter where you go, you can count on brothers for support.
      </ImageTextRow>
      <ImageTextRow
        title="Unrivaled Leaders"
        imagePosition="right"
        imageSrc={communityImage}
      >
        With countless opportunities for growth, our brothers become recognized
        leaders, within the fraternity and beyond. At UCI, our brothers hold
        positions in over 25 campus organizations.
      </ImageTextRow>
    </Fade>
  </CoverLayout>
)
