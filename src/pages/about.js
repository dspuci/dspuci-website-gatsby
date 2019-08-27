import React from "react"
import { Flex, Box } from "rebass"
import { Fade } from "react-reveal"

import { CoverLayout } from "../components/Layout"
import AboutCover from "../components/AboutCover"
import ImageTextRow from "../components/ImageTextRow"
import HoverShadowBox from "../components/HoverShadowBox"
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

import { genderData, yearData, majorData } from "../data/chapter_stats/fall19"

export default () => (
  <CoverLayout navbarTextColor="black" coverElement={<AboutCover />}>
    <Fade bottom distance="40px">
      <Section>
        <Box width={[1, 1 / 2, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>51</div>
          <div style={{ font: "22px Heebo" }}>Active Brothers</div>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>280+</div>
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

      <CenterHeader>Our Values</CenterHeader>
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

      <CenterHeader>Areas of Focus</CenterHeader>
      <Flex flexWrap="wrap">
        <HoverShadowBox title="Marketing" icon={faBullhorn}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </HoverShadowBox>
        <HoverShadowBox title="Design" icon={faPencilRuler}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </HoverShadowBox>
        <HoverShadowBox title="Accounting" icon={faCalculator}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </HoverShadowBox>
        <HoverShadowBox title="Tech" icon={faMicrochip}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </HoverShadowBox>
        <HoverShadowBox title="Consulting" icon={faLightbulb}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </HoverShadowBox>
        <HoverShadowBox title="Finance" icon={faPiggyBank}>
          Lorem ipsum dolor sit amet, mel et impetus dissentiet, nobis nonumes
          ut vix. Cu tamquam vulputate reprimique sea, vis volumus albucius
          appetere at. Audire facilisis no sit, in diceret.
        </HoverShadowBox>
      </Flex>

      <CenterHeader>Delta Sigma Pi History</CenterHeader>
      <p style={{ color: "#999", lineHeight: 2.2 }}>
        Delta Sigma Pi is a co-ed professional fraternity organized to foster
        the study of business in universities; to encourage scholarship, social
        activity and the association of students for their mutual advancement by
        research and practice; to promote closer affiliation between the
        commercial world and students of commerce, and to further a higher
        standard of commercial ethics and culture and the civic and commercial
        welfare of the community. Delta Sigma Pi’s four founding members are
        Alexander Frank Makay, Henry Albert Tienken, Harold Valentine Jacobs,
        and Alfred Moysello, all of which were students at New York University.
        Delta Sigma Pi was founded on November 7, 1907, and has since initiated
        over 265,000 brothers worldwide. There are currently over 220 active
        collegiate chapters, with many more alumni chapters, which continue to
        bring pride to the name Delta Sigma Pi. While every brother in Delta
        Sigma Pi is significant in his or her own way, some notable Deltasigs
        include S. Truett Cathy, the Founder and Chairman of Chick-fil-A, Fordon
        Bethune, Chairman and CEO of Continental Airlines and Henry W. Bloch,
        Honorary Chairman of H & R Block. However, the network of brothers in
        Delta Sigma Pi span far and wide from various industries, such as high
        technology start ups, to venture capitalists, to tax accountants to
        marketing managers. Our brothers do not only spread over America; there
        are Deltasigs all over the world and no matter where one may go, he or
        she will always find a brother there with him or her.
      </p>

      <CenterHeader>Pi Sigma History</CenterHeader>
      <p style={{ color: "#999", lineHeight: 2.2 }}>
        The Pi Sigma Chapter of the International Fraternity of Delta Sigma Pi
        is located at the University of California, Irvine, and was founded on
        May 31, 2008. The Pi Sigma Chapter began because Adam Su and Myles
        Sterett saw a need within the UC Irvine community for a fraternity that
        focused on growing others professionally and fostering a sense of
        brotherhood. Nearly a decade later, Pi Sigma is intent on maintaining
        those two goals, and have since won a multitude of regional, provincial
        and national awards for our professional activities, community service
        and alumni relations. From our humble beginnings as the Sigma Beta Iota
        colony to now being the Pi Sigma Chapter, we have always been dedicated
        to hosting a myriad of professional, community service and social events
        in order to further our professionalism, dedication to helping the
        community and our sense of brotherhood. As of fall 2017, we have a total
        of 257 brothers who have entered Delta Sigma Pi through pledging with
        the Sigma Beta Iota colony and Pi Sigma Chapter. Being the three time
        winner of the National Outstanding Professional Events award (2011, 2012
        & 2014), the Pi Sigma Chapter is unparalleled in terms of
        professionalism. Our professional events range from recruitment for Big
        4, hotel management tours, speakers, consultation services, tech company
        tours, as so on. Since our network encompasses brothers from all around
        the world in a variety of industries, no matter your interest, you will
        find another brother who will be able to help you develop professionally
        and get a job. Our alumni network also continues to prove itself with
        the our chapter being the three time winner of the National Outstanding
        Alumni Relations award (2013, 2015 & 2017).
      </p>
    </Fade>
  </CoverLayout>
)
