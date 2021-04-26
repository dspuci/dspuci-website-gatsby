import React from "react";
import { Flex } from "rebass";
// import { Link } from "gatsby";
import CenterHeader from "../components/CenterHeader";
import ImageTextRowTwo from "../components/ImageTextRowTwo";
import backup from "../images/backup.png";
import presidentImage from '../images/meghan_cadigal.jpg'
import dsp_seal from '../images/dsp_seal.png'
import { VideoCoverLayout } from "../components/Layout";
import { Helmet } from "react-helmet";
import video from '../images/Website_05.mp4';
import ImageBox from "../components/ImageBox";
import Button from "../components/TransparentButton";
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
    coverImage={dsp_seal}>
    <Helmet>
        <title>Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Home Page" content="Delta Sigma Pi - Pi Sigma Chapter Home Page" />
    </Helmet>
    <Fade>
      <Flex flexWrap="wrap" justifyContent="center" marginTop="30px">
        <ImageBox image={unrivaledLeaders} title="ABOUT US">
          Established in 2008, the Pi Sigma Chapter of Delta Sigma Pi at UC Irvine is the oldest business 
          fraternity on campus. Our chapter has cultivated a growing legacy of achievement, mentorship, 
          and leadership within business and beyond.
          <div style={{textAlign: 'center'}}>
            <Button to="/about" text="WHO WE ARE"></Button>
          </div>
        </ImageBox>
        <ImageBox image={lifelongBrotherhood} title="BROTHERS">
          From various professional aspirations to pastime hobbies, our brothers are incredibly unique and 
          diverse. Our drive to succeed and support for one another makes us a tight-knit community like no other.    
          <div style={{textAlign: 'center'}}>
            <Button to="/brothers" text="MEET OUR BROTHERS"></Button>   
          </div> 
        </ImageBox>
        <ImageBox image={careerAdvantage} title="CAREERS">
          We have countless brothers with competitive internships and full-time experience in finance, 
          marketing, technology, accounting, consulting, entrepreneurship, and more – the opportunities 
          for growth are endless with Delta Sigma Pi.
          <div style={{textAlign: 'center'}}>
            <Button to="/careers" text="OUR EXPERIENCE"></Button>
          </div>
        </ImageBox>
      </Flex>
    </Fade>
    <Fade>
    <CenterHeader>Letter from the President</CenterHeader>
      <ImageTextRowTwo
        imagePosition="left"
        imageSrc={presidentImage}
      >
        I came to UC Irvine as a third-year transfer and Business Administration undergrad. 
        Coming from a background where professional resources weren’t openly accessible, 
        I knew coming into college I wanted to immediately get a jump start on my professional and personal growth. 
        Once I met the brothers of Delta Sigma Pi and learned more about this organization during Fall 2019 Recruitment, 
        I felt hopeful of achieving my goals. Now as I am nearing the end of my collegiate career, 
        I am both proud and humbled by my own achievements, and also by the amazing friends and family I have made along the way. 
        <br/><br/>
        Since joining, the unconditional support that I have seen and experienced from other brothers has inspired me to 
        give back to our community in any way I can. Whether it is interview prep, finding an internship, or getting help 
        in classes, every brother is more than willing to be there for you. The amount of excitement that our chapter shares 
        when someone achieves their goals or gets their dream position is both pure and heartwarming. Delta Sigma Pi is a 
        brotherhood that will be there for you every step of the way while being your biggest cheerleaders.
        <br/><br/>
        What makes the Pi Sigma Chapter so special is the people. Whether you want to be the 
        CEO of your own company or do freelance work while traveling the world, our brothers will 
        support your aspirations and help you get there. Our chapter comes from many different walks of life 
        and each of us has our own passions and interests. Our diverse interests are what help us continuously 
        learn and grow from one another. The laughs, compassion, and trust within our organization are what 
        have kept our chapter’s bond so strong during these difficult times. The lifelong memories and 
        friendships created within our chapter are what differentiates us as a family rather than just a group of like-minded individuals.
        <br/><br/>
        Having never attended a networking event before, my first night of recruitment was terrifying; 
        however, once I got to meet the brothers of Delta Sigma Pi, that feeling of fear disappeared. 
        I felt comfortable, accepted, and excited to see what else was in store. If you are interested 
        in learning more about our chapter and investing in yourself, I strongly encourage you to attend our upcoming recruitment events.
        <br/><br/>
        Sincerely,
        <br/>
        Meghan Cadigal | President, Pi Sigma Chapter
      </ImageTextRowTwo>
      </Fade>

  </VideoCoverLayout>
  
)
