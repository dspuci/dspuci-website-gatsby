import React from "react"
import { Fade } from "react-reveal"
import { Flex, Link } from "rebass"
import { Box, Image } from "rebass"

import ProWeekCover from "../components/ProWeekCover"
import ProAccCover from "../components/ProAccCover"
import { CoverLayout } from "../components/Layout"
import Section from "../components/Section"
import Button from "../components/Button"
import EventBox from "../components/EventBox"
import CenterHeader from "../components/CenterHeader"


// import weekOneFlyer from "../images/proweek-flyer1.jpg"
// import weekTwoFlyer from "../images/proweek-flyer2.jpg"
import finalsJudge1 from '../images/finalsJudge1.jpg'
import finalsJudge2 from '../images/finalsJudge2.jpg'
import linkedInBox from "../images/proweek-linkedinBox.png"
import panel from "../images/proweek-panel.png"
import presentation from "../images/proweek-presentation.png"
import casestudy from "../images/proweek-casestudy.png"
import trophy from "../images/proweek-trophy.png"
import {Helmet} from "react-helmet";


export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ProAccCover
        coverImage="professionalAccelerator.jpg"
        textColor="white"
        darkGradient
      />
    } 
  >
    <Helmet>
        <title>Pro Week 2020 | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Pro Week 2020 Page" content="Delta Sigma Pi - Pi Sigma Chapter Pro Week 2020 Page" />
    </Helmet>
    <Fade bottom distance="40px">

      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>
          Gain Relevant Professional Skills
        </h1>
        <div>
          Delta Sigma Pi - Pi Sigma Chapter is proud to announce our Professional Development program and invites YOU to apply! The program is geared towards all undergraduate UC Irvine students looking to gain more insight into navigating all
          aspects of the business world. We are excited to extend our resources and community through our first peer-to-peer mentorship program!
        </div>
      </Section>

      {/* <CenterHeader>Week 6 Schedule</CenterHeader>
      <p style={{textAlign: "center", marginTop: "-40px"}}>February 12 - February 14</p>

      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" marginBottom="-20px">
        <EventBox title="CRUSHING IT WITH LINKEDIN WORKSHOP" imageSrc={linkedInBox}>
          Tuesday (2/11) - 7PM-9PM
          <br />
          Emerald Bay A
        </EventBox>
        <EventBox title="INTERNSHIP PANEL - 1ST YEAR INTERNSHIPS" imageSrc={panel}>
          Wednesday (2/12) - 7PM-9PM
          <br />
          Newport Beach B
        </EventBox>
        <EventBox title="CASE STUDY WORKSHOP - BUSINESS 101" imageSrc={presentation}>
          Thursday (2/13) - 4PM-6PM
          <br />
          Doheny Beach B
        </EventBox>
      </Flex>

      <Section sx={{ justifyContent: "left" }} style={{ marginBottom: "-20px"}}>
        <div>
          <b>Crushing It With LinkedIn Workshop (2/11): </b>Hear from Senior LinkedIn 
          Representative, Ryan Zervakos, on leveraging LinkedIn and networking. 
          Open networking afterwards.
        </div>
        <br />
        <div>
          <b>Internship Panel - 1st Year Internships (2/12): </b>Hear from a panel of UCI 
          students on how they landed a summer internship after their freshman year 
          and their current jobs/internships in various industries. Open networking afterwards.
        </div>
        <br />
        <div>
          <b>Case Study Workshop - Business 101 (2/13): </b>Learn about case studies and their 
          application in real-world interviews. The presentation will cover how to effectively 
          solve cases and break down the sample case (view below) for the Case Study Competition.
        </div>
      </Section> */}



      <CenterHeader> Program Details </CenterHeader>
      <div>
        Applicants accepted into the program will be provided with meaningful connections, unique perspectives on achieving professional and personal growth and insights from our network of brothers and industry professionals. 
        Participants will be paired with mentors who will encourage progress in the program by providing feedback as well as answering any questions. This virtual 6-week program will host a variety of events, including professional workshops, Zoom socials, and exclusive projects. 
        Weekly Zoom workshops will be taking place on Tuesdays. 
      </div>



      <Section style={{ marginBottom: 10, marginTop: -30}}>
        <div style={{width: "100vw", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Link href="https://www.facebook.com/events/416619736423943">
          <Button text="View Event Page">
          </Button>
          </Link>
        </div>
      </Section>



      <CenterHeader>Case Study Competition</CenterHeader>

      <Section>
        <div>
        Furthermore, to wrap up the program we are proud to bring back our second annual case study competition! The last workshop of the program (Week 8, Case Studies 101) will preface the competition held later that week (dates TBA) and will cover relevant information for interested participants. 
        This is open to all undergrad students at UC Irvine, featuring 2 competition rounds, guest judges, and exciting prizes. No experience necessary!
        </div>
      </Section>

      {/* <Section sx={{ justifyContent: "left" }}>
      <h1 style={{ marginBottom: 10 }}>
          Case Study Competition Logistics:
        </h1>
        <br/>
        <div>
        • Teams of 2-3 UCI Students <br/>
        • 1st Place - $100/Team, 2nd Place - $50/Team, 3rd Place - $25/Team, 4th Place - $25/Team<br/>
        • 20 mins to review case with team; 5-7 min presentation; 3 min Q&A; 5 min Feedback/Discussion<br/>
        • Competitors must be bale to attend both Prelim/Final Rounds if advanced<br/>
        • Must sign up by <b>Sunday (2/16)</b> at <b>11:59PM</b>. Limited Spots - First come, first serve
        </div>
      </Section> */}

      <Section sx={{justifyContent: 'left'}}>
        <h1>
          Final Round Judges from First Annual Case Competition:
        </h1>
      </Section>

      {/* <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <EventBox title="CASE STUDY COMPETITION PRELIMINARY ROUND" imageSrc={casestudy}>
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

      {/* <Section style={{ marginBottom: 10, marginTop: -30}}>
        <div style={{width: "100vw", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Button text="Register Now!" to="/registration"/>
        </div>
      </Section> */}
      <Flex>
        <Box width={[1, 1 / 2]}>
          <Image src={finalsJudge1} />
        </Box>
        <Box width={[1, 1 / 2]}>
          <Image src={finalsJudge2} />
        </Box>
      </Flex> 

    </Fade>

  </CoverLayout>
)
