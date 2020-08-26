import React from "react"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import Section from "../components/Section"
import CareersTables from "../components/CareersTables"
import {Helmet} from "react-helmet";

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
      <h1 style={{ marginBottom: 10 }}>A higher standard of career success.</h1>
      <div>
        At UC Irvine, we’re redefining and raising the bar of successful
        careers, and our experiences speak to our commitment to professional
        development. We have countless brothers with competitive internships and
        full-time experience at Fortune 500 companies, prestigious firms, and
        unicorn startups.
      </div>
    </Section>
    <CareersTables defaultYear={"2020"} data={data}/>
  </CoverLayout>
)


export const query = graphql`
{
  fullTimeOffers2020: allCareersXlsxFullTimeOffers2020 {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersOperations2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Operations"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersFinanceAndAccounting2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Finance & Accounting"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersMarketingAndSales2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Marketing & Sales"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersTechnologyAndPM2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Technology & PM"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersHumanResourcesAndAdministration2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Human Resources & Administration"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersConsulting2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Consulting"}}) {
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
  fullTimeOffersOperations2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Operations"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersFinanceAndAccounting2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Finance & Accounting"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersMarketingAndSales2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Marketing & Sales"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersTechnologyAndPM2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Technology & PM"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersHumanResourcesAndAdministration2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Human Resources & Administration"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  fullTimeOffersConsulting2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Consulting"}}) {
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
  internshipsOperations2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Operations"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsFinanceAndAccounting2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Finance & Accounting"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsMarketingAndSales2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Marketing & Sales"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsTechnologyAndPM2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Technology & PM"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsHumanResourcesAndAdministration2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Human Resources & Administration"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsConsulting2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Consulting"}}) {
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
  internshipsOperations2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Operations"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsFinanceAndAccounting2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Finance & Accounting"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsMarketingAndSales2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Marketing & Sales"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsTechnologyAndPM2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Technology & PM"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsHumanResourcesAndAdministration2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Human Resources & Administration"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
  internshipsConsulting2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Consulting"}}) {
    nodes {
      Name
      Position
      Company
      Location
    }
  }
}
`