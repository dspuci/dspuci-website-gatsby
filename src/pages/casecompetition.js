import React, { useEffect } from "react"
import { CoverLayout } from "../components/Layout"
import { Text } from "rebass"
import { withPrefix } from "gatsby"
import bainLogo from "../images/bain_logo.png"
import dspLogo from "../images/dsp_seal.png"
import dcLogo from "../images/180dc_logo.png"
import Accordion from "../components/Faq"
import styles from "./casecompetition.module.css"
import recruitmentStyles from "./recruitment.module.css"

export default () => {

    useEffect(() => {

        const sections = document.querySelectorAll(".fade-section")

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1"
                        entry.target.style.transform = "translateY(0px)"
                    }
                })
            }, { threshold: 0.15 }
        )

        sections.forEach(section => {
            section.style.opacity = "0"
            section.style.transform = "translateY(30px)"
            section.style.transition = "all 0.8s ease"
            observer.observe(section)
        })

    }, [])

    return (
      <CoverLayout
        navbarTextColor="white"
        layoutClassName="caseCompetitionLayout"
        coverElement={
          <div className={styles.caseHeroWrap}>
            <video
              className={styles.caseHeroVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source
                src={withPrefix("/images/videos/case_competition.mp4")}
                type="video/mp4"
              />
            </video>
            <div className={styles.caseHeroBottomFade} aria-hidden="true" />
            <div
              className={styles.caseHeroContent}
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
                  color: "#000000",
                }}
              >
                Delta Sigma Pi · 180 Degrees Consulting · Bain & Company
              </Text>
              <h1
                className={styles.caseHeroTitle}
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Case Competition
              </h1>
              <p
                style={{
                  maxWidth: 640,
                  lineHeight: 1.7,
                  fontSize: 16,
                  marginTop: 10,
                  marginBottom: 12,
                  color: "#000000",
                }}
              >
                This spring, UCI’s Delta Sigma Pi and 180 Degrees Consulting are
                co-hosting a Case Competition with Bain & Company. We encourage
                anyone to participate, regardless of experience or major—learn
                more below.
              </p>
              <div className={styles.caseHeroLogos}>
                <span className={styles.caseHeroLogosItem}>
                  <img
                    src={bainLogo}
                    alt="Bain & Company"
                    className={styles.caseHeroLogo}
                  />
                </span>
                <span className={styles.caseHeroLogosItem}>
                  <img
                    src={dcLogo}
                    alt="180 Degrees Consulting"
                    className={styles.caseHeroLogo}
                  />
                </span>
                <span className={styles.caseHeroLogosItem}>
                  <img
                    src={dspLogo}
                    alt="Delta Sigma Pi"
                    className={styles.caseHeroLogo}
                  />
                </span>
              </div>
            </div>
          </div>
        }
      >
        <div className={styles.casePage}>
          {/* ORGANIZATION LINE */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontFamily: "inherit",
            }}
          >
            <h2 style={{ fontSize: "30px" }}>
              Delta Sigma Pi × 180 Degrees Consulting × Bain
            </h2>
          </div>

          {/* TAGLINE */}
          <div
            className="fade-section"
            style={{
              maxWidth: "900px",
              margin: "auto",
              padding: "0px 40px 50px 40px",
              textAlign: "center",
              lineHeight: "1.7",
              fontFamily: "inherit",
            }}
          >
            <p style={{ fontSize: "19px", opacity: 0.9 }}>
              This spring, UCI’s Delta Sigma Pi and 180 Degrees Consulting are
              co-hosting a Case Competition with Bain & Company. We encourage
              anyone to participate, regardless of experience or major! Learn
              more below.
            </p>
            <a
              href="https://deltasigmapi.fillout.com/casecomp"
              target="_blank"
              rel="noopener noreferrer"
              className={recruitmentStyles.viewScheduleBtn}
              style={{ textDecoration: "none" }}
            >
              Click to fill out the Interest Form
            </a>
          </div>

          {/* WHY PARTICIPATE */}
          <div
            className="fade-section"
            style={{
              maxWidth: "1000px",
              margin: "auto",
              padding: "40px 40px 70px 40px",
              fontFamily: "inherit",
            }}
          >
            <div className={styles.sectionBlock}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "42px",
                  marginBottom: "30px",
                }}
              >
                Why Participate?
              </h1>

              <div className={styles.sectionGrid}>
                <div className={styles.sectionCard}>
                  <h3>Skill Development</h3>
                  <p>
                    Hone key skills in strategy, analysis, teamwork, and
                    presentation by tackling a real-world business problem. These
                    practical abilities are valuable across consulting, business,
                    and other industries.
                  </p>
                </div>

                <div className={styles.sectionCard}>
                  <h3>Professional Opportunities</h3>
                  <p>
                    Engage directly with Bain &amp; Company professionals through
                    networking events, coffee chats, and Q&amp;A sessions, gaining
                    insight into the consulting industry and potential career
                    paths.
                  </p>
                </div>

                <div className={styles.sectionCard}>
                  <h3>Consulting Experience</h3>
                  <p>
                    Apply structured problem-solving and frameworks used by top
                    consulting firms while working on a live case. Gain a taste of
                    the consulting workflow and the challenges consultants face.
                  </p>
                </div>

                <div className={styles.sectionCard}>
                  <h3>Mentorship</h3>
                  <p>
                    Receive guidance from experienced mentors who provide
                    feedback, help refine your approach, and share insights on
                    navigating case competitions and consulting projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,.15)",
              width: "70%",
              margin: "40px auto",
            }}
          />

          {/* FAQ */}
          <div
            className="fade-section"
            style={{
              maxWidth: "900px",
              margin: "auto",
              padding: "20px 40px 80px 40px",
              fontFamily: "inherit",
            }}
          >
            <div className={styles.faqBlock}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "42px",
                  marginBottom: "24px",
                }}
              >
                FAQ
              </h1>

              <div>
                <Accordion
                  title="When will the competition be?"
                  content="The Case Competition will take place in Spring 2026, starting Week 3. More details will be released soon."
                />
                <Accordion
                  title="Who can participate?"
                  content="Any UC Irvine undergraduate student can participate regardless of major or experience level."
                />
                <Accordion
                  title="What is a case competition?"
                  content="Case competitions simulate real consulting challenges where teams analyze business problems and present strategic recommendations to judges."
                />
                <Accordion
                  title="What will I gain?"
                  content="Participants gain hands-on consulting experience, mentorship, networking opportunities, and the chance to work on a real-world business case."
                />
              </div>
            </div>
          </div>
        </div>
      </CoverLayout>
    )
}