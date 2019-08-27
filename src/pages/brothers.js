import React from "react"
import { StandardLayout } from "../components/Layout"
import { Flex } from "rebass"
import { Brother, LeaderBrother } from "../components/Brother"
import { graphql } from "gatsby"
import { Fade } from "react-reveal"
import FamilyTree from "../components/FamilyTree/FamilyTree"
import CenterHeader from "../components/CenterHeader"

export default ({ data }) => {
  return (
    <StandardLayout>
      <Fade>
        <CenterHeader marginTop={20}>Executive Committee</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allLeadershipSpring19XlsxSheet1.nodes.map(brotherInfo => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <CenterHeader marginTop={20}>Directors</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allDirectorsSpring19XlsxSheet1.nodes.map(brotherInfo => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <CenterHeader marginTop={20}>Our Brothers</CenterHeader>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allBiosSpring19XlsxFormResponses1.nodes.map(brotherInfo => (
          <Brother brotherInfo={brotherInfo} />
        ))}
      </Flex>
      <Fade>
        <h1>Family Trees</h1>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allFile.nodes.map(family => (
          <FamilyTree familyName={family.name} />
        ))}
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  {
    allLeadershipSpring19XlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    allDirectorsSpring19XlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    allBiosSpring19XlsxFormResponses1 {
      nodes {
        First_Name
        Last_Name
        Class
        LinkedIn_URL
      }
    }

    allFile(
      filter: { sourceInstanceName: { eq: "families" } }
      sort: { fields: name }
    ) {
      nodes {
        name
      }
    }
  }
`
