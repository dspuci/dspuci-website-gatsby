import React from "react"
import { Text, Image } from "rebass"
import { Fade } from "react-reveal"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import ImageTextRow from "../components/ImageTextRow"
import CenterHeader from "../components/CenterHeader"
import HoverShadowBox from "../components/HoverShadowBox"
import DescriptionText from "../components/DescriptionText"

import brotherhoodImage from "../images/brotherhood.jpg"
import professionalismImage from "../images/professionalism.jpg"
import communityImage from "../images/community.jpg"
import recruitmentSchedule from "../images/recruitment_schedule_fall19.png"

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
        text="Fall Recruitment 2019"
        coverImage="beach.jpg"
        textColor="white"
      />
    }
  >
    <Fade bottom distance="40px">
      <Text
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "90px auto",
          textAlign: "center",
        }}
      >
        Our chapter aims to create a high-impact, supportive culture where
        immensely passionate people are encouraged to pursue their professional
        and personal dreams. Attend our recruitment events to find out what sets
        Delta Sigma Pi above and apart.
      </Text>

      <CenterHeader>Schedule</CenterHeader>
      <Image
        onClick={() => (window.location = recruitmentSchedule)}
        src={recruitmentSchedule}
        sx={{
          cursor: "pointer",
          marginBottom: 50,
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
        }}
      />

      <CenterHeader marginBottom={70}>Why join?</CenterHeader>
      <ImageTextRow
        title="Career Advantage"
        imagePosition="right"
        imageSrc={brotherhoodImage}
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
        imageSrc={professionalismImage}
      >
        Joining the DSP family means mentorship, inspiration, and countless
        opportunities to learn and grow. Build lifelong friendships alongside an
        extensive network of business professionals -- with over 220 collegiate
        chapters, no matter where you go, you can count on brothers for support.
      </ImageTextRow>
      <ImageTextRow
        title="Unrivaled Leaders"
        imagePosition="right"
        imageSrc={communityImage}
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
          Delta Sigma Pi is selective only to business related major, not like
          campus-wide business clubs or social fraternities/sororities. Delta
          Sigma Pi is also a member of the Professional Fraternity Association
          which allows for networking and leadership development among 40 other
          professional fraternities. With Delta Sigma Pi, you will be able to
          enjoy the largest national convention of any similar fraternity (Grand
          Chapter Congress) as well as being a brother for your entire life.
          Lastly, no matter where you go, Delta Sigma Pi will be there because
          Delta Sigma Pi is in more than 47 countries around the world.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>What majors do you accept?</FAQHeader>
        <DescriptionText>
          Here is a list of the majors we accept: Business Administration,
          Business Economics, Business Information Management, Economics,
          Informatics, Information and Computer Science, and Quantitative
          Economics . We take students of other majors into our pledging process
          on a case by case basis, so do not let your major be a deterrent from
          coming out to our recruitment week.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>What is pledging?</FAQHeader>
        <DescriptionText>
          Pledging is an intensive six week process designed to help prospective
          brothers become more personally and professionally developed. The
          purpose of pledge education is to formally present Fraternity history
          and information to our potential members. In addition, pledges will
          learn the business operational requirements of the Fraternity through
          the planning and participation in various projects described in this
          program. The pledges will become familiar with the opportunities and
          obligations available and expected through membership, including:
          knowledge of basic local and national Fraternity history and
          operations; meeting procedures, etiquette and organizational skills;
          special event and fundraising planning skills; and the Fraternity’s
          emphasis on personal and professional development of the individual.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          I've applied before, but didn't receive an invitation to pledge.
          Should i reapply?
        </FAQHeader>
        <DescriptionText>
          Yes! If you have improved yourself personally and professional since
          the last recruitment process, you have an advantage over those
          students going through the recruitment process for the first time.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          What criteria is used when deciding whom is given an invitation to
          pledge?
        </FAQHeader>
        <DescriptionText>
          Professional development, willingness to learn, past successes,
          dedication and social compatibility.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>How do I stand out during recruitment?</FAQHeader>
        <DescriptionText>
          Be sure to always smile and make conversation with all of the brothers
          that you can. Recruitment is not only a time for us to get to know
          you, but also for you to get to know us. If you want to stand out, be
          yourself and let your inner talents shine throughout the week as you
          get to know the brothers.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>How many pledges are accepted each quarter?</FAQHeader>
        <DescriptionText>
          There is no specific amount of pledges that Delta Sigma Pi gives
          invitations to pledge each quarter. The number varies depending on the
          compatibility of the prospective members and the brothers.
        </DescriptionText>
      </HoverShadowBox>
      <HoverShadowBox>
        <FAQHeader>
          Can I pledge for Delta Sigma Pi if I am a member of another fraternity
          or a sorority?
        </FAQHeader>
        <DescriptionText>
          Yes. However, you can not pledge for Delta Sigma Pi if you are a part
          of another professional fraternity.
        </DescriptionText>
      </HoverShadowBox>
    </Fade>
  </CoverLayout>
)
