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

import careerAdvantage from "../images/dsp2025panel.jpeg"
import lifelongBrotherhood from "../images/lifelongBrotherhood.jpg"
import brothers from "../images/brothers.jpg"
import unrivaledLeaders from "../images/presidents.jpg"

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
    <hr style={{
          border: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #666, transparent)',
          margin: '48px auto',
          width: '80%'
        }} />
    <Fade>
      <CenterHeader>Letter from the President</CenterHeader>
      <ImageTextRowTwo imagePosition="left" imageSrc={presidentImage}>
        {/* Dear Prospective Member,
        <br /> */}
        {/* <br /> */}
        Dear Prospective Member,
        <br />
        <br />
        The greatest asset any person, any business, any school, or any fraternity can have is a great network of truly amazing people. Every brother has a unique set of experiences and values that create a diverse and special group of people. If it were not for each brother in this fraternity, who inherits all of the values it has to offer, I would not have grown anywhere close to the person I am today.         <br />
        <br />
        Believe it or not, during my first year of college, I had no idea what an internship was. Now, after working a few different amazing jobs, I can confidently say that I would be nowhere without the brothers who took the time to teach me what they know about professionalism, as well as providing me with the resources and connections to succeed. Now that I am entering my fourth year of college, I hope to give back and pass down the knowledge and experiences I have to anyone who wants to hear it. This constant cycle of giving back to the next generation of younger students is what makes Delta Sigma Pi a unique fraternity, and is why I am proud to represent as president for this term. 
        <br />
        <br />
        I am excited to meet the next group of eager and hardworking students who will be joining us this fall. I hope that you can take the time to explore this life-changing opportunity. Recruitment is the perfect time to learn about career opportunities, build authentic connections, and have a fun start to the school year.
        <br />
        <br />
        I hope to see you soon!
        <br />
        <br />
        Best of luck,

        <br />
        <br />
        Isaac Martinez | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)