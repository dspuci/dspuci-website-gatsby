import React from "react"
import { Flex, Box, Card, Image, Button, Text } from "rebass"
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
      title: "SEPTEMBER 29 - MEET THE CHAPTER",
      location: "SB1 1128",
      time: "7 PM - 10 PM",
      attire: "Casual",
      details: "Join us to meet the brothers, learn about the chapter, and discover what it means to be part of Delta Sigma Pi"
    },
    {
        title: "OCTOBER 03 - PROFESSIONAL NIGHT",
        location: "SB1 1200",
        time: "7 PM - 9 PM",
        attire: "Business Professional",
        details: "Learn how to present yourself professionally with tips on business etiquette, interview skills, and networking. Get insights from experienced brothers in the professional world."
      },
      {
        title: "OCTOBER 06 - SOCIAL NIGHT",
        location: "Bill Barber Park",
        time: "6 PM - 9 PM",
        attire: "Casual",
        details: "Relax and get to know the brothers in a fun and informal setting at the beach. Games, snacks, and good vibes are guaranteed! Rides will be provided."
      },
      {
        title: "OCTOBER 09  - MOCKTAIL NIGHT*",
        location: "TBA",
        time: "7 PM - 10 PM",
        attire: "Cocktail Attire",
        details: "Join us for an evening with non-alcoholic drinks and conversation. Mingle with members in a 1:1 setting while practicing your networking skills. Rides will be provided. Invite-only event."
      },
      {
        title: "OCTOBER 11 - INTERVIEWS*",
        location: "TBA",
        time: "TBA",
        attire: "Business Professional",
        details: "Final step of the recruitment process. Invite-only event."
      }      
  ];

export default () => (
    <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="FALL 2025 RECRUITMENT"
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
        <CenterHeader>Upcoming Events</CenterHeader>
    </Fade>

    <Fade bottom distance="40px">
      <Section sx={{ justifyContent: "center" }}>
        <p>
          Join us at our recruitment events to learn more about Delta Sigma Pi
          and meet our brothers. Whether it's a game night, coffee chat, or
          professional development workshop, we have events to showcase the
          various aspects of our brotherhood. Don't miss your chance to get
          involved!
        </p>
        <Button
            variant="contained"
            sx={{
                margin: "2",
                backgroundColor: "#900404ff",
                color: "#f8f9fa", // Text color
                "&:hover": {
                backgroundColor: "#6c0303ff", // Darker red on hover
                transform: "scale(1.05)", // Slightly grow on hover
                },
            }}
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeIRpTOCBCIO7WgCaDoDrfCZ-nJJkHJV76Gz9yzHghF42zERg/viewform", "_blank")}
            >
            Rush Application Part 1
            </Button>
            <Button
            variant="contained"
            sx={{
                margin: "2",
                backgroundColor: "#900404ff",
                color: "#f8f9fa", // Text color
                "&:hover": {
                backgroundColor: "#6c0303ff", // Darker green on hover
                transform: "scale(1.05)", // Slightly grow on hover
                },
            }}
            onClick={() => window.open("https://calendly.com/jadonsong-ucidsp/30min?month=2025-09", "_blank")}
            >
            Coffee Chat Sign Ups
            </Button>

            <hr style={{
          border: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #fff 0%, #900404ff 100%)',
          margin: '48px auto',
          width: '99%',
          borderRadius: '3px'
        }} />
            
    </Section>

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
                    backgroundColor: "#900404ff",
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
  sx={{
    backgroundColor: "#f8f9fa",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
  <h3
    sx={{
      fontSize: ['18px', '20px', '24px'], // Responsive font sizes (mobile, tablet, desktop)
    }}
  >
    {event.title}
  </h3>
  
  <Text
    fontSize={['14px', '16px', '18px']}
  >
    {event.details && <span>{event.details}<br /><br /></span>}
    {event.location && <span>Location: {event.location}<br /></span>}
    {event.time && <span>Time: {event.time}<br /></span>}
    {event.attire && <span>Attire: {event.attire}</span>}
  </Text>
  
</BackSide>
          </Flippy>
        ))}
      </Flex>
    </Fade>
    
  </CoverLayout>
);