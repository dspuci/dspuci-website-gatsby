import React from "react"
import { graphql } from 'gatsby'
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import Section from "../components/Section"
import CareersTables from "../components/CareersTables"
import CenterHeader from "../components/CenterHeader"
import { Helmet } from "react-helmet"
import CompanyPics from "../components/CompanyPics/CompanyPics"

export default ({ data }) => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Careers"
        coverImage="careers_alumni_cover.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Helmet>
      <title>Careers | Delta Sigma Pi - Pi Sigma Chapter</title>
      <meta
        name="Delta Sigma Pi - Pi Sigma Chapter Careers Page"
        content="Delta Sigma Pi - Pi Sigma Chapter Careers Page"
      />
    </Helmet>
    <Section sx={{ justifyContent: "left" }}>
      <h1>A higher standard of career success.</h1>
      <div>
        At UC Irvine, we’re redefining and raising the bar of successful
        careers, and our experiences speak to our commitment to professional
        development. We have countless brothers with competitive internships and
        full-time experience at Fortune 500 companies, prestigious firms, and
        unicorn startups.
      </div>
    </Section>
    <Section sx={{ justifyContent: "left" }}>
      <CenterHeader marginTop="0px">Our Experience</CenterHeader>
      <CompanyPics></CompanyPics>
    </Section>
    <CareersTables defaultYear={"2023"} data={data} />
  </CoverLayout>
)

export const query = graphql`
  { 
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
