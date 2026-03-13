import React from "react"
import { graphql, withPrefix } from "gatsby"
import { CoverLayout } from "../components/Layout"
import Section from "../components/Section"
import CareersTables from "../components/CareersTables"
import CenterHeader from "../components/CenterHeader"
import { Helmet } from "react-helmet"
import CompanyPics from "../components/CompanyPics/CompanyPics"
import styles from "./careers.module.css"

const CAREERS_HERO_INTRO = "At UC Irvine, we are redefining and raising the bar of successful careers, and our experiences speak to our commitment to professional development. We have countless brothers with competitive internships and full-time experience at Fortune 500 companies, prestigious firms, and unicorn startups."

export default ({ data }) => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <div className={styles.careersHeroWrap}>
        <div
          className={styles.careersHeroImage}
          style={{
            backgroundImage: `url(${withPrefix("/images/cover_images/careers_2025.jpg")})`,
          }}
          aria-hidden="true"
        />
        <div className={styles.careersHeroOverlay} aria-hidden="true" />
        <div className={styles.careersHeroBottomFade} aria-hidden="true" />
        <div
          className={styles.careersHeroContent}
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
          <h1 className={styles.careersHeroTitle} style={{ fontSize: "clamp(36px, 5vw, 56px)", textTransform: "uppercase", margin: 0 }}>
            Careers
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
            A Higher Standard of Career Success
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
            {CAREERS_HERO_INTRO}
          </p>
        </div>
      </div>
    }
  >
    <div className={styles.careersPage}>
    <Helmet>
      <title>Careers | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter Careers Page"
        content="Delta Sigma Pi - Pi Sigma Chapter Careers Page"
      />
    </Helmet>
    <hr style={{
          border: 0,
          height: '1px',
          background: '#666',
          margin: '48px auto',
          width: '80%'
        }} />
    <section className={styles.experienceSection}>
      <Section sx={{ justifyContent: "left" }}>
        <div className={styles.industrySection}>
          <CenterHeader marginTop="0px">Our Experience</CenterHeader>
          <CompanyPics></CompanyPics>
        </div>
      </Section>
    </section>
    <div className={styles.industrySection}>
      <CareersTables defaultYear={"2025"} data={data} />
    </div>
    </div>
  </CoverLayout>
)

export const query = graphql`
  { 
    fullTimeOffers2025: allCareersXlsxFullTimeOffers2025 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2024: allCareersXlsxFullTimeOffers2024 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2023: allCareersXlsxFullTimeOffers2023 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2022: allCareersXlsxFullTimeOffers2022 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2021: allCareersXlsxFullTimeOffers2021 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2020: allCareersXlsxFullTimeOffers2020 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2019: allCareersXlsxFullTimeOffers2019 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2018: allCareersXlsxFullTimeOffers2018 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2017: allCareersXlsxFullTimeOffers2017 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2016: allCareersXlsxFullTimeOffers2016 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2015: allCareersXlsxFullTimeOffers2015 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    fullTimeOffers2014: allCareersXlsxFullTimeOffers2014 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2025: allCareersXlsxInternships2025 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2024: allCareersXlsxInternships2024 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2023: allCareersXlsxInternships2023 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2022: allCareersXlsxInternships2022 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2021: allCareersXlsxInternships2021 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2020: allCareersXlsxInternships2020 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2019: allCareersXlsxInternships2019 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2018: allCareersXlsxInternships2018 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2017: allCareersXlsxInternships2017 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2016: allCareersXlsxInternships2016 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2015: allCareersXlsxInternships2015 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
    internships2014: allCareersXlsxInternships2014 {
      nodes {
        Name
        Position
        Company
        Location
      }
    }
  }
`
