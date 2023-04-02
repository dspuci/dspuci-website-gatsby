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
        “The best things in life are not things, they are moments.” I know it's an 
        overdone and cheesy quote, but when I think about my time in Delta Sigma Pi, 
        I can’t help but cherish the moments and memories that have gotten me to where 
        I am today. My journey started with a moment of nervousness and wonder as 
        I attended my first recruitment event and was amazed by all the brothers’ 
        aspirations and goals. Over the past 3 years, I’ve experienced countless 
        moments of growth as I was encouraged to work hard towards my professional 
        development. I’ve collected moments wrapped in happiness and comfort with 
        people I consider my closest friends. Together, these memories have made 
        my college experience unforgettable and special. As I enter my last year 
        at UCI, I feel moments of fulfillment and pride as I witness my brothers’ 
        achievements and personal accomplishments. 

        <br />
        <br />
        Moments are better when you have people to share them with. The Pi Sigma 
        chapter is full of brothers with unique backstories and passions, and we 
        use our differences to constantly challenge and inspire one another. We 
        make time for each other, whether it be preparing for interviews, late 
        night studying, making spontaneous travel plans, or even pulling an 
        all-nighter just for fun. Coming into UCI, I did not expect myself to join 
        such a tight-knit community of driven individuals, let alone lead one, but 
        Delta Sigma Pi has always inspired me to go above and beyond expectations. 
        This brotherhood has shown me all the best things about hard work, sacrifice, 
        and friendship, and I am very thankful to be a part of it.

        <br />
        <br />
        My experience in Delta Sigma Pi has been incredibly special and I’m excited 
        to see the chapter continue to grow. I hope that you will consider joining
         us at our Fall recruitment and see what makes this community special for 
         yourself. Taking the first step can be hard, but the possibilities are 
         limitless. After all, little freshman year me would’ve never even expected 
         having the opportunity to write this message. 

        <br />
        <br />
        See you soon :)

        <br />
        <br />
        Sincerely,

        <br />
        Sean Devine | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)
