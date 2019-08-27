import React from "react"
import { Flex, Box } from "rebass"
import { CoverLayout } from "../components/Layout"
import AboutCover from "../components/AboutCover"
import ImageTextRow from "../components/ImageTextRow"
import { Fade } from "react-reveal"
import { Doughnut } from "react-chartjs-2"
import HoverShadowBox from "../components/HoverShadowBox"
import CenterHeader from "../components/CenterHeader"

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

const genderData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [29, 22],
      backgroundColor: ["#349beb", "#cf60d1"],
    },
  ],
}

const yearData = {
  labels: ["2nd", "3rd", "4th"],
  datasets: [
    {
      data: [12, 18, 22],
      backgroundColor: ["#8223c2", "#c2a223", "#63c223"],
    },
  ],
}

const majorData = {
  legend: {
    display: false,
  },
  labels: ["Business Admin", "Business Econ", "Computer Science", "BIM"],
  datasets: [
    {
      data: [25, 13, 8, 2],
      backgroundColor: ["#d6406d", "#6dd640", "#409ad6", "#d67440"],
    },
  ],
}

export default () => (
  <CoverLayout navbarTextColor="black" coverElement={<AboutCover />}>
    <Fade bottom distance="40px">
      <Flex
        sx={{
          marginTop: [20, 30, 40],
          marginBottom: 90,
        }}
        flexWrap="wrap"
      >
        <Box width={[1, 1, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>51</div>
          <div style={{ font: "22px Heebo" }}>Active Brothers</div>
        </Box>
        <Box width={[1, 1, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>280+</div>
          <div style={{ font: "22px Heebo" }}>Alumni Network</div>
        </Box>
        <Box width={[1, 1, 1 / 3]} style={{ textAlign: "center" }}>
          <div style={{ font: "bold 80px Heebo" }}>100%</div>
          <div style={{ font: "22px Heebo" }}>Full Time Rate</div>
        </Box>
      </Flex>

      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "purple",
          color: "white",
          marginBottom: [50, 60, 70],
          fontSize: 36,
          padding: 30,
        }}
      >
        <Box width={[1]}>UC IRVINE'S</Box>
        <Box width={[1]} style={{ fontFamily: "Heebo", fontWeight: "bold" }}>
          LARGEST AND OLDEST
        </Box>
        <Box width={[1]}>BUSINESS FRATERNITY</Box>
      </Box>

      <Flex
        sx={{
          marginBottom: [60, 80, 90],
        }}
        flexWrap="wrap"
      >
        <Box
          width={[1, 1, 1 / 3]}
          sx={{ textAlign: "center", padding: [20, 0, 0] }}
        >
          <Doughnut
            height={null}
            width={null}
            legend={{ display: false }}
            options={{
              title: {
                display: true,
                text: "Gender",
                fontSize: 22,
              },
              aspectRatio: 1.5,
            }}
            data={genderData}
          />
        </Box>
        <Box
          width={[1, 1, 1 / 3]}
          sx={{ textAlign: "center", padding: [20, 0, 0] }}
        >
          <Doughnut
            height={null}
            width={null}
            legend={{ display: false }}
            options={{
              title: {
                display: true,
                text: "Year",
                fontSize: 22,
              },
              aspectRatio: 1.5,
            }}
            data={yearData}
          />
        </Box>
        <Box
          width={[1, 1, 1 / 3]}
          sx={{ textAlign: "center", padding: [20, 0, 0] }}
        >
          <Doughnut
            height={null}
            width={null}
            legend={{ display: false }}
            options={{
              title: {
                display: true,
                text: "Major",
                fontSize: 22,
              },
              aspectRatio: 1.5,
            }}
            data={majorData}
          />
        </Box>
      </Flex>

      <CenterHeader marginBottom={70}>Our Values</CenterHeader>
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
      <Flex flexWrap="wrap" marginBottom={80}>
        <HoverShadowBox title="Marketing" icon={faBullhorn} />
        <HoverShadowBox title="Design" icon={faPencilRuler} />
        <HoverShadowBox title="Accounting" icon={faCalculator} />
        <HoverShadowBox title="Tech" icon={faMicrochip} />
        <HoverShadowBox title="Consulting" icon={faLightbulb} />
        <HoverShadowBox title="Finance" icon={faPiggyBank} />
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
