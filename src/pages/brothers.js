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
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <hr style={{
          border: 0,
          height: '1px',
          background: '#666',
          margin: '48px auto',
          width: '80%'
        }} />
        <CenterHeader>Directors</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.directors.nodes.map((brotherInfo) => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <hr style={{
          border: 0,
          height: '1px',
          background: '#666',
          margin: '48px auto',
          width: '80%'
        }} />
        <CenterHeader>All Brothers</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.brothers.nodes
          .filter((brotherInfo) => brotherInfo.First_Name !== "InsertFirstName")
          .sort((a, b) =>
            a.lastname > b.lastname
              ? 1
              : b.lastname > a.lastname
              ? -1
              : a.firstname > b.firstname
              ? 1
              : b.firstname > a.firstname
              ? -1
              : 0
          )
          .map((brotherInfo) => {
            // add the if statement here for the identifier to show a brother that isn't active for the quarter
            if (brotherInfo.First_Name !== "InsertFirstName") {
              return <Brother brotherInfo={brotherInfo} />
            }
            return null // return null to exclude the brother from the list
          })}
      </Flex>
      <Fade>
        <hr style={{
          border: 0,
          height: '1px',
          background: '#666',
          margin: '48px auto',
          width: '80%'
        }} />
        <CenterHeader>Family Trees</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.families.nodes.map((family) => (
          <FamilyTree familyName={family.name} />
        ))}
      </Flex>
    </StandardLayout>
  )
}

// TO CHANGE BIO CHANGE THIS
// TO CHANGE EC CHANGE THIS
// TO CHANGE DIRECTORS CHANGE THIS
// executiveCommittee: allLeadershipWinter24XlsxSheet1 {
// directors: allDirectorsWinter24XlsxSheet1 {
// brothers: allBiosWinter24XlsxFormResponses1 {
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
    brothers: allBiosCurrentdataXlsxFormResponses1 {
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
