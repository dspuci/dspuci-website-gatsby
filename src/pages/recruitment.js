import React from "react"
import { Flex, Box, Card, Image, Button } from "rebass"
import { Fade } from "react-reveal"
import { Helmet } from "react-helmet"
import Flippy, { FrontSide, BackSide } from "react-flippy";

import { CoverLayout } from "../components/Layout"
import ProAccCoverRecruitment from "../components/ProAccCoverRecruitment"
import Section from "../components/Section"
import CenterHeader from "../components/CenterHeader"
import RecCarousel from "../components/RecCarousel/RecCarousel"
import recruitmentGraphic from "../images/recruitment_graphic.jpg"
import fallEventImg from "../images/fall2024_recruitment_event.jpg"
import springEventImg from "../images/spring2024_recruitment_event.jpg"
import coffeeChatImg from "../images/coffee_chat_event.jpg"
import ImageCover from "../components/ImageCover"

const events = [
    {
      title: "OCTOBER 01 - MEET THE CHAPTER",
      location: "SB1 1200",
      time: "7 PM - 10 PM",
      attire: "Business Casual",
      details: "Join us to meet the brothers, learn about the chapter, and discover what it means to be part of Delta Sigma Pi"
    },
    {
        title: "OCTOBER 04 - PROFESSIONALISM NIGHT",
        location: "SB1 2200",
        time: "6 PM - 8 PM",
        attire: "Business Formal",
        details: "Learn how to present yourself professionally with tips on business etiquette, interview skills, and networking. Get insights from experienced brothers in the professional world."
      },
      {
        title: "OCTOBER 07 - SOCIAL NIGHT",
        location: "Corona Del Mar Beach",
        time: "6 PM - 8 PM",
        attire: "Casual",
        details: "Relax and get to know the brothers in a fun and informal setting at the beach. Games, bonfire, and good vibes are guaranteed! Rides will be provided."
      },
      {
        title: "OCTOBER 10 - MOCKTAIL NIGHT*",
        time: "7 PM - 10 PM",
        attire: "Cocktail Attire",
        details: "Join us for an evening with non-alcoholic drinks and conversation. Mingle with members in a 1:1 setting while practicing your networking skills. Invite-only event."
      },
      {
        title: "OCTOBER 12 - INTERVIEWS*",
        attire: "Business Formal",
        details: "Final step of the recruitment process. Invite-only event."
      }      

    // ... other events
  ];

export default () => (
    <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="FALL 2024 RECRUITMENT"
        coverImage="recruitment_graphic.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Helmet>
      <title>Recruitment Events | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Recruitment Events"
        content="Recruitment events for Delta Sigma Pi - Pi Sigma Chapter"
      />
    </Helmet>

    <Fade bottom distance="40px">
      <Section sx={{ justifyContent: "left" }}>
        <h1>Recruitment Events</h1>
        <p>
          Join us at our recruitment events to learn more about Delta Sigma Pi
          and meet our brothers. Whether it's a game night, coffee chat, or
          professional development workshop, we have events to showcase the
          various aspects of our brotherhood. Don't miss your chance to get
          involved!
        </p>
      </Section>
    </Fade>

    <Fade bottom distance="40px">
      <CenterHeader>Upcoming Events</CenterHeader>
      <Flex flexWrap="wrap" justifyContent="center">
        {events.map((event, index) => (
          <Flippy
            key={index}
            flipOnHover={true}
            flipDirection="horizontal"
            style={{ width: "500px", height: "350px", margin: "20px", }}
          >
            <FrontSide
                style={{
                    padding: "0",
                    backgroundColor: "#B12423",
                    display: "flex", // Add flex display
                    flexDirection: "column", // Ensure vertical alignment
                    justifyContent: "center", // Center vertically
                    alignItems: "center", // Center horizontally
                    textAlign: "center", // Center the text inside the box
                    color: "#f8f9fa"
                }}
                >
                <Box p={3} textAlign="center">
                    <h3>{event.title}</h3>
                </Box>
            </FrontSide>

            <BackSide
                style={{
                    backgroundColor: "#f8f9fa",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}
                >
                <h3>{event.title}</h3>
                <p>
                    {event.details && <span>{event.details}<br/><br/></span>}
                    {event.location && <span>Location: {event.location}<br /></span>}
                    {event.time && <span>Time: {event.time}<br /></span>}
                    {event.attire && <span>Attire: {event.attire}</span>}
                </p>
                </BackSide>

          </Flippy>
        ))}
      </Flex>
    </Fade>
    
  </CoverLayout>
);