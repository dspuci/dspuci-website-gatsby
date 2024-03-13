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
        Life is full of surprises, especially in college. It can be a bit scary, but you
        don't have to go through it alone. During my time at UCI, Delta Sigma Pi has been
        like a family to me.
        <br />
        <br />
        Joining Delta Sigma Pi in my first year changed my life. The support and
        encouragement from everyone in the chapter has immensely fostered my growth both
        personally and professionally. We learn a lot from each other, and we want to share
        that knowledge with you too. Looking back on my three years here, it's been a mix of
        ups and downs, but I've had some of the best moments because of this chapter and met
        some of my best friends. The brothers in this chapter are some of my closest friends,
        mentors, and supporters. I wouldn’t be where I am today without this chapter and I am
        incredibly lucky to have found such a supportive and inspiring community to be a part
        of throughout college.



        <br />
        <br />
        Back when I was a freshman, I had no idea what I could achieve. Now, I'm truly excited
        and honored to serve as Delta Sigma Pi’s President and meet all of you at the upcoming
        Spring recruitment.
        <br />
        <br />

        I hope as you go through recruitment and meet all of us, you'll see what Delta Sigma Pi
        is all about. Being a part of this brotherhood is about so much more than just professional
        development. It’s about inspiring leadership on and off campus, being the first to have the
        courage and grit to break into the most challenging industries and companies, giving back
        to our communities, supporting one another to reach our ambitions in both professional and
        personal aspects, mentoring the next generation of leaders, and so much more. I’m so
        incredibly grateful to be able to host this Spring’s recruitment — excited to meet all of
        you and see where this journey takes you!

        <br />
        <br />
        Fraternally,

        <br />
        <br />
        Julia Lin | President - Pi Sigma Chapter
      </ImageTextRowTwo>
    </Fade>
  </VideoCoverLayout>
)
