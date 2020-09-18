import React from "react";
import { Flex } from "rebass";
import { Link } from "gatsby";
import CenterHeader from "../components/CenterHeader";
import ImageTextRowTwo from "../components/ImageTextRowTwo";
import backup from "../images/backup.png";
import presidentImage from '../images/president.jpg'
import dsp_seal from '../images/dsp_seal.png'
import { VideoCoverLayout } from "../components/Layout";
import { Helmet } from "react-helmet";
import video from '../images/index.mp4';
import ImageBox from "../components/ImageBox";
import Button from "../components/TransparentButton";

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

    <CenterHeader>Letter from the President</CenterHeader>
      <ImageTextRowTwo
        imagePosition="left"
        imageSrc={presidentImage}
      >
        Three years ago, coming into UC Irvine as a Business Administration major, I had questions 
        on my career path and even what my college experience was going to look like. Seeking answers, 
        I started looking for a high-achieving business community on campus, which brought me to Delta 
        Sigma Pi’s Fall 2017 Recruitment – and I never looked back. Today, I’m humbled and proud to be 
        able to consider the brothers in this chapter as my closest friends, greatest supporters, career 
        mentors, and family.
        <br/><br/>
        Over the years, I’ve seen firsthand the work and dedication that keeps this organization in a 
        tier of its own. There’s no secret to our track record of achievement – if you talk to our brothers, 
        you’ll quickly understand that our fraternal brotherhood is the common denominator in our career 
        success. When I initiated, older brothers would always take time out of their schedule to walk me 
        through a mock interview or fix up my resume before internship season. Every brother was a text or 
        call away, like brothers before them had been. This continuous cycle of mentorship, sacrifice, and 
        support is at the core of our unrivaled career success and fraternal legacy.
        <br/><br/>
        Professional achievement aside, our chapter is home to an incredibly diverse group of students – 
        different identities, hometowns, music tastes – but one thing stays consistent. Ask any brother 
        why he or she decided to join Delta Sigma Pi, and the response will be, “The people.” Genuine 
        compassion, empathy, and humor keep us together, even when we’re apart. Between the boba runs, 
        Disneyland trips, and even traveling the world together, the lifelong memories and friendships built 
        between our brothers make Delta Sigma Pi much more than just any other organization.
        <br/><br/>
        Three years ago, I took the first step to attend recruitment, and my journey since then has 
        exceeded all expectations. I strongly encourage you to take the first step as well – attend 
        our upcoming recruitment events and learn more about becoming a part of our Fraternity.
        <br/><br/>
        Sincerely,
        <br/>
        Henry Wang | President, Pi Sigma Chapter
      </ImageTextRowTwo>
      <Flex flexWrap="wrap" justifyContent="center" marginBottom="-20px">
        <ImageBox image={unrivaledLeaders} title="ABOUT US">
          Established in 2008, the Pi Sigma Chapter of Delta Sigma Pi at UC Irvine is the oldest business 
          fraternity on campus. Our chapter has cultivated a growing legacy of achievement, mentorship, 
          and leadership within business and beyond.
          <div style={{textAlign: 'center'}}>
            <Button to="/about" text="ABOUT US"></Button>
          </div>
        </ImageBox>
        <ImageBox image={lifelongBrotherhood} title="BROTHERS">
          From various professional aspirations to pastime hobbies, our brothers are incredibly unique and 
          diverse. Our drive to succeed and support for one another makes us a tight-knit community like no other.    
          <div style={{textAlign: 'center'}}>
            <Button to="/brothers" text="OUR BROTHERS"></Button>   
          </div> 
        </ImageBox>
        <ImageBox image={careerAdvantage} title="CAREERS">
          We have countless brothers with competitive internships and full-time experience in finance, 
          marketing, technology, accounting, consulting, entrepreneurship, and more – the opportunities 
          for growth are endless with Delta Sigma Pi.
          <div style={{textAlign: 'center'}}>
            <Button to="/careers" text="OUR CAREERS"></Button>
          </div>
        </ImageBox>
      </Flex>
  </VideoCoverLayout>
  
)
