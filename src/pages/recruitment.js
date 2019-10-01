import React from "react"
import { Text, Image } from "rebass"
import { Fade } from "react-reveal"
import { withPrefix } from "gatsby"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import ImageTextRow from "../components/ImageTextRow"
import CenterHeader from "../components/CenterHeader"
import HoverShadowBox from "../components/HoverShadowBox"
import DescriptionText from "../components/DescriptionText"
import Section from "../components/Section"

import careerAdvantage from "../images/career_advantage.jpg"
import lifelongBrotherhood from "../images/lifelong_brotherhood.jpg"
import unrivaledLeaders from "../images/unrivaled_leaders.jpg"
import recruitmentSchedule from "../../public/images/recruitment_schedules/fall19.png"

const FAQHeader = props => (
  <Text
    fontSize={30}
    fontWeight="bold"
    fontFamily="Heebo"
    sx={{ marginBottom: 10 }}
  >
    {props.children}
  </Text>
)

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Rise Above"
        coverImage="recruitment.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Fade bottom distance="40px">
      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>Be a part of something greater.</h1>
        <div>
          Our chapter aims to create a high-impact, supportive culture where
          immensely passionate people are encouraged to pursue their
          professional and personal dreams. Attend our recruitment events to
          find out what sets Delta Sigma Pi above and apart.
        </div>
      </Section>

      <CenterHeader>Schedule</CenterHeader>
      <Image
        onClick={() => (window.location = recruitmentSchedule)}
        src={recruitmentSchedule}
        sx={{
          cursor: "pointer",
          marginBottom: 30,
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
        }}
      />
      <div
        style={{
          display: "inline-block",
          width: "100%",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        <a
          style={{
            backgroundColor: "#eee",
            color: "black",
            display: "inline-block",
            padding: 10,
            textDecoration: "none",
            borderRadius: 12,
          }}
          href={withPrefix(`/files/recruitment_calendar_fall19.ics`)}
        >
          Download for Calendar
        </a>
      </div>

      <CenterHeader>Why join?</CenterHeader>
      <ImageTextRow
        title="Career Advantage"
        imagePosition="right"
        imageSrc={careerAdvantage}
      >
        Delta Sigma Pi offers a career advantage like no other. For over a
        decade, our chapter has kickstarted and cultivated impactful careers in
        finance, consulting, marketing, accounting, technology,
        entrepreneurship, and more. Unsure of what path to choose? We’ll help
        you out.
      </ImageTextRow>
      <ImageTextRow
        title="Lifelong Brotherhood"
        imagePosition="left"
        imageSrc={lifelongBrotherhood}
      >
        Joining the DSP family means mentorship, inspiration, and countless
        opportunities to learn and grow. Build lifelong friendships alongside an
        extensive network of business professionals -- with over 220 collegiate
        chapters, no matter where you go, you can count on your brothers for
        support.
      </ImageTextRow>
      <ImageTextRow
        title="Unrivaled Leaders"
        imagePosition="right"
        imageSrc={unrivaledLeaders}
      >
        With countless opportunities for growth, our brothers become recognized
        leaders, within the fraternity and beyond. At UCI, our brothers hold
        positions in over 25 campus organizations.
      </ImageTextRow>

      <CenterHeader>FAQ's</CenterHeader>
      <HoverShadowBox>
        <FAQHeader>
          What sets Delta Sigma Pi apart from other business fraternities?
        </FAQHeader>
        <DescriptionText>
          We are the only business fraternity at UC Irvine to restrict
          acceptances to business and technology related majors, which is
          instrumental to our career focus and tight-knit brotherhood. As the
          oldest business fraternity on campus, we have more alumni in every
          industry for our brothers to connect with. We organize more
          professional development initiatives than any other campus
          organization, giving our brothers an advantage in competitive career
          opportunities. By emphasizing a balance between brotherhood and
          professionalism, our brothers find an unrivaled community of driven
          individuals who motivate each other to succeed. However, what truly
          makes Delta Sigma Pi unrivaled is our drive to make an impact on our
          communities and the world at large, which is something unique to each
          brother. Talk to our brothers to find out more about the impact
          they’ve made and what they hope to achieve.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>What majors does Delta Sigma Pi accept?</FAQHeader>
        <DescriptionText>
          Business Administration, Business Economics, Business Information
          Management, Economics, Informatics, Information and Computer Science,
          and Quantitative Economics. We take students of other majors into our
          pledging process on a case by case basis, so don’t let your major be a
          deterrent from coming out to our recruitment week.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>What is pledging?</FAQHeader>
        <DescriptionText>
          After recruitment events and interviews, we extend invitations to
          select candidates for our pledging program. Pledging is an intensive
          six week process designed to help prospective brothers grow
          professionally and personally. The time commitment for pledging can be
          compared to a six week long internship. Pledges learn and exercise
          team-building, public speaking, and leadership skills, all in the
          context of business projects and practices. In addition, pledges will
          learn Fraternity history and operational requirements of the
          Fraternity through the planning and participation in projects and
          events. Pledges are paired with big brothers in the chapter for
          additional mentorship and career-guided growth. At the end of
          pledging, pledges are considered for initiation into the chapter.
          Although difficult, pledging is designed to build the highest caliber
          of brotherhood and professionalism.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          If I do not get an invitation to pledge the first time, can I apply
          again?
        </FAQHeader>
        <DescriptionText>
          If you have grown personally and professionally since your last
          recruitment process, you have an advantage over those students going
          through the recruitment process for the first time and are welcome to
          apply again.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          What criteria is used when deciding whom is given an invitation to
          pledge?
        </FAQHeader>
        <DescriptionText>
          There is no pre-set image of the ideal candidate as we recognize the
          different contributions that various individuals can make. However, we
          are still looking for highly motivated scholars that not only work
          well independently, but within a group as well. Potential, as well as
          present qualities, is a determining factor in the selection process.
          Some factors we take into consideration are professional aptitude,
          past successes, willingness to learn, passion, and social
          compatibility.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>How many pledges are accepted each quarter?</FAQHeader>
        <DescriptionText>
          The number of invitations we extend varies widely depending on how
          many prospective members we believe are qualified. Recent pledge
          classes have ranged in size from as little as six or as many as
          eleven.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          Can I pledge for Delta Sigma Pi if I am a member of a social
          fraternity or a sorority?
        </FAQHeader>
        <DescriptionText>
          Yes. However, you can not pledge for Delta Sigma Pi if you are a part
          of another professional business fraternity.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          What should I do if I have further questions that were not addressed
          here?
        </FAQHeader>
        <DescriptionText>
          If you have more questions, feel free to email{" "}
          <a style={{ color: "inherit" }} href="mailto:svp@dspuci.com">
            svp@dspuci.com
          </a>
          .
        </DescriptionText>
      </HoverShadowBox>
    </Fade>
  </CoverLayout>
)
