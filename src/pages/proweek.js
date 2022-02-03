import React from "react"
import { Fade } from "react-reveal"
import { Flex } from "rebass"
import { Box, Image } from "rebass"

import ProAccCover from "../components/ProAccCover"
import { CoverLayout } from "../components/Layout"
import Section from "../components/Section"
import Button from "../components/Button"
import EventBox from "../components/EventBox"
import CenterHeader from "../components/CenterHeader"

import competition_illustration from "C:/Users/Droo/DoT/dspuci-website-gatsby/src/images/competition_illustration.png"
import panel_illustration from "C:/Users/Droo/DoT/dspuci-website-gatsby/src/images/panel_illustration.png"
import workshop_illustration from "C:/Users/Droo/DoT/dspuci-website-gatsby/src/images/workshop_illustration.png"
import proweekflyer from "C:/Users/Droo/DoT/dspuci-website-gatsby/src/images/proweek-flyer22.jpeg"
// import weekOneFlyer from "../images/proweek-flyer1.jpg"
// import weekTwoFlyer from "../images/proweek-flyer2.jpg"
// import finalsJudge1 from '../images/finalsJudge1.jpg'
// import finalsJudge2 from '../images/finalsJudge2.jpg'
import caseComp from '../images/2021_Case_Comp.jpg'
import linkedInBox from "../images/proweek-linkedinBox.png"
import panel from "../images/proweek-panel.png"
import presentation from "../images/proweek-presentation.png"
import casestudy from "../images/proweek-casestudy.png"
import trophy from "../images/proweek-trophy.png"
import { Helmet } from "react-helmet"


export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ProAccCover
        coverImage="proweek.jpeg"
        textColor="white"
        darkGradient
      />
    } 
  >
    <Helmet>
      <title>Pro Event 2022 | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter Pro Week 2020 Page"
        content="Delta Sigma Pi - Pi Sigma Chapter Pro Week 2020 Page"
      />
    </Helmet>
    <Fade bottom distance="40px">
      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 15 }}>Develop Yourself Professionally</h1>
        <div>
        Welcome to Delta Sigma Pi - Pi Sigma Chapter’s Winter Professionalism Event! 
        This program is open to all students, regardless of major, who seek to explore 
        all aspects of the professional realm. We invite you to a week-long program that 
        consists of a workshop, panel, and competition that guides your personal and 
        professional growth as well as examines the different dimensions of business. 
        Come spend time with us and strengthen your business acumen and solidify your 
        professional aspirations! We’re excited to offer the unique perspectives and 
        experiences of our network of alumni, meaningful connections with active brothers, 
        and valuable insights from industry professionals. We encourage you to come take 
        advantage of these opportunities to develop yourself to your fullest potential. 


        </div>
      </Section>

      <CenterHeader>Week 6 Schedule</CenterHeader>
      <p style={{ textAlign: "center", marginTop: "-40px" }}>
        February 7 - February 11
      </p>

      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        marginBottom="-20px"
      >
        <EventBox
          title="PROFESSIONALISM PANEL"
          imageSrc={panel_illustration}
        >
          Monday (2/7) - 6PM-7PM
          <br />
          Virtual
        </EventBox>
        <EventBox
          title="CASE STUDY WORKSHOP"
          imageSrc={workshop_illustration}
        >
          Wednesday (2/9) - 6PM-7:30PM
          <br />
          In-person | Virtual
        </EventBox>
        <EventBox
          title="CASE STUDY COMPETITION"
          imageSrc={competition_illustration}
        >
          Friday (2/11) - 6PM-8:30PM
          <br />
          Virtual
        </EventBox>
      </Flex>

      <Section
        sx={{ justifyContent: "left" }}
        style={{ marginBottom: "-20px" }}
      >
        <div>
          <b>Professionalism Panel (2/7): </b>Looking to widen your horizon and learn about 
          different industries? Join us for our Professionalism Panel on Monday, February 7th
          at 6 PM! Professionals from a variety of industries are coming to talk to us about 
          their experiences and careers. Come to our panel for an insightful and entertaining
          discussion! Speakers will be announced soon.
        </div>
        <br />
        <div>
          <b>Case Study Workshops (2/9): </b>Assess your business acumen with us at our case study
          workshop on Wednesday, February 9th at 6 PM! Case studies may seem intimidating, We’ll
          be going over how to approach case studies and prepare you for the exciting case study
          competition. 
        </div>
        <br />
        <div>
          <b>Case Study Competition (2/11): </b>Test your business knowledge in our third annual 
          case study competition and win hundreds of dollars! Participants will have 48 hours to
           take home the case study, prepare a presentation, and finally present in front of 6 
           UCI alumni on Friday, February 11th. The competition will be separated into two rounds. 
           During the first round, your team will present your solutions in front of judges. 
           Finalists will then present in the second round to a panel of judges (everyone is 
           encouraged to watch)!


        </div>
      </Section>



      {/* <CenterHeader> Program Details </CenterHeader>
      <div>
        Applicants accepted into the program will be provided with meaningful connections, unique perspectives on achieving professional and personal growth and insights from our network of brothers and industry professionals. 
        Participants will be paired with mentors who will encourage progress in the program by providing feedback as well as answering any questions. This virtual 6-week program will host a variety of events, including professional workshops, Zoom socials, and exclusive projects. 
        Weekly Zoom workshops will be taking place on Tuesdays. 
      </div>

      <Section>
        <div>
        Unfortunately, applications for our Winter 2021 Program have closed, but look out for more information coming soon on our Spring recruitment or see details below for our second annual Case Study Competition!
        </div>
      </Section> */}

      <Section style={{ marginBottom: 10, marginTop: -30 }}>
        <div
          style={{
            width: "100vw",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button text="View Sample Study" to="/casestudy" />
        </div>
      </Section>



      <CenterHeader>Case Study Competition</CenterHeader>

      <Section>
        <div>
          Delta Sigma Pi proudly presents its third annual Case study Competition
          to wrap up DSP Professional Week. It is designed to provide UCI
          students with an opportunity to compete and showcase their business
          acumen and public speaking skills. Non-competitors are encouraged to
          come to watch the Final Round competitors present in front of judges
          from the consulting industry.
        </div>
      </Section>

      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>Case Study Competition Logistics:</h1>
        <br />
        <div>
          • Teams of 2 UCI Students <br />
          • Prizes total up to 100's of dollars
          <br />
          • Take-home case; 48 hours preparation, 5 min presentation with (optional) slides,
          5 min Q&A, and 3 min Feedback/Discussion
          <br />
          • First Round: privately judged by UCI alumni
          <br />
          • Second Round: public presentation by the top four finalists
          <br />
          • Competitors must be able to attend both Prelim/Final Rounds if
          advanced
          <br />• Must sign up by <b>Wednesday (2/8)</b> at <b>11:59PM</b>.
        </div>
      </Section>

      <CenterHeader>Registration Starting Sunday (2/6)</CenterHeader>

      {/* <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <EventBox
          title="CASE STUDY COMPETITION PRELIMINARY ROUND"
          imageSrc={casestudy}
        >
          Wednesday (2/19) - 7PM-9PM
          <br />
          SB1 2100 (2nd Floor Paul Merage)
        </EventBox>
        <EventBox title="CASE STUDY COMPETITION FINAL ROUND" imageSrc={trophy}>
          Friday (2/21) - 5PM-7PM
          <br />
          SB1 1200 (1st Floor Merage Auditorium)
        </EventBox>
      </Flex> */}

      {/* <Section style={{ marginBottom: 10, marginTop: -30 }}>
        <div
          style={{
            width: "100vw",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button text="Register" to="/registration" />
        </div>
      </Section>  */}
      <Flex flexWrap='wrap' alignItems="center" justifyContent = "center">
        <Box width={[1, 3 / 5]}>
          <Image src={proweekflyer} />
        </Box>
        {/* <Box width={[1, 1 / 2]}>
          <Image src={weekTwoFlyer} />
        </Box> */}
      </Flex>
    </Fade> 
  </CoverLayout>
)
