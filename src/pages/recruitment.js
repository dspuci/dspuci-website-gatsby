import React from "react"
import { Flex, Image } from "rebass"
import { Fade } from "react-reveal"
import { withPrefix } from "gatsby"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import CenterHeader from "../components/CenterHeader"
import Section from "../components/Section"
import ImageBox from "../components/ImageBox"
import Accordion from "../components/Faq"
import RecCarousel from "../components/RecCarousel/RecCarousel"
import { Helmet } from "react-helmet"

import lifelongBrotherhood from "../images/lifelongBrotherhood.jpg"
import unrivaledLeaders from "../images/unrivaled_leaders.jpg"
import ProAccCover from "../components/ProAccCover"
import recruitmentSchedule from "../images/fall23_recruitment_flyer_back.png"
import springSchedule from "../images/spring23_flyer.png"
import stella_comp from "../images/stella_zhang_comp.jpg"

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ProAccCover
        coverImage="Spring24_Recruitment_Graphic_Front.png"
        textColor="white"
        darkGradient
        /*sstyle={{ position: 'relative', top: '-20px' }}*/
      />
    }
  >
    <Helmet>
      <title>Recruitment | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter Recruitment Page"
        content="Delta Sigma Pi - Pi Sigma Chapter Recruitment Page"
      />
    </Helmet>
    <Fade bottom distance="40px">
      {
        <Section sx={{ justifyContent: "left" }}>
          <div style={{ width: "100%", borderBottom: "1px solid black" }}>
            <p>
              We hold recruitment in the beginning of Fall and Spring quarter
              each year. Be sure to follow us on{" "}
              <a
                href="https://www.facebook.com/DSPUCI/"
                style={{ color: "#5FA0EC" }}
              >
                Facebook
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/dspuci/"
                style={{ color: "#5FA0EC" }}
              >
                Instagram
              </a>{" "}
              for more information.
            </p>
          </div>
        </Section>
      }
      <Section sx={{ justifyContent: "left" }}>
        <h1>Be a part of something greater.</h1>
        <p>
          Our chapter aims to create a high-impact, supportive culture where
          immensely passionate people are encouraged to pursue their
          professional and personal dreams. Attend our recruitment events to
          find out what sets Delta Sigma Pi above and apart.{" "}
        </p>
      </Section>

      {/* <Section sx={{ justifyContent: "center" }}>
        <p><center>RSVP to our Facebook event page at <a href="https://www.facebook.com/events/506869997688672" style={{color: '#5FA0EC'}}>UCI Delta Sigma Pi - Spring 2023 Recruitment: Chase</a> for any and all updates.</center></p>
        <center>Add our recruitment events to your calendar <a href={withPrefix("/files/recruitment_calendar_fall21.ics")} download style={{color: '#5FA0EC'}}>here</a>.</center></p>
      </Section> */}

      <CenterHeader>Why Join?</CenterHeader>

      <Flex flexWrap="wrap" justifyContent="center" marginBottom="-20px">
        <ImageBox image={stella_comp} title="CAREER ADVANTAGE">
          Delta Sigma Pi offers a career advantage like no other. For over a
          decade, our chapter has kickstarted and cultivated impactful careers
          in finance, consulting, marketing, accounting, technology,
          entrepreneurship, and more. Unsure of what path to choose? We’ll help
          you out.
        </ImageBox>
        <ImageBox image={unrivaledLeaders} title="UNRIVALED LEADERS">
          With countless opportunities for growth, our brothers become
          recognized leaders, within the fraternity and beyond. We hold
          leadership positions in over 25 campus organizations – some have even
          started their own.{" "}
        </ImageBox>
        <ImageBox image={lifelongBrotherhood} title="LIFELONG BROTHERHOOD">
          Joining the DSP family means mentorship, inspiration, and countless
          opportunities to learn and grow. Build lifelong friendships alongside
          an extensive network of business professionals – with over 300
          national chapters and 275 UCI alumni, you can count on your brothers
          for support no matter where you go.
        </ImageBox>
      </Flex>
    </Fade>

    <Fade bottom distance="40px">
      <CenterHeader>Hear from our brothers.</CenterHeader>
      <RecCarousel />
    </Fade>

    <Fade bottom distance="40px">
      <CenterHeader>FAQ's</CenterHeader>
      <Accordion
        title="What is recruitment?"
        content="
          Recruitment is a series of events over two weeks to allow prospective members 
          the opportunity to learn more about Delta Sigma Pi. In turn, our collegiate 
          brothers will be able to learn more about the interested candidates as well. 
          Each event will highlight an aspect of our brotherhood and professionalism 
          such as a game night, alumni panel and professionalism workshop. Interviews 
          are held at the end of the two weeks and select prospective members are then 
          given an invitation to pledge for the Fraternity. 
        "
      />
      <Accordion
        title="What sets Delta Sigma Pi apart from other business fraternities?"
        content="
          We are the only business fraternity at UC Irvine to restrict membership to 
          business school majors, which is instrumental to our career 
          focus and tight-knit brotherhood. As the oldest business fraternity on campus, 
          we have the largest alumni network in every industry for our brothers to connect 
          with. We organize more professional development initiatives than any other 
          campus organization, giving our brothers an advantage in competitive career 
          opportunities. By emphasizing a balance between brotherhood and professionalism, 
          our brothers find an unrivaled community of driven individuals who motivate each 
          other to succeed. However, what truly makes Delta Sigma Pi unrivaled is our drive 
          to make an impact on our communities and the world at large, which is something 
          unique to each brother. Talk to our brothers to find out more about the impact 
          they’ve made and what they hope to achieve.
        "
      />
      <Accordion
        title="What majors does Delta Sigma Pi accept?"
        content="
          Business Administration, Business Economics, 
          Quantitative Economics, and Economics. 
        "
      />
      <Accordion
        title="What is pledging?"
        content="
          After recruitment events and interviews, we extend invitations to select 
          prospective members for our pledging program. Pledging is an intensive 
          five week process designed to help our pledges grow professionally and 
          personally. The time commitment for pledging can be compared to a part-time 
          internship. Pledges learn and exercise team-building, public speaking, and 
          leadership skills – all in the context of business projects and practices. 
          In addition, pledges will learn about the Fraternity’s history and operational 
          requirements through the planning and participation in projects and events. 
          Pledges are paired with big brothers in the chapter for additional mentorship 
          and professional growth. At the end of pledging, pledges are considered for 
          initiation into the Fraternity. Although difficult, pledging is designed to 
          build the highest caliber of brotherhood and professionalism.
        "
      />
      <Accordion
        title="If I do not get an invitation to pledge the first time, can I apply again?"
        content="
          If you have grown personally and professionally since your last
          recruitment process, you have an advantage over those students going
          through the recruitment process for the first time and are welcome to
          apply again.
        "
      />
      <Accordion
        title="What criteria is used when deciding whom is given an invitation to
        pledge?"
        content="
          There is no pre-set image of the ideal candidate as we recognize the
          different contributions that various individuals can make. However, we
          are still looking for highly motivated scholars that not only work
          well independently, but within a group as well. Potential, as well as
          present qualities, is a determining factor in the selection process.
          Some factors we take into consideration are professional aptitude,
          past successes, willingness to learn, passion, and social
          compatibility.
        "
      />
      <Accordion
        title="How many pledges are accepted each quarter?"
        content="
          The number of invitations we extend varies widely depending on how many 
          prospective members we believe are qualified. Recent pledge classes have 
          ranged in size from as little as six or as many as thirteen.
        "
      />
      <Accordion
        title="Can I pledge for Delta Sigma Pi if I am a member of a social fraternity or a sorority?"
        content="
          Yes. However, you can not pledge for Delta Sigma Pi if you are a part
          of another professional business fraternity.
        "
      />
      <Accordion
        title="What should I do if I have further questions that were not addressed here?"
        content="
          If you have more questions, feel free to email svp@dspuci.com.
        "
      />
    </Fade>
  </CoverLayout>
)
