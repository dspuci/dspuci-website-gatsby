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
        <CenterHeader>Directors</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.directors.nodes.map((brotherInfo) => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <CenterHeader>All Brothers</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.brothers.nodes
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
          .map((brotherInfo) => (
            <Brother brotherInfo={brotherInfo} />
          ))}
      </Flex>
      <Fade>
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
export const query = graphql`
  {
    executiveCommittee: allLeadershipSummer21XlsxSheet1 {
      nodes {
        name
        title
      }
    }
    directors: allDirectorsSummer21XlsxSheet1 {
      nodes {
        name
        title
      }
    }
    brothers: allBiosSummer21XlsxFormResponses1 {
      nodes {
        firstname
        lastname
        class
        linkedinurl
        email
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
