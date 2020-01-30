import React from "react"
import { Flex } from "rebass"
import { graphql } from "gatsby"
import { Fade } from "react-reveal"

import { StandardLayout } from "../components/Layout"
import { Brother, LeaderBrother } from "../components/Brother"
import FamilyTree from "../components/FamilyTree/FamilyTree"
import CenterHeader from "../components/CenterHeader"

export default ({ data }) => {
  return (
    <StandardLayout>
      <Fade>
        <CenterHeader>Executive Committee</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.executiveCommittee.nodes.map(brotherInfo => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <CenterHeader>Directors</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.directors.nodes.map(brotherInfo => (
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
          .map(brotherInfo => (
            <Brother brotherInfo={brotherInfo} />
          ))}
        {/* {data.brothers.nodes.map(brotherInfo => (
          <Brother brotherInfo={brotherInfo} />
        ))} */}
      </Flex>
      <Fade>
        <CenterHeader>Family Trees</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.families.nodes.map(family => (
          <FamilyTree familyName={family.name} />
        ))}
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  {
    executiveCommittee: allLeadershipWinter20XlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    directors: allDirectorsWinter20XlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    brothers: allBiosWinter20XlsxFormResponses1 {
      nodes {
        First_Name
        Last_Name
        Class
        LinkedIn_URL
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
