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

import careerAdvantage from "../images/careers.jpg"
import lifelongBrotherhood from "../images/brothers.jpg"
import unrivaledLeaders from "../images/about_us.jpg"

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
        Dear Prospective Member,
        <br />
        <br />
        Three years ago, I moved into Mesa Court as a homesick freshman with doubts 
        and hesitations about my college decision. I felt lost and alone in the new 
        environment, and I had no idea what was out there for my future career. Being 
        a Business Economics major, I knew the professional opportunities I wanted to 
        pursue would not be served on a silver platter – I had to chase them myself. 
        This is when I came across Delta Sigma Pi’s booth at the Fall 2018 Anteater 
        Involvement Fair. Every conversation I had with the brothers at recruitment 
        held more substance than the average small talk. Instead, I was asked about 
        my goals and even learned about the brothers’ challenges. The best part? The 
        knowledge and kindness I received didn’t just stop at recruitment, it lasted 
        through every moment of my time in the Fraternity. 
        <br />
        <br />
        Every brother and alum I’ve crossed paths with have shown me the true meaning 
        of brotherhood. Time and time again, I witness my brothers’ willingness to help 
        those around them – whatever the situation, whenever it is, and however they can. 
        From compiling a spreadsheet of active internships to picking up a brother at 3AM 
        because her car broke down, every brother is always a call or text away. Furthermore, 
        our chapter is home to a diverse group of individuals. Talk to any of our brothers 
        and you’ll find that we each have our own stories, passions, and even drives. 
        Nonetheless, we educate and challenge each other to be the best version of ourselves 
        and unite as one. Between studying at local coffee shops and traveling the world 
        together, the memories we make and the friendships we build are forever. The brothers 
        I’ve met are now my closest friends, strongest support system, and biggest inspirations. 
        <br />
        <br />
        My fraternal experience in these past years has far exceeded my expectations, and I’m 
        beyond excited for what’s to come. I hope you join us at our upcoming recruitment so 
        you can see for yourself why this organization is so special and how you can take the 
        first step in becoming a part of our Fraternity. 
        <br />
        <br />
        Sincerely,
        <br />
        Jocelyn Kuo | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)
