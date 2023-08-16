import React from "react"
import { Flex } from "rebass"
import CenterHeader from "../components/CenterHeader"
import ImageTextRowTwo from "../components/ImageTextRowTwo"
import backup from "../images/backup.png"
import presidentImage from "../images/president.jpg"
import dsp_seal from "../images/dsp_seal.png"
import { VideoCoverLayout } from "../components/Layout"
import { Helmet } from "react-helmet"
import video from "../images/index.mp4"
import ImageBox from "../components/ImageBox"
import Button from "../components/TransparentButton"
import { Fade } from "react-reveal"

import careerAdvantage from "../images/2022_YakultTour.jpg"
import lifelongBrotherhood from "../images/2022_Spring_Retreat.png"
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
        <ImageBox image={lifelongBrotherhood} title="BROTHERS">
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
        College is a turbulent time filled with excitement, uncertainty, and most 
        importantly opportunity. Delta Sigma Pi has enabled me to make the most of 
        my time at UCI, by being the one constant that I can always rely on. It has 
        been a source of laughter, support, and growth that gives me the faith to just 
        leap into the unknown without worrying about where I will land.

        <br />
        <br />
        Everyone has heard that “growth comes from discomfort”. But what is often 
        overlooked is that you don’t need to face the discomfort alone. I’m fortunate 
        to be surrounded by people who expect the best from me and are constantly 
        pushing to be better themselves. I know that I can trust these people to be by 
        my side, no matter whether I want to learn a new sport, prepare for interviews, 
        take part in a competition, or just go on a spontaneous adventure! They make the 
        difference between overcoming or succumbing.

        <br />
        <br />
        My experience in Delta Sigma Pi has been incredibly special and I’m excited to 
        see the chapter continue to grow. I hope that you will join us at our Spring 
        recruitment and see what makes this community special for yourself. Taking the 
        first step can be hard, but once you do, the possibilities are endless. I look 
        forward to welcoming you into our home away from home. 

        <br />
        <br />
        See you soon :)

        <br />
        <br />
        Sincerely,

        <br />
        Jenny Wu | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)
