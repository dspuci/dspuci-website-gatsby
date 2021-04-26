import React from "react"
import { graphql } from 'gatsby'
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import Section from "../components/Section"
import CareersTables from "../components/CareersTables";
import CenterHeader from "../components/CenterHeader";
import {Helmet} from "react-helmet";
import CompanyPics from "../components/CompanyPics/CompanyPics";

export default ({data}) => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Careers"
        coverImage="careers.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Helmet>
        <title>Careers | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Careers Page" content="Delta Sigma Pi - Pi Sigma Chapter Careers Page" />
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
    <CareersTables defaultYear={"2021"} data={data}/>
  </CoverLayout>
)

// UPDATE THIS TO ADD NEW YEARS
export const query = graphql`
{
  fullTimeOffers2021: allGoogleSheetFullTimeOffers2021Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2020: allGoogleSheetFullTimeOffers2020Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2019: allGoogleSheetFullTimeOffers2019Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2018: allGoogleSheetFullTimeOffers2018Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2017: allGoogleSheetFullTimeOffers2017Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2016: allGoogleSheetFullTimeOffers2016Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2015: allGoogleSheetFullTimeOffers2015Row {
    nodes {
      name
      position
      company
      location
    }
  }
  fullTimeOffers2014: allGoogleSheetFullTimeOffers2014Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2021: allGoogleSheetInternships2021Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2020: allGoogleSheetInternships2020Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2019: allGoogleSheetInternships2019Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2018: allGoogleSheetInternships2018Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2017: allGoogleSheetInternships2017Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2016: allGoogleSheetInternships2016Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2015: allGoogleSheetInternships2015Row {
    nodes {
      name
      position
      company
      location
    }
  }
  internships2014: allGoogleSheetInternships2014Row {
    nodes {
      name
      position
      company
      location
    }
  }
}
`