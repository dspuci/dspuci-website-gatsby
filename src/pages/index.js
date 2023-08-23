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
        Life is full of unexpected surprises that we all encounter, and it’s safe
        to say that college is full of these moments.  It’s definitely a scary journey 
        to navigate, and it isn’t one that is meant to be experienced alone. Along my 
        own journey, I just happened to find a community of people that I could turn to at 
        any moment in my life, which ultimately turned into a family and became my home.
        <br />
        <br />
        I came out to Delta Sigma Pi during the spring quarter of my first year,
        and safe to say it has truly changed my life in so many ways. Everyone in this 
        chapter has pushed me to better myself professionally and personally, and I
        could not have done it without their support. I have learned so much from the
        different perspectives that everyone in this Fraternity has to offer and we can
        we can only hope to share that knowledge with you as well. Reflecting on my time 
        here at UCI, these past three years have definitely been a rollercoaster, but
        I have shared so many laughs and experiences with all of the brothers. Freshman year
        me didn’t know what I was capable of achieving, so being in this position where I 
        can meet all of you soon at Fall recruitment is truly an honor that I cannot 
        thank you enough for.



        <br />
        <br />
        Through your own journey of unexpected surprises, I hope you are able to see what 
        Delta Sigma Pi is all about and get a glimpse of who we are.  I will forever 
        be grateful and proud that you seized this opportunity on your own journey and
        can’t wait to see where you will land.

        <br />
        <br />
        Sincerely,

        <br />
        Jenny Wu | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)
