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
import video from "../images/index.mp4"
// import video from "../images/fall2024_vid.mp4"
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
        College is a time of transformation — one filled with both excitement and uncertainty. When I first joined Delta Sigma Pi, my initial focus was on professional development, but what I quickly discovered was the depth of growth that extends beyond professionalism. This chapter has become a constant throughout my college experience, providing not only the tools to navigate the professional world but also the foundation for personal growth.         <br />
        <br />
        In many ways, DSP has been a space that has allowed me to embrace discomfort. It taught me how to fail, how to learn from it, and how to grow as a result. A year after joining, I found myself in a position that once felt so out of reach—landing  my dream job. This achievement didn’t happen in isolation, and was instead a product of the support and guidance that I’ve received. 
        <br />
        <br />
        I encourage you to go about not only this recruitment, but life, with an open mind. I have been exposed to a diverse set of perspectives and people over the past two years, and am excited that you are taking the time to learn about them as well. I hope that through this recruitment you are able to hear about the experiences of our brothers, and see that with hard work and diligence the world of possibilities is endless.
        <br />
        <br />
        Best regards,

        <br />
        <br />
        Tommy Wunsch | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)