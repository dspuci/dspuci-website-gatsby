import React from "react"
import { Flex } from "rebass"
import CenterHeader from "../components/CenterHeader"
import ImageTextRowTwo from "../components/ImageTextRowTwo"
import backup from "../images/backup.png"
// import backup2 from "../images/backup2.jpg"
import presidentImage from "../images/president.jpg"
import dsp_seal from "../images/dsp_seal.png"
import { VideoCoverLayout } from "../components/Layout"
import { Helmet } from "react-helmet"
// import video from "../images/index.mp4"
import video from "../images/fall2024_vid.mp4"
import ImageBox from "../components/ImageBox"
import Button from "../components/TransparentButton"
import { Fade } from "react-reveal"

import careerAdvantage from "../images/2022_YakultTour.jpg"
import lifelongBrotherhood from "../images/lifelongBrotherhood.jpg"
import brothers from "../images/brothers.jpg"
import unrivaledLeaders from "../images/2022_Dodge4Dollars.jpg"

export default () => (
  <VideoCoverLayout
    video={video}
    image={backup}
    navbarTextColor="white"
    textOne="Delta Sigma Pi"
    textTwo="The Premier Business Fraternity | Pi Sigma Chapter"
    coverImage={dsp_seal}
  >
    <Helmet>
      <title>Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter Home Page"
        content="Delta Sigma Pi - Pi Sigma Chapter Home Page"
      />
    </Helmet>
    <Fade>
      <Flex flexWrap="wrap" justifyContent="center" marginTop="30px">
        <ImageBox image={unrivaledLeaders} title="ABOUT US">
          Established in 2008, the Pi Sigma Chapter of Delta Sigma Pi at UC
          Irvine is the oldest business fraternity on campus. Our chapter has
          cultivated a growing legacy of achievement, mentorship, and leadership
          within business and beyond.
          <div style={{ textAlign: "center" }}>
            <Button to="/about" text="WHO WE ARE"></Button>
          </div>
        </ImageBox>
        <ImageBox image={brothers} title="BROTHERS">
          From various professional aspirations to pastime hobbies, our brothers
          are incredibly unique and diverse. Our drive to succeed and support
          for one another makes us a tight-knit community like no other.
          <div style={{ textAlign: "center" }}>
            <Button to="/brothers" text="MEET OUR BROTHERS"></Button>
          </div>
        </ImageBox>
        <ImageBox image={careerAdvantage} title="CAREERS">
          We have countless brothers with competitive internships and full-time
          experience in finance, marketing, technology, accounting, consulting,
          entrepreneurship, and more – the opportunities for growth are endless
          with Delta Sigma Pi.
          <div style={{ textAlign: "center" }}>
            <Button to="/careers" text="OUR EXPERIENCE"></Button>
          </div>
        </ImageBox>
      </Flex>
    </Fade>
    <Fade>
      <CenterHeader>Letter from the President</CenterHeader>
      <ImageTextRowTwo imagePosition="left" imageSrc={presidentImage}>
        {/* Dear Prospective Member,
        <br /> */}
        {/* <br /> */}
        Dear Prospective Member,
        <br />
        <br />
        Stepping into college feels like opening the door to endless possibilities — a chance to define who you are and who you want to become. While I was excited to find opportunities for growth, I wasn’t sure if a group that balanced both professional and personal development truly existed. That is, until I discovered Delta Sigma Pi.
        <br />
        <br />
        It would be an understatement to say that joining DSP in my second year completely changed the trajectory of my college experience, and I’m grateful it was for the better. I discovered exactly what I had been seeking: a brotherhood of driven individuals who not only value diverse perspectives but also encourage one another to pursue their ambitions with genuine enthusiasm and confidence. 
        <br />
        <br />
        The brothers in this chapter are among the most inspiring and motivated individuals I have ever had the privilege to know. Their unwavering support has made my college journey incredibly rewarding, and  the relationships I have fostered are ones I intend to cherish for the rest of my life.
        <br />
        <br />

        As you navigate through recruitment, I hope you'll discover what makes DSP truly special. Being a part of this chapter extends far beyond professional development; it is dedicated to nurturing leadership, embracing innovation, making a meaningful impact in our communities, and wholeheartedly supporting each member of our brotherhood. In a world that often promotes conformity, DSP has demonstrated the value of embracing one’s uniqueness and pursuing what truly excites us. It is within this spirit of individuality and passion that I’m truly honored to host this Fall’s recruitment and am eagerly looking forward to meeting each of you! I look forward to witnessing your journey and the potential you may uncover, including possibilities you may not have even known existed.

        <br />
        <br />
        Best regards,

        <br />
        <br />
        Mirsab Mirza | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)