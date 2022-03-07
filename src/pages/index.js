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
        {/* Dear Prospective Member,
        <br /> */}
        {/* <br /> */}
        You know that feeling when a package arrives in the mail that you forgot 
        you even ordered? It’s something like an unexpected rush, a highlight-of-my-day 
        that’s talked-about-for-weeks moment. Finding the words to describe my past 3 years 
        in Delta Sigma Pi, in all its entirety, has been near impossible – it’s 
        something that I’ve been able to encompass best only through moments and 
        feelings. It was the feeling of relief when I, as a timid freshman 
        overwhelmed by the possibilities of my own major and career choices, was 
        personally invited to learn more about a unique opportunity of professionalism 
        and community on campus. The feeling of anticipation-turned-awe as I attended 
        recruitment, exchanged inspiring conversations with brothers about our 
        aspirations, dreams, and interests, and left fulfilled. The moments of 
        warmth and pride as I continuously witness my brothers’ achievements and 
        personal growth. 
        <br />
        <br />
        Much like a surprise delivery, every moment I’ve spent in the chapter has
         exceeded my expectations by far. Each brother in the chapter has such 
         unique passions and backstories, and we are able to use this individuality 
         to challenge each other to always strive for better. We push each other to 
         prep for interviews, expand our networks, or excel in the job application 
         process, but also to try that new hobby we’ve always wanted to try or book 
         those travel plans. I never thought I could be capable of joining such a 
         driven, tight-knit organization, much less lead one, but Delta Sigma Pi has 
         pushed me to defy all expectations. This brotherhood is truly made up of the 
         most selfless, intelligent and caring individuals I know, and I spend every day 
         grateful that I have had the privilege of crossing paths with each of them. 
        <br />
        <br />
        My experience in the Fraternity has been more than memorable, and I’m excited 
        to see how the chapter continues to grow. I hope that you will consider joining 
        us at our upcoming recruitment to see for yourself what makes this community so 
        special, and to take this first step in joining the Fraternity yourself :) 
        <br />
        <br />
        Sincerely,
        <br />
        Grace Hsiang | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)
