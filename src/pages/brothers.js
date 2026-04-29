import React from "react"
import { Flex } from "rebass"
import { graphql } from "gatsby"
import { Fade } from "react-reveal"

import { StandardLayout } from "../components/Layout"
import { Brother, LeaderBrother } from "../components/Brother"
import FamilyTree from "../components/FamilyTree/FamilyTree"
import CenterHeader from "../components/CenterHeader"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <StandardLayout>
      <Helmet>
        <title>Brothers | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta
          name="Delta Sigma Pi - Pi Sigma Chapter Brothers Page"
          content="Delta Sigma Pi - Pi Sigma Chapter Brothers Page"
        />
      </Helmet>

      <Fade>
        <CenterHeader>Executive Committee</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.executiveCommittee.nodes.map((brotherInfo) => (
          <LeaderBrother
            key={brotherInfo.Name}
            name={brotherInfo.Name}
            title={brotherInfo.Title}
          />
        ))}
      </Flex>

      <br />

      <Fade>
        <hr
          style={{
            border: 0,
            height: "1px",
            background: "#666",
            margin: "48px auto",
            width: "80%",
          }}
        />
        <CenterHeader>Directors</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.directors.nodes.map((brotherInfo) => (
          <LeaderBrother
            key={brotherInfo.Name}
            name={brotherInfo.Name}
            title={brotherInfo.Title}
          />
        ))}
      </Flex>

      <br />

      <Fade>
        <hr
          style={{
            border: 0,
            height: "1px",
            background: "#666",
            margin: "48px auto",
            width: "80%",
          }}
        />
        <CenterHeader>All Brothers</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.brothers.nodes
          .filter((b) => b.First_Name !== "InsertFirstName")
          .sort((a, b) =>
            a.Last_Name > b.Last_Name
              ? 1
              : b.Last_Name > a.Last_Name
              ? -1
              : a.First_Name > b.First_Name
              ? 1
              : b.First_Name > a.First_Name
              ? -1
              : 0
          )
          .map((brotherInfo) => (
            <Brother
              key={`${brotherInfo.First_Name}-${brotherInfo.Last_Name}`}
              brotherInfo={brotherInfo}
            />
          ))}
      </Flex>

      <Fade>
        <hr
          style={{
            border: 0,
            height: "1px",
            background: "#666",
            margin: "48px auto",
            width: "80%",
          }}
        />
        <CenterHeader>Family Trees</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.families.nodes.map((family) => (
          <FamilyTree key={family.name} familyName={family.name} />
        ))}
      </Flex>
    </StandardLayout>
  )
}

// 🔥 THIS IS THE IMPORTANT FIX
export const query = graphql`
  {
    executiveCommittee: allLeadershipCurrentdataXlsxSheet1 {
      nodes {
        Name
        Title
      }
    }

    directors: allDirectorsCurrentdataXlsxSheet1 {
      nodes {
        Name
        Title
      }
    }

    brothers: allBiosCurrentdataB4March2026XlsxFormResponses1 {
      nodes {
        Last_Name
        First_Name
        LinkedIn_URL
        Email
        Class
      }
    }

    families: allFile(
      filter: { sourceInstanceName: { eq: "families" } }
      sort: { fields: name }
    ) {
      nodes {
        name
      }
    }
  }
`
