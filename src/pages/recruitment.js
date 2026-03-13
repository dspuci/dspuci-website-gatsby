import React, { useState, useRef, useEffect } from "react"
import { Fade } from "react-reveal"
import { Flex, Box, Text } from "rebass"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import { Link } from "gatsby"
import { CoverLayout } from "../components/Layout"
import Section from "../components/Section"
import CenterHeader from "../components/CenterHeader"
import HoverShadowBox from "../components/HoverShadowBox"
import Accordion from "../components/Faq"

import styles from "./recruitment.module.css"

// ICS file with all 5 recruitment events – import into Google Calendar to add all at once
const RECRUITMENT_ICS_URL = withPrefix("/files/recruitment_calendar_2026.ics")

// Subway route colors (one per event – for timeline line + station nodes)
const SUBWAY_COLORS = {
  meetTheChapter: "#EE352E",
  professionalNight: "#2850AD",
  socialNight: "#FF6319",
  mocktailNight: "#00933C",
  interviews: "#B933AD",
}

// Multicolor palette for date circles (month/day characters)
const DATE_CIRCLE_COLORS = [
  "#EE352E", "#2850AD", "#FF6319", "#00933C", "#B933AD", "#FCCC0A", "#996633", "#808183",
]

const Band = ({ compact, ...props }) => (
  <div
    className={styles.band}
    style={{ padding: compact ? "16px 20px 20px" : "32px 24px 40px" }}
  >
    <div className={styles.bandContent}>{props.children}</div>
  </div>
)

const Divider = () => (
  <hr
    className={styles.recruitmentDivider}
    style={{
      border: 0,
      height: "1px",
      margin: "28px auto",
      width: "80%",
    }}
  />
)

const CardTitle = (props) => (
  <Text
    fontSize={[18, 20]}
    fontWeight="bold"
    fontFamily="Georgia, serif"
    letterSpacing="0.02em"
    sx={{ marginBottom: 10 }}
  >
    {props.children}
  </Text>
)

const CardLine = (props) => (
  <Text fontSize={[15, 16]} fontFamily="Heebo" sx={{ opacity: 0.95 }}>
    {props.children}
  </Text>
)

// Format date for circles: "March 30" -> full month + day, one char per circle (e.g. M,A,R,C,H,3,0)
function dateToCircleChars(dateStr) {
  const parts = dateStr.split(" ")
  const month = (parts[0] || "").toUpperCase()
  const day = (parts[1] || "").replace(",", "")
  return [...month.split(""), ...day.split("")]
}

const FlipScheduleCard = ({
  title,
  date,
  time,
  location,
  attire,
  note,
  description,
  isFlipped,
  onFlip,
}) => {
  const chars = dateToCircleChars(date)
  return (
    <div className={styles.scheduleCardWrap}>
      <div
        className={`${styles.scheduleCard} ${isFlipped ? styles.flipped : ""}`}
        onClick={onFlip}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onFlip()}
        role="button"
        tabIndex={0}
        aria-label={isFlipped ? `Flip back: ${title}` : `Flip to read: ${title}`}
      >
        <div className={styles.scheduleCardInner}>
          <div className={styles.scheduleCardFront}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>{title}</h3>
              {note ? (
                <div className={styles.cardTitleNote}>* {note}</div>
              ) : null}
              <div className={styles.dateCircles}>
                {chars.map((c, i) => (
                  <span
                    key={i}
                    className={styles.dateCircle}
                    style={{
                      background: DATE_CIRCLE_COLORS[i % DATE_CIRCLE_COLORS.length],
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.cardRight}>
              <div className={styles.cardRightLine}>{time}</div>
              <div className={styles.cardRightLine}>{location}</div>
              <div className={styles.cardRightLine}>{attire}</div>
            </div>
          </div>
          <div className={styles.scheduleCardBack}>
            <div className={styles.backContent}>
              <p className={styles.backText}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SCHEDULE_EVENTS = [
  {
    title: "Meet the Chapter",
    date: "March 30",
    time: "7-10 PM",
    location: "Paul Merage",
    attire: "Casual Attire",
    note: null,
    routeColor: SUBWAY_COLORS.meetTheChapter,
    description:
      "Come out to learn more about DSP, meet our brothers, and connect in a relaxed setting. Get a feel for our brotherhood and see what Pi Sigma is all about.",
  },
  {
    title: "Professional Night",
    date: "April 01",
    time: "7-10 PM",
    location: "Paul Merage",
    attire: "Business Professional Attire",
    note: null,
    routeColor: SUBWAY_COLORS.professionalNight,
    description:
      "Learn about the professional resources our chapter has to offer. Come in business professional attire with your resume, cover letter, and any materials you’d like our brothers to review and give feedback on.",
  },
  {
    title: "Social Night",
    date: "April 06",
    time: "7-10 PM",
    location: "Corona Del Mar",
    attire: "Casual Attire",
    note: null,
    routeColor: SUBWAY_COLORS.socialNight,
    description:
      "Join us at the beach for a fun, social setting. There will be a fundraiser at Cha at UTC beforehand from 4-6 PM, where you can socialize with brothers and get rides from there. Check for updates on ride arrangements!",
  },
  {
    title: "Mocktail Night",
    date: "April 11",
    time: "7-10 PM",
    location: "TBA",
    attire: "Cocktail Attire",
    note: "Invite Only",
    routeColor: SUBWAY_COLORS.mocktailNight,
    description: "Invite only. More details will be sent via email.",
  },
  {
    title: "Interviews",
    date: "April 11",
    time: "TBA",
    location: "TBA",
    attire: "Business Professional Attire",
    note: "Invite Only",
    routeColor: SUBWAY_COLORS.interviews,
    description: "Invite only. More details will be sent via email.",
  },
]

const RecruitmentScheduleBlock = () => {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const [revealedStations, setRevealedStations] = useState(() => SCHEDULE_EVENTS.map(() => false))
  const rowRefs = useRef([])

  // Station dots: one-way reveal on first time in viewport, never hide again
  useEffect(() => {
    const observers = rowRefs.current.map((rowEl, index) => {
      if (!rowEl) return null
      const ob = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            setRevealedStations((prev) => {
              const next = [...prev]
              if (!next[index]) next[index] = true
              return next
            })
          })
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      )
      ob.observe(rowEl)
      return ob
    })
    return () => observers.forEach((ob) => ob && ob.disconnect())
  }, [])

  return (
    <Band compact>
      <Fade bottom distance="16px" duration={500}>
        <CenterHeader marginTop={4} marginBottom={8}>
          Recruitment Schedule
        </CenterHeader>
      </Fade>
      <Fade bottom distance="20px" duration={500} delay={80}>
        <Text
          fontSize={[14, 15]}
          fontFamily="Heebo"
          sx={{
            maxWidth: 560,
            margin: "0 auto 16px",
            textAlign: "center",
            opacity: 0.95,
          }}
        >
          Plan your week around recruitment. Each event highlights a different
          side of Pi Sigma—from first impressions to invite-only conversations.
        </Text>
      </Fade>
      <Fade bottom distance="20px" duration={500} delay={160}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <a
            href={RECRUITMENT_ICS_URL}
            download="dsp-recruitment-2026.ics"
            className={styles.viewScheduleBtn}
            style={{ textDecoration: "none" }}
          >
            ADD ALL EVENTS TO CALENDAR
          </a>
        </div>
      </Fade>
      <div className={styles.scheduleTimelineWrap}>
        <div className={styles.scheduleTimelineTrack} aria-hidden="true" />
        <div className={styles.scheduleList}>
          {SCHEDULE_EVENTS.map((event, index) => (
            <div
              key={index}
              className={styles.scheduleItemRow}
              ref={(r) => { rowRefs.current[index] = r }}
            >
              <div className={styles.scheduleNodeCol}>
                <div
                  className={`${styles.scheduleNode} ${revealedStations[index] ? styles.scheduleNodeRevealed : ""}`}
                  style={{
                    borderColor: event.routeColor,
                    backgroundColor: revealedStations[index] ? event.routeColor : "transparent",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className={styles.scheduleCardCol}>
                <FlipScheduleCard
                  {...event}
                  isFlipped={flippedIndex === index}
                  onFlip={() =>
                    setFlippedIndex((prev) => (prev === index ? null : index))
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Band>
  )
}

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <div className={styles.recruitmentHeroWrap}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={withPrefix("/images/videos/nyc_landscape.mp4")} type="video/mp4" />
        </video>
        <div
          className={styles.recruitmentHeroContent}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1120,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "120px 24px 80px",
          }}
        >
          <Text
            fontSize={[13, 14]}
            fontFamily="Heebo, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#ffffff",
            }}
          >
            Delta Sigma Pi · Pi Sigma
          </Text>
          <h1 className={styles.recruitmentHeroTitle} style={{ fontSize: "clamp(36px, 5vw, 56px)", textTransform: "uppercase", margin: 0 }}>
            Spring Recruitment
          </h1>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(22px, 3vw, 30px)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Where Dreams are Made
          </h2>
          <p
            style={{
              maxWidth: 640,
              lineHeight: 1.7,
              fontSize: 16,
              marginTop: 10,
              marginBottom: 24,
              color: "#ffffff",
            }}
          >
            Every dream starts somewhere. This spring, start yours with DSP. Join us for our Spring 2026 recruitment and discover the opportunities, connections, and people waiting for you.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Link
              to="/recruitment#schedule"
              className={`${styles.viewScheduleBtn} ${styles.heroViewScheduleBtn}`}
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    }
  >
    <div className={styles.recruitmentPageBg} aria-hidden="true" />
    <div className={styles.recruitmentPageContent}>
    <Helmet>
      <title>Recruitment | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter Recruitment Page"
        content="Delta Sigma Pi - Pi Sigma Chapter Recruitment Page"
      />
    </Helmet>

    <Fade bottom distance="40px">
      <div
        id="schedule"
        style={{ scrollMarginTop: 100, marginTop: 72 }}
      />
      <RecruitmentScheduleBlock />
    </Fade>

    <Divider />

    <Fade bottom distance="40px">
      <Band>
        <CenterHeader marginTop={10} marginBottom={35}>
          What to Expect
        </CenterHeader>
        <Flex flexWrap="wrap" justifyContent="center" marginBottom="-20px">
          <Box width={[1, 1 / 2, 1 / 2, 1 / 2]}>
            <HoverShadowBox raise>
              <CardTitle>Meet Our Brothers</CardTitle>
              <Text
                fontSize={[15, 16]}
                fontFamily="Heebo"
                sx={{ opacity: 0.95 }}
              >
                See what makes Pi Sigma feel like home. Come curious, motivated, and ready to connect.
              </Text>
            </HoverShadowBox>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2, 1 / 2]}>
            <HoverShadowBox raise>
              <CardTitle>Professional Opportunities</CardTitle>
              <Text
                fontSize={[15, 16]}
                fontFamily="Heebo"
                sx={{ opacity: 0.95 }}
              >
                Learn how DSP supports recruiting, skill-building, and
                mentorship across industries—plus how our alumni network can
                open doors long after graduation.
              </Text>
            </HoverShadowBox>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2, 1 / 2]}>
            <HoverShadowBox raise>
              <CardTitle>Build Real Connections</CardTitle>
              <Text
                fontSize={[15, 16]}
                fontFamily="Heebo"
                sx={{ opacity: 0.95 }}
              >
                Recruitment is designed to be social and welcoming. You’ll meet
                other candidates, talk 1:1 with brothers, and get a feel for the
                support system you’d be joining.
              </Text>
            </HoverShadowBox>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2, 1 / 2]}>
            <HoverShadowBox raise>
              <CardTitle>Understand the Process</CardTitle>
              <Text
                fontSize={[15, 16]}
                fontFamily="Heebo"
                sx={{ opacity: 0.95 }}
              >
                We’ll walk you through what we look for, how invite-only events
                work, and how to put your best foot forward.
              </Text>
            </HoverShadowBox>
          </Box>
        </Flex>
      </Band>
    </Fade>
    
    <div style={{ margin: "60px auto", maxWidth: 800 }}>
      <hr
        style={{
          border: 0,
          height: "1px",
          background: "rgba(0, 0, 0, 0.18)",
          width: "65%",
          margin: "0 auto",
        }}
      />
    </div>

    <Fade bottom distance="40px">
      <Band>
        <CenterHeader marginTop={10} marginBottom={30}>
          FAQ's
        </CenterHeader>
        <div className={styles.faqList}>
        <Accordion
          title="Are all events required?"
          content="
            While we encourage you to attend all three open recruitment events so you can fully get to know our brothers and the chapter, attendance at at least two of the three events is required. Applications will not be considered unless you attend a minimum of two events.
          "
        />
        <Accordion
          title="Do I need prior business experience?"
          content="
            No prior business experience is required. We evaluate prospective members on a holistic basis, so your professional background is only one part of the picture. If you have experience, that’s great. If you don’t, recruitment is designed to help you learn more about DSP and grow professionally.
          "
        />
        <Accordion
          title="What should I wear?"
          content={
            "Each event has a different dress code.\n\n" +
            "Meet the Chapter: Casual\n" +
            "Professional Night: Business Professional\n" +
            "Social Night: Casual\n" +
            "Mocktail Night: Cocktail Attire\n" +
            "Interviews: Business Professional"
          }
        />
        <Accordion
          title="How do invite-only events work?"
          content="
            After attending the first three recruitment events, you will receive an email letting you know whether you have been selected to move forward to the next round (Mocktail Night). If selected, additional details will be provided. The same process applies for interviews, which follow Mocktail Night.
          "
        />
        </div>
      </Band>
    </Fade>
    </div>
  </CoverLayout>
)

